import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar";
import BreadCrumb from "../../shared/BreadCrumb";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <BreadCrumb />
      <Outlet></Outlet>
    </main>
  );
};

export default RootLayout;
