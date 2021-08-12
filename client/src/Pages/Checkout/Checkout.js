import React, {useEffect} from 'react'
import {Container, Card, Form, Button} from 'react-bootstrap'
import { loadStripe } from '@stripe/stripe-js';
import Auth from '../../utils/auth'
import './styles.css'
const stripePromise = loadStripe('pk_test_51Iuh6nAyuy17BR8EvFLWRonr4uXr83y7IX58uJU6cF9fMJ2MKULdrxjTRynrGbqVRhQOU789XUXxf4LsMUdLcLLc00aRzQIJME')

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
