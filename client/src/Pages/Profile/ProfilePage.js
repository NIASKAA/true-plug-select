import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery, gql } from "@apollo/client";
import { Query_User } from "../../utils/queries";
import { Add_Profile_Pic } from "../../utils/mutations";
import { GET_ALL_PRODUCTS, GET_USER_INFO, UPDATE_PRODUCTS } from "../../utils/state/actions";

import { Container, Row, Card, Col, Tabs, Tab, Button, Form, Table, Spinner } from "react-bootstrap";
import "./styles.css";

const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const [imageSelected, setImageSelected] = useState("");
  const [addProfilePic, { err }] = useMutation(Add_Profile_Pic);
  const [profileData, setProfileData] = useState({ email: "No user email ", username: "No username", profilePic: "No profile picture" });
  const { loading, data } = useQuery(Query_User);

  useEffect(() => {
    if (loading === false && data) {
      setProfileData(data.user);
      dispatch({ type: GET_USER_INFO, payload: data.user });
    }
  }, [loading, data]);  


  const uploadImage = async (event) => {
    event.preventDefault();
    try{
      const imageData = new FormData();
      imageData.append("file", imageSelected);
      imageData.append("upload_preset", "lz6oie8l");
      console.log(imageData.get("file"), imageData.get("upload_preset"))
      const response = await Axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        imageData
      );
      const mutResponse = await addProfilePic({
        variables: {
          imageURL: response.data.secure_url,
        },
      });
      setProfileData({ ...profileData, profilePic: response.data.secure_url});

    }catch(err) {
      console.log(err);
    }
  };

  if (loading) return <Spinner className="profileSpinner" animation="grow" variant="dark"/>;

  return (
    <>
    
      <Container className="profileContainer">
        <Row>
          <Col class="col-lg-8 order-lg-2">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="Info" title="Info">
                <Row>
                  {!loading && profileData && (
                    <Col className="col-md-6">
                      <Card className="infoCard">
                        <h4 class="mt-2 cardInfo">User Info</h4>
                        <Row>
                          <Card.Img
                            src={profileData.profilePic}
                            style={{ width: "95%", margin: "2%" }}
                          ></Card.Img>
                          <Card.Title className="tableInfo">Email: {profileData.email}</Card.Title>
                          <Card.Title className="tableInfo">Name: {profileData.username}</Card.Title>
                        </Row>
                      </Card>
                    </Col>
                  )}

                  <Col className="col-md-12">
                    <Card>
                      <h4 class="mt-2 profileInfo">Recent Bids</h4>
                      <Table class="table table-sm table-hover table-striped">
                        <tbody className="tableInfo">
                          <tr>
                            <td>Product: </td>
                          </tr>
                          <tr>
                            <td>Price: </td>
                          </tr>
                          <tr>
                            <td>Date: </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="Edit" title="Edit">
                <Form>
                  <Form.Group className="mb-3 formInput" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3 formInput" controlId="username">
                    <Form.Label>Username </Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                  </Form.Group>
                  <Form.Group className="mb-3 formInput" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>
                  <Button variant="light" className="submitBtn">
                    Submit
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <Container className="col-lg-8">
        <Card class="uploadCard">
          <Form enctype="multipart/form-data" method="post" class="col-lg-4 order-lg-1 text-center">
            <Card.Title class="mt-2">Upload a profile photo</Card.Title>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                type="file"
                size="lg"
                onChange={(event) => {
                  setImageSelected(event.target.files[0]);
                }}
              />
              <Button variant="light" className="profileBtns" onClick={uploadImage}>
                Upload Image
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default Profile;