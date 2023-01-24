import React, { useEffect,useState } from 'react'




export default function DailyTimer({start}) {

    const [seconds, setSeconds] = useState(60);

    const stakeTime = Number(start);
    var currentTimeinSeconds = new Date().getTime() / 1000
    var differenceTimeinSeconds = Math.trunc(stakeTime - currentTimeinSeconds)


    var DaysRemaining = Math.trunc((differenceTimeinSeconds /60 /60/24))
    var HoursRemaining = Math.trunc((differenceTimeinSeconds /60 /60)-(DaysRemaining*24))
    var MinutesRemaining = Math.trunc((differenceTimeinSeconds /60 )-(DaysRemaining*24*60)-(HoursRemaining*60))
    var SecondsRemaining = Math.trunc((differenceTimeinSeconds )-(DaysRemaining*24*60*60)-(HoursRemaining*60*60)-(MinutesRemaining*60))



    useEffect(() => {
        let interval = null;
        
          interval = setInterval(() => {
            setSeconds(seconds + 1);
            
          }, 1000);

        


         return () => clearInterval(interval);
      }, [ seconds]);


//    console.log("date",differenceTimeinSeconds)
    return (

            <div
            >
            {differenceTimeinSeconds > 0 ? <div>
              Sale Starts In:
            <span className="custom">{DaysRemaining} : </span>
            <span>{HoursRemaining} :     </span>
            <span>{MinutesRemaining} :     </span>
            <span>{SecondsRemaining}     </span>
            </div>:
            <span></span>
            }
        </div>

    )
}
