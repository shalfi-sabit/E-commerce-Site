import { Rating } from "@mui/material";
import React from "react";

type productCardProps = {
  imageSource: string;
  className?: string;
  productName: string;
  price: number;
  prevPrice?: number;
  rating: number;
};

const index: React.FC<productCardProps> = ({
  imageSource,
  className,
  productName,
  price,
  prevPrice,
  rating,
}) => {
  return (
    <div className="flex justify-center items-start flex-col rounded sm:gap-1 text-sm md:text-[16px]">
      <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 flex justify-center items-center mb-2 sm:mb-3">
        <img
          src={imageSource}
          alt="product card"
          className="w-full h-full max-w-full"
        />
      </div>
      <p className="font-semibold">{productName}</p>
      <p className="font-semibold flex items-end gap-1 sm:gap-2 md:gap-3">
        <span className="text-red-900">${price}</span>
        <span className="text-gray-900 line-through">${prevPrice}</span>
      </p>
      <div className="flex items-end gap-1 sm:gap-2 md:gap-3">
        <Rating
          name="rating-component"
          defaultValue={rating}
          precision={0.1}
          readOnly
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.3rem",
              md: "1.5rem",
            },
          }}
        />
        <span className="text-gray-900 font-semibold text-[10px] md:text-sm">
          (65)
        </span>
      </div>
    </div>
  );
};

export default index;
