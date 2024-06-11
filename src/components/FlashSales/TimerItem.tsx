import React from "react";

type timerItemProps = {
  title: string;
  time: number;
  isLastItem?: boolean;
};

const TimerItem: React.FC<timerItemProps> = ({ title, time, isLastItem }) => {
  return (
    <div>
      <p className="w-fit text-center text-[8px] md:text-[10px] lg:text-[12px] font-semibold leading-[4px] md:leading-[10px] lg:leading-3">
        {title}
      </p>
      <h1 className="w-fit text-center text-[16px] md:text-2xl lg:text-3xl font-bold flex">
        {time}
        {!isLastItem && (
          <p className="text-red-900 ml-1 sm:ml-2 md:ml-3 font-medium">:</p>
        )}
      </h1>
    </div>
  );
};

export default TimerItem;
