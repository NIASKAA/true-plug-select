import React, {useState, useEffect} from 'react'
import {Container, Card, Button, Spinner} from 'react-bootstrap'
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch } from "react-redux";
import { Get_Checkout } from '../../utils/queries';
import { useQuery } from "@apollo/client";
import { useLazyQuery } from '@apollo/client';
import { Query_User } from "../../utils/queries";
import {GET_USER_INFO} from '../../utils/state/actions'
import Auth from '../../utils/auth'
import './styles.css'
const stripePromise = loadStripe('pk_test_51Iuh6nAyuy17BR8EvFLWRonr4uXr83y7IX58uJU6cF9fMJ2MKULdrxjTRynrGbqVRhQOU789XUXxf4LsMUdLcLLc00aRzQIJME')

const Checkout = () => {
    const [Checkout, {data}] = useLazyQuery(Get_Checkout);
    const dispatch = useDispatch();
    const { loading: letsLoad, data: newData } = useQuery(Query_User);
    const [profileData, setProfileData] = useState({
        email: "No user email ",
        username: "No username",
        profilePic: "No profile picture",
        bidsWon: "No Bids Won",
      });

    useEffect(() => {
    if (!letsLoad && newData) {
        setProfileData(newData.user);
        dispatch({ type: GET_USER_INFO, payload: newData.user });
    }
    }, [letsLoad, newData]);


    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);
    console.log(data)
    
    const findID = () => {
        let idText = profileData.bidsWon[0].auction._id
        //console.log(profileData.bidsWon[0].auction._id)
        return idText;
    }

    const findTotal = () => {
        let sum = profileData.bidsWon[0].bidAmount
        //console.log(profileData.bidsWon[0].bidAmount)
        return sum;
    }
  
    const submitCheckout = ()  => {
        Checkout({
            variables: {
                id: profileData._id
            }
        })
    }
    if (letsLoad) return <Spinner className="profileSpinner" animation="grow" variant="dark" />;

    return (
        <>
        
            {!letsLoad && profileData && (
                <Container id="checkoutContain">
                    <div className="d-flex justify-content-center h-100 ">
                        {profileData?.bidsWon[0]?.auction!== undefined && (
                            <Card className="card" id="cardCheckout">
                                    <Card.Body className="card-body">
                                        <Card.Img src="./logo.png" style={{width: "30%"}}></Card.Img>
                                            <Card.Text>
                                                ID: {findID()}
                                            </Card.Text>
                                            <Card.Text>
                                                Price: {findTotal()}
                                            </Card.Text>
                                    </Card.Body>
                                {Auth.loggedIn() ? (
                                    <Button onClick={submitCheckout} variant="light" className="submitBtn">To Payment</Button>
                                    ) : (
                                        <span>(log in to check out)</span>
                                )}
                            </Card>
                        )}
                    </div>
                </Container>
            )}
        
             
        </>
    )
}

export default Checkout
