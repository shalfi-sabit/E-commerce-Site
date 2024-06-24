import React, { MouseEvent } from "react";
import AddToWishlistIcon from "../../assets/icons/AddToWishlistIcon";

type addToWishlistIconContainerProps = {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  isRedStroke?: boolean;
  isRedFill?: boolean;
};

const AddToWishlistIconContainer: React.FC<addToWishlistIconContainerProps> = ({
  onClick,
  isRedStroke,
  isRedFill,
}) => {
  return (
    <div onClick={onClick} title="Add to wishlist">
      <AddToWishlistIcon isRedStroke={isRedStroke} isRedFill={isRedFill} />
    </div>
  );
};

export default AddToWishlistIconContainer;
