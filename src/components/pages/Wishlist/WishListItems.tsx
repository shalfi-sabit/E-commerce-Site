import React from "react";
import ProductCard from "../../ProductCard";
import product from "../../../models/product";

type wishlistItemsProps = {
  wishlistItems: product[];
};

const WishListItems: React.FC<wishlistItemsProps> = ({ wishlistItems }) => {
  return (
    <div className="flex items-stretch lg:justify-around flex-wrap gap-2 sm:gap-4 md:gap-5 my-8 md:my-10">
      {wishlistItems.map((item) => (
        <ProductCard
          key={item?.id}
          id={item?.id}
          imageSource={item?.image}
          productName={item?.title}
          price={item?.price}
          prevPrice={300}
          rating={item?.rating.rate}
          count={item?.rating.count}
          showDeleteIcon
          className="w-[48%] sm:w-[31%] lg:w-[23%]"
        />
      ))}
    </div>
  );
};

export default WishListItems;
