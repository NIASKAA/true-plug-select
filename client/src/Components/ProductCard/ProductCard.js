import React, { useEffect } from "react";
import {useHistory} from 'react-router-dom'
import { Card, Button, Col} from "react-bootstrap";
import './styles.css'

const ProductCard = ({product}) => {
  let history = useHistory()
  const chatroomDirect = () => {
    history.push('/chatroom')
  }
  return (
    <>
      <Col>
        <Card className="infoCard">
          <Card.Img src={product.image} style={{ width: "17.9rem", height: "230px", marginBottom: '2%'}}></Card.Img>
          <Card.Title className="infoText">Name: {product.itemName}</Card.Title>
          <Card.Title className="infoText">Description: {product.description}</Card.Title>
          <Card.Title className="infoText">Seller: {product.seller}</Card.Title>
          <Button onClick={chatroomDirect} variant="light" className="bidBtn">Bid</Button>
          <Button variant="danger" className="deleteBtn">Delete Bid</Button>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
