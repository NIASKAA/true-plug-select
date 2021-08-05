import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { Query_User, Get_Me } from "../../utils/queries";
import { Profile_Upload, Add_Profile_Pic } from "../../utils/mutations";
import { Container, Row, Card, Col, Tabs, Tab, Button, Form, Table } from "react-bootstrap";
import "./styles.css";

const Profile = () => {
  let CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const [imageSelected, setImageSelected] = useState("");
  const [addProfilePic, { err }] = useMutation(Add_Profile_Pic);
  const [profileData, setProfileData] = useState({ user: { email: " ", username: " ", profilePic: " " } });
  const { loading, data } =  useQuery(Query_User);
  useEffect(() => {
    setProfileData(data);
    console.log(data)
    console.log(profileData);
  }, [loading]);

  const uploadImage = async () => {
    const imageData = new FormData();
    imageData.append("file", imageSelected);
    imageData.append("upload_preset", "lz6oie8l");
    const response = await Axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, imageData);
    console.log(response.data.secure_url);
    const mutResponse = await addProfilePic({
      variables: {
        imageURL: response.data.secure_url,
      },
    });
    console.log(mutResponse);
  };
  return (
    <>
      <Container className="profileContainer">
        <Row>
          <Col class="col-lg-8 order-lg-2">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="Info" title="Info">
                <Row>
                  {profileData && (
                    <Col className="col-md-6">
                      <Card className="infoCard">
                        <h4 class="mt-2 cardInfo">User Info</h4>
                        <Card.Img className="card-img-top" cloudName={CLOUD_NAME} />
                        <Row>
                          <img src={profileData.user.profilePic}></img>
                          <Card.Title className="float-left">Email: {profileData.user.email}</Card.Title>
                          <Card.Title className="float-left">Name: {profileData.user.username}</Card.Title>

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
                  <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" placeholder="Enter first name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" placeholder="Enter last name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username </Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                  </Form.Group>
                  <Button variant="light" className="submitBtn">Submit</Button>
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
              <Button variant="light" className="profileBtns" onClick={uploadImage}>Upload Image</Button>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default Profile;
