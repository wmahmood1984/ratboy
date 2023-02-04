import { Checkbox, FormControlLabel } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";
import { parseEther, parseUnits } from "ethers/lib/utils";
import React, { useState } from "react";
import Layout from "../../components/layout";
import { chainIdSelected, IERC20, tokenLockLauncherAbi, tokenLocklauncherAdd, tokenObj } from "../../config";
import ResponsiveDialog from "../../Spinner";
import CustomDatePicker from "../createToken/components/CustomDatepicker";
import Web3 from "web3";
import CustomInput from "../../components/CustomInput";


export const getLockContract = (library, account,tokenAdd,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(tokenAdd,abi, signer);
	return contract;
};


const LockToken = () => {
  const { account,library, chainId} = useWeb3React();
  const chain = chainId ? chainId : chainIdSelected
  const contract = getLockContract(library,account,tokenLocklauncherAdd[`${chain}`],tokenLockLauncherAbi)
  const web3 = new Web3(Web3.givenProvider)
  const [token,setToken] = useState()
  const [title,setTitle] = useState()
  const [amount,setAmount] = useState()
  const [date, setDate] = useState();
  const [open, setOpen] = useState();
  const [status, setStatus] = useState("");

//  console.log("data",token,title,amount,date,open)


  const Approve = async()=>{
    const Tokencontract = getLockContract(library,account,token,IERC20)
    if(amount>0 || date!=undefined){
      setOpen(true)
      setStatus("Approval in process..")
      try {
        const tx1 = await Tokencontract.approve(tokenLocklauncherAdd[`${chainId}`],parseEther((amount).toString()),{gasLimit:300000})
        await tx1.wait()

        if(tx1){
          setOpen(false)
          Lock()
          setStatus("Locking tokens...")
        }
      } catch (error) {
        console.log("Error in Approve Function",error)
        setOpen(false)
        setStatus("")
      }
    }else{
      window.alert("Please check date and amount")
    }
  }
  
  
  const Lock = async()=>{
    if(amount>0 || date!=undefined){
      setOpen(true)
      setStatus("Locking tokens...")
      try {
         var _amount = amount
         console.log("ether",amount)

        const tx1 = await contract.lockToken(
          token,parseEther(amount.toString()),title,Date.parse(date),{gasLimit:3000000})
        await tx1.wait()

        if(tx1){
          setOpen(false)
          setStatus("")
        }
      } catch (error) {
        console.log("Error in Lock Function",error)
        setOpen(false)
        setStatus("")
      }
    }else{
      window.alert("Please check date and amount")
    }
  }

  return (
    <Layout>
      <div className=" px-6 mt-28  mb-20 w-full">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow-xl grid grid-cols-1">
          <p className="font-semibold sm:p-6 p-4 border-b border-b-gray-500">
            Create your lock
          </p>
          <div className="sm:p-6 p-4">
            <CustomInput 
            value={token}
            setValue={setToken}
            label={"Token or LP Token address"} required />
            <div className="custom-checkbox ">
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="use another owner?"
              />
            </div>
            <br />
            <CustomInput 
            
            value={title}
            setValue={setTitle}
            label={"Title"} />
            <br />
            <CustomInput 
            
            value={amount}
            setValue={setAmount}
            label={"Amount"} required />
            <div className="custom-checkbox ">
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="use vesting?"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p>
                  Select start time & end time (UTC)
                  <span className="text-red-400">*</span>
                </p>
              </div>
              <CustomDatePicker value={date} setValue={setDate} />
            </div>
            <div className="bg-gray-500  bg-opacity-20 mt-6 p-4 rounded-md text-sm break-words">
              Please exclude RatLock's lockup address
              0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE from fees, rewards, max
              tx amount to start locking tokens. We don't support rebase tokens.
            </div>
            <button 
            onClick={Approve}
            className="bg-primary-400 text-white block mx-auto rounded-sm mt-4 px-4 py-2">
              Lock
            </button>
          </div>
        </div>
        <p className="text-center w-full md:max-w-4xl  mt-7 text-sm mx-auto">
          Disclaimer: The information provided shall not in any way constitute a
          recommendation as to whether you should invest in any product
          discussed. We accept no liability for any loss occasioned to any
          person acting or refraining from action as a result of any material
          provided or published.
        </p>
      </div>
      <ResponsiveDialog open={open} title={status}/>
    </Layout>
  );
};

export default LockToken;

// const CustomInput = ({value,setValue, label, required = false, placeholder, ...props }) => {
//   return (
//     <div className="w-full">
//       {label && (
//         <label 
      
//         className="mb-1 inline-block">
//           {label}
//           {required && <span className="text-red-400">*</span>}
//         </label>
//       )}
//       <div
//         className="bg-dark-500 border border-lightDark rounded-md"
//         style={{ height: "40px" }}
//       >
//         <input
//           value={value}
//           onChange={(e)=>{setValue(e.target.value)}}
//           placeholder={placeholder}
//           {...props}
//           type="text"
//           className=" bg-transparent  w-full h-full text-gray-500 p-2 py-2 focus:outline-none"
//         />
//       </div>
//     </div>
//   );
// };
