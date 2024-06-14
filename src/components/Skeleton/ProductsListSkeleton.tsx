import React from "react";
import Skeleton from "@mui/material/Skeleton";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";
import Wrapper from "../UI/Wrapper";

const ProductListSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Wrapper
      className={`flex flex-col gap-4 my-[7%] md:my-[5%] lg:my-[4%] ${className}`}
    >
      <div className="flex flex-col justify-between w-[full]">
        <Skeleton
          variant="text"
          className="text-sm  sm:text-base w-[20%]"
          animation="wave"
        />

        <div className="flex justify-between text-2xl sm:text-3xl md:text-4xl">
          <Skeleton variant="text" className="w-[40%] " animation="wave" />
          <Skeleton variant="text" className="w-[10%] " animation="wave" />
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-between gap-1 xs:gap-2 sm:gap-3">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </Wrapper>
  );
};

export default ProductListSkeleton;
