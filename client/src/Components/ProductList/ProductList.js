import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
