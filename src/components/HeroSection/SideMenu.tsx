import React from "react";
import { NavLink } from "react-router-dom";
import NextIcon from "../../assets/images/next-icon.png";

const SideMenu = () => {
  return (
    <aside className="w-full lg:w-[21%] flex justify-around pt-4 sm:pt-6 md:pt-8 lg:pt-10 border-r text-[12px]">
      <ul className="h-full flex flex-col justify-between gap-1">
        <li>
          <NavLink
            to="#"
            className="flex items-center justify-between sm:pr-4 md:pr-6 xl:pr-8"
          >
            <p>Women's Fashion</p>
            <img src={NextIcon} alt="" className="w-3 h-3 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="flex items-center justify-between pr-2 sm:pr-4 md:pr-6 xl:pr-8"
          >
            <p>Men's Fashion</p>
            <img src={NextIcon} alt="" className="w-3 h-3 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="#">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="#">Home & Lifestyle</NavLink>
        </li>
        <li>
          <NavLink to="#">Medicine</NavLink>
        </li>
      </ul>

      <ul className="h-full flex flex-col justify-between gap-1">
        <li>
          <NavLink to="#">Sports & Outdoor</NavLink>
        </li>
        <li>
          <NavLink to="#">Baby’s & Toys</NavLink>
        </li>
        <li>
          <NavLink to="#">Groceries & Pets</NavLink>
        </li>
        <li>
          <NavLink to="#">Health & Beauty</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
