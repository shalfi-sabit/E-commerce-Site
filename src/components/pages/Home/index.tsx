import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import FlashSale from "../../FlashSales";
import HeroSection from "../../HeroSection";
import TopRatedProducts from "../../TopRatedProducts";
import OurProducts from "../../OurProducts";
import BrowseByCategory from "../../BrowseCategory/index.tsx";
import { useDispatch } from "react-redux";
import { handleProductAdd } from "../../../redux-store/slices/productsSlice";
import { homeLoaderData } from "../../../models/homeLoaderData";

const Home = () => {
  const dispatch = useDispatch();
  const loaderData = useLoaderData() as homeLoaderData;

  useEffect(() => {
    if (loaderData.data) {
      dispatch(handleProductAdd(loaderData.data));
    }
  }, [loaderData, dispatch]);

  if (loaderData.error) {
    return (
      <main className="overflow-x-hidden">
        <p className="error-message bg-red-200 p-10 text-center font-medium text-[12px] sm:text-sm md:text-base">
          Failed to load data: {loaderData.error}
        </p>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FlashSale />
      <BrowseByCategory />
      <TopRatedProducts />
      <OurProducts />
    </main>
  );
};

export default Home;
