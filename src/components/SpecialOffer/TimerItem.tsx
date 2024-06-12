import React from "react";

type timerItemProps = {
  title: string;
  time: number | string;
  isLastItem?: boolean;
};

const TimerItem: React.FC<timerItemProps> = ({ time, isLastItem, title }) => {
  return (
    <div className="bg-white-900 rounded-full w-14 h-14">
      {/* <h1 className="text-center text-[14px] md:text-xl lg:text-2xl font-bold text-wrap">
        <p>{time}</p>
        <p className="text-[10px]">{title}</p>
      </h1> */}
    </div>
  );
};

export default TimerItem;
