import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useMutation, useQuery } from "@apollo/client";
import { Query_User } from "../../utils/queries";
import { Create_Auction } from "../../utils/mutations";
import { GET_USER_INFO, ADD_AUCTION } from "../../utils/state/actions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Container, Form, Row, Col, Dropdown, Spinner, Alert } from "react-bootstrap";
import "./styles.css";
import { valueFromASTUntyped } from "graphql";

const AuctionSubmitForm = () => {
  let CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const [imageSelected, setImageSelected] = useState("");
  // get the global state to get the logged in user's info
  // to make global state changes
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // extract the user's infor from global state
  // on reload, sometimes state gets wipped out so this is in case that happens
  const { loading, data } = useQuery(Query_User);
  useEffect(() => {
    // only dispatch if the profileData has been cleared
    if (loading == false && data) {
      dispatch({ type: GET_USER_INFO, payload: data.user });
    }
  }, [loading, data]);
  
  const [createProductLoading, setCreateProductLoading] = useState(false);
  const [createAuction, { err }] = useMutation(Create_Auction);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const { profileData } = state;


  // initial state of the form
  const [formState, setFormState] = useState({
    itemName: "",
    description: "",
    startingPrice: 0,
    bidEnd: "",
    seller: null,
    image: "",
  });
  // for front end form validation; not implemented yet
  const [errors, setErrors] = useState({
    postProductSuccess: null,
    postProductError: null,
    noProductNameError: null,
    noDateError: null,
    noStartingPriceError: null,
    noDescriptionError: null,
    termsNotAcceptedError: null,
  });



  const uploadItemImage = async () => {
    const imageData = new FormData();
    imageData.append("file", imageSelected);
    imageData.append("upload_preset", "wscdfhar");
    const response = await Axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      imageData
    );
    return response.data.secure_url;
  };

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
    let error = isSwitchOn? true: false;
    setErrors({...errors, termsNotAcceptedError: error});
  };

  const handleChange = (event) => {
    console.log(profileData)
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  // handles the whole bid submit process
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (errors.termsNotAcceptedError == true || !isSwitchOn) {
      setErrors({...errors, termsNotAcceptedError: true});
      return;
    }
    setCreateProductLoading(true);
    try {
      let productImage = "";
      // if product image has been selected set the productImage var to the uploaded image URL
      if (imageSelected.name) {
        productImage = await uploadItemImage();
      }
      // destructure the form state for easy access
      const { itemName, description, brand, startingPrice, bidEnd, seller, image } = formState;

      // create the product
      const mutResponse = await createAuction({
        variables: {
          itemName,
          description,
          brand,
          startingPrice: Number(startingPrice),
          bidEnd,
          seller:profileData._id,
          image: productImage,
        },
      });
      console.log(mutResponse);
      // set the postProductSuccess message to trye
      setErrors({ ...errors, postProductSuccess: true });
      //TODO: add the posted product to the global state so it comes up the next time in the bid page withouit having to reload

    } catch (error) {
      console.log(error);
      setErrors({ ...errors, postProductError: true });
    } finally {
      setFormState({
        itemName: "",
        description: "",
        brand: "",
        startingPrice: 0,
        bidEnd: "",
        image: "",
      });
      setCreateProductLoading(false);
    }
  };

  return (
    <Container>
      {createProductLoading ? (
        <Spinner animation="border" role="status" />
      ) : (
        <Row>
          <Col>
            <Card className="bidForm">
              <Form
                onSubmit={(event) => handleFormSubmit(event)}
                enctype="multipart/form-data"
                method="post"
                class="col-lg-4 order-lg-1 text-center"
              >
                {errors.postProductSuccess && <Alert variant="primary"> Bid posted succesfully</Alert>}
                {errors.postProductError && (
                  <Alert variant="danger">
                    There was a problem with posting your bid. Please try again later
                  </Alert>
                )}
                {errors.termsNotAcceptedError && (
                  <Alert variant="warning">
                    You must accept the terms to post a product
                  </Alert>
                )}

                <Form.Label>Upload Photo</Form.Label>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Control
                    type="file"
                    size="lg"
                    onChange={(event) => {
                      setImageSelected(event.target.files[0]);
                      console.log(imageSelected);
                    }}
                  />
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
                <Form.Group className="mb-3 itemInput" controlId="brand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    name="brand"
                    value={formState.description}
                    onChange={handleChange}
                    type="brand"
                    placeholder="brand"
                  />
                </Form.Group>
                <Form.Group className="mb-3 itemInput" controlId="size">
                  <Form.Label>Starting Price</Form.Label>
                  <Form.Control
                    name="startingPrice"
                    value={formState.startingPrice}
                    onChange={handleChange}
                    type="price"
                    placeholder="0"
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
                    <Dropdown.Item href="#/action-4">Outerwear</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Shoes</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">Collectibles</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Form.Group className="mb-3 itemInput" controlId="agreeIt">
                  <Form.Switch
                    onChange={onSwitchAction}
                    id="agreementSwitch"
                    type="switch"
                    checked={isSwitchOn}
                    label="By clicking this, you agreed to our policy"
                  />
                  <Form.Control.Feedback type="invalid">
                    You must agree before submitting.
                  </Form.Control.Feedback>{" "}
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
                  <br />
                  3. Do you have time for our lord and savior Jesus Christ?
                  <br />
                  4. Why did the chicken cross the road? Idk I was hoping you can tell me instead.
                  <br />
                  5. pLs dO NOt pOsT LeWD ConTeNt.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AuctionSubmitForm;
