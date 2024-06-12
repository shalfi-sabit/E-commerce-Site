/* eslint-disable react-hooks/rules-of-hooks */

import { useNavigate } from "react-router-dom";

import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import Wrapper from "../UI/Wrapper";
import ProductCard from "../ProductCard";
import FillButton from "../UI/Button/FillButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/redux-store";

const index = () => {
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <section className="m-8 sm:m-10 md:m-16 lg:m-20 flex flex-col gap-3 sm:gap-5 mb-5 sm:mb-7">
      <SectionHeader sectionHeader="Our Products" />
      <SectionTitle text="Explore Our Products" />

      <Wrapper className="pb-5 sm:pb-7 md:pb-9">
        <div className="flex items-stretch flex-wrap gap-2 sm:gap-4 md:gap-5 my-8 md:my-10">
          {products.slice(0, 8).map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              imageSource={item.image}
              productName={item.title}
              price={item.price}
              prevPrice={300}
              rating={item.rating.rate}
              count={item.rating.count}
              showAddToWishlistIcon
              showSeeDetailsIcon
              className="w-[48%] sm:w-[31%] lg:w-[23%]"
            />
          ))}
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
