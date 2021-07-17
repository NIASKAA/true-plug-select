import React, {Video} from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import '.styles.css';
const LoginForm = () => {
    return (
        <>
            <section class="showcase">
                <div class="videoContainer">
                    <Video autoplay loop muted id="loginVideo">
                        <Source src={} type="video/mp4"/>
                    </Video>
                </div>
                <div class="content" id="loginContain">
                    <div class="d-flex justify-content-center">
                        <Card class="card" id="cardLogin">
                            <Card.Title class="card-header">
                                <h3>Sign In</h3>
                            </Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="rememberCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <Button variant="primary" type="submit">
                                    Need User? Make an account here.
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginForm
