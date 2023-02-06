import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import { chainIdSelected, LaunchPadABI, LaunchPadAdd } from "../../config";

import { shortAddress } from "../../helpers";


export const getContract = (library, account,abi,tokenAdd) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(tokenAdd,abi, signer);
	return contract;
};

const MyTokens = () => {

  const {library, account,chainId} = useWeb3React()
  const chain = chainId? chainId : chainIdSelected
  const [tokenList,setTokenList] = useState()
  const myContract = getContract(library,account,LaunchPadABI,LaunchPadAdd[`${chain}`])

  // const tokenList = [
  //   {
  //     name: "QJT",
  //     symbol: "QJT",
  //     image:
  //       "https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png",
  //     address: "0xC216EeE5686c69075DC56D396d477C0922DF278e",
  //   },
  //   {
  //     name: "QJT",
  //     symbol: "QJT",
  //     image:
  //       "https://www.pinksale.finance/static/media/unknown-token.5e4a517e.png",
  //     address: "0xC216EeE5686c69075DC56D396d477C0922DF278e",
  //   },
  // ];

  useEffect(() => {
    const abc = async ()=>{
      if(account){
        const tx1 = await myContract.getUserTokenList(account)
        setTokenList(tx1)
      }

    }
    abc()
  

  }, [account])

  console.log("data",tokenList)
  
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
              {tokenList &&  tokenList.map((token, index) => (
                <tr key={index} className=" border-b dark:border-lightDark ">
                  <td className="py-4">
                    <p className="font-normal">{token.name}</p>
                  </td>{" "}
                  <td className="py-4 ">
                    <p className="font-medium">{token.symbol}</p>
                  </td>{" "}
                  <td className="py-4 ">
                    <p className="font-medium">{shortAddress(token.Address)}</p>
                  </td>
                  <td className="py-4 text-right">
                    <a target={"blank"} href={
                      chainId == "5" ? 
                      `https://goerli.etherscan.io/address/${token.Address}`
                      : `https://testnet.bscscan.com/address/${token.Address}`
                      
                      } className="text-primary-400">
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
