import React from "react";
import JustForYou from "./JustForYou";
import Wrapper from "../../UI/Wrapper";
import WishListItems from "./WishListItems";
import OutlinedButton from "../../UI/Button/OutlinedButton";

const Wishlist = () => {
  return (
    <Wrapper>
      <div>
        <div className="flex justify-between items-center mt-10 ">
          <p>Wishlist(4)</p>
          <OutlinedButton text="Move All To Bag" />
        </div>
        <WishListItems />
        <JustForYou />
      </div>
    </Wrapper>
  );
};

export default Wishlist;
