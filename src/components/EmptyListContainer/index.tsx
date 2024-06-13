import React from "react";

import EmptyCartImage from "../../assets/images/empty-cart.jpg";
import Wrapper from "../UI/Wrapper";
import FillButton from "../UI/Button/FillButton";
import { useNavigate } from "react-router-dom";

type emptyListContainerProps = {
  title: string;
  subTitle: string;
  secondarySubTitle: string;
};

const EmptyCart: React.FC<emptyListContainerProps> = ({
  title,
  subTitle,
  secondarySubTitle,
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper className="flex flex-col gap-4 lg:gap-8 mt-[5%] lg:mt-[4%] mb-[7%] sm:mb-[5%]">
      <div className="w-[60%] xs:w-[50%] sm:w-[40%] md:w-[35%] lg:w-[30%] mx-auto ">
        <img src={EmptyCartImage} alt="" />
      </div>

      <div className="flex flex-col gap-2 sm:gap-3 text-center">
        <h1 className="font-medium text-2xl md:text-3xl lg:text-5xl text-gray-900">
          {title}
        </h1>
        <div className="flex flex-col">
          <p className="text-gray-900 text-sm md:text-base lg:text-xl">
            {subTitle}
          </p>
          <p className="text-gray-900 text-sm lg:text-xl">
            {secondarySubTitle}
          </p>
        </div>
      </div>

      <FillButton
        text="Continue Shopping"
        className="w-fit mx-auto"
        onClick={() => navigate("/")}
      />
    </Wrapper>
  );
};

export default EmptyCart;
