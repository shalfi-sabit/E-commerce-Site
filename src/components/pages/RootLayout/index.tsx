import Navbar from "../../shared/Navbar";
import Snackbar from "../../Snackbar";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";
import MoveToTopButton from "../../UI/Button/MoveToTopButton";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Snackbar />
      <Outlet></Outlet>

      <MoveToTopButton />
      <Footer />
    </main>
  );
};

export default RootLayout;
