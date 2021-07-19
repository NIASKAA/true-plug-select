import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Button, Row, Card} from 'react-bootstrap'
import './styles.css'
const Bids = () => {
    const cardStyle = {
        width: "18rem"
    }

    const imgStyle = {
        width: '18rem',
        maxHeight: '400px'
    }
    
    return (
        <>
            <Container className="container text-center my-3">
                <h2 className="font-weight-light">Current Live Biddings</h2>
                <Button as={Link}  to="/auctionForm" className="addBid">Add new Bid</Button>
                <Row class="mx-auto my-auto justify-content-center">
                    <Card style={cardStyle}>
                        <Card.Img src= "" className="card-img-top" style={imgStyle}/>
                        <Card.Body className="card-body">
                            <Row>
                                <p className="titleFont"></p>
                                <p className="regularFont">Price: </p>
                                <p className="regularFont">Size:  </p>
                                <p className="regularFont">Brand: </p>
                            </Row>
                            <Button as={Link} to="/product/:id" className="basicFont">Bid</Button>
                        </Card.Body>
                    </Card>
                    
                </Row>
            </Container>
        </>
    )
}

export default Bids
