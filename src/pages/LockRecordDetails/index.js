import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import ListItem from "../../components/listItem";
import { shortAddress } from "../../helpers";
import { FiChevronRight } from "react-icons/fi";
import { Collapse } from "@mui/material";
const LockRecordDetails = () => {
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
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  ">
          <p className="p-4  border-b dark:border-lightDark">Token Info</p>
          <div className="p-4">
            <div className="grid gap-y-4 mt-4">
              <ListItem
                title={"Token Address"}
                desc={shortAddress(
                  "0xc0d3d6602E183f433bf44675B85Aeb5483361755"
                )}
                color={"primary"}
              />{" "}
              <ListItem title={"Token Name"} desc={"QJI"} />
              <ListItem title={"Token Symbol"} desc={"QJI"} />
              <ListItem title={"Token Decimal"} desc={"18"} />
            </div>
          </div>
        </div>{" "}
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  mt-7">
          <p className="p-4  border-b dark:border-lightDark">Lock Info</p>
          <div className="p-4">
            <div className="grid gap-y-4 mt-4">
              <ListItem
                title={"Token Address"}
                desc={shortAddress(
                  "0xc0d3d6602E183f433bf44675B85Aeb5483361755"
                )}
                color={"primary"}
              />{" "}
              <ListItem title={"Token Name"} desc={"QJI"} />
              <ListItem title={"Token Symbol"} desc={"QJI"} />
              <ListItem title={"Token Decimal"} desc={"18"} />
              <div className="text-xs sm:text-sm flex justify-between pb-2 items-center border-b border-lightDark">
                <p className=" ">{"Vesting Info"}</p>
                <button
                  onClick={() => setShow(!show)}
                  className={`font-semibold  text-xl`}
                >
                  <FiChevronRight />
                </button>
              </div>
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
