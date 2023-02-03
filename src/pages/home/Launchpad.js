import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import React from "react";
import { Link } from "react-router-dom";
import UserImage from "../../assets/user.png";
import DailyTimer from "../../components/DailyTimer";
import Tag from "../../components/tag";
const Launchpad = ({ data, keyA, subData }) => {
  var now = new Date().getTime() / 1000;

  //  console.log("data in Launchpad",now < data[4][6], now > data[4][7])

  return (
    <div className="bg-white dark:bg-dark-400 border dark:border-lightDark p-4 sm:p-6 rounded-md shadow">
      <div className="flex justify-between items-center border-b border-lightDark pb-4 ">
        <div className="grid sm:grid-flow-col sm:justify-start gap-x-2 sm:gap-x-4 items-center w-full sm:w-auto">
          <div className="flex sm:block justify-between w-full sm:w-auto">
            <div>
              <img src={UserImage} alt="" />
            </div>
            <div className="sm:hidden">
              {" "}
              {/* <Tag upcoming={now < data[4][6]} end={now > data[4][7]} /> */}
              <div
                className={`${now < data[4][6] ? 
                  "text-yellow-400  bg-yellow-400" : 
                  now > data[4][7] ? " text-red-400  bg-red-400 " : "text-green-400  bg-green-400"
                }  bg-opacity-30 text-yellow max-w-max p-0.5 sm:py-2 mt-2 sm:px-4 ml-auto rounded-md text-xs sm:text-sm`}
              >
                <p className=" uppercase flex flex-nowrap">
                  {" "}
                  <p className="block">•</p>&nbsp;{" "}
                  <p>{now < data[4][6] ? "upComing" : now > data[4][7] ? "Ended" : "Live"}</p>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <p className="font-medium">{data[3][0]}</p>
            <p className=" text-violet-400 text-sm">
              1 {window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"} =
              {1 / formatEther(data[4][1])} {data[3][1]}
            </p>
            <div className="sm:hidden">
              <p>
                <DailyTimer start={data[4][6]} />
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <p>
            <DailyTimer start={data[4][6]} />
          </p>
          <div
                className={`${now < data[4][6] ? 
                  "text-yellow-400  bg-yellow-400" : 
                  now > data[4][7] ? " text-red-400  bg-red-400 " : "text-green-400  bg-green-400"
                }  bg-opacity-30 text-yellow max-w-max p-0.5 sm:py-2 mt-2 sm:px-4 ml-auto rounded-md text-xs sm:text-sm`}
              >
                <p className=" uppercase flex flex-nowrap">
                  {" "}
                  <p className="block">•</p>&nbsp;{" "}
                  <p>{now < data[4][6] ? "upComing" : now > data[4][7] ? "Ended" : "Live"}</p>
                </p>
              </div>
        </div>
      </div>
      <div className="text-sm sm:text-base font-bold flex justify-between items-center mt-4">
        <p>Soft/Hard Cap:</p>
        <p className=" text-primary-400">
          {formatEther(data[4][2])} {data[3][1]} - {formatEther(data[4][0])}{" "}
          {data[3][1]}
        </p>
      </div>
      <div className="font-bold flex justify-between items-center mt-4">
        <p>
          {Number(subData.investedBUSD / formatEther(data[4][0])).toFixed(3)}%
        </p>
        {/* <p className=" text-primary-400">60 BNB - 100 BNB</p> */}
      </div>
      <div className="mt-2">
        <ProgressBar
          complete={
            Number(subData.investedBUSD) / Number(formatEther(data[4][0]))
          }
        />
        <div className="font-bold flex justify-between items-center mt-1">
          <p>
            {subData.investedBUSD} {data[3][1]}
          </p>
          <p>
            {formatEther(data[4][0])} {data[3][1]}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center border-b border-lightDark mt-8 pb-2">
        <p className="font-bold">Liquidity %</p>
        <p>{data[4][8]}%</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="font-bold">Lockup Time </p>
        <p>365 Minutes </p>
      </div>

      <button className="bg-primary-400 px-14 mt-6 py-1.5 sm:py-3 mx-auto block rounded-md text-white">
        <Link to={"/preview"} state={{ Index: keyA }}>
          View Pool
        </Link>
      </button>
    </div>
  );
};

export default Launchpad;

const ProgressBar = ({ complete }) => (
  <div className="progressbar bg-gray-300 dark:bg-dark-600 rounded-md h-3 relative overflow-hidden">
    <div
      style={{ width: `${complete}` }}
      className="progress-inner absolute top-0 left-0 h-full bg-primary-400 w-1/2"
    ></div>
  </div>
);
