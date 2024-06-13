import React from "react";
import { RiHomeGearFill } from "react-icons/ri";
import { RiHomeGearLine } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiSolidGift } from "react-icons/bi";
import { HiOutlineGift } from "react-icons/hi";
import { PiMoneyWavyFill } from "react-icons/pi";
import { PiMoneyWavyLight } from "react-icons/pi";
import PageStatesItem from "./PageStatesItem";

const PageStats = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[50%] gap-4 lg:w-full justify-between my-8 md:my-20 mx-auto ">
      <PageStatesItem text="Active sellers on our site" value={10.5}>
        <RiHomeGearFill className="duration-300" />
      </PageStatesItem>

      <PageStatesItem text="Active sellers on our site" value={10.5}>
        <RiMoneyDollarCircleFill className="duration-300" />
      </PageStatesItem>

      <PageStatesItem text="Active sellers on our site" value={10.5}>
        <BiSolidGift className="duration-300" />
      </PageStatesItem>

      <PageStatesItem text="Active sellers on our site" value={10.5}>
        <PiMoneyWavyFill className="duration-300" />
      </PageStatesItem>
    </div>
  );
};

export default PageStats;
