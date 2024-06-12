/* eslint-disable react-hooks/rules-of-hooks */

import { useNavigate } from "react-router-dom";

import FillButton from "../UI/Button/FillButton";
import SectionHeader from "../UI/SectionHeader";
import SectionTitle from "../UI/SectionTitle";
import TopRatedProducts from "../../data/topRatedProducts";
import ProductCard from "../ProductCard";
import Wrapper from "../UI/Wrapper";

const index = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-8 sm:mt-10 md:mt-16 lg:mt-20 flex flex-col gap-3 sm:gap-5 mb-5 sm:mb-7">
      <SectionHeader sectionHeader="This Month" />
      <SectionTitle text="Top Rated Products">
        <FillButton
          onClick={() => {
            navigate("/products");
          }}
          text="View All"
        />
      </SectionTitle>

      <Wrapper className="pb-5 sm:pb-7 md:pb-9 flex items-stretch lg:justify-around flex-wrap gap-2 sm:gap-4 md:gap-5 my-8 md:my-10">
        {TopRatedProducts.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            imageSource={item.imageSource}
            productName={item.title}
            price={item.price}
            prevPrice={item.prevPrice}
            rating={item.rating}
            count={item.count}
            showAddToWishlistIcon
            showSeeDetailsIcon
            className="w-[48%] sm:w-[31%] lg:w-[23%]"
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default index;
