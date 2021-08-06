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
            <Container className="soldContainers">
                <h2 className="font-weight-light">Recently Sold</h2>
                <Row className="justify-content-center">
                    <Card style={cardStyle}>
                        <Card.Img
                        src=""
                        className="card-img-top"
                        style={imgStyle}
                        />
                        <Card.Body>
                            <Row>
                                <p class="regularFont">Name:</p>
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
