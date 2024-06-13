import React, { MouseEvent } from "react";
import { NavLink } from "react-router-dom";

import SearchBox from "./SearchBox";
import ProfileIconContainer from "../../UI/ProfileIconContainer";
import WishlistIconContainer from "../../UI/WishlistIconContainer";
import CartIconContainer from "../../UI/CartIconContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/redux-store";

type mobileNavbarProps = {
  isOnAuthPages: boolean;
  isLoggedIn: boolean;
  isMobileNavbarOpen: boolean;
  setIsMobileNavbarOpen: (isOpen: boolean) => void;
  handleBackdropClick: (event: MouseEvent<HTMLDivElement>) => void;
  handleMobileNavbarClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const MobileNavbar: React.FC<mobileNavbarProps> = ({
  isOnAuthPages,
  isLoggedIn,
  isMobileNavbarOpen,
  setIsMobileNavbarOpen,
  handleBackdropClick,
  handleMobileNavbarClick,
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalCartItems = cartItems.reduce(
    (prevCount, item) => prevCount + item.quantity,
    0
  );

  return (
    <div
      className={`w-screen h-screen fixed bg-gray-200 right-0 z-50  xl:hidden flex justify-end  ${
        isMobileNavbarOpen ? "" : "hidden"
      }`}
      onClick={handleBackdropClick}
    >
      <nav
        className={`bg-white-900 navbar-mobile w-72 sm:w-80 h-screen top-0 p-5 flex flex-col gap-4 shadow-2xl text-[14px] sm:text-[16px] ${
          isMobileNavbarOpen ? "right-0" : "right-[-320px]"
        } duration-1000`}
        onClick={handleMobileNavbarClick}
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

          {!isLoggedIn && (
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
          )}
        </ul>

        <div className="flex items-center gap-3">
          {!isOnAuthPages && (
            <>
              <WishlistIconContainer count={2} />
              <CartIconContainer count={totalCartItems} />
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
