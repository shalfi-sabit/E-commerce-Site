import Navbar from "../../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";
import Checkout from "../Checkout";

const RootLayout = () => {
  return (
    <main>
      <Checkout />
      {/* <Navbar />
      <Outlet></Outlet>
      <Footer /> */}
    </main>
  );
};

export default RootLayout;
