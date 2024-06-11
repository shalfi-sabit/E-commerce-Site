/* eslint-disable react-hooks/rules-of-hooks */

import { useRef } from "react";
import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import Timer from "./Timer";
import ArrowButtons from "../UI/Button/ArrowButtons";
import cartItems from "../../data/dummyCartItems";
import ProductCard from "../ProductCard/index";
import Wrapper from "../UI/Wrapper";
import FillButton from "../UI/Button/FillButton";

const index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <section className="m-8 sm:m-10 md:m-16 lg:m-20 flex flex-col gap-3 sm:gap-5 mb-5 sm:mb-7 ">
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
          {cartItems.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              imageSource={item.imageSource}
              productName={item.title}
              price={item.price}
              prevPrice={item.prevPrice}
              rating={item.rating}
              count={item.count}
              discount={item.discount}
              showAddToWishlistIcon
              showSeeDetailsIcon
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-6 sm:mt-7 md:mt-8">
          <FillButton text="View All Products" className="w-fit" />
        </div>
      </Wrapper>
    </section>
  );
};

export default index;
