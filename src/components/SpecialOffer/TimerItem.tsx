import React from "react";

type timerItemProps = {
  title: string;
  time: number | string;
  isLastItem?: boolean;
};

const TimerItem: React.FC<timerItemProps> = ({ time, isLastItem, title }) => {
  return (
    <div className="bg-white-900 rounded-full w-4 h-4 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] flex flex-col justify-center items-center">
      <p className="text-center text-[8px] xs:text-[12px] sm:text-[14px] lg:text-sm font-bold">
        {time}
      </p>
      <p className="hidden sm:block text-[8px] md:text-[10px] font-semibold">
        {title}
      </p>
    </div>
  );
};

export default TimerItem;
