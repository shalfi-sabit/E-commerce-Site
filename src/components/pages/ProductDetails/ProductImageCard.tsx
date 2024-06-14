import React from "react";
import SmallProductImage from "./SmallProductImage";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";
import { useRouteLoaderData } from "react-router-dom";
import product from "../../../models/product";

const ProductImageCard: React.FC<{ id: number; products: product[] }> = ({
  id,
  products,
}) => {
  const curProduct = products.filter((product) => product.id === id)[0];

  return (
    <>
      {curProduct ? (
        <>
          <div className="flex flex-col-reverse md:flex-row gap-2 xs:gap-3 md:gap-4 w-[100%] md:w-[100%] lg:w-[60%] h-[50%]">
            <div className="w-[100%] md:w-[20%] lg:w-[20%] flex md:flex-col justify-between gap-3">
              <SmallProductImage imageSource={curProduct.image} />
              <SmallProductImage imageSource={curProduct.image} />
              <SmallProductImage imageSource={curProduct.image} />
              <SmallProductImage imageSource={curProduct.image} />
            </div>

            <div className="w-[100%] shadow-md p-4 sm:p-6 flex justify-center items-center object-contain">
              <img
                src={curProduct.image}
                alt="product"
                className="w-[25%] md:w-[30%] lg:w-[40%]"
              />
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductImageCard;
