import TimerItem from "./TimerItem";
import useTimer from "../../hooks/useTimer";

const Timer = () => {
  const { timeLeft, days, hours, minutes, seconds } = useTimer({
    timerDays: 1,
  });

  return (
    <>
      {timeLeft > 0 ? (
        <div className="flex gap-1 sm:gap-2 md:gap-3 items-end self-center mb-[-4px] sm:mb-0">
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
