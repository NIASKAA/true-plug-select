import React from 'react'
import {Container, Row, Card, Col, Tabs, Button, Form} from 'react-bootstrap'
const Profile = () => {
    return (
        <>
            <Container>
                <Row class="row my-2">
                    <Col class="col-lg-8 order-lg-2">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a href="" data-target="#profile" data-toggle="tab" class="nav-link profileTab">Info</a>
                            </li>
                            <li class="nav-item">
                                <a href="" data-target="#messages" data-toggle="tab" class="nav-link profileTab">Messages</a>
                            </li>
                            <li class="nav-item">
                                <a href="" data-target="#edit" data-toggle="tab" class="nav-link profileTab">Edit</a>
                            </li>
                        </ul>
                        <div class="tab-content py-4">
                            <div class="tab-pane active" id="profile">
                            <h4 class="mb-3 profileInfo">User Info</h4>
                            <Row class="row">
                                <Col class="col-md-6">
                                    <h5 class="profileInfo">
                                        About
                                    </h5>
                                    <div class="card">

                                        <img class="card-img-top" src="{{userData.profile_picture}}" />
                                    </div>
                                    <p class="profileInfo">
                                        Name:
                                    </p>
                                    <p class="profileInfo">
                                        Email: 
                                    </p>
                                </Col>
                                <div class="col-md-12">
                                    <h4 class="mt-2 profileInfo">Recent Bids</h4>
                                    <table class="table table-sm table-hover table-striped">
                                        <tbody>
                                            <Card class="card">
                                                <img src="" class="card-img-top" />
                                                <p class="profileInfo">
                                                    Product:
                                                </p>
                                                <p class="profileInfo">
                                                    Description:
                                                </p>
                                                <p>
                                                </p>
                                            </Card>
                                        </tbody>
                                    </table>
                                </div>
                            </Row>
                            </div>
                            <div class="tab-pane" id="messages">

                            </div>
                            <div class="tab-pane" id="edit">
                            <Form role="form">
                                <div class="form-group row">
                                    <Form.Label class="col-lg-3 col-form-label form-control-label">First name</Form.Label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <Form.Label class="col-lg-3 col-form-label form-control-label">Last name</Form.Label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <Form.Label class="col-lg-3 col-form-label form-control-label">Email</Form.Label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="email" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <Form.Label class="col-lg-3 col-form-label form-control-label">Address</Form.Label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text" value="" placeholder="Street"/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <Form.Label class="col-lg-3 col-form-label form-control-label"></Form.Label>
                                    <div class="col-lg-6">
                                        <input
                                        class="form-control"
                                        type="text"
                                        value=""
                                        placeholder="City"
                                        />
                                    </div>
                                    <div class="col-lg-3">
                                        <input
                                        class="form-control"
                                        type="text"
                                        value=""
                                        placeholder="State"
                                        />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <Form.Label class="col-lg-3 col-form-label form-control-label">Username</Form.Label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="text" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <Form.Label
                                        class="col-lg-3 col-form-label form-control-label">Password</Form.Label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="password" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label form-control-label">Confirm
                                        password</label>
                                    <div class="col-lg-9">
                                        <input class="form-control" type="password" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <Form.Label class="col-lg-3 col-form-label form-control-label"></Form.Label>
                                    <div class="col-lg-9">
                                        <input type="reset" class="btn bg-light" value="Cancel" />
                                        <input type="button" class="btn saveBtn" value="Save Changes" />
                                    </div>
                                </div>
                            </Form>
                            </div>
                        </div>
                    </Col>
                    <Container className="col-lg-8 order-lg-2">
                        <Card class="uploadCard">
                            <Form enctype="multipart/form-data" method="post" class="col-lg-4 order-lg-1 text-center">
                                <h6 class="mt-2">Upload a profile photo</h6>
                                <Form.Label class="custom-file">
                                    <input type="text" name="title" /><br />
                                    <input type="file" name="upload" multiple="multiple" id="file" /><br />
                                    <div class="text-center">
                                        <Button type="submit" class="btn addBtn">Upload image</Button>
                                    </div>
                                </Form.Label>
                            </Form>
                        </Card>
                    </Container>
                </Row>
            </Container>
        </>
    )
}

export default Profile
