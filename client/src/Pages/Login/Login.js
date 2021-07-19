import React from 'react'
import {useHistory} from 'react-router-dom'
import {Form, Card, Button, Container} from 'react-bootstrap'
import './styles.css';
const Login = () => {
    let history = useHistory()
    const redirect = () => {
        history.push('/signup')
    }
    return (
        <>
            <section class="showcase">
                <div class="videoContainer">
                    <video autoPlay loop muted id="loginVideo">
                        <source src='/video/yikes.mp4' type="video/mp4"/>
                    </video>
                </div>
                <Container className="content" id="loginContain">
                    <div className="d-flex justify-content-center">
                        <Card id="cardLogin">
                            <Card.Title class="card-header">
                                <h3>Sign In</h3>
                            </Card.Title>
                            <Form className="loginForm">
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
                                <Button className="loginBtn" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <Button onClick={redirect} className="loginBtn" type="submit">
                                    Need User? Make an account here.
                            </Button>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Login
