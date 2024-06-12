/* eslint-disable react-hooks/rules-of-hooks */
import Wrapper from "../../UI/Wrapper";
import ProductCard from "../../ProductCard";
import SectionHeader from "../../UI/SectionHeader";
import SectionTitle from "../../UI/SectionTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";
const index = () => {
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <div className="m-4 md:m-8 lg:m-12">
      <div className="mb-3 md:mb-4 lg:mb-8">
        <SectionHeader sectionHeader="Our Products" />
      </div>

      <SectionTitle text="Explore Our Products" />
      <Wrapper className="flex items-stretch flex-wrap gap-2 sm:gap-4 md:gap-5 my-8 md:my-10">
        {products.map((item) => (
          <ProductCard
            key={item?.id}
            id={item?.id}
            imageSource={item?.image}
            productName={item?.title}
            price={item?.price}
            prevPrice={300}
            rating={item?.rating.rate}
            count={item?.rating.count}
            showAddToWishlistIcon
            showSeeDetailsIcon
            className="w-[48%] sm:w-[31%] lg:w-[23%]"
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default index;
