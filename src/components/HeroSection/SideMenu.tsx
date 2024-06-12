import React from "react";
import { NavLink } from "react-router-dom";
import NextIcon from "../../assets/images/next-icon.png";

const SideMenu = () => {
  return (
    <aside className="w-full md:w-[21%] pt-4 sm:pt-6 md:pt-8 lg:pt-10 text-[12px]">
      <div className="xs:hidden flex justify-around">
        <ul className="h-full flex flex-col justify-between gap-1 ">
          <li>
            <NavLink
              to="#"
              className="flex items-center justify-between sm:pr-4 md:pr-6 xl:pr-8"
            >
              Women's Fashion
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="#"
              className="flex items-center justify-between pr-2 sm:pr-4 md:pr-6 xl:pr-8 "
            >
              Men's Fashion
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

        <div className="w-[1px] h-[100px] bg-slate-400"></div>

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
      </div>

      <div className="hidden xs:flex md:hidden justify-around">
        <ul className="h-full flex flex-col justify-between gap-1 ">
          <li>
            <NavLink
              to="#"
              className="flex items-center justify-between sm:pr-4 md:pr-6 xl:pr-8"
            >
              Women's Fashion
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="#"
              className="flex items-center justify-between pr-2 sm:pr-4 md:pr-6 xl:pr-8 "
            >
              Men's Fashion
            </NavLink>
          </li>
          <li>
            <NavLink to="#">Electronics</NavLink>
          </li>
        </ul>

        <div className="w-[1px] h-[60px] bg-slate-400"></div>

        <ul className="h-full flex flex-col justify-between gap-1">
          <li>
            <NavLink to="#">Home & Lifestyle</NavLink>
          </li>
          <li>
            <NavLink to="#">Medicine</NavLink>
          </li>
          <li>
            <NavLink to="#">Sports & Outdoor</NavLink>
          </li>
        </ul>

        <div className="w-[1px] h-[60px] bg-slate-400"></div>

        <ul className="h-full flex flex-col justify-between gap-1">
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
      </div>

      <div className="h-full hidden md:flex flex-col text-[12px] lg:text-sm xl:text-base border-r">
        <ul className="h-full flex flex-col justify-between gap-1">
          <li>
            <NavLink
              to="#"
              className="flex items-center justify-between pr-3 lg:pr-[15%]"
            >
              <p>Women's Fashion</p>
              <div className="w-[10px] lg:w-[12px]">
                <img src={NextIcon} alt="" />
              </div>
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to="#"
              className="flex items-center justify-between  pr-3 lg:pr-[15%]"
            >
              <p>Men's Fashion</p>
              <div className="w-[10px] lg:w-[12px]">
                <img src={NextIcon} alt="" />
              </div>
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
      </div>
    </aside>
  );
};

export default SideMenu;
