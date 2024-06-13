import React from "react";
import { RiHomeGearFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiSolidGift } from "react-icons/bi";
import { PiMoneyWavyFill } from "react-icons/pi";
import PageStatesItem from "./PageStatesItem";

const PageStats = () => {
  return (
    <div className="flex flex-wrap gap-1 xs:gap-2 md:gap-2 w-full justify-between mx-auto ">
      <PageStatesItem text="Active sellers on our site" value={10.5}>
        <RiHomeGearFill className="text-2xl md:text-3xl duration-300" />
      </PageStatesItem>

      <PageStatesItem text="Active sellers on our site" value={10.5}>
        <RiMoneyDollarCircleFill className="text-2xl md:text-3xl duration-300" />
      </PageStatesItem>

      <PageStatesItem text="Active sellers on our site" value={10.5}>
        <BiSolidGift className="text-2xl md:text-3xl duration-300" />
      </PageStatesItem>

      <PageStatesItem text="Active sellers on our site" value={10.5}>
        <PiMoneyWavyFill className="text-2xl md:text-3xl duration-300" />
      </PageStatesItem>
    </div>
  );
};

export default PageStats;
