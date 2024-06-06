import React from "react";
import { NavLink } from "react-router-dom";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";

type carouselImageContainerProps = {
  productName: string;
  title: string;
  imageSource: string;
};

const CarouselImageContainer: React.FC<carouselImageContainerProps> = ({
  productName,
  title,
  imageSource,
}) => {
  return (
    <div className="relative">
      <div className="text-white-900 absolute top-[50%] translate-y-[-50%] left-[10%] max-w-[50%] flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
        <h3 className="text-[12px] sm:text-sm md:text-lg lg:text-2xl">
          {productName}
        </h3>
        <h1 className="text-base sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-semibold">
          {title}
        </h1>
        <div className="flex items-center gap-1 md:gap-2 lg:gap-4">
          <NavLink
            to="/"
            className="underline underline-offset-4 md:underline-offset-8 text-[12px] sm:text-lg lg:text-2xl"
          >
            Shop Now
          </NavLink>
          <RightArrowIcon />
        </div>
      </div>

      <img src={imageSource} alt="" />
    </div>
  );
};

export default CarouselImageContainer;
