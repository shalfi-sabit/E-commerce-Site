import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
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
