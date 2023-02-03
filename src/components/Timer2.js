import React, { useEffect,useState } from 'react'




export default function DailyTimer2({start}) {

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

      const days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]

      function dateFormat(string){
        var day = new Date(string).getDay()
        var date = new Date(string).getUTCDate()
        var month = new Date(string).getUTCMonth()+1
        var _year1 = new Date(string).getUTCFullYear()
        var hours = new Date(string).getUTCHours()
        var formatedHours = hours/10>1? `${hours}` : `0${hours}`
        var minutes = new Date(string).getUTCMinutes()
        var formatedMinutes = minutes/10>1? `${hours}` : `0${hours}`
        
        return `${days[day]} ${date}:${month}:${_year1}  UTC ${formatedHours}:${formatedMinutes}`
      }


//    console.log("date",differenceTimeinSeconds)
    return (

      <div >
      {differenceTimeinSeconds>0 ? 
      <div className=" grid grid-flow-col mt-4 gap-x-4 px-10 justify-center">
        <h3 className=" text-center font-medium text-xl">Pre sale starts in</h3>
         <div  className="text-center dark:bg-dark-700 py-1.5 w-12 sm:w-16">
          <p className=" text-xl md:text-3xl font-bold">
            {String(DaysRemaining).padStart(2, 0)}
          </p>
          <p className="font-bold text-xs sm:text-base text-gray-600">
            Days
          </p>
        </div>
        <div  className="text-center dark:bg-dark-700 py-1.5 w-12 sm:w-16">
          <p className=" text-xl md:text-3xl font-bold">
            {String(HoursRemaining).padStart(2, 0)}
          </p>
          <p className="font-bold text-xs sm:text-base text-gray-600">
            Hours
          </p>
        </div>
        <div  className="text-center dark:bg-dark-700 py-1.5 w-12 sm:w-16">
          <p className=" text-xl md:text-3xl font-bold">
            {String(MinutesRemaining).padStart(2, 0)}
          </p>
          <p className="font-bold text-xs sm:text-base text-gray-600">
            Mins
          </p>
        </div>
        <div  className="text-center dark:bg-dark-700 py-1.5 w-12 sm:w-16">
          <p className=" text-xl md:text-3xl font-bold">
            {String(SecondsRemaining).padStart(2, 0)}
          </p>
          <p className="font-bold text-xs sm:text-base text-gray-600">
            Seconds
          </p>
        </div>
      </div>:
      
      <div>PreSale Started on: {dateFormat(start*1000)}</div>
    }
       
    
    </div>

    )
}
