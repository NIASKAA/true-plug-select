import React from 'react'
import {Container, Button, Row, Col, Card} from 'react-bootstrap'
import './styles.css'

const Chatroom = () => {
    const itemNameStyle = {
        fontFamily: "Bangers"
    }
    const timerStyle = {
        color: 'red'
    }

    const auctionStyle = {
        color: 'orange'
    }
    const imgStyle = {
        width: "55px",
        height: '40px'
    }
    return (
        <>
            <div class="timer text-center">
                <div class="timer">Bidding will start in : 
                    <span id="timer" style={timerStyle}>0
                        0:00
                    </span> 
                </div>
                <div class="timer-two"> Time left until auction ends:
                    <span id="bid-timer" style={auctionStyle}>00:00:00</span>
                </div>
            </div>

            <Container className="chatroomContain">
                <Row class="row justify-content-center">
                    <Col class="col-md-8 col-xl-6">
                        <Card class="card imageCard">
                            <div class="card-header border-bottom-0 infoHeader">
                                <h4 class="itemName text-center" style={itemNameStyle}></h4>
                            </div>
                            <Card.Body class="card-body border-0">
                                <Container>
                                    <Card.Img src= "" className="rounded imageContain"/>
                                </Container>
                            </Card.Body>
                            <Card.Footer class="card-footer itemInfo">
                                <div class="d-flex justify-content-start">
                                    <ul>
                                        <li class="infoList">Category: </li>
                                        <li class="infoList">Brand: </li>
                                        <li class="infoList">Description: </li>
                                        <li class="infoList" id="price">Price:  </li>
                                        <li class="infoList">Size: </li>
                                    </ul>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col class="col-md-8 col-xl-6">
                        <Card class="card chatCard">
                            <div class="card-header chatHeader">
                                <div class="d-flex bd-highlight mb-3">
                                    <div class="p-2 bd-highlight userImg">
                                        <Card.Img src="" class="rounded-circle" style={imgStyle}/>
                                    </div>
                                </div>
                            </div>
                            <Card.Body class="card-body msgBody scroll">
                                <div class="d-flex justify-content-start mb-4">
                                    <div>
                                        <Card.Img src="" class="rounded-circle" style={imgStyle}/>
                                    </div>
                                    <Container className="chatContainer">
                                        <div id="test"></div>
                                    </Container>
                                </div>
                            </Card.Body>
                            

                            <Card.Footer class="card-footer cardEnd">
                                <div class="bidDescript text-center" style={itemNameStyle}>
                                    <h5>To start bidding, click the amount you wish to drop it</h5>
                                </div>
                                
                                <div class="d-flex justify-content-center" id="bitBtns">
                                    <button class="btn bidBtns" type="submit">100</button>
                                    <button class="btn bidBtns" type="submit">200</button>
                                    <button class="btn bidBtns" type="submit">300</button>
                                    <button class="btn bidBtns" type="submit">400</button>
                                    <button class="btn bidBtns" type="submit">500</button>
                                    <button class="btn bidBtns" type="submit">1000</button>
                                    <div class="dropdown" data-toggle="dropdown">
                                        <button class=" btn customBidBtn" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Custom Bid
                                        </button>
                                        <div class="dropdown-menu">
                                            <form class="customBid-form">
                                                <div class="form-group">
                                                    <label class="customBidLabel" for="custom-Bid">Bid:</label>
                                                    <input class="form-control" type="text" id="bid-form" />
                                                </div>
                                                <div class="form-group">
                                                    <button class="customBidBtn" id="customBidBtn" type="submit">Enter</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Chatroom
