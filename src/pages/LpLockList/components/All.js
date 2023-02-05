import { formatEther } from "ethers/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

const All = ({data}) => {
  const tokenList = [
    {
      name: "QJT",
      symbol: "QJT",
      image:
        "https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png",
      amount: "80,000",
    },
    {
      name: "QJT",
      symbol: "QJT",
      image:
        "https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png",
      amount: "80,000",
    },
  ];
  const tableHead = ["Token", "Amount", ""];
  return (
    <div>
      <div>
        <table className="w-full">
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
            {data && data.map((token, index) => (
              <tr key={index} className=" border-b dark:border-lightDark ">
                <td className="py-4">
                  <div className="flex">
                    {/* <img
                      src={token.image}
                      className="w-10 h-10 rounded-full mr-3"
                      alt=""
                    /> */}
                    <div>
                      <p className="font-medium">{token.symbol}</p>
                      <p className="font-normal">{token.name}</p>
                    </div>
                  </div>
                </td>{" "}
                <td className="py-4 ">
                  <div className="flex r">
                    <p className="font-medium">{formatEther(token.amount)}</p>
                    <p className="font-normal ml-2">{token.symbol}</p>
                  </div>
                </td>
                <td className="py-4 text-right">
                  <Link 
                  to="/token_list/details"
                  state={data[index]} 
                  className="text-primary-400">
                    View
                  </Link>
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default All;
