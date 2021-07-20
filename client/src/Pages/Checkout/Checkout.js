import React from 'react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import './styles.css'

const Checkout = () => {
    return (
        <>
            <Container id="checkoutContain">
                <div class="d-flex justify-content-center h-100 ">
                    <Card class="card" id="cardCheckout">
                        <div class="card-header ">
                            <h4>Payment Details</h4>
                        </div>
                        <Card.Body class="card-body">
                        <Form class="row g-3 needs-validation" novalidate>
                            <Col class="col-md-4">
                                <label for="validationCustom01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationCustom01" value="" required/>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </Col>
                            <Col class="col-md-4">
                                <label for="validationCustom02" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="validationCustom02" value="" required/>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </Col>
                            <Col class="col-md-4">
                                <label for="validationCustomUsername" class="form-label"></label>
                                <div class="input-group has-validation">
                                <span class="input-group-text" ></span>
                                <input type="text" class="form-control" id="validationCustomUsername" placeholder= "Credit Card Number" aria-describedby="inputGroupPrepend" required/>
                                <div class="invalid-feedback">
                                    Please enter credit card number.
                                </div>
                                </div>
                            </Col>

                            <Col class="col-md-3">
                                <label for="validationCustom05" class="form-label"></label>
                                <input type="text" class="form-control" id="validationCustom05" placeholder= "Expiration Date" required/>
                                <div class="invalid-feedback">
                                    Please provide expiration date.
                                </div>
                            </Col>
                            <Col class="col-md-3">
                                <label for="validationCustom05" class="form-label"></label>
                                <input type="text" class="form-control" id="validationCustom05" placeholder= "CVV" required/>
                                <div class="invalid-feedback">
                                    Please provide CVV.
                                </div>
                            </Col>
                            <Col class="col-md-6">
                                <label for="validationCustom03" class="form-label">City</label>
                                <input type="text" class="form-control" id="validationCustom03" required/>
                                <div class="invalid-feedback">
                                Please provide a valid city.
                                </div>
                            </Col>
                            <Col class="col-md-3">
                                <label for="validationCustom04" class="form-label">State</label>
                                <select class="form-select" id="validationCustom04" required>
                                <option selected disabled value="">Choose...</option>
                                <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                Please select a valid state.
                                </div>
                            </Col>
                            <Col class="col-md-3">
                                <label for="validationCustom05" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="validationCustom05" required/>
                                <div class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                            </Col>
                            <Col class="col-12">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                <label class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                                </div>
                            </Col>
                            <div class="col-12">
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
