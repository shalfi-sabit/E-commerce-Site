import React from "react";
import CircularCounterIcon from "./CircularCounterIcon";
import WishlistIcon from "../../assets/icons/WishlistIcon";
import { Link } from "react-router-dom";

type wishlistIconProps = {
  count: number;
};

const WishlistIconContainer: React.FC<wishlistIconProps> = ({ count }) => {
  return (
    <Link to="/wishlist" className="relative">
      {count > 0 && (
        <CircularCounterIcon
          count={count}
          className="absolute right-[-5px] top-[-9px]"
        />
      )}
      <WishlistIcon />
    </Link>
  );
};

export default WishlistIconContainer;
