import React from "react";
import {Col, Row} from 'react-bootstrap'
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductList;
