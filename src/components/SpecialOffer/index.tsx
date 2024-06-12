import React from "react";
import offerImage from "../../assets/images/jacketblack.png";
import Wrapper from "../UI/Wrapper";
import FillButton from "../UI/Button/FillButton";
import Timer from "./Timer";

const SpecialOffer = () => {
  return (
    <Wrapper>
      <div className="relative">
        <img src={offerImage} />
        <div className="absolute top-12 left-8 w-[45%] text-wrap flex flex-col gap-6 leading-10">
          <h2 className="text-green-500 font-semibold">Categories</h2>
          <h1 className="text-[32px] font-semibold text-white-900">
            Experience the Perfect Blend of Style and Comfort
          </h1>
          <Timer />
          <FillButton text="Buy Now" className="bg-green-500 w-fit" />
        </div>
      </div>
    </Wrapper>
  );
};

export default SpecialOffer;
