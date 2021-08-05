import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <>
      <Card className="infoCard">
        <h4 class="mt-2 cardInfo">Product Info</h4>
        <Card.Img src={props.image} style={{ width: "70%", margin: "2%" }}></Card.Img>
        <Card.Title className="float-left">Name: {props.itemName}</Card.Title>
        <Card.Title className="float-left">Description: {props.description}</Card.Title>
      </Card>
    </>
  );
};

export default ProductCard;
