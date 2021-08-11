import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import { Card, Button, Col} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { Query_User } from "../../utils/queries";
import {Delete_Product} from '../../utils/mutations' 
import './styles.css'
import { useMutation } from "@apollo/client";

const ProductCard = ({product}) => {
  const { id } = useParams()
  const { loading, data } = useQuery(Query_User);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profileData);
  const [userId, setUserId] = useState(null);

  useEffect(()=> {
    if(!loading && (state._id === null || state._id === undefined)) {
      dispatch({type: Query_User, payload: data.user});
      setUserId(data.user._id);
    }
    else {
      setUserId(state._id);
    }
  }, []);

  const [deleteProduct, {err}] = useMutation(Delete_Product);
  const handleDelete = (id) => {
    deleteProduct({
      variables: {
        id: id
      }
    })
  }
  
  return (
    <>
      <Col>
        <Card className="infoCard">
          <Card.Img src={product.image} style={{ width: "17.9rem", height: "230px", marginBottom: '2%'}}></Card.Img>
          <Card.Title className="infoText">Name: {product.itemName}</Card.Title>
          <Card.Title className="infoText">Description: {product.description}</Card.Title>
          <Card.Title className="infoText">Category: {product.category}</Card.Title>
          <Card.Title className="infoText">Brand: {product.brand}</Card.Title>
          <Card.Title className="infoText">Seller: {product.seller.username}</Card.Title>
          <Link to={`/bids/${product._id}`} variant="light">
            <Button variant="light" className="bidBtn">Bid</Button>
          </Link>
          {!loading && userId === product.seller._id &&  <Button onClick={()=> handleDelete(product._id)} variant="danger" className="deleteBtn">Delete Bid</Button>}
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
