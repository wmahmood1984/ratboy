import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import All from "./components/All";
import MyLock from "./components/MyLock";
import Web3 from "web3"
import { chainIdSelected, LaunchPadABI, LaunchPadAdd, rpcObj, tokenLockLauncherAbi, tokenLocklauncherAdd } from "../../config";
import { convertLength } from "@mui/material/styles/cssUtils";
import { useWeb3React } from "@web3-react/core";



const TokenList = () => {

  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["All", "My Lock"];
  const { account,library, chainId} = useWeb3React();
  const [DataA,setData] = useState()
  const chain = chainId? chainId : chainIdSelected
  const web3 =  new Web3(
    new Web3.providers.HttpProvider(
      rpcObj[`${chain}`]
    )
  ) 
 // const navigate = useNavigate()
  const [filter,setFilter] = useState()
  const [sort,setSort] = useState()

  const myContract = new web3.eth.Contract(tokenLockLauncherAbi, tokenLocklauncherAdd[`${chain}`])
 




  useEffect(() => {
    const abc = async ()=>{
   
        const data = await myContract.methods.getArray().call()

        setData(data)

      
    }
    abc()
}, [account,chainId])


const Data = DataA && DataA.filter(item=>item.LP==false)
const MYLock = DataA && Data.filter(item=>item.user==account)


console.log("data in list",MYLock)         

  return (
    <Layout>
      <div className=" px-6 mt-28  mb-20 ">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  p-6">
          <div>
            <input
              type="text"
              className="py-2 rounded-md w-full bg-transparent border dark:border-gray-500 px-6"
              placeholder="Search by token address..."
            />
          </div>
          <div className="grid grid-flow-col gap-4 justify-end items-center mt-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${
                  selectedTab === index
                    ? "border-primary-400 text-primary-400"
                    : " border-transparent"
                } border-b`}
                onClick={() => setSelectedTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          {selectedTab === 0 ? <All 
          data={Data &&Data}
          chain={chain}
          /> 
          : <MyLock  
          data={Data && MYLock}
          chain={chain}
          />}
        </div>
      </div>
    </Layout>
  );
};

export default TokenList;
