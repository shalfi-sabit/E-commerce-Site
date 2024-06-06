import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar";
import ProductCard from "../../ProductCard";
import Wrapper from "../../UI/Wrapper";

import DummyProductImage1 from "../../../assets/images/dummy-product-1.jpg";
import DummyProductImage2 from "../../../assets/images/dummy-product-2.jpg";
import DummyProductImage3 from "../../../assets/images/dummy-product-3.jpg";
import DummyProductImage4 from "../../../assets/images/dummy-product-4.jpg";
import DummyProductImage5 from "../../../assets/images/dummy-product-5.jpg";
import DummyProductImage6 from "../../../assets/images/dummy-product-6.jpg";

const RootLayout = () => {
  return (
    <main>
      <Navbar />

      {/* Dummy code for developing product-card component */}
      <Wrapper className="flex justify-center sm:justify-normal gap-4 flex-wrap">
        <ProductCard
          id={1}
          imageSource={DummyProductImage1}
          productName="HAVIT G-923 Gamepad"
          price={260}
          prevPrice={360}
          rating={3.6}
          count={75}
          showAddToWishlistIcon={true}
          showSeeDetailsIcon={true}
          discount={65}
        />
        <ProductCard
          id={1}
          imageSource={DummyProductImage2}
          productName="HAVIT G-923 Gamepad"
          price={260}
          prevPrice={360}
          rating={3.7}
          count={75}
          showAddToWishlistIcon={true}
          showSeeDetailsIcon={true}
          discount={27}
        />
        <ProductCard
          id={1}
          imageSource={DummyProductImage3}
          productName="HAVIT G-923 Gamepad"
          price={260}
          prevPrice={360}
          rating={4.5}
          count={75}
          showDeleteIcon={true}
          discount={7}
        />
        <ProductCard
          id={1}
          imageSource={DummyProductImage4}
          productName="HAVIT G-923 Gamepad"
          price={260}
          rating={4.8}
          count={75}
          showAddToWishlistIcon={true}
          showSeeDetailsIcon={true}
        />
        <ProductCard
          id={1}
          imageSource={DummyProductImage5}
          productName="HAVIT G-923 Gamepad"
          price={260}
          rating={2.2}
          count={75}
          showAddToWishlistIcon={true}
        />
        <ProductCard
          id={1}
          imageSource={DummyProductImage6}
          productName="HAVIT G-923 Gamepad"
          price={260}
          prevPrice={360}
          rating={4.8}
          count={75}
          showSeeDetailsIcon={true}
        />
      </Wrapper>

      <Outlet></Outlet>
    </main>
  );
};

export default RootLayout;
