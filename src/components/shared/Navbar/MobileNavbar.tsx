import React from "react";
import { NavLink } from "react-router-dom";

import SearchBox from "./SearchBox";
import ProfileIconContainer from "../../UI/ProfileIconContainer";
import WishlistIconContainer from "../../UI/WishlistIconContainer";
import CartIconContainer from "../../UI/CartIconContainer";

type mobileNavbarProps = {
  isOnAuthPages: boolean;
  isLoggedIn: boolean;
  isMobileNavbarOpen: boolean;
  setIsMobileNavbarOpen: (isOpen: boolean) => void;
};

const MobileNavbar: React.FC<mobileNavbarProps> = ({
  isOnAuthPages,
  isLoggedIn,
  isMobileNavbarOpen,
  setIsMobileNavbarOpen,
}) => {
  return (
    <div
      className={`w-screen h-screen fixed bg-gray-200 right-0 z-50  xl:hidden flex justify-end  ${
        isMobileNavbarOpen ? "" : "hidden"
      }`}
    >
      <nav
        className={`bg-white-900 navbar-mobile w-72 sm:w-80 h-screen top-0 p-5 flex flex-col gap-4 shadow-2xl text-[14px] sm:text-[16px] ${
          isMobileNavbarOpen ? "right-0" : "right-[-320px]"
        } duration-1000`}
      >
        <ul className="flex flex-col gap-3 text-md mb-6 sm:hidden">
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

        <div className="flex items-center gap-3">
          {!isOnAuthPages && (
            <>
              <WishlistIconContainer count={2} />
              <CartIconContainer count={4} />
            </>
          )}

          {isLoggedIn && <ProfileIconContainer />}
        </div>

        <SearchBox />
      </nav>
    </div>
  );
};

export default MobileNavbar;
