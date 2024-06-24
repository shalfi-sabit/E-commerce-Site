/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import BreadCrumb from "../../shared/BreadCrumb";
import ProductImageCard from "./ProductImageCard";
import ProductDetails from "./ProductDetails";
import Wrapper from "../../UI/Wrapper";
import { Await, useParams, useRouteLoaderData } from "react-router-dom";

const index = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "0", 10);
  const { products } = useRouteLoaderData("root") as any;

  return (
    <>
      <BreadCrumb />
      <Await resolve={products}>
        {(products) => (
          <Wrapper className="flex justify-between items-center flex-col lg:flex-row gap-8 my-[5%]">
            <ProductImageCard id={productId} products={products} />
            <ProductDetails id={productId} products={products} />
          </Wrapper>
        )}
      </Await>
    </>
  );
};

export default index;
