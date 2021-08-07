import React from "react";
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
