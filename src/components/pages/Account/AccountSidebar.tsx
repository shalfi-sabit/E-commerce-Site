import React from "react";
import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <div className="text-[12px] md:text-sm lg:text-[16px]">
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
  );
};

export default AccountSidebar;
