import React from "react";
import BreadCrumb from "../../shared/BreadCrumb";
import ProductImageCard from "./ProductImageCard";
import ProductDetails from "./ProductDetails";
import Wrapper from "../../UI/Wrapper";

const index = () => {
  return (
    <>
      <BreadCrumb />
      <Wrapper className="flex justify-between flex-col md:flex-row">
        <ProductImageCard />
        <ProductDetails />
      </Wrapper>
    </>
  );
};

export default index;
