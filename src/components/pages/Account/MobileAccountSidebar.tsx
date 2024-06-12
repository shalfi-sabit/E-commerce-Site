import React from "react";
import { NavLink } from "react-router-dom";

import CloseIcon from "../../../assets/icons/close-window.png";
import mobileAccountSidebarProps from "../../../models/mobileAccountSidebarProps";

const MobileAccountSidebar: React.FC<mobileAccountSidebarProps> = ({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
  handleBackdropClick,
  handleMobileSidebarClick,
}) => {
  return (
    <aside
      className="absolute h-full lg:hidden bg-[#0000004d] w-full top-36 md:top-44"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white-900 w-48 sm:w-52 md:w-60 h-full text-[12px] md:text-sm lg:text-[16px] text-nowrap px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-6"
        onClick={handleMobileSidebarClick}
      >
        <div className=" flex justify-end mb-2">
          <img
            src={CloseIcon}
            alt="close-icon"
            className="w-7 h-7"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        </div>
        <p className=" font-semibold mb-1 md:mb-2 lg:mb-3">Manage My Account</p>

        <ul className="mb-1 md:mb-2 lg:mb-3 flex flex-col gap-1 md:gap-2 lg:gap-3">
          <li>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? "text-red-900 ml-8" : "text-gray-300 ml-8"
              }
              end
            >
              My Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/account/address-book"
              className={({ isActive }) =>
                isActive ? "text-red-900 ml-8" : "text-gray-300 ml-8"
              }
            >
              Address Book
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/account/my-payment-options"
              className={({ isActive }) =>
                isActive ? "text-red-900 ml-8" : "text-gray-300 ml-8"
              }
            >
              My Payment Options
            </NavLink>
          </li>
        </ul>

        <p className=" font-semibold mb-1 md:mb-2 lg:mb-3">My Orders</p>
        <ul className="mb-1 md:mb-2 lg:mb-3 flex flex-col gap-1 md:gap-2 lg:gap-3">
          <li>
            <NavLink
              to="/account/my-returns"
              className={({ isActive }) =>
                isActive ? "text-red-900 ml-8" : "text-gray-300 ml-8"
              }
            >
              My Returns
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account/my-cancellations"
              className={({ isActive }) =>
                isActive ? "text-red-900 ml-8" : "text-gray-300 ml-8"
              }
            >
              My Cancellations
            </NavLink>
          </li>
        </ul>

        <p className=" font-semibold mb-1 md:mb-2 lg:mb-3">My WishList</p>
      </div>
    </aside>
  );
};

export default MobileAccountSidebar;
