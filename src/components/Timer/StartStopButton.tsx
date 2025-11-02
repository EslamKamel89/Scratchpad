import { CirclePlay, Square } from "lucide-react";
import { useEffect, useRef } from "react";

type StartStopButtonProps = {
  onClick: () => void;
  isStarted: boolean;
};
const StartStopButton = ({ onClick, isStarted }: StartStopButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    btnRef.current?.focus();
  }, []);
  return (
    <button
      ref={btnRef}
      onClick={onClick}
      type="button"
      className="btn-outline"
    >
      {!isStarted && <CirclePlay />}
      {isStarted && <Square />}
      <span>{isStarted ? "Stop " : " Start"}</span>
    </button>
  );
};

export default StartStopButton;
