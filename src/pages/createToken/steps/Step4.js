import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../../../components/listItem";
import StepWrap from "../components/StepWrap";

const Step4 = ({
  increaseStep,
  decreaseStep,
  hardCap,
  decimals,
  symbol,
  price,
  listingRate,
  SoftCap,
  Min,
  Max,
  liquidity,
  IDOEnd,
  liquidityLock,
  website,
  facebook,
  twitter,
  telegram,
  github,
  instagram,
  redit,
  name,
  noOfToken,
  iDOstart,
  createPool,
  description,
}) => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  // function dateFormat(stringA) {
  //   var string = Date.parse(stringA);
  //   var day = new Date(string).getDay();
  //   var date = new Date(string).getUTCDate();
  //   var month = new Date(string).getUTCMonth() + 1;
  //   var _year1 = new Date(string).getUTCFullYear();
  //   var hours = new Date(string).getUTCHours();
  //   var formatedHours = hours / 10 > 1 ? `${hours}` : `0${hours}`;
  //   var minutes = new Date(string).getUTCMinutes();
  //   var formatedMinutes = minutes / 10 > 1 ? `${minutes}` : `0${minutes}`;

  //   return `${days[day]} ${date}:${month}:${_year1}  UTC ${formatedHours}:${formatedMinutes}`;
  // }
  const dateFormat = (string) => {
    return dayjs(string).format("YYYY-MM-DD, HH:mm:ss");
  };

  const detailList1 = [
    {
      title: "Total token",
      desc: `${noOfToken} ${symbol}`,
      color: "primary",
    },
    {
      title: "Decimal",
      desc: decimals,
    },
    {
      title: "Token symbol",
      desc: symbol,
    },
    {
      title: "Token decimals",
      desc: decimals,
    },

    {
      title: "Presale rate",
      desc: `${price} ${symbol}`,
    },
    {
      title: "Listing rate",
      desc: `${listingRate} ${symbol}`,
    },

    {
      title: "Sale method",
      desc: "Public",
    },
    {
      title: "Softcap",
      desc: `${SoftCap} ${symbol}`,
    },
    {
      title: "Hardcap",
      desc: `${hardCap} ${symbol}`,
    },
    {
      title: "Minimum buy",
      desc: `${Min} ${symbol}`,
    },
    {
      title: "Maximum buy",
      desc: `${Max} ${symbol}`,
    },
    {
      title: "Liquidity",
      desc: `${liquidity} ${symbol}`,
    },
  ];

  const detailList2 = [
    {
      title: "Token name",
      desc: name,
    },
    {
      title: "Start time",
      desc: dateFormat(iDOstart),
    },

    {
      title: "End time",
      desc: dateFormat(IDOEnd),
    },
    {
      title: "Liquidity lockup time",
      desc: liquidityLock,
    },
    {
      title: "Website",
      desc: website,
    },
    {
      title: "Facebook",
      desc: facebook,
    },
    {
      title: "Twitter",
      desc: twitter,
    },
    {
      title: "Telegram",
      desc: telegram,
    },
    {
      title: "Github",
      desc: github,
    },
    {
      title: "Instagram",
      desc: instagram,
    },
    {
      title: "Reddit",
      desc: redit,
    },
    {
      title: "Using Team Vesting?",
      desc: "No",
    },
  ];

  return (
    <StepWrap>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid gap-y-4">
          {detailList1.map((val, i) => (
            <React.Fragment key={i}>
              <ListItem title={val.title} desc={val.desc} color={val.color} />
            </React.Fragment>
          ))}
        </div>
        <div className="grid gap-y-4">
          {detailList2.map((val, i) => (
            <React.Fragment key={i}>
              <ListItem title={val.title} desc={val.desc} color={val.color} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="text-sm mt-10 flex justify-between pb-2 items-center border-b border-lightDark">
        <p className=" ">Description</p>
      </div>
      <p className="text-gray-400 text-xs sm:text-sm mt-2">{description}</p>
      <div className="grid grid-flow-col gap-x-8 mt-10 justify-center items-center">
        <button
          onClick={decreaseStep}
          className=" bg-transparent border border-primary-400 py-2 px-8 rounded-md  font-semibold "
        >
          BACK
        </button>

        <button
          onClick={createPool}
          className=" bg-primary-400 border border-primary-400  py-2 px-8 rounded-md  font-semibold "
        >
          NEXT
        </button>
      </div>
    </StepWrap>
  );
};

export default Step4;
