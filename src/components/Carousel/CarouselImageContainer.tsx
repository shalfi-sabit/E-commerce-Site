import React from "react";
import { NavLink } from "react-router-dom";
import RightArrowIconOutlined from "../../assets/images/right-arrow-outlined.png";

type carouselImageContainerProps = {
  productName: string;
  title: string;
  imageSource: string;
  to: string;
};

const CarouselImageContainer: React.FC<carouselImageContainerProps> = ({
  productName,
  title,
  imageSource,
  to,
}) => {
  return (
    <div className="relative">
      <div className="text-white-900 absolute top-[50%] translate-y-[-50%] left-[10%] max-w-[50%] flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
        <h3 className="text-[10px] xs:text-[12px] sm:text-sm md:text-lg lg:text-xl ">
          {productName}
        </h3>
        <h1 className="text-sm xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold ">
          {title}
        </h1>
        <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
          <NavLink
            to={to}
            className="underline underline-offset-4 md:underline-offset-8 text-[10px] xs:text-[12px] sm:text-sm lg:text-base"
          >
            Shop Now
          </NavLink>
          <img
            src={RightArrowIconOutlined}
            alt="right-arrow"
            className="w-3 md:w-4 lg:w-5"
          />
        </div>
      </div>

      <img src={imageSource} alt="" />
    </div>
  );
};

export default CarouselImageContainer;
