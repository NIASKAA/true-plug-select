import React from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
//import backgroundVid from '/videos/yikes.mp4'
import './styles.css'
const SignUp = () => {
    const [userFormData, setUserFormData] = useState({username: '', email: '', password: ''})
    const [validated] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserFormData({...userFormData, [name]: value})
    }

    const handleFormSubmit = async(event) => {
        event.preventDefault();

        const form = event.currentTargetl
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
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
                            <Form onSubmit={handleFormSubmit} noValidated validated={validated}>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                        name="username"
                                        value={userFormData.username}
                                        onChange={handleInputChange}
                                        type="username" 
                                        placeholder="Enter Username" 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        name="email"
                                        onChange={handleInputChange}
                                        value={userFormData.email}
                                        placeholder="Enter email" 
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        name="password"
                                        type="password"
                                        value={userFormData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password" 
                                    />
                                </Form.Group>
                                <Button 
                                    disabled={userFormData.email && userFormData.password}
                                    variant="primary" 
                                    type="submit">
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
