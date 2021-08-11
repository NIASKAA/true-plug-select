import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Card, InputGroup, FormControl, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { Query_User, Get_All_Products } from "../../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_PRODUCTS, GET_USER_INFO } from "../../utils/state/actions";
import { GET_MESSAGES, POST_MESSAGE } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import "./styles.css";
import getTimeRemaining from "../../utils/timer";

const Messages = ({ user }) => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }

  return (
    <>
      {/* This return code takes the messages from GET_MESSAGES subscription to display them in Messages */}
      {data.messages.map(({ id, user: messageUser, content }) => (
        <Container
          style={{
            display: "flex",
            // If the message is from the logged in user than message displays at the beginning of window if other user display at the front of window
            justifyContent: user === messageUser ? "flex-start" : "flex-end",
            padding: "1em",
          }}
        >
          {/* Displays which user the message originates from */}
          {user !== messageUser && (
            <div
              style={{
                height: 50,
                width: 50,
                marginRight: "0.3em",
                border: "2px solid #e5e6ea",
                borderRadius: 25,
                textAlign: "center",
                fontSize: "18px",
                paddingTop: 5,
              }}
            >
              {messageUser.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div
            style={{
              // Styling for the messages.
              background: user === messageUser ? "#4682B4" : "#A9A9A9",
              color: user === messageUser ? "black" : "black",
              padding: "1em",
              borderRadius: "1em",
            }}
          >
            {content}
          </div>
        </Container>
      ))}
    </>
  );
};

const Chatroom = () => {
  const [message, messageSet] = useState({ user: "", content: "" });
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // get the specific item's id
  const { bidId } = useParams();
  // use the id to get the specific item from the global state
  const [bidInfo, setBidInfo] = useState({ bidEnd: " " });
  //const bidInfo = state.auctions.filter(auction=> auction._id === bidId)[0];

  let history = useHistory();
  const { loading: userDataLoading, data: userData } = useQuery(Query_User);
  const { loading: productsLoading, data: productData } = useQuery(Get_All_Products);
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    if (!userDataLoading) {
      const { username } = userData ? userData.user : { user: "unidentified user" };
      messageSet({ ...message, user: username });
    }
  }, [userDataLoading, userData]);

  useEffect(() => {
    if (!productsLoading) {
      dispatch({ type: Get_All_Products, payload: productData });
      setBidInfo(productData.auctions.filter((auction) => auction._id === bidId)[0]);
      setTimeRemaining(getTimeRemaining(bidInfo?.bidEnd));
    } else {
      setBidInfo(state.auctions.filter((auction) => auction._id === bidId)[0]);
      setTimeRemaining(getTimeRemaining(bidInfo?.bidEnd));
    }
  }, [productsLoading, productData]);

  useEffect(() => {
    if (bidInfo) {
      console.log(bidInfo.bidEnd);
      setTimeRemaining(getTimeRemaining(bidInfo.bidEnd));
      console.log(timeRemaining);
    }
  }, [productsLoading, productData]);

  const redirect = () => {
    history.push("/login");
  };

  const [postMessage] = useMutation(POST_MESSAGE);

  const onSend = () => {
    if (message.content.length > 0) {
      postMessage({
        variables: message,
      });
    }
    messageSet({
      ...message,
      content: "",
    });
  };

  const imgStyle = {
    width: "55px",
    height: "40px",
  };

  let time = setInterval(function () {
    if (bidInfo) {
      setTimeRemaining(bidInfo.bidEnd);
    }
  }, 1000);

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
      <Container className="timerContain">
        <div className="timer text-center">
          <div className="timer-two">
            {" "}
            Time left until auction ends:
            {timeRemaining && (
              <span id="bid-timer" className="endTimer">
                {timeRemaining.days} days {timeRemaining.hours} hours {timeRemaining.minutes} minutes{" "}
                {timeRemaining.seconds} seconds
              </span>
            )}
          </div>
        </div>
      </Container>

      <Container className="chatroomContain">
        <Row className="row justify-content-center">
          <Col className="col-md-8 col-xl-6">
            {bidInfo && (
              <Card className="imageCard">
                <Card.Body>
                  <Container>
                    <Card.Img src={bidInfo.image} className="rounded imageContain" />
                  </Container>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-start">
                    <ul>
                      <li className="infoList">Name: {bidInfo.itemName}</li>
                      <li className="infoList">Description: {bidInfo.description} </li>
                      <li className="infoList" id="price">
                        Price: {bidInfo.startingPrice}{" "}
                      </li>
                      <li className="infoList">Size: {bidInfo.size} </li>
                      <li className="infoList">Brand:{bidInfo.brand} </li>
                      <li className="infoList">Category:{bidInfo.category} </li>
                    </ul>
                  </div>
                </Card.Footer>
              </Card>
            )}
          </Col>

          <Col className="col-md-8 col-xl-6">
            <Card className="chatCard">
              <Container className=" scrollbar chatContainer">
                {/* This self contained Messages passes the user data to the chatContainer as viewable messages */}
                <Messages user={message.user} />
              </Container>
              <Card.Footer className="cardEnd">
                <h5 className="infoList text-center">To start bidding, type the amount you wish to bid</h5>
                {Auth.loggedIn() ? (
                  <Container className="d-flex justify-content-center" id="bitBtns">
                    <InputGroup>
                      <FormControl
                        label="Content"
                        className="msgBox"
                        value={message.content}
                        onChange={(evt) => {
                          messageSet({
                            ...message,
                            content: evt.target.value,
                          });
                        }}
                        onKeyDown={(evt) => {
                          console.log(evt);
                          if (evt.key === "Enter") {
                            onSend();
                          }
                        }}
                      />
                      <InputGroup.Text onClick={() => onSend()} id="enterMessage" type="submit">
                        Enter
                      </InputGroup.Text>
                    </InputGroup>
                    <InputGroup
                      type="submit"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <InputGroup.Text id="basic-addon1">Custom Bid</InputGroup.Text>
                      <FormControl
                        placeholder="enter custom bid number"
                        aria-label="customBid"
                        aria-describedby="customBid"
                      />
                      <InputGroup.Text id="enterBid" type="submit">
                        Enter
                      </InputGroup.Text>
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
  );
};

export default Chatroom;
