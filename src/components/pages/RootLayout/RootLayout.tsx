import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar/Navbar";
import CustomerBenefits from "../../shared/CustomerBenefits";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <CustomerBenefits />
      <Outlet></Outlet>
    </main>
  );
};

export default RootLayout;
