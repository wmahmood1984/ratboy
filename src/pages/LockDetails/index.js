import { formatEther } from "ethers/lib/utils";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "../../components";
import ListItem from "../../components/listItem";
import { shortAddress } from "../../helpers";

const LockDetails = () => {
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
    console.log("string",day)
    return `${days[day]} ${date}:${month}:${_year1}  UTC ${formatedHours}:${formatedMinutes}`
  }


  const {state} = useLocation()
  const tableHead = [
    "Wallet",
    "Amount",
    // "Cycle(d)",
    // "Cycle Release(%)",
    // "TGE(%)",
    "Unlock time(UTC)",
    "",
  ];
  const lockList = [
    {
      wallet: `${state.user}`,
      amount: `${formatEther(state.amount)}`,
      cycle: "729",
      cycleRealese: "1",
      tge: "10",
      unlock: `${dateFormat(Number(state.time))}`,
    },
  ];

  console.log("stat",state)

  return (
    <Layout>
      <div className=" px-6 mt-28  mb-20 ">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  ">
          <p className="p-4  border-b dark:border-lightDark">Lock Info</p>
          <div className="p-4">
            <div className="grid gap-y-4 mt-4">
              <ListItem title={" Current Locked Amount"} desc={`${formatEther(state.amount)} ${state.symbol} `} />
              {/* <ListItem title={"Current Values Locked"} desc={"$0"} />{" "} */}
              <ListItem
                title={"Token Address"}
                desc={shortAddress(
                  state.token
                )}
                color={"primary"}
              />{" "}
              <ListItem title={"Token Name"} desc={`${state.name}`} />
              <ListItem title={"Token Symbol"} desc={`${state.name}`} />
              {/* <ListItem title={"Token Decimal"} desc={"18"} /> */}
            </div>
          </div>
        </div>{" "}
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  mt-7 ">
          <p className="p-4  border-b dark:border-lightDark">Lock records</p>
          <div className="p-4 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  {tableHead.map((val, i) => (
                    <th key={i} className={`${"text-left"} text-sm`}>
                      {val}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lockList.map((token, index) => (
                  <tr key={index} className=" border-b dark:border-lightDark ">
                    <td className="py-4">
                      <p>{shortAddress(token.wallet)}</p>
                    </td>{" "}
                    <td className="py-4 ">{token.amount}</td>
                    {/* <td className="py-4 ">{token.cycle}</td>
                    <td className="py-4 ">{token.cycleRealese}</td>
                    <td className="py-4 ">{token.tge}</td> */}
                    <td className="py-4 ">{token.unlock}</td>
                    <td className="py-4 text-right">
                      <Link
                        to="/token_list/lock_record"
                        state={state}
                        className="text-primary-400"
                      >
                        View
                      </Link>
                    </td>{" "}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LockDetails;
