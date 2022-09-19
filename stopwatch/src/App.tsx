import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

export function App() {
  const [timerOn, setTimerOn] = useState(false);
  const [timerValue, setTimerValue] = useState<{
    seconds: number;
    minutes: number;
    hours: number;
  }>({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  var ss = timerValue.seconds;
  var mm = timerValue.minutes;
  var hh = timerValue.hours;

  useEffect(() => {
    var timerInterval: any = null;

    if (timerOn) {
      timerInterval = setInterval(() => {
        ss++;

        if (ss > 59) {
          ss = 0;
          mm++;
        }

        if (mm > 59) {
          mm = 0;
          hh++;
        }

        setTimerValue({ seconds: ss, minutes: mm, hours: hh });
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [timerOn]);

  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 flex flex-col items-center gap-8 sm:gap-16">
      <h1 className="timer-value">
        <span>{String(timerValue.hours).padStart(2, "0")}</span>:
        <span>{String(timerValue.minutes).padStart(2, "0")}</span>:
        <span>{String(timerValue.seconds).padStart(2, "0")}</span>
      </h1>
      <div className="flex gap-8 sm:gap-16 items-center">
        <span className="w-40"></span>

        <Button
          handleClick={() => {
            setTimerOn(!timerOn);
          }}
          customClass="h-60 w-60 bg-[#708AF4] hover:bg-[#5978f3] active:bg-[#708AF4]"
        >
          {!timerOn ? (
            <BsFillPlayFill size={"5em"} />
          ) : (
            <BsFillPauseFill size={"5em"} />
          )}
        </Button>

        <Button
          customClass="h-40 w-40 bg-red-500 hover:bg-red-600 active:bg-red-900"
          handleClick={() => {
            setTimerOn(false);
            setTimerValue({ seconds: 0, minutes: 0, hours: 0 });
          }}
        >
          <BsFillTrashFill size={"2em"} />
        </Button>
      </div>
    </div>
  );
}
