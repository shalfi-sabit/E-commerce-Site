import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Carousel from "../../Carousel";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Carousel />
      <Outlet></Outlet>
    </main>
  );
};

export default RootLayout;
