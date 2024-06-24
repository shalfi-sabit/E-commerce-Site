import React from "react";
import Skeleton from "@mui/material/Skeleton";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";
import Wrapper from "../UI/Wrapper";

const FlashSalesSkeleton = () => {
  return (
    <Wrapper className="flex flex-col gap-4">
      <div className="flex flex-col justify-between w-[full]">
        <Skeleton variant="text" className="w-[20%]" animation="wave" />

        <div className="flex justify-between">
          <Skeleton
            variant="text"
            className="w-[40%] text-4xl"
            animation="wave"
          />
          <Skeleton
            variant="text"
            className="w-[10%] text-4xl"
            animation="wave"
          />
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-between">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </Wrapper>
  );
};

export default FlashSalesSkeleton;
