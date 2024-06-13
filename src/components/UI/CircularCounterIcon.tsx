import React from "react";

type circularCounterIconProps = {
  className?: string;
  count: number;
};

const CircularCounterIcon: React.FC<circularCounterIconProps> = ({
  className,
  count,
}) => {
  return (
    <div
      className={`w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] bg-red-900 flex justify-center items-center text-[8px] sm:text-[10px] text-white-900 rounded-full ${className}`}
    >
      {count}
    </div>
  );
};

export default CircularCounterIcon;
