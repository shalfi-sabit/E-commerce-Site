import Navbar from "../../shared/Navbar";
import Snackbar from "../../Snackbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer";

import { useDispatch } from "react-redux";
import { homeLoaderData } from "../../../models/homeLoaderData";
import { handleProductAdd } from "../../../redux-store/slices/productsSlice";
import { useEffect } from "react";

const RootLayout = () => {
  const dispatch = useDispatch();
  const loaderData = useLoaderData() as homeLoaderData;

  useEffect(() => {
    if (loaderData?.data) {
      dispatch(handleProductAdd(loaderData.data));
    }
  }, [loaderData, dispatch]);

  if (loaderData?.error) {
    return (
      <main className="overflow-x-hidden">
        <p className="error-message bg-red-200 p-10 text-center font-medium text-[12px] sm:text-sm md:text-base">
          Failed to load data: {loaderData.error}
        </p>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Snackbar />
      <Outlet></Outlet>
      <Footer />
    </main>
  );
};

export default RootLayout;
