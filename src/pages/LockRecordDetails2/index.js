import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Layout } from "../../components";
import ListItem from "../../components/listItem";
import { shortAddress } from "../../web3/helpers";
// import { FiChevronRight } from "react-icons/fi";
import { Collapse } from "@mui/material";
import Timer from "./Timer";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";
import Web3 from "web3";
import {
  rpcObj,
  tokenLockLauncherAbi,
  tokenLocklauncherAdd,
} from "../../config";
const LockRecordDetails2 = () => {
  const { chainId } = useWeb3React();
  const [state, setState] = useState();

  const { params } = useParams();
  const splittedParams = params.split("=");
  const web3 = new Web3(
    new Web3.providers.HttpProvider(`${rpcObj[`${splittedParams[1]}`]}`)
  );
  const contract = new web3.eth.Contract(
    tokenLockLauncherAbi,
    tokenLocklauncherAdd[`${splittedParams[1]}`]
  );

  useEffect(() => {
    const abc = async () => {
      const tx1 = await contract.methods.getArray().call();

      const filteredArray = tx1.filter(
        (item) => item._contract == splittedParams[0]
      );
      console.log("data in array", filteredArray);
      setState(filteredArray[0]);
    };
    abc();
  }, []);

  const [show, setShow] = useState(false);
  const head = ["Unlock #", "Time (UTC)", "Unlocked tokens"];
  const data = [
    {
      id: 1,
      time: "2023.02.06 23:42",
      token: "8,000 (10%)",
    },
    {
      id: 2,
      time: "2023.02.06 23:42",
      token: "8,000 (10%)",
    },
  ];

  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  function dateFormat(string) {
    var day = new Date(string).getDay();
    var date = new Date(string).getUTCDate();
    var month = new Date(string).getUTCMonth() + 1;
    var _year1 = new Date(string).getUTCFullYear();
    var hours = new Date(string).getUTCHours();
    var formatedHours = hours / 10 > 1 ? `${hours}` : `0${hours}`;
    var minutes = new Date(string).getUTCMinutes();
    var formatedMinutes = minutes / 10 > 1 ? `${minutes}` : `0${minutes}`;

    return `${days[day]} ${date}:${month}:${_year1}  UTC ${formatedHours}:${formatedMinutes}`;
  }

  return (
    <Layout>
      {state && (
        <div className=" px-6 mt-28  mb-20 ">
          <div className="bg-white dark:bg-dark-400 border dark:border-lightDark  p-6 rounded-md shadow grid grid-cols-1  mb-6">
            <p className=" font-semibold text-lg text-center text-primary-400 ">
              Unlock In
            </p>
            <Timer start={state && state.time / 1000} />
          </div>{" "}
          <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  ">
            <p className="p-4  border-b dark:border-lightDark">Token Info</p>
            <div className="p-4">
              <div className="grid gap-y-4 mt-4">
                <ListItem
                  linkable={true}
                  refA={
                    chainId == "97"
                      ? `https://testnet.bscscan.com/token/${
                          state && state.token
                        }`
                      : `https://goerli.etherscan.io/token/${
                          state && state.token
                        }`
                  }
                  title={"Token Address"}
                  desc={shortAddress(state && state.token)}
                  color={"primary"}
                />{" "}
                <ListItem
                  title={"Token Name"}
                  desc={`${state && state.name}`}
                />
                <ListItem
                  title={"Token Symbol"}
                  desc={`${state && state.symbol}`}
                />
                {/* <ListItem title={"Token Decimal"} desc={"18"} /> */}
              </div>
            </div>
          </div>{" "}
          <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  mt-7">
            <p className="p-4  border-b dark:border-lightDark">Lock Info</p>
            <div className="p-4">
              <div className="grid gap-y-4 mt-4">
                <ListItem
                  title={"Total Amount Locked"}
                  // desc={`${formatEther(state.amount)} ${state.symbol}`}
                  color={"primary"}
                />{" "}
                {/* <ListItem title={"Total Values Locked"} desc={`0`} /> */}
                <ListItem title={"Owner"} desc={shortAddress(state.user)} />
                <ListItem
                  title={"Lock Date"}
                  desc={
                    state.now
                      ? dateFormat(state.now * 1000)
                      : dateFormat(state.time * 1000)
                  }
                />{" "}
                <ListItem
                  title={"Unlock Date"}
                  desc={dateFormat(state.time * 1000)}
                />
                {/* <div className="text-xs sm:text-sm flex justify-between pb-2 items-center border-b border-lightDark">
              <p className=" ">{"Vesting Info"}</p>
              <button
                onClick={() => setShow(!show)}
                className={`font-semibold  text-xl`}
              >
                <FiChevronRight />
              </button>
            </div> */}
                <div>
                  <Collapse in={show}>
                    <table className="w-full">
                      <thead>
                        <tr>
                          {head.map((val, i) => (
                            <th key={i} className={`${"text-center"} text-sm`}>
                              {val}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((vest, index) => (
                          <tr key={index} className="text-center">
                            <td className="py-4">
                              <p>{vest.id}</p>
                            </td>{" "}
                            <td className="py-4">
                              <p>{vest.time}</p>
                            </td>{" "}
                            <td className="py-4">
                              <p>{vest.token}</p>
                            </td>{" "}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </Layout>
  );
};

export default LockRecordDetails2;
