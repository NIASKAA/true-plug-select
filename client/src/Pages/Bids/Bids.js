import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Container, Button, Row, Card} from 'react-bootstrap'
import Auth from '../../utils/auth';
import './styles.css'
const Bids = () => {
    let history = useHistory()
    const auctionDirect = () => {
        history.push('/auctionform')
    }
    const redirect = () => {
        history.push('/login')
    }

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
                {Auth.loggedIn() ? (
                <Button onClick={auctionDirect} variant="light" className="addBid">Add new Bid</Button>
                ) : (
                    <Button onClick={redirect} variant="light" className="redirectBtn">You need to login before adding new post!</Button>
                ) }
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
                            <Button variant="light" className="toBidBtn" as={Link} to="/product/:id" >Bid</Button>
                        </Card.Body>
                    </Card>
                    
                </Row>
            </Container>
        </>
    )
}

export default Bids
