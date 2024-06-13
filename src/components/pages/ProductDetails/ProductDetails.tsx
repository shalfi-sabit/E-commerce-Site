import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";

const ProductDetails: React.FC<{ id: number }> = ({ id }) => {
  const products = useSelector((state: RootState) => state.products.products);
  const curProduct = products.filter((product) => product.id === id)[0];

  return <div>Product Details</div>;
};

export default ProductDetails;
