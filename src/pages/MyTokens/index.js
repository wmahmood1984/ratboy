import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import { shortAddress } from "../../helpers";

const MyTokens = () => {
  const tokenList = [
    {
      name: "QJT",
      symbol: "QJT",
      image:
        "https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png",
      address: "0xC216EeE5686c69075DC56D396d477C0922DF278e",
    },
    {
      name: "QJT",
      symbol: "QJT",
      image:
        "https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png",
      address: "0xC216EeE5686c69075DC56D396d477C0922DF278e",
    },
  ];
  const tableHead = ["Name", "Symbol", "Address", ""];
  return (
    <Layout>
      <div className=" px-6 mt-28  mb-20 ">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark overflow-x-auto  rounded-md shadow grid grid-cols-1  p-6">
          <div>
            {/* <input
              type="text"
              className="py-2 rounded-md w-full bg-transparent border dark:border-gray-500 px-6"
              placeholder="Search by token address..."
            /> */}
          </div>
          <table className="w-full min-w-[500px]">
            <thead>
              <tr>
                {tableHead.map((val, i) => (
                  <th key={i} className={`${"text-left"}`}>
                    {val}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tokenList.map((token, index) => (
                <tr key={index} className=" border-b dark:border-lightDark ">
                  <td className="py-4">
                    <p className="font-normal">{token.name}</p>
                  </td>{" "}
                  <td className="py-4 ">
                    <p className="font-medium">{shortAddress(token.symbol)}</p>
                  </td>{" "}
                  <td className="py-4 ">
                    <p className="font-medium">{shortAddress(token.address)}</p>
                  </td>
                  <td className="py-4 text-right">
                    <a href="/" className="text-primary-400">
                      View
                    </a>
                  </td>{" "}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default MyTokens;
