import React from "react";
import { useParams } from 'react-router-dom'
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  const { id } = useParams()
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} key={product.id}/>
      ))}
    </>
  );
};

export default ProductList;
