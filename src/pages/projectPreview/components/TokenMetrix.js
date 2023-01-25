import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";
import { formatEther, formatUnits } from "ethers/lib/utils";
import React from "react";
import DonutChart from "react-donut-chart";
import Graph from "../../../assets/graph.svg";
import { chainIdSelected } from "../../../config";
import root from "./token.css"

export const getContract = (library, account,tokenAdd,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(tokenAdd,abi, signer);
	return contract;
};
const TokenMetrix = ({dataA,allocations,decimals,totalSupply}) => {
     const {account,library,chainId} = useWeb3React()
   
  function myFunc(total, num) {
    return total + num;
  }


  const allocationAmounts = allocations && allocations.map((v,e)=>{
    console.log((formatUnits(v.Amount,decimals)/ totalSupply*100).toLocaleString('fullwide', {useGrouping:false}))
    return (
    {label:v.Title,value:Number(formatUnits(v.Amount,decimals)/ totalSupply*100)}
  )})

  

   const amountsOnly = allocations && allocations.map((v,e)=>Number(formatEther(v.Amount)*(10**decimals)/1000000000000000000))

   const locked = allocations && amountsOnly.reduce(myFunc)



   allocations && allocationAmounts.push({label:"UnLocked",value:Number((totalSupply-locked)/totalSupply*100)})




   const series = allocations && allocations.map((v,e)=>Number(formatUnits(v.Amount,decimals)/ totalSupply*100))
   const locked2 = allocations && series.reduce(myFunc)
   const labels = allocations && allocations.map((v,e)=>v.Title)
   allocations && series.push((totalSupply-locked)/totalSupply*100)
   allocations && labels.push("unLocked")


     console.log("data",totalSupply)
  return (
    <div className="bg-dark-400 border border-lightDark rounded-md shadow-xl">
      <div className=" border-b  border-lightDark px-4 py-4">
        <p>Token Metrix</p>
      </div>
      <div className="py-4 flex justify-center  px-4">
           <DonutChart
           className="root-innertext-label"
           colorFunction={(colors, index) => colors[(index % colors.length)]}
           colors={
             ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b' ]
           }
           data={allocationAmounts}

         />;
      </div>
    </div>
  );
};

export default TokenMetrix;
