import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useMutation, useQuery } from "@apollo/client";
import { Query_User } from "../../utils/queries";
import { Create_Auction } from "../../utils/mutations";
import { GET_USER_INFO } from "../../utils/state/actions";
import { useSelector, useDispatch } from "react-redux";
//import {Create_Auction} from '../../utils/mutations'
import { Button, Card, Container, Form, Row, Col, Dropdown } from "react-bootstrap";
import "./styles.css";
import { valueFromASTUntyped } from "graphql";

const AuctionSubmitForm = () => {
  let CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const [imageSelected, setImageSelected] = useState("");
  const [formState, setFormState] = useState({
    itemName: "",
    description: "",
    startingPrice: 0,
    bidEnd: "",
    seller: null,
    image: "",
  });

  const [errors, setErrors] = useState([]); // for front end form validation
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { profileData } = state;
  const { loading, data } = useQuery(Query_User);
  const [createAuction, { err }] = useMutation(Create_Auction);

  useEffect(() => {
    if (!loading && data && profileData._id === undefined) {
      dispatch({ type: GET_USER_INFO, payload: data.user });
    }
  },[loading, data]);

  const uploadItemImage = async (event) => {
    const imageData = new FormData();
    imageData.append("file", imageSelected);
    imageData.append("upload_preset", "lz60ie8l");
    const response = await Axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      imageData
    );
    return await response.secure_url;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;    
    setFormState({ ...formState, [name]: value, seller: profileData._id });
    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
git     const {itemName, description, startingPrice, bidEnd, seller, image} = formState;
    const mutResponse = createAuction({
      variables: {
        itemName,
        description,
        startingPrice: Number(startingPrice.trim()),
        bidEnd,
        seller,
        image,
      }
    })
    console.log(mutResponse);
    setFormState({
      itemName: "",
      description: "",
      startingPrice: 0,
      bidEnd: "",
      image: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="bidForm">
            <Form
              onSubmit={handleFormSubmit}
              enctype="multipart/form-data"
              method="post"
              class="col-lg-4 order-lg-1 text-center"
            >
              <Form.Label>Upload Photo</Form.Label>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control type="file" size="lg" onChange={(event) => setImageSelected(event.target.files[0])} />
              </Form.Group>
              <Form.Group className="mb-3 itemInput" controlId="name">
                <Form.Label>Item Name:</Form.Label>
                <Form.Control
                  name="itemName"
                  value={formState.itemName}
                  onChange={handleChange}
                  type="name"
                  placeholder="name"
                />
              </Form.Group>
              <Form.Group className="mb-3 itemInput" controlId="description">
                <Form.Label>Item Description</Form.Label>
                <Form.Control
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  type="description"
                  placeholder="description"
                />
              </Form.Group>
              <Form.Group className="mb-3 itemInput" controlId="size">
                <Form.Label>Starting Price</Form.Label>
                <Form.Control
                  name="startingPrice"
                  value={formState.startingPrice}
                  onChange={handleChange}
                  type="price"
                  placeholder="Starting price"
                />
              </Form.Group>
              <Form.Group className="mb-3 itemInput" controlId="bidTime">
                <Form.Label>Bidding End Time</Form.Label>
                <Form.Control
                  name="bidEnd"
                  value={formState.bidEnd}
                  onChange={handleChange}
                  type="date"
                  placeholder="Bidding Time"
                />
              </Form.Group>
              <Dropdown className="categoryDropdown">
                <Dropdown.Toggle variant="light" id="categoryID">
                  Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Accessories</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Shirts</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Pants</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Outerwear</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Shoes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Group className="mb-3 itemInput" controlId="agreeIt">
                <Form.Check type="checkbox" label="By clicking this checkbox, you agreed to our policy" />
              </Form.Group>
              <Button type="submit" variant="light" className="submitBtn">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Some Rules Before You Post...</Card.Title>
              <Card.Text>
                1. I don't know man, add whatever
                <br />
                2. Listen son, in this world you either yeet or be yeeted.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuctionSubmitForm;
