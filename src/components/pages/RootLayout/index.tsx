import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar";
import ProductCard from "../../ProductCard";

import DummyProductImage1 from "../../../assets/images/dummy-product-1.jpg";
import DummyProductImage2 from "../../../assets/images/dummy-product-2.jpg";
import Wrapper from "../../UI/Wrapper";

const RootLayout = () => {
  return (
    <main>
      <Navbar />

      <Outlet></Outlet>
    </main>
  );
};

export default RootLayout;
