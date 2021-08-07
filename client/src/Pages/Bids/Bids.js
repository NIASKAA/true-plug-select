import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Get_All_Products, Query_User } from "../../utils/queries";
import { GET_ALL_PRODUCTS } from "../../utils/state/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Row, InputGroup, FormControl } from "react-bootstrap";
import ProductList from "../../Components/ProductList/ProductList";
import ProductCard from "../../Components/ProductCard/ProductCard";
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

  const [currentAuctions, setCurrentAuctions] = useState(() => []);
  useEffect(() => {
    if (currentAuctions.length === 0 && loading == false && data) {
      dispatch({ type: GET_ALL_PRODUCTS, payload: data.auctions });
      setCurrentAuctions(data.auctions);
    }
  }, [loading, data]);

  const handleSearch = (searchTerm) => {
    if (searchItem.trim().length <= 1 && auctions.length <= 1) {
      dispatch({ type: GET_ALL_PRODUCTS, payload: data.auctions });
      setCurrentAuctions(state.auctions);
    } else {
      setCurrentAuctions(
        auctions.filter((product) =>
          product.itemName.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
        )
      );
    }
  };

  /* {products.filter((product) => {
        if(searchItem == "") {
            return product
        } else if(products.itemName.toLowerCase().includes(searchItem.toLowerCase())) {
            return <ProductCard product={product} key={product.id} />
        }
    })} */

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
