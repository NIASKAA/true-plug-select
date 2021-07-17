import React, {Video} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import './styles.css'
const SignUpForm = () => {
    return (
        <>
            <section class="showcase">
                <div class="videoContainer">
                    <Video autoplay loop muted id="loginVideo">
                        <Source src={} type="video/mp4"/>
                    </Video>
                </div>
                <div class="content" id="SignUpContain">
                    <div class="d-flex justify-content-center">
                        <Card class="card" id="cardLogin">
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
                </div>
            </section>
        </>
    )
}

export default SignUpForm
