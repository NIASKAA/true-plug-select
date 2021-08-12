import React, { useState, useEffect } from "react";
import {
   Alert,
   Container,
   Button,
   Row,
   Col,
   Card,
   InputGroup,
   FormControl,
   Spinner,
} from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { Query_User, Get_All_Products, Get_Max_Bid, Get_Sold_Auctions } from "../../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_PRODUCTS, GET_USER_INFO, UPDATE_SOLD_PRODUCTS} from "../../utils/state/actions";
import {
   GET_MESSAGES,
   POST_MESSAGE,
   AddBid_Amount,
   Win_Auction,
} from "../../utils/mutations";
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
   // state management
   const dispatch = useDispatch();
   const state = useSelector((state) => state);

   //mutations
   const [postMessage] = useMutation(POST_MESSAGE);
   const [addBid, { err }] = useMutation(AddBid_Amount);
   const [winAuction, { err: winAuctionErr }] = useMutation(Win_Auction);

   // all useStates
   const [price, setPrice] = useState(0);
   const { bidId } = useParams();
   const [bidAmount, setBidAmount] = useState(0);
   const [maxBid, setMaxBid] = useState(0);
   const [usingCustomTimer, setUsingCustomTimer] = useState(false);
   const [customDeadline, setCustomDeadline] = useState(0);
   // use the id to get the specific item from the global state
   const [bidInfo, setBidInfo] = useState({ bidEnd: " " });
   const [timeRemaining, setTimeRemaining] = useState("");
   const [errors, setErrors] = useState({
      lessThanMaxBidError: null,
      bidIsNaNError: null,
   });
   const [message, messageSet] = useState({ user: "", content: "" });
   const [auctionEnded, setAuctionEnded] = useState(false);
   let history = useHistory();

   // grapqhl queries
   const { loading: userDataLoading, data: userData } = useQuery(Query_User);
   const { loading: productsLoading, data: productData } = useQuery(Get_All_Products);
   const { loading: maxBidLoading, data: maxBidData } = useQuery(
      Get_Max_Bid,
      {
         variables: {
            auctionId: bidId,
         },
      },
      []
   );

   // on mount procedures
   useEffect(() => {
      if (!userDataLoading) {
         const { username } = userData?.user ? userData.user : { user: "unidentified user" };
         messageSet({ ...message, user: username });
      }
   }, [userDataLoading, userData]);

   useEffect(() => {
      if (!productsLoading && state.auctions.length === 0) {
         dispatch({ type: Get_All_Products, payload: productData });
         setBidInfo(productData.auctions.filter((auction) => auction._id === bidId)[0]);
      } else {
         setBidInfo(state.auctions.filter((auction) => auction._id === bidId)[0]);
      }
   }, [productsLoading, state]);

   useEffect(() => {
      if (!maxBidLoading && maxBidData?.getMaxBid?.bidAmount) {
         setMaxBid(maxBidData.getMaxBid.bidAmount);
      } else if (bidInfo?.startingPrice !== undefined) {
         setMaxBid(bidInfo.startingPrice);
      } else {
         setMaxBid(0);
      }
   }, [maxBidLoading, maxBidData]);

   useEffect(() => {
      var timer = setTimeout(function () {
         if (auctionEnded) {
            setTimeRemaining(0);
            clearInterval(timer);
            return;
         }
         if (bidInfo != undefined && !usingCustomTimer) {
            setTimeRemaining(getTimeRemaining(bidInfo.bidEnd));
         } else {
            setTimeRemaining(getTimeRemaining(customDeadline));
         }
         if (timeRemaining.total <= 0) {
            winAuction({
               variables: {
                  auctionId: bidId,
               },
            });
            clearInterval(timer);
            setTimeRemaining(0);
            // this flag allows for hiding the bid fields and display the 'auction ended' message
            setAuctionEnded(true);
            // update the products so the item is removed
            dispatch({
              type: GET_ALL_PRODUCTS,
              payload: productData.auctions.filter(auction=> auction._id!== bidId)
            });
         }
         //console.log(timeRemaining.total);
      }, 1000);
   }, [timeRemaining]);

   const redirect = () => {
      history.push("/login");
   };

   const onBid = async () => {
      if (isNaN(bidAmount)) {
         setErrors({ ...errors, bidIsNaNError: true });
         return;
      }
      if (bidAmount < maxBid) {
         setErrors({ ...errors, lessThanMaxBidError: true });
         return;
      }

      try {
         const mutResponse = await addBid({
            variables: {
               auctionId: bidInfo._id,
               bidAmount: Number(bidAmount),
               userId: userData.user._id,
            },
         });
         postMessage({
            variables: {
               user: userData.user.username,
               content: `${userData.user.username} bids ${bidAmount}`,
            },
         });
         setMaxBid(bidAmount);
         setErrors({ lessThanMaxBidError: false, bidIsNaNError: false });
      } catch (e) {
         console.log(e);
      } finally {
         setBidAmount("");
      }
   };

   const onSend = () => {
      if (message.content.startsWith("setTime:")) {
         let time = message.content.split(":")[1];
         let newDeadline = new Date(new Date().getTime() + Number(time) * 60000);
         setUsingCustomTimer(true);
         setCustomDeadline(newDeadline);
         messageSet({
            ...message,
            content: "",
         });
         return;
      }
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
                  {timeRemaining && !isNaN(timeRemaining.days) && (
                     <span id="bid-timer" className="endTimer">
                        {timeRemaining.days} days {timeRemaining.hours} hours{" "}
                        {timeRemaining.minutes} minutes {timeRemaining.seconds} seconds
                     </span>
                  )}
               </div>
            </div>
         </Container>

         <Container className="chatroomContain">
            <Row className="row justify-content-center">
               <Col className="col-md-8 col-xl-6">
                  {bidInfo && maxBid >= 0 && (
                     <Card className="imageCard">
                        <Card.Body>
                           <Container>
                              <Card.Img
                                 src={bidInfo.image}
                                 className="rounded imageContain"
                              />
                           </Container>
                        </Card.Body>
                        <Card.Footer>
                           <div className="d-flex justify-content-start">
                              <ul>
                                 <li className="infoList">Name: {bidInfo.itemName}</li>
                                 <li className="infoList">
                                    Description: {bidInfo.description}{" "}
                                 </li>
                                 <li className="infoList">Starting Price: {bidInfo.price}</li>
                                 <li className="infoList" id="price">
                                    Current Price: {maxBid}
                                 </li>
                                 <li className="infoList">Brand:{bidInfo.brand} </li>
                                 <li className="infoList">
                                    Category:{bidInfo.category}{" "}
                                 </li>
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
                        {errors.bidIsNaNError && (
                           <Alert variant="danger">Please enter a valid number</Alert>
                        )}
                        {errors.lessThanMaxBidError && (
                           <Alert variant="danger">
                              Your bid must be greater than the current max bid
                           </Alert>
                        )}
                        {auctionEnded && (
                           <Alert variant="warning">This auction has ended</Alert>
                        )}
                        {Auth.loggedIn() && !auctionEnded && (
                           <h5 className="infoList text-center">
                              To start bidding, type the amount you wish to bid
                           </h5>
                        )}
                        {Auth.loggedIn() && !auctionEnded && (
                           <Container
                              className="d-flex justify-content-center"
                              id="bitBtns"
                           >
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
                                       if (evt.key === "Enter") {
                                          onSend();
                                       }
                                    }}
                                 />
                                 <InputGroup.Text
                                    onClick={() => onSend()}
                                    id="enterMessage"
                                    type="submit"
                                 >
                                    Enter
                                 </InputGroup.Text>
                              </InputGroup>
                              <InputGroup
                                 type="submit"
                                 data-toggle="dropdown"
                                 aria-haspopup="true"
                                 aria-expanded="false"
                              >
                                 <InputGroup.Text id="basic-addon1">
                                    Custom Bid
                                 </InputGroup.Text>
                                 <FormControl
                                    placeholder="enter custom bid number"
                                    aria-label="customBid"
                                    aria-describedby="customBid"
                                    value={bidAmount}
                                    onKeyDown={(evt) => {
                                       if (evt.key === "Enter") {
                                          onBid();
                                       }
                                    }}
                                    onChange={(e) => {
                                       setBidAmount(e.target.value);
                                    }}
                                 />
                                 <InputGroup.Text
                                    id="enterBid"
                                    onClick={onBid}
                                    type="submit"
                                 >
                                    Enter
                                 </InputGroup.Text>
                              </InputGroup>
                           </Container>
                        )}{" "}
                        {!Auth.loggedIn() && (
                           <Button
                              onClick={redirect}
                              variant="light"
                              className="redirectBtn"
                           >
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
