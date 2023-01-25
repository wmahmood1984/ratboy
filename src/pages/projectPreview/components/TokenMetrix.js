// import { useWeb3React } from "@web3-react/core";
// import { Contract } from "ethers";
// import { formatEther, formatUnits } from "ethers/lib/utils";
// import React, { useEffect, useState } from "react";
// import DonutChart from "react-donut-chart";
// import Graph from "../../../assets/graph.svg";
// import { chainIdSelected, IERC20, LaunchPadABI, LaunchPadAdd } from "../../../config";






// const TokenMetrix = ({data}) => {

//   var chain = chainId?chainId : chainIdSelected
//   const Contract = getContract(library,account,LaunchPadAdd[`${chain}`],LaunchPadABI)
//   const TokenContract = data && getContract(library,account,data[2][0],IERC20)
//   const [allocations,setAllocaitons] = useState()
//   const [totalSupply,setTotalSupply] = useState()
//   const [decimals,setDecimals] = useState()
//   console.log("allocations",data)  
  
  
//   useEffect(()=>{
//     const abc = async()=>{
//     const _alloc = await Contract.getLockContract(data[2][0])
//       setAllocaitons(_alloc)

//     const tSupply = await TokenContract.totalSupply()
//     const tdecimals = await TokenContract.decimals()
//      setTotalSupply(tSupply / (10**tdecimals))
//      setDecimals(tdecimals)
    
//     }
//     abc()
    
    
//   },[])

//   function myFunc(total, num) {
//     return total + num;
//   }


//   const allocationAmounts = allocations && allocations.map((v,e)=>{
//     console.log((formatUnits(v.Amount,decimals)/ totalSupply).toLocaleString('fullwide', {useGrouping:false}))
//     return (
//     {label:v.Title,value:Number(formatUnits(v.Amount,decimals)/ totalSupply)}
//   )})

//   const amountsOnly = allocations && allocations.map((v,e)=>Number(formatEther(v.Amount)*(10**decimals)/1000000000000000000))

//   const locked = allocations && amountsOnly.reduce(myFunc)



//   allocations && allocationAmounts.push({label:"UnLocked",value:Number((totalSupply-locked)/totalSupply)})




//   const allocationAmounts2 =[{label:"A",value:20},{label:"A",value:20},{label:"A",value:20},{label:"A",value:20}]

//   return (
//     <div className="bg-dark-400 border border-lightDark rounded-md shadow-xl">
//       <div className=" border-b  border-lightDark px-4 py-4">
//         <p>Token Metrix</p>
//       </div>
//       <div className="py-4 flex justify-center  px-4">
//       <DonutChart
//           colors={
//             ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b' ]
//           }
           

//         />;
//       </div>
//     </div>
//   );
// };

// export default TokenMetrix;




import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";
import { formatEther, formatUnits } from "ethers/lib/utils";
import React from "react";
import DonutChart from "react-donut-chart";
import Graph from "../../../assets/graph.svg";
import { chainIdSelected } from "../../../config";


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




  const allocationAmounts2 =[{label:"A",value:20},{label:"A",value:20},{label:"A",value:20},{label:"A",value:20}]


     console.log("data",allocationAmounts)
  return (
    <div className="bg-dark-400 border border-lightDark rounded-md shadow-xl">
      <div className=" border-b  border-lightDark px-4 py-4">
        <p>Token Metrix</p>
      </div>
      <div className="py-4 flex justify-center  px-4">
           <DonutChart
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
