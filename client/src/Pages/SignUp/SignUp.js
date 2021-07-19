import React from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
//import backgroundVid from '/videos/yikes.mp4'
import './styles.css'
const SignUp = () => {
    return (
        <>
            <section class="showcase">
                <div class="videoContainer">
                    <video autoPlay loop muted id="loginVideo">
                        <source src="/video/yikes.mp4" type="video/mp4"/>
                    </video>
                </div>
                <Container className="content" id="SignUpContain">
                    <div className="d-flex justify-content-center">
                        <Card classNem="signupForm" id="cardLogin">
                            <Card.Title class="card-header">
                                <h3>Sign Up</h3>
                            </Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Sign-Up
                                </Button>
                            </Form>
                            <Button variant="primary" type="submit">
                                    Already have an account? Login here.
                            </Button>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default SignUp
