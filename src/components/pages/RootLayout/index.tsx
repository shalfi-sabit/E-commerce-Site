import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar";
import Snackbar from "../../Snackbar";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Snackbar />

      <Outlet></Outlet>
    </main>
  );
};

export default RootLayout;
