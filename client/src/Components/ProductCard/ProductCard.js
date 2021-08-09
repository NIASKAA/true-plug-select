import React from "react";
import {Link, useParams} from 'react-router-dom'
import { Card, Button, Col} from "react-bootstrap";
import './styles.css'

const ProductCard = ({product}) => {
  const { id } = useParams()
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
          <Link to={`/bids/${product._id}`} variant="light" className="bidBtn">
            Bid
          </Link>
          <Button variant="danger" className="deleteBtn">Delete Bid</Button>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
