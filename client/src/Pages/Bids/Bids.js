import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Get_All_Products} from "../../utils/queries";
import { GET_ALL_PRODUCTS, ADD_AUCTION } from "../../utils/state/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Row, InputGroup, FormControl, Spinner} from "react-bootstrap";
import ProductList from "../../Components/ProductList/ProductList";
import Auth from "../../utils/auth";
import "./styles.css";

const Bids = ({ products }) => {
  let history = useHistory();
  const auctionDirect = () => {
    history.push("/auctionform");
  };
  const redirect = () => {
    history.push("/login");
  };

  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loading, data } = useQuery(Get_All_Products);
  let { auctions } = state;
  let {profileData} = state;

  const [currentAuctions, setCurrentAuctions] = useState(() => []);
  useEffect(() => {
    if (loading == false && data) {
      dispatch({ type: GET_ALL_PRODUCTS, payload: data.auctions });
      if(auctions.length ===0) {
        setCurrentAuctions(data.auctions);
      }
      else {
        setCurrentAuctions(auctions);
      }
    }
  }, [loading, data]);

  const handleSearch = (searchTerm) => {
    if (searchItem.trim().length <= 1 && auctions.length <= 1) {
      dispatch({ type: GET_ALL_PRODUCTS, payload: data.auctions });
      setCurrentAuctions(state.auctions);
    } else {
      console.log(currentAuctions);
      setCurrentAuctions(
        auctions.filter((product) =>
          product.itemName.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
        )
      );
    }
  };
  
  if (loading) return <Spinner className="bidSpinner" animation="grow" variant="dark"/>;

  return (
    <>
      <Container className="container text-center my-3">
        <h2 className="font-weight-light">Current Live Biddings</h2>

        {Auth.loggedIn() ? (
          <Button onClick={auctionDirect} variant="light" className="addBid">
            Add new Bid
          </Button>
        ) : (
          <Button onClick={redirect} variant="light" className="redirectBtn">
            You need to login before adding new post!
          </Button>
        )}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search an item"
            aria-label="searchbar"
            value={searchItem}
            aria-describedby="searchbar"
            onChange={(event) => {
              setSearchItem(event.target.value);
              handleSearch(searchItem);
            }}
          />
        </InputGroup>

        <Row>{!loading && currentAuctions && <ProductList products={currentAuctions} />}</Row>
      </Container>
    </>
  );
};


export default Bids;

