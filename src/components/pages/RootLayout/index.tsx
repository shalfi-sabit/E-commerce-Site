import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar";
import SignUp from "../SignUp";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet></Outlet>
    </main>
  );
};

export default RootLayout;
