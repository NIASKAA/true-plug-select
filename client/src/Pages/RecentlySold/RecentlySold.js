import React from 'react'
import {Container, Card, Row} from 'react-bootstrap'
import './styles.css'
const RecentlySold = () => {
    const cardStyle = {
        width: "18rem"
    }

    const imgStyle = {
        width: "18rem",
        maxHeight: "400px"
    }

    return (
        <>
            <Container className="text-center my-3">
                <h2 className="font-weight-light">Recently Sold</h2>
                <Row className="mx-auto my-auto justify-content-center">
                    <Card style={cardStyle}>
                        <Card.Img
                        src=""
                        class="card-img-top"
                        style={imgStyle}
                        />
                        <Card.Body>
                        <Row class="row">
                            <p class="titleFont">Name:</p>
                            <p class="regularFont">Price: </p>
                            <p class="regularFont">Size: </p>
                            <p class="regularFont">Brand: </p>
                        </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default RecentlySold
