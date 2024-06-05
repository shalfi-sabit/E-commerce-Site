import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";

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
