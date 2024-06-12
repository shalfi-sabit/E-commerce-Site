import React from "react";
import AddToWishlistIcon from "../../assets/icons/AddToWishlistIcon";
import { RootState } from "../../redux-store/redux-store";
import { useSelector } from "react-redux";

const AddToWishlistIconContainer: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const handleClick = () => {
    console.log("pp");
  };

  return (
    <div onClick={handleClick}>
      <AddToWishlistIcon />
    </div>
  );
};

export default AddToWishlistIconContainer;
