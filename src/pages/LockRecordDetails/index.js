import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../../components";
import ListItem from "../../components/listItem";
import { shortAddress } from "../../helpers";
// import { FiChevronRight } from "react-icons/fi";
import { Collapse } from "@mui/material";
import Timer from "./Timer";
const LockRecordDetails = () => {
  const { state } = useLocation();
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
  return (
    <Layout>
      <div className=" px-6 mt-28  mb-20 ">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark  p-6 rounded-md shadow grid grid-cols-1  mb-6">
          <p className=" font-semibold text-lg text-center text-primary-400 ">
            Unlock In
          </p>
          <Timer />
        </div>{" "}
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  ">
          <p className="p-4  border-b dark:border-lightDark">Token Info</p>
          <div className="p-4">
            <div className="grid gap-y-4 mt-4">
              <ListItem
                title={"Token Address"}
                desc={shortAddress(state.token)}
                color={"primary"}
              />{" "}
              <ListItem title={"Token Name"} desc={`${state.name}`} />
              <ListItem title={"Token Symbol"} desc={`${state.symbol}`} />
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
                desc={"55,555 MOONDAY"}
                color={"primary"}
              />{" "}
              <ListItem title={"Total Values Locked"} desc={`0`} />
              <ListItem
                title={"Owner"}
                desc={shortAddress(
                  "0x09b754BA0f822a3C02733cbF691C65fa9a996Bdc"
                )}
              />
              <ListItem title={"Lock Date"} desc={"2023.02.06 08:43 UTC"} />{" "}
              <ListItem
                title={"Unlock Date"}
                desc={"2025.02.06 07:47 UTC (in 2 years)"}
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
    </Layout>
  );
};

export default LockRecordDetails;
