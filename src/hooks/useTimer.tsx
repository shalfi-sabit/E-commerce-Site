import { useEffect, useState } from "react";
import getFormattedTime from "../utils/getFormattedTime";

type useTimerProps = { timerDays: number };

const useTimer = ({ timerDays }: useTimerProps) => {
  const currentTime = new Date().getTime();
  const deadlineTime = currentTime + timerDays * 24 * 60 * 60 * 1000;

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
  return { timeLeft, days, hours, minutes, seconds };
};

export default useTimer;
