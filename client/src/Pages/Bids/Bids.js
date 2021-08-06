import React,  { useState, useEffect }  from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useQuery } from "@apollo/client";
import { Get_All_Products, Query_User } from "../../utils/queries";
import { GET_ALL_PRODUCTS } from "../../utils/state/actions";
import { useDispatch, useSelector } from "react-redux";
import {Container, Button, Row, Card, Col} from 'react-bootstrap'
import ProductList from '../../Components/ProductList/ProductList';
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

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { loading, data } = useQuery(Get_All_Products);
  
    useEffect(() => {
      if (loading == false && data) {
        dispatch({ type: GET_ALL_PRODUCTS, payload: data });
      }
    }, [loading, data]);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <>
            <Container className="container text-center my-3">
                <h2 className="font-weight-light">Current Live Biddings</h2>
                {Auth.loggedIn() ? (
                <Button onClick={auctionDirect} variant="light" className="addBid">Add new Bid</Button>
                ) : (
                    <Button onClick={redirect} variant="light" className="redirectBtn">You need to login before adding new post!</Button>
                ) }
                <Row>
                    {!loading && data && <ProductList products={data.auctions} />}
                </Row>
            </Container>
        </>
    )
}

export default Bids
