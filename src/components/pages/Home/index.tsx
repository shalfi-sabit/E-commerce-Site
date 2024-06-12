import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import FlashSale from "../../FlashSales";
import TopRatedProducts from "../../TopRatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { handleProductAdd } from "../../../redux-store/slices/productsSlice";
import { homeLoaderData } from "../../../models/homeLoaderData";
import { RootState } from "../../../redux-store/redux-store";

const Home = () => {
  const dispatch = useDispatch();
  const loaderData = useLoaderData() as homeLoaderData;
  const products = useSelector((state: RootState) => state.products.products);

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
      <FlashSale />
      <TopRatedProducts />
    </main>
  );
};

export default Home;
