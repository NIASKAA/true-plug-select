import React, {useState, useEffect} from "react";
import Axios from "axios";
import { useMutation, useQuery } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Container, Form, Row, Col} from "react-bootstrap";
import './styles.css'
const AuctionSubmitForm = () => {
  let CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const [imageSelected, setImageSelected] = useState("");

  const uploadItemImage = async (event) => {
    event.preventDefault();
    const imageData = new FormData();
    imageData.append("file", imageSelected);
    imageData.append("upload_preset", "lz60ie8l");
    const response = await Axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, imageData)
  }

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card className="bidForm">
            <Form onSubmit={""} enctype="multipart/form-data" method="post" class="col-lg-4 order-lg-1 text-center">
              <Form.Label>Upload Photo</Form.Label>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Control
                    type="file"
                    size="lg"
                    onChange={""}
                  />
                </Form.Group>
              <Form.Group className="mb-3 itemInput" controlId="name">
                <Form.Label>Item Name:</Form.Label>
                <Form.Control 
                    name="name" 
                    value={""} 
                    onChange={""}
                    type="name" 
                    placeholder="name" 
                />
              </Form.Group>
              <Form.Group className="mb-3 itemInput" controlId="description">
                <Form.Label>Item Description</Form.Label>
                <Form.Control
                  name="description"
                  value={""}
                  onChange={""}
                  type="description"
                  placeholder="description"
                />
              </Form.Group>
              <Form.Group className="mb-3 itemInput" controlId="size">
                <Form.Label>Item Size</Form.Label>
                <Form.Control
                  name="size"
                  value={""}
                  onChange={""}
                  type="size"
                  placeholder="Item's Size"
                />
              </Form.Group>
              <Form.Group className="mb-3 itemInput" controlId="bidTime">
                <Form.Label>Bidding Time</Form.Label>
                <Form.Control
                  name="bidTime"
                  value={""}
                  onChange={""}
                  type="size"
                  placeholder="Bidding Time"
                />
              </Form.Group>
              <Form.Group className="mb-3 itemInput" controlId="agreeIt">
                <Form.Check type="checkbox" label="By clicking this checkbox, you agreed to our policy" />
              </Form.Group>
            </Form>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Some Rules Before You Post...</Card.Title>
              <Card.Text>
                1. I dont know man, add whatever
                <br/>
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
