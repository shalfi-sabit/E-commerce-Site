import { Outlet } from "react-router-dom";

import Navbar from "../../shared/Navbar/Navbar";

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;