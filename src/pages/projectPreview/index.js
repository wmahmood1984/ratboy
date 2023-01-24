import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import ProjectOverView from "./components/ProjectOverView";
import Swap from "./components/Swap";
import TokenMetrix from "./components/TokenMetrix";
import Ownerzone from "./components/Ownerzone";
import Information from "./components/Information";
import { useLocation } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import {Contract, ethers, providers, utils} from "ethers"
import { chainIdSelected, IGOAbi, LaunchPadABI, LaunchPadAdd } from "../../config";
import Web3 from "web3";




  

const ProjectPreview = () => {
  const {account,library,chainId} = useWeb3React()
  const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/2d0256aba07e4704add58fd0713e24d5"))
  let location = useLocation();
  const { Index } = location.state;
  var chain = chainId ? chainId : chainIdSelected

  const myContract = new web3.eth.Contract(LaunchPadABI,LaunchPadAdd[`${chain}`])
  const[_data,set_Data] = useState()
  const[sub_data,set_SubData] = useState()
  const[toggle,setToggle] = useState(false)



  useEffect(()=>{
    const abc = async()=>{
      const data = await myContract.methods.getPoolDetails().call()
      set_Data(data[0][Index])
      set_SubData(data[1][Index])

     }
    abc()
  },[toggle])


  console.log("data",_data)
  console.log("sub data",sub_data)
  return (
    <Layout>
     {
     _data && sub_data && 
           <main className="px-4 pb-10 pt-28 grid grid-cols-1 gap-y-4">
             <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
             <ProjectOverView data={_data && _data} sub_data={sub_data && sub_data}/>
             <div className=" flex flex-col">
               <div className="flex-1">
                 <Swap data={_data && _data} toggle={toggle} sub_data={sub_data && sub_data} setToggle={setToggle}/>
               </div>
               <div className="mt-6">
                 <TokenMetrix dataA={_data && _data} sub_data={sub_data && sub_data}/>
               </div> 
             </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
             <Ownerzone data={_data && _data} sub_data={sub_data && sub_data}/>
             <Information data={_data && _data} sub_data={sub_data && sub_data}/>
           </div>  
         </main>
     }  



      
 
    </Layout>
  );
};

export default ProjectPreview;
