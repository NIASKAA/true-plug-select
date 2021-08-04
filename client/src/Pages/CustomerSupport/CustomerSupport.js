import React, {useState} from 'react'
import {send} from 'emailjs-com'
import {Form, Button} from 'react-bootstrap'
import './styles.css'

const Support = () => {
    const [toSend, setToSend] = useState({
        fromName: '',
        replyTo: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send('service_fwnoj3b', 'template_j66lou7', toSend, 'user_7VsQOjvdMWICsgKL3qCvS')
        .then((response) => {
            console.log('Success!', response.status, response.text);
        })
        .catch((err) => {
            console.log('Failed', err)
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }
    return (
        <>
          <Form onSubmit={onSubmit} className="contactForm">
                <Form.Group className="mb-3 name" controlId="nameInput">
                    <Form.Label className="title">Name</Form.Label>
                    <Form.Control onChange={handleChange} type="name" name="fromName" value={toSend.fromName} placeholder='name...' className="nameInput"/>
                </Form.Group>
                <Form.Group className="mb-3 email" controlId="emailInput">
                    <Form.Label className="title">Email address</Form.Label>
                    <Form.Control onChange={handleChange} type="email"name="replyTo"value={toSend.replyTo} placeholder="example@example.com..." className="emailInput"/>
                </Form.Group>
                <Form.Group className="mb-3 message" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="title">Message</Form.Label>
                    <Form.Control onChange={handleChange} value={toSend.message} name="message" as="textarea" rows={3} placeholder="message..." className="textInput"/>
                </Form.Group>
                <Button variant="light" type="submit" className="submitBtn" id="sendIt">Send It</Button>
            </Form>
        </>
    )
}

export default Support