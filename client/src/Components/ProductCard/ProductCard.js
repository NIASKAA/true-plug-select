import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import './styles.css'

const ProductCard = ({product}) => {
  return (
    <>
      <Col>
        <Card className="infoCard">
          <Card.Img src={product.image} style={{ width: "17.9rem", height: "230px", marginBottom: '2%'}}></Card.Img>
          <Card.Title className="infoText">Name: {product.itemName}</Card.Title>
          <Card.Title className="infoText">Description: {product.description}</Card.Title>
          <Button variant="light" className="bidBtn">Bid</Button>
          <Button variant="danger" className="deleteBtn">Delete Bid</Button>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
