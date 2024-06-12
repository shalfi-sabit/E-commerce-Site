import React from "react";

import SmallProductImage from "./SmallProductImage";
import DummyProductImage1 from "../../../assets/images/dummy-product-1.jpg";

const ProductImageCard = () => {
  return (
    <div className="flex flex-col-reverse xs:flex-row gap-2 xs:gap-3 lg:gap-5 w-[100%] md:w-[60%] lg:w-[60%]">
      <div className="w-[100%] xs:w-[27%] lg:w-[20%] flex xs:flex-col justify-between gap-3">
        <SmallProductImage imageSource={DummyProductImage1} />
        <SmallProductImage imageSource={DummyProductImage1} />
        <SmallProductImage imageSource={DummyProductImage1} />
        <SmallProductImage imageSource={DummyProductImage1} />
      </div>

      <div className="w-[100%] lg:w-[80%] shadow-md p-4 sm:p-6 flex justify-center items-center">
        <img src={DummyProductImage1} alt="product" />
      </div>
    </div>
  );
};

export default ProductImageCard;
