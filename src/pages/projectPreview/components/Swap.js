import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import Progressbar from "./Progressbar";
import Eth from "../../../assets/icon/eth.svg";
import USDC from "../../../assets/icon/usdc.svg";
import bnb from "../../../assets/BSC.png"
import Web3 from "web3";
import { FiArrowDownCircle, FiChevronDown } from "react-icons/fi";
import { MdSwapCalls } from "react-icons/md";
import DailyTimer2 from "../../../components/Timer2";
import { formatEther } from "ethers/lib/utils";
import { IERC20, IGOAbi } from "../../../config";
import { useWeb3React } from "@web3-react/core";
import ResponsiveDialog from "../../../Spinner";
import { Contract } from "ethers";
import { toast, ToastContainer } from "react-toastify";



export const getContract = (library, account,poolId) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(poolId,IGOAbi, signer);
	return contract;
};

const Swap = ({data,toggle,setToggle,sub_data}) => {
  const {account,library} = useWeb3React()
  const web3 = new Web3(Web3.givenProvider)
  var now = new Date().getTime()/1000
  const contract = new web3.eth.Contract(IERC20,data[2][0])

  const [nBalance,setNbalance] = useState()
  const [tBalance,setTbalance] = useState()
  const [amount,setAmount] = useState()
  const [open,setOpen] = useState()

  const myContract =data &&  getContract(library, account,data._address);
  useEffect(()=>{
    const abc = async()=>{
        const _nBal = await web3.eth.getBalance(account)
        setNbalance(Number(formatEther(_nBal)).toFixed(2))

        const _tbal = await  contract.methods.balanceOf(account).call()
        setTbalance(formatEther(_tbal))
    }
    abc()
  },[toggle])


  const _Swap = async ()=>{
    if(amount>0 && account){
      var counter = 0
      setOpen(true)
      setAmount("")
      var tokens = amount / formatEther(data[4][1])
    
      try {
         const tx1 = await myContract.Buy(
          {gasLimit: 3000000,value:web3.utils.toWei(amount.toString(),"ether")})
          // .send({from:account,gasLimit: 3000000})
          // .on("confirmation",(e,r)=>{
          //   if(counter===0){
          //     setToggle(!toggle)
          //     setOpen(false)
          //     setPhrase(`YOU GOT ${tokens} GEMZ TOKEN $${amount}`)
          //     setShowSC(true)
          //     counter++
          //   }
          // })
    
          await tx1.wait()
          
          // if(tx1){
          //   setToggle(!toggle)
          //   setOpen(false)
          //   setPhrase(`YOU GOT ${tokens} ${_title_Symbol[1]} TOKEN $${amount}`)
          //   setShowSC(true)
          // }
          if(tx1){
            setToggle(!toggle)
            setOpen(false)
            // setPhrase(`YOU GOT ${tokens} ${_title_Symbol[1]} TOKEN $${amount}`)
            // setShowSC(true)
          }
       } catch (error) {
         console.log("error in Swap",error)
         setOpen(false)
       }
    }else if(amount==0 || amount == undefined){
      // toast("Please enter valid amount", {
      //   position: "bottom-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   })
    
      window.alert("please enter valid amount")
    } else{
      // toast("Please connect your wallet", {
    
      //   })
    }
  }



//  console.log("first",Number(formatEther(data.investedTokens))/Number(formatEther(data[4][0]))*100)
  return (
    <div className="bg-dark-400 border border-lightDark p-4 sm:p-6 rounded-md shadow-xl py-14 h-full flex justify-center items-center  flex-col ">
         
      <div className="w-full">
     
        {/* <Timer /> */}
        <DailyTimer2 start={data[4][6]} />
        <div>
          <Progressbar complete={Number(sub_data.investedBUSD) / Number(formatEther(data[4][0]))} />
          <div className="flex items-center justify-between mt-1">
            <p>{sub_data.investedBUSD} {data[3][1]}</p>
            <p>{formatEther(data[4][0])} {data[3][1]}</p>
          </div>
          <div className="mt-6">
            <div>
              <CustomInput 
              value={amount}
              setAmount={setAmount}
              balance={nBalance}
              icon={window.ethereum?.networkVersion == 97 ? bnb : Eth} />
            </div>
            <p className=" flex justify-center my-4 text-2xl">
              <FiArrowDownCircle />
            </p>
            <div>
              <CustomInput
                title="Recieve(Estimated)"
                balance={Number(tBalance).toFixed(2)}
                icon={data[5]}
                coin={data[3][1]}
                disabled = {true}
                value={Number(amount / (formatEther(data[4][1]))).toFixed(4)}
              />
            </div>
          </div>
          <div>
            <p className="text-center my-5 text-sm grid grid-flow-col justify-center items-center gap-x-1">
            1 {window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"} = 
            
            {1/ formatEther(data[4][1])} {" "}
            
            {data[3][1]}
              <div className=" bg-dark-700 w-5 h-5 flex items-center justify-center rounded-full">
                <MdSwapCalls />
              </div>{" "}
            </p>
          </div>
          <button 
          onClick={_Swap}
          className=" rounded-lg py-1.5 sm:py-4 bg-primary-400 w-full text-xl font-bold">
            Buy
          </button>
        </div>
      </div>
      <ResponsiveDialog open={open} />
    </div>
  );
};

export default Swap;

const CustomInput = ({
  title = "Pay",
  balance = 0,
  icon = Eth,
  coin = "ETH",
  value,
  disabled,
  setAmount
}) => {
  return (
    <div>
      <div className="flex justify-between  items-center">
        <p>{title}</p>
        <p className="text-sm">
          Available: <span> {balance}</span>
        </p>
      </div>
      <div className=" bg-dark-500 rounded-md mt-1 h-14 flex items-center border border-lightDark overflow-hidden">
        <div className="grid grid-flow-col gap-x-1 justify-start items-center h-full p-2">
          <img src={icon} alt="" className="w-5 sm:w-7" />
          <span className=" font-semibold text-sm sm:text-lg">{coin}</span>
          <span className="text-lg sm:text-xl">
            <FiChevronDown />
          </span>
        </div>
        <div className="flex-1">
          <input
            onChange={(e)=>{setAmount(e.target.value)}}
            disabled={disabled}
            value={value}
            type="text"
            className=" w-full h-full p-4 bg-transparent text-right focus:outline-none"
            placeholder={"0"}
          />
        </div>
      </div>
    </div>
  );
};
