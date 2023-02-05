import React, { useEffect, useState } from "react";
import * as dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { convertLength } from "@mui/material/styles/cssUtils";
dayjs.extend(utc);
dayjs.extend(customParseFormat);
const Timer = ({start}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //   console.log("TIME", dayjs(Date.now()).utc().format());

  const difference = start*1000 - new Date().getTime()
    // +dayjs.utc(`${Date.parse(start*1000)}`, "YYYY-MM-DDTHH:mm:ss.000ZZ") -
    // +Date.now();
  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

//  console.log("time",difference)

  const timeList = [
    {
      title: "Days",
      time: days,
    },
    {
      title: "Hours",
      time: hours,
    },
    {
      title: "Min",
      time: minutes,
    },
    {
      title: "Sec",
      time: seconds,
    },
  ];
  return (
    <div className=" grid grid-flow-col mt-4 gap-x-4 px-10 justify-center">
      {timeList.map((val, i) => (
        <div
          key={i}
          className="text-center dark:bg-dark-700 py-1.5 w-12 sm:w-16"
        >
          <p className=" text-xl md:text-3xl font-bold">
            {String(val.time).padStart(2, 0)}
          </p>
          <p className="font-bold text-xs sm:text-base text-gray-600">
            {val.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timer;
