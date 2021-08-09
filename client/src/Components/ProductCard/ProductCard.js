import React from "react";
import {Link, useParams} from 'react-router-dom'
import { Card, Button, Col} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import './styles.css'

const ProductCard = ({product}) => {
  const { id } = useParams()
  const state = useSelector((state) => state.profileData);
  // const deleteProduct = useQuery(Delete_Product);
  // const handleDelete = () => {
  //   deleteProduct({
  //     variables: {
  //       id: id
  //     }
  //   })
  // }
  
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
          {state._id === product.seller._id &&  <Button onClick={""} variant="danger" className="deleteBtn">Delete Bid</Button>}
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
