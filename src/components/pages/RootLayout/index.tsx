import Navbar from "../../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </main>
  );
};

export default RootLayout;
