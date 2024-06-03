import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar/Navbar";
import FillButton from "../../UI/Button/FillButton";
import OutlinedButton from "../../UI/Button/OutlinedButton"

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet></Outlet>
    </main>
  );
};

export default RootLayout;
