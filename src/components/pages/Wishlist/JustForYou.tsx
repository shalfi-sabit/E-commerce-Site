import React from "react";
import SectionHeader from "../../UI/SectionHeader";
import OutlinedButton from "../../UI/Button/OutlinedButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";
import ProductCard from "../../ProductCard";
import Wrapper from "../../UI/Wrapper";

const JustForYou = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const featuredIndex = [2, 8, 14, 20];
  const featuredItems = products.filter((product) =>
    featuredIndex.includes(product.id)
  );
  console.log(featuredItems);
  return (
    <div>
      <div className="mt-20 mb-5 flex items-center">
        <SectionHeader
          sectionHeader="Just For You"
          isTextBlack={true}
          customTextSize="text-[14px] sm:text-[16px] md:text-[20px]"
        />
        <OutlinedButton text="See All" />
      </div>
      <div className="flex items-stretch flex-wrap gap-2 sm:gap-4 md:gap-5 my-8 md:my-10">
        {featuredItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            imageSource={item.image}
            productName={item.title}
            price={item.price}
            prevPrice={1160}
            rating={item.rating.rate}
            count={item.rating.count}
            discount={40}
            showSeeDetailsIcon
            className="w-[48%] sm:w-[31%] lg:w-[23%]"
          />
        ))}
      </div>
    </div>
  );
};

export default JustForYou;
