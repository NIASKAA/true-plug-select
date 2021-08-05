import React from 'react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import './styles.css'

const Checkout = () => {
    return (
        <>
            <Container id="checkoutContain">
                <div className="d-flex justify-content-center h-100 ">
                    <Card className="card" id="cardCheckout">
                        <div className="card-header ">
                            <h4>Payment Details</h4>
                        </div>
                        <Card.Body className="card-body">
                        <Form className="row g-3 needs-validation" noValidate>
                            <Col className="col-md-4">
                                <label for="validationCustom01" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" value="" required/>
                                <div className="valid-feedback">
                                Looks good!
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <label for="validationCustom02" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02" value="" required/>
                                <div className="valid-feedback">
                                Looks good!
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <label for="validationCustomUsername" className="form-label"></label>
                                <div className="input-group has-validation">
                                <span className="input-group-text" ></span>
                                <input type="text" className="form-control" id="validationCustomUsername" placeholder= "Credit Card Number" aria-describedby="inputGroupPrepend" required/>
                                <div className="invalid-feedback">
                                    Please enter credit card number.
                                </div>
                                </div>
                            </Col>

                            <Col className="col-md-3">
                                <label for="validationCustom05" className="form-label"></label>
                                <input type="text" className="form-control" id="validationCustom05" placeholder= "Expiration Date" required/>
                                <div className="invalid-feedback">
                                    Please provide expiration date.
                                </div>
                            </Col>
                            <Col className="col-md-3">
                                <label for="validationCustom05" className="form-label"></label>
                                <input type="text" className="form-control" id="validationCustom05" placeholder= "CVV" required/>
                                <div className="invalid-feedback">
                                    Please provide CVV.
                                </div>
                            </Col>
                            <Col className="col-md-6">
                                <label for="validationCustom03" className="form-label">City</label>
                                <input type="text" className="form-control" id="validationCustom03" required/>
                                <div className="invalid-feedback">
                                Please provide a valid city.
                                </div>
                            </Col>
                            <Col className="col-md-3">
                                <label for="validationCustom04" className="form-label">State</label>
                                <select className="form-select" id="validationCustom04" required>
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                                </select>
                                <div className="invalid-feedback">
                                Please select a valid state.
                                </div>
                            </Col>
                            <Col className="col-md-3">
                                <label for="validationCustom05" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="validationCustom05" required/>
                                <div className="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                            </Col>
                            <Col className="col-12">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                                </div>
                            </Col>
                            <div className="col-12">
                                <Button bsPrefix="submitBtn" type="submit">Submit form</Button>
                            </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
             
        </>
    )
}

export default Checkout
