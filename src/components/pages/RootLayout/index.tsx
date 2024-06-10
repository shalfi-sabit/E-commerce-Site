import Navbar from "../../shared/Navbar";
import Snackbar from "../../Snackbar";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";
import Cart from "../Cart";
const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Snackbar />
      <Outlet></Outlet>
      <Cart />
      {/* <Footer /> */}
    </main>
  );
};

export default RootLayout;
