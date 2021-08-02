import React, {useState} from 'react'
import Axios from 'axios'
import {Container, Row, Card, Col, Tabs, Tab, Button, Form, Table} from 'react-bootstrap'
import './styles.css'
const Profile = () => {
    let CLOUD_NAME = process.env.CLOUD_NAME
    const [imageSelected, setImageSelected] = useState("")
    const uploadImage = () => {
        const imageData = new FormData()
        imageData.append('file', imageSelected)
        imageData.append('upload_preset', 'lz6oie8l')

        Axios.post(`https://api.cloudinary.com/v1_1/ + ${CLOUD_NAME} + /image/upload`, imageData)
        .then((response) => {
            console.log(response)
        }) 
    }

    return (
        <>
            <Container className="profileContainer">
                <Row>
                    <Col class="col-lg-8 order-lg-2">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="Info" title="Info">
                                <Row>
                                    <Col className="col-md-6">
                                        <Card className="infoCard">
                                        <h4 class="mt-2 cardInfo">User Info</h4>
                                            <Card.Img className="card-img-top" cloudName={CLOUD_NAME}/>
                                            <Row>
                                                <Card.Title className="cardInfo">
                                                    Name:
                                                </Card.Title>
                                            </Row>
                                            <Row>
                                                <Card.Title className="cardInfo">
                                                    Email: 
                                                </Card.Title>
                                            </Row>
                                        </Card>
                                    </Col>
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
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="username" placeholder="Enter username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password" />
                                    </Form.Group>
                                    <Button>Submit</Button>
                                </Form>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
            <Container className="col-lg-8 order-lg-2">
                <Card class="uploadCard">
                    <Form enctype="multipart/form-data" method="post" class="col-lg-4 order-lg-1 text-center">
                        <Card.Title class="mt-2">Upload a profile photo</Card.Title>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="file" size="lg" onChange={(event) => 
                                {setImageSelected(event.target.files[0]);
                            }}/>
                            <Button onClick={uploadImage}>Upload Image</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

export default Profile
