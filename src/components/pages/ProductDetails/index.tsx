/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import BreadCrumb from "../../shared/BreadCrumb";
import ProductImageCard from "./ProductImageCard";
import ProductDetails from "./ProductDetails";
import Wrapper from "../../UI/Wrapper";
import { useParams } from "react-router-dom";

const index = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "0", 10);

  return (
    <>
      <BreadCrumb />
      <Wrapper className="flex justify-between flex-col lg:flex-row">
        <ProductImageCard id={productId} />
        <ProductDetails id={productId} />
      </Wrapper>
    </>
  );
};

export default index;
