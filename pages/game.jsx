/* eslint-disable react-hooks/exhaustive-deps */
import { ClipLoader } from "react-spinners";
import React from "react";
import { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Loadingcomp from "./components/loading-componnet";
export default function Game(){
  // Set the target date and time
  const targetDate = new Date('2060-12-31T23:59:59'); 


  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = targetDate - currentTime;

    if (timeDifference <= 0) {
      return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = Math.floor(timeDifference / 1000) % 60;
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    return { years, months, days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
 const [Loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    }, 3000)
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

    
    return(
        <div suppressHydrationWarning={true}>
            <div suppressHydrationWarning={true} className="flex  relative flex-col w-full h-screen pt-[10rem] items-center gap-4">
                <div suppressHydrationWarning={true}>
                  <div className="text-white flex items-center gap-2">
                    <p className="text-[42px] font-bold">{timeRemaining.years}</p>
                    <p className="mt-3 font-bold">YRS</p>
                </div>

                <div suppressHydrationWarning={true} className="text-white flex items-center gap-2">
                    <p className="text-[42px] font-bold">{timeRemaining.hours}</p>
                    <p className="mt-3 font-bold">HRS</p>
                </div>

                <div suppressHydrationWarning={true} className="text-white flex items-center gap-2">
                    <p className="text-[42px] font-bold">{timeRemaining.minutes}</p>
                    <p className="mt-3 font-bold">MIN</p>
                </div>

                <div suppressHydrationWarning={true} className="text-white flex items-center gap-2">
                    <p className="text-[42px] font-bold">{timeRemaining.seconds}</p>
                    <p className="mt-3 font-bold">SEC</p>
                </div>
                </div>
               

            </div>
        </div>
    )
}