import Wrapper from "../../UI/Wrapper";
import cartItems from "../../../data/dummyCartItems";
import ProductCard from "../../ProductCard";
import SectionHeader from "../../UI/SectionHeader";
import SectionTitle from "../../UI/SectionTitle";
const index = () => {
  return (
    <div className="m-4 md:m-8 lg:m-12">
      <div className="mb-3 md:mb-4 lg:mb-8">
        <SectionHeader sectionHeader="Our Products" />
      </div>

      <SectionTitle text="Explore Our Products" />
      <Wrapper className="flex items-stretch flex-wrap gap-2 sm:gap-4 md:gap-5 my-8 md:my-10">
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
            className="w-[48%] sm:w-[31%] lg:w-[23%]"
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default index;
