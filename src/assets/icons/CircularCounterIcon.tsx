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
      className={`w-4 h-4 bg-red-900 flex justify-center items-center text-[12px] text-white rounded-full ${className}`}
    >
      {count}
    </div>
  );
};

export default CircularCounterIcon;
