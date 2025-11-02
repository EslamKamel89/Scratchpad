import { useEffect, useRef, useState } from "react";
import Header from "./Timer/Header";
import RemainingTime from "./Timer/RemainingTime";
import ResumePauseButton from "./Timer/ResumePauseButton";
import StartStopButton from "./Timer/StartStopButton";
import TimerContainer from "./Timer/TimerContainer";

const Timer = () => {
  const timer = useRef<number>(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const toggleStart = () => {
    setIsStarted((prevState) => {
      const newState = !prevState;
      setIsRunning(newState);
      return newState;
    });
  };
  const toggleRunning = () => {
    if (isRunning && !isStarted) {
      throw new DOMException(
        "You can't have both the isRunning = true and isStarted = false",
      );
    }
    setIsRunning(!isRunning);
  };
  useEffect(() => {
    if (!isRunning) {
      if (timer.current) clearInterval(timer.current);
    } else {
      timer.current = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [isRunning]);
  useEffect(() => {
    setTime(0);
  }, [isStarted]);
  return (
    <TimerContainer>
      <Header />
      <RemainingTime time={time} />
      <div className="flex flex-col gap-3 sm:flex-row">
        {isStarted && (
          <ResumePauseButton
            onClick={() => toggleRunning()}
            isRunning={isRunning}
          />
        )}
        <StartStopButton onClick={() => toggleStart()} isStarted={isStarted} />
      </div>
    </TimerContainer>
  );
};

export default Timer;
