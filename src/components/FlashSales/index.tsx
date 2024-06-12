/* eslint-disable react-hooks/rules-of-hooks */

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import Timer from "./Timer";
import ArrowButtons from "../UI/Button/ArrowButtons";
import ProductCard from "../ProductCard/index";
import Wrapper from "../UI/Wrapper";
import FillButton from "../UI/Button/FillButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/redux-store";
import product from "../../models/product";

const CART_ITEMS_ID: number[] = [];
for (let i = 1; i < 20; i += 2) {
  CART_ITEMS_ID.push(i);
}

const index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products.products);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const handleLeftArrowClciked = () => {
    scroll(-200);
    console.log("Left Arrow Clicked");
  };

  const handleRightArrowClciked = () => {
    scroll(200);
    console.log("Right Arrow Clicked");
  };

  return (
    <section className="mt-8 sm:mt-10 md:mt-16 lg:mt-20 flex flex-col gap-3 sm:gap-5 mb-5 sm:mb-7">
      <SectionHeader sectionHeader="Today's" />
      <SectionTitle text="Flash Sales" timer={<Timer />}>
        <ArrowButtons
          leftArrowOnClick={handleLeftArrowClciked}
          rightArrowOnClick={handleRightArrowClciked}
        />
      </SectionTitle>
      <Wrapper className="pb-5 sm:pb-7 md:pb-9 border-b ">
        <div
          className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-scroll horizontal-scrollbar-hide py-3"
          ref={scrollContainerRef}
        >
          {CART_ITEMS_ID.map((curItemId) => {
            const item: product = products[curItemId];

            return (
              <ProductCard
                key={item?.id}
                id={item?.id}
                imageSource={item?.image}
                productName={item?.title}
                price={item?.price}
                prevPrice={300}
                rating={item?.rating.rate}
                count={item?.rating.count}
                discount={50}
                showAddToWishlistIcon
                showSeeDetailsIcon
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-6 sm:mt-7 md:mt-8">
          <FillButton
            onClick={() => {
              navigate("/products");
            }}
            text="View All Products"
            className="w-fit"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default index;
