import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Wrapper from "../../UI/Wrapper.tsx";
import ChooseLanguage from "./ChooseLanguage.tsx";
import SearchBox from "./SearchBox.tsx";

import getLoginStatus from "../../../utils/getLoginStatus.ts";
import ProfileIconContainer from "../../UI/ProfileIconContainer/index.tsx";
import WishlistIconContainer from "../../UI/WishlistIconContainer.tsx";
import CartIconContainer from "../../UI/CartIconContainer.tsx";
import MenuIcon from "../../../assets/icons/menu.png";
import CloseWindowIcon from "../../../assets/icons/close-window.png";

import MobileNavbar from "./MobileNavbar.tsx";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const isLoggedIn = getLoginStatus();
  const isOnAuthPages =
    location.pathname === "/signup" || location.pathname === "/signin";

  return (
    <header className="relative">
      <ChooseLanguage />

      <nav className="navbar-main border-b-[1px] pb-1 md:pb-3 border-gray-200 pt-5 md:pt-7">
        <Wrapper className="flex justify-between items-center">
          <h1 className="font-extrabold text-xl md:text-2xl">SnapShop</h1>

          <ul className="hidden sm:flex sm:gap-4 md:gap-8 text-md">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4" : ""
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>

          <div className="hidden xl:flex items-center gap-5">
            <SearchBox />
            {!isOnAuthPages && (
              <>
                <WishlistIconContainer count={2} />
                <CartIconContainer count={4} />
              </>
            )}

            {isLoggedIn && <ProfileIconContainer />}
          </div>

          {!isMobileNavbarOpen ? (
            <img
              src={MenuIcon}
              alt="menu icon"
              className="w-7 h-7 sm:w-8 sm:h-8 xl:hidden"
              onClick={() => setIsMobileNavbarOpen(true)}
            />
          ) : (
            <img
              src={CloseWindowIcon}
              alt="close window icon"
              className="w-9 h-9 sm:w-10 sm:h-10 xl:hidden"
              onClick={() => setIsMobileNavbarOpen(false)}
            />
          )}
        </Wrapper>
      </nav>

      <MobileNavbar
        isLoggedIn={isLoggedIn}
        isOnAuthPages={isOnAuthPages}
        isMobileNavbarOpen={isMobileNavbarOpen}
        setIsMobileNavbarOpen={setIsMobileNavbarOpen}
      />
    </header>
  );
};

export default Navbar;
