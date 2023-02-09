import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import All from "./components/All";
import MyLock from "./components/MyLock";
import Web3 from "web3"
import { useWeb3React } from "@web3-react/core";
import { tokenLockLauncherAbi, tokenLocklauncherAdd } from "../../config";

const LpLockList = () => {


  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["All", "My Lock"];
  const { account, chainId} = useWeb3React();
  const [DataA,setData] = useState()

  const web3 = chainId ? new Web3(Web3.givenProvider) :  new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/2d0256aba07e4704add58fd0713e24d5"))
 // const navigate = useNavigate()
  const [filter,setFilter] = useState()
  const [sort,setSort] = useState()

  const myContract = chainId ?  new web3.eth.Contract(tokenLockLauncherAbi, tokenLocklauncherAdd[`${chainId}`])
  : new web3.eth.Contract(tokenLockLauncherAbi, tokenLocklauncherAdd[`5`])




  useEffect(() => {
    const abc = async ()=>{

        const data = await myContract.methods.getArray().call()
   
        setData(data)

      
    }
    abc()
}, [account])


const Data = DataA && web3 && DataA.filter(item=>item.LP==true)
const MYLock = DataA && web3 && Data.filter(item=>item.user==account)



console.log("Launchpad ",chainId,web3,myContract,DataA,Data)

         

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
          data={Data}
          /> : <MyLock 
          data={MYLock}
          />}
        </div>
      </div>
    </Layout>
  );
};

export default LpLockList;
