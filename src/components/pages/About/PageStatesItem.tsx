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
      className="border-2 flex flex-col gap-3 items-center p-6 rounded hover:bg-red-900 duration-300 "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span
        className={`text-[20px] xs:text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px]  rounded-full p-2 duration-300 outline outline-8 ${
          isHovered
            ? "bg-white-900 text-black-900 outline-slate-200"
            : "text-white-900 bg-black-900 outline-slate-300"
        }`}
      >
        {children}
      </span>
      <p
        className={`font-bold text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] ${
          isHovered && "text-white-900"
        }`}
      >
        {value}K
      </p>
      <p
        className={`text-[8px] text-nowrap xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold ${
          isHovered && "text-white-900"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default PageStatesItem;
