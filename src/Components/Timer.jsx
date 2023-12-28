import { useState, useEffect } from "react";
export const Timer = () => {
  let [days, setDays] = useState(1);
  let [hours, setHours] = useState(12);
  let [minutes, setMinutes] = useState(32);
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    const countdown = async () => {
      await sleep(60000);
      if (minutes > 0) {
        setMinutes(minutes - 1);
      } else {
        if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
        } else {
          if (days > 0) {
            setDays(days - 1);
            setHours(23);
            setMinutes(59);
          }
        }
      }
    };

    countdown();
  }, [days, hours, minutes]);
  return (
    <div className="flex justify-evenly mt-12">
      <div className=" text-[#f7ac28] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">{days}</h1>
        <p className="text-xl">Days</p>
      </div>
      <div className=" text-[#e42d20] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">{hours}</h1>
        <p className="text-xl">Hours</p>
      </div>
      <div className=" text-[#42b030] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">{minutes}</h1>
        <p className="text-xl">minutes</p>
      </div>
    </div>
  );
};
