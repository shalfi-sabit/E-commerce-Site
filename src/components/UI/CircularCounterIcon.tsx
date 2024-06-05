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
      className={`w-3 h-3 sm:w-4 sm:h-4 bg-red-900 flex justify-center items-center text-[10px] sm:text-[12px] text-white-900 rounded-full ${className}`}
    >
      {count}
    </div>
  );
};

export default CircularCounterIcon;
