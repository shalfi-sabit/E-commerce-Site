/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { useMouseOver } from "../../hooks/useMouseOver";
import productCardProps from "../../models/productCardProps";

import { Rating } from "@mui/material";
import AddToWishlistIcon from "../../assets/icons/AddToWishlistIcon";
import SeeDetailsIcon from "../../assets/icons/SeeDetailsIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import CartIconWhite from "../../assets/icons/CartIconWhite";

const index: React.FC<productCardProps> = ({
  id,
  imageSource,
  className,
  productName,
  price,
  prevPrice,
  rating,
  count,
  showDeleteIcon,
  showAddToWishlistIcon,
  showSeeDetailsIcon,
  discount,
}) => {
  const { isHovered, handleMouseOver, handleMouseOut } = useMouseOver();

  return (
    <div
      className="flex justify-center items-start flex-col rounded sm:gap-1 text-sm md:text-[16px] transition-all duration-1000"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 flex justify-center items-center mb-2 sm:mb-3 relative rounded overflow-hidden">
        <img src={imageSource} alt="product card" />

        {isHovered && (
          <div className="flex items-center justify-center gap-1 md:gap-2 bg-black-900 text-white-900 absolute bottom-0 py-1 w-full text-center text-[10px] md:text-[12px] cursor-pointer">
            <CartIconWhite />
            <p>Add To Cart</p>
          </div>
        )}

        <div className="absolute flex flex-col gap-1 md:gap-2 top-2 right-2 md:top-3 md:right-3">
          {showDeleteIcon && <DeleteIcon />}
          {showAddToWishlistIcon && <AddToWishlistIcon />}
          {showSeeDetailsIcon && <SeeDetailsIcon />}
        </div>

        {discount && (
          <p className="absolute left-2 top-2 md:top-3 md:left-3 bg-red-900 text-white-900 text-[8px] md:text-[10px] lg:text-[12px] rounded px-2 lg:px-3 lg:py-[2px]">
            -{discount}%
          </p>
        )}
      </div>

      <p className="font-semibold">{productName}</p>
      <p className="font-semibold flex items-end gap-1 sm:gap-2 md:gap-3">
        <span className="text-red-900">${price}</span>
        {prevPrice && (
          <span className="text-gray-900 line-through">${prevPrice}</span>
        )}
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
          ({count})
        </span>
      </div>
    </div>
  );
};

export default index;
