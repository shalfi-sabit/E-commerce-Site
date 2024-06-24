import React from "react";
import { useMouseOver } from "../../../hooks/useMouseOver";

type pageStateItemProps = {
  children: React.ReactNode;
  value: number;
  text: string;
};

const PageStatesItem: React.FC<pageStateItemProps> = ({
  children,
  value,
  text,
}) => {
  const { isHovered, handleMouseOver, handleMouseOut } = useMouseOver();

  return (
    <div
      className="w-[49%] md:w-[24%] border-2 flex flex-col gap-3 md:gap-5 items-center p-6 rounded hover:bg-red-900 duration-300 "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span
        className={`text-[20px] xs:text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px]  rounded-full p-2 duration-300 outline outline-[6px] lg:outline-8 ${
          isHovered
            ? "bg-white-900 text-black-900 outline-slate-200"
            : "text-white-900 bg-black-900 outline-slate-300"
        }`}
      >
        {children}
      </span>

      <div className="text-center">
        <p
          className={`font-bold text-[16px] xs:text-[18px] md:text-[20px] lg:text-[28px] ${
            isHovered && "text-white-900"
          }`}
        >
          {value}K
        </p>
        <p
          className={`text-nowrap text-[10px] md:text-[12px] ${
            isHovered && "text-white-900"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default PageStatesItem;
