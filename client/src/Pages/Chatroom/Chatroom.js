import React, { useState } from 'react'
import {Container, Button, Row, Col, Card} from 'react-bootstrap';
import { useMutation, useQuery, gql } from '@apollo/client';
import './styles.css'

// Query built on page to pull chat messages from server
const GET_MESSAGES = gql`
    query {
        messages {
            id
            content
            user
        }
    }
`;

// Mutation that post bi-directional messages
// const POST_MESSAGE = gql`
//     mutation($user: String!, $content: String!) {
//         postMessage(user: $user, content: $content)
//     }
// `;

const Messages = ({ user }) => {
    const { data } = useQuery(GET_MESSAGES);
    if (!data) {
        return null;
    } 
    return (
        <>
        {/* This return code takes the mesages from GET_MESSAGES query to display them in Messages */}
            {data.messages.map(({ id, user: messageUser, content }) => (
                <div
                    style={{
                        display: 'flex',
                        // If the message is from the logged in user than message displays at the beginning of window if other user display at the front of window
                        justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
                        padding: "1em"
                    }}
                >
                    <div
                        style={{
                            // Styling for the chat messages.
                            background: user === messageUser ? "#58bf56" : "#e5e6ea",
                            color: user === messageUser ? "black" : "blue",
                            padding: "1em",
                            borderRadius: '1em'
                        }}
                    >
                        {content}
                    </div> 
                </div>
            ))}
        </>
    );
}

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
            <div className="timer text-center">
                <div className="timer">Bidding will start in : 
                    <span id="timer" style={timerStyle}>0
                        0:00
                    </span> 
                </div>
                <div className="timer-two"> Time left until auction ends:
                    <span id="bid-timer" style={auctionStyle}>00:00:00</span>
                </div>
            </div>

            <Container className="chatroomContain">
                <Row className="row justify-content-center">
                    <Col className="col-md-8 col-xl-6">
                        <Card className="card imageCard">
                            <div className="card-header border-bottom-0 infoHeader">
                                <h4 className="itemName text-center" style={itemNameStyle}></h4>
                            </div>
                            <Card.Body className="card-body border-0">
                                <Container>
                                    <Card.Img src= "" className="rounded imageContain"/>
                                </Container>
                            </Card.Body>
                            <Card.Footer className="card-footer itemInfo">
                                <div className="d-flex justify-content-start">
                                    <ul>
                                        <li className="infoList">Category: </li>
                                        <li className="infoList">Brand: </li>
                                        <li className="infoList">Description: </li>
                                        <li className="infoList" id="price">Price:  </li>
                                        <li className="infoList">Size: </li>
                                    </ul>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col className="col-md-8 col-xl-6">
                        <Card className="card chatCard">
                            <div className="card-header chatHeader">
                                <div className="d-flex bd-highlight mb-3">
                                    <div className="p-2 bd-highlight userImg">
                                        <Card.Img src="" className="rounded-circle" style={imgStyle}/>
                                    </div>
                                </div>
                            </div>
                            <Card.Body className="card-body msgBody scroll">
                                <div className="d-flex justify-content-start mb-4">
                                    <div>
                                        <Card.Img src="" className="rounded-circle" style={imgStyle}/>
                                    </div>
                                    <Container className="chatContainer">
                                        {/* This self contained Messages passes the user data to the chatContainer as viewable messages */}
                                        <Messages user="Paul" />
                                    </Container>
                                </div>
                            </Card.Body>
                            

                            <Card.Footer className="card-footer cardEnd">                              
                                <div className="chat-form-container">
                                    <form className="chat-form d-flex msgBody scroll">
                                        <input 
                                            className="chat-input"
                                            type="text"
                                            placeholder="Enter Message"
                                            required
                                            autoComplete="off"
                                        />
                                        <Button className="btn chatBtn"><i className="fas fa-paper-plane"></i>Send</Button>
                                    </form>
                                </div>

                                <div className="bidDescript text-center" style={itemNameStyle}>
                                    <h5>To start bidding, click the amount you wish to drop it</h5>
                                </div>
                                
                                <div className="d-flex justify-content-center" id="bitBtns">
                                    <Button className="btn bidBtns" type="submit">100</Button>
                                    <Button className="btn bidBtns" type="submit">200</Button>
                                    <Button className="btn bidBtns" type="submit">300</Button>
                                    <Button className="btn bidBtns" type="submit">400</Button>
                                    <Button className="btn bidBtns" type="submit">500</Button>
                                    <Button className="btn bidBtns" type="submit">1000</Button>
                                    <div className="dropdown" data-toggle="dropdown">
                                        <Button className=" btn customBidBtn" type="Button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Custom Bid
                                        </Button>
                                        <div className="dropdown-menu">
                                            <form className="customBid-form">
                                                <div className="form-group">
                                                    <label className="customBidLabel" for="custom-Bid">Bid:</label>
                                                    <input className="form-control" type="text" id="bid-form" />
                                                </div>
                                                <div className="form-group">
                                                    <Button className="customBidBtn" id="customBidBtn" type="submit">Enter</Button>
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