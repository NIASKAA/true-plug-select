import React, { useState, useEffect } from 'react'
import {Container, Button, Row, Col, Card, Form} from 'react-bootstrap';
import { Query_User } from "../../utils/queries";
import { useMutation, useQuery, useSubscription, gql } from '@apollo/client';
import './styles.css'

// Query built on page to pull chat messages from server
const GET_MESSAGES = gql`
    subscription getMessages {
        messages {
            id
            content
            user
        }
    }
`;

// Mutation that post bi-directional messages
const POST_MESSAGE = gql`
    mutation($user: String!, $content: String!) {
        postMessage(user: $user, content: $content)
    }
`;

const Messages = ({ user }) => {
    const { data } = useSubscription(GET_MESSAGES);
    if (!data) {
        return null;
    }
    
    return (
        <>
        {/* This return code takes the mesages from GET_MESSAGES subscription to display them in Messages */}
            {data.messages.map(({ id, user: messageUser, content }) => (
                <div
                    style={{
                        display: 'flex',
                        // If the message is from the logged in user than message displays at the beginning of window if other user display at the front of window
                        justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
                        padding: "1em"
                    }}
                >
                    {/* Displays which user the message originates from */}
                    {user !== messageUser && (
                        <div
                            style={{
                                height: 50,
                                width: 50,
                                marginRight: '0.3em',
                                border: "2px solid #e5e6ea",
                                borderRadius: 25,
                                textAlign: "center",
                                fontSize: "18px",
                                paddingTop: 5
                            }}
                        >
                         {messageUser.slice(0,2).toUpperCase()}   
                        </div>
                    )}
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
    const [message, messageSet] = React.useState({
        user: "Thomas",
        content: '',
    });

    // Need to get the user name to load in instead of the manual input I have for line 79
    // const { load, data } = useQuery(Query_User);

    // useEffect(() => {
    //     messageSet(data);
    //     console.log(data)
    //     console.log(message);
    // }, [load]);

    const [postMessage] = useMutation(POST_MESSAGE);

    const onSend = () => {
        if (message.content.length > 0) {
            postMessage({
                variables: message
            })
        }
        messageSet({
            ...message,
            content: "",
        });
    };

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
                                        <Messages user={message.user} />
                                    </Container>
                                </div>
                            </Card.Body>
                            

                            <Card.Footer className="card-footer cardEnd">                              
                                <div className="chat-form-container">
                                    <Form className="chat-form d-flex msgBody scroll">
                                        <Row>
                                            <Col xs={3} style={{ padding: 0 }}>
                                                <input
                                                label="User"
                                                value={message.user}
                                                onChange={(evt) => messageSet({
                                                    ...message,
                                                    user: evt.target.value
                                                })}
                                                />
                                            </Col>
                                            <Col xs={8}>
                                                <input
                                                label="Content"
                                                value={message.content}
                                                onChange={(evt) => messageSet({
                                                    ...message,
                                                    content: evt.target.value
                                                })}
                                                onKeyUp={(evt) => {
                                                    if (evt.keyDown === 13) {
                                                        onSend();
                                                    }
                                                }}
                                                />
                                            </Col>
                                        </Row>
                                        <Button className="btn chatBtn" onClick={() => onSend()}>Send</Button>
                                    </Form>
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