import React from 'react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import Auth from '../../utils/auth'
import './styles.css'

const Checkout = () => {
    return (
        <>
            <Container id="checkoutContain">
                <div className="d-flex justify-content-center h-100 ">
                    <Card className="card" id="cardCheckout">
                        <Card.Body className="card-body">
                            <Card.Img src="./logo.png" style={{width: "30%"}}></Card.Img>
                            <Card.Text>
                                Name:
                            </Card.Text>
                            <Card.Text>
                                Price:
                            </Card.Text>
                            <Card.Text>
                                Purchase Date:
                            </Card.Text>
                        </Card.Body>
                        {Auth.loggedIn() ? (
                            <Button variant="light" className="submitBtn">To Payment</Button>
                            ) : (
                            <span>(log in to check out)</span>
                        )}
                    </Card>
                </div>
            </Container>
             
        </>
    )
}

export default Checkout
