import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import FormInput from "../../UI/Input/FormInput";

const RootLayout = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <FormInput label="First name" required />
      <FormInput placeholder="Enter Your Address" label="Address" required />
      <FormInput placeholder="Enter Your Company Name" label="Company" />
      {/* <Outlet></Outlet>
      <Footer /> */}
    </main>
  );
};

export default RootLayout;
