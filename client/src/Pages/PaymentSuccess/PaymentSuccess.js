import React from 'react'
import { Container, Card } from 'react-bootstrap'
import './styles.css'

const PaymentSuccess = () => {
    return (
        <>
            <Container>
                <Card>
                    <Card.Title>
                        We received your payment!
                    </Card.Title>
                    <Card.Body>
                        Thank you for using Plug Select!
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default PaymentSuccess
