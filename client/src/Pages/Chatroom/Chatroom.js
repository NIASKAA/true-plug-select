import React, { useState, useEffect } from 'react'
import {Container, Button, Row, Col, Card, InputGroup, FormControl} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
//import { Query_User } from "../../utils/queries";
import {GET_MESSAGES, POST_MESSAGE} from '../../utils/mutations'
import Auth from '../../utils/auth';
import { useMutation, useSubscription} from '@apollo/client';
import './styles.css'

const Messages = ({ user }) => {
    const { data } = useSubscription(GET_MESSAGES);
    if (!data) {
        return null;
    }
    return (
        <>
        {/* This return code takes the messages from GET_MESSAGES subscription to display them in Messages */}
            {data.messages.map(({ id , user: messageUser, content }) => (
                <Container
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
                            // Styling for the messages.
                            background: user === messageUser ? "#4682B4" : "#A9A9A9",
                            color: user === messageUser ? "black" : "black",
                            padding: "1em",
                            borderRadius: '1em'
                        }}
                    >
                        {content}
                    </div> 
                </Container>
            ))}
        </>
    );
}

const Chatroom = () => {
    const [message, messageSet] = useState({ user: "", content: '' });
    let history = useHistory();
    const redirect = () => {
        history.push('/login')
    }

    console.log(message)

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

    const imgStyle = {
        width: "55px",
        height: '40px'
    }

    /*<Col xs={3} style={{ padding: 0 }}>
    <input
    label="User"
    className="msgUser"
    value={message.user}
    onChange={(evt) => messageSet({
        ...message,
        user: evt.target.value
    })}
    />
    </Col>*/
    return (
        <>
            <div className="timer text-center">
                <div className="timer">Bidding will start in : 
                    <span id="timer" className="bidTimer">
                        00:00
                    </span> 
                </div>
                <div className="timer-two"> Time left until auction ends:
                    <span id="bid-timer" className="endTimer">00:00:00</span>
                </div>
            </div>

            <Container className="chatroomContain">
                <Row className="row justify-content-center">
                    <Col className="col-md-8 col-xl-6">
                        <Card className="imageCard">
                            <Card.Body>
                                <Container>
                                    <Card.Img src= "./logo.png" className="rounded imageContain"/>
                                </Container>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-start">
                                    <ul>
                                        <li className="infoList">Name:</li>
                                        <li className="infoList">Description: </li>
                                        <li className="infoList" id="price">Price:  </li>
                                        <li className="infoList">Size: </li>
                                        <li className="infoList">Brand: </li>
                                        <li className="infoList">Category: </li>
                                    </ul>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col className="col-md-8 col-xl-6">
                        <Card className="chatCard">
                            <Card.Body className="msgBody scroll">
                                <div className="d-flex justify-content-start mb-4">
                                    <Card.Img src="" className="rounded-circle" style={imgStyle}/>
                                    <Container className="chatContainer">
                                        {/* This self contained Messages passes the user data to the chatContainer as viewable messages */}
                                        <Messages user={message.user} />
                                    </Container>
                                </div>
                            </Card.Body>
                            
                            <Card.Footer className="cardEnd">                              
                            <h5 className="infoList text-center">To start bidding, type the amount you wish to bid</h5>  
                                {Auth.loggedIn() ? (
                                    <Container className="d-flex justify-content-center" id="bitBtns">
                                        <InputGroup>
                                            <FormControl
                                                label="Content"
                                                className="msgBox"
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
                                            <InputGroup.Text onClick={() => onSend()} id="enterMessage" type="submit">Enter</InputGroup.Text>
                                        </InputGroup>
                                        <InputGroup type="submit"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <InputGroup.Text id="basic-addon1">Custom Bid</InputGroup.Text>
                                            <FormControl
                                                placeholder="enter custom bid number"
                                                aria-label="customBid"
                                                aria-describedby="customBid"
                                            />
                                            <InputGroup.Text id="enterBid" type="submit">Enter</InputGroup.Text>
                                        </InputGroup>
                                    </Container>
                                ) : (
                                        <Button onClick={redirect} variant="light" className="redirectBtn">
                                            You need to login before you can start bidding!
                                        </Button>
                                )}    
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Chatroom