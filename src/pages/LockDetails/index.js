import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import ListItem from "../../components/listItem";
import { shortAddress } from "../../helpers";

const LockDetails = () => {
  const tableHead = [
    "Wallet",
    "Amount",
    "Cycle(d)",
    "Cycle Release(%)",
    "TGE(%)",
    "Unlock time(UTC)",
    "",
  ];
  const lockList = [
    {
      wallet: "0xC216EeE5686c69075DC56D396d477C0922DF278e",
      amount: "80000",
      cycle: "729",
      cycleRealese: "1",
      tge: "10",
      unlock: "2023.02.06 23:42",
    },
  ];
  return (
    <Layout>
      <div className=" px-6 mt-28  mb-20 ">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  ">
          <p className="p-4  border-b dark:border-lightDark">Lock Info</p>
          <div className="p-4">
            <div className="grid gap-y-4 mt-4">
              <ListItem title={" Current Locked Amount"} desc={"80,000 QJT"} />
              <ListItem title={"Current Values Locked"} desc={"$0"} />{" "}
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
                    <td className="py-4 ">{token.cycle}</td>
                    <td className="py-4 ">{token.cycleRealese}</td>
                    <td className="py-4 ">{token.tge}</td>
                    <td className="py-4 ">{token.unlock}</td>
                    <td className="py-4 text-right">
                      <Link
                        to="/token_list/lock_record"
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
