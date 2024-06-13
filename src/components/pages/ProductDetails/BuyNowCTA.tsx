import React, { MouseEvent, useState } from "react";
import FillButton from "../../UI/Button/FillButton";
import AddToWishlistIconContainer from "../../UI/AddToWishlistIconContainer";

const BuyNowCTA: React.FC<{
  quantity: number;
  addToWishlistOnClick: (event: MouseEvent<HTMLDivElement>) => void;
  addToCartOnClick: (event: MouseEvent<HTMLButtonElement>) => void;
}> = ({ quantity, addToWishlistOnClick, addToCartOnClick }) => {
  const [buyNowQuantity, setBuyNowQuantity] = useState(1);

  return (
    <div className="flex gap-3">
      <div className="flex items-center justify-between w-[40%] border rounded">
        <button
          className="w-[30%] flex justify-center items-center hover:bg-red-900 hover:border-none hover:text-white-900 duration-300 cursor-pointer h-full "
          onClick={() => setBuyNowQuantity((prevState) => prevState - 1)}
        >
          -
        </button>
        <p className="text-[12px] sm:text-sm md:text-base border-r border-l w-[40%] flex justify-center items-center h-full">
          {buyNowQuantity}
        </p>
        <button
          className="w-[30%] flex justify-center items-center hover:bg-red-900 hover:border-none hover:text-white-900 duration-300 cursor-pointer h-full "
          onClick={() => setBuyNowQuantity((prevState) => prevState + 1)}
        >
          +
        </button>
      </div>

      <FillButton
        text="Buy Now"
        className="w-[40%]"
        onClick={addToCartOnClick}
      />

      <div className="w-[15%] h-full border rounded flex justify-center items-center cursor-pointer">
        <AddToWishlistIconContainer onClick={addToWishlistOnClick} />
      </div>
    </div>
  );
};

export default BuyNowCTA;
