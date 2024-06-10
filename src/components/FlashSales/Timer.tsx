import React, { useEffect, useState } from "react";
import getFormattedTime from "../../utils/getFormattedTime";
import TimerItem from "./TimerItem";

const Timer = () => {
  const currentTime = new Date().getTime();
  const deadlineTime = currentTime + 7 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(deadlineTime - currentTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1000);

      if (timeLeft <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const { days, hours, minutes, seconds } = getFormattedTime(timeLeft);

  return (
    <>
      {timeLeft > 0 ? (
        <div className="flex gap-1 sm:gap-2 md:gap-3 items-end self-center mb-[-4px] sm:mb-0">
          <TimerItem title="Days" time={days} />
          <TimerItem title="Hours" time={hours} />
          <TimerItem title="Minutes" time={minutes} />
          <TimerItem title="Seconds" time={seconds} isLastItem={true} />
        </div>
      ) : (
        <p>Flash Sale Ended</p>
      )}
    </>
  );
};

export default Timer;
