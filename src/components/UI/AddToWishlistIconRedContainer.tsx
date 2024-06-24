import React, { MouseEvent } from "react";
import addToWishlistIconRed from "../../assets/images/wishlist-icon-red.png";

type addToWishlistIconRedContainerProps = {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const AddToWishlistIconRedContainer: React.FC<
  addToWishlistIconRedContainerProps
> = ({ onClick }) => {
  return (
    <div className="w-4" onClick={onClick}>
      <img src={addToWishlistIconRed} alt="" />
    </div>
  );
};

export default AddToWishlistIconRedContainer;
