import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({product}) => {
  return (
    <>
      <Card className="infoCard">
        <h4 class="mt-2 cardInfo">Product Info</h4>
        <Card.Img src={product.image} style={{ width: "70%", margin: "2%" }}></Card.Img>
        <Card.Title className="float-left">Name: {product.itemName}</Card.Title>
        <Card.Title className="float-left">Description: {product.description}</Card.Title>
        <Button>Bid</Button>
      </Card>
    </>
  );
};

export default ProductCard;
