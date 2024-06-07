import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar";
import Snackbar from "../../Snackbar";
import Footer from "../../shared/Footer";

const RootLayout = () => {
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
