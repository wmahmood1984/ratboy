import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import Progressbar from "./Progressbar";
import Eth from "../../../assets/icon/eth.svg";
import USDC from "../../../assets/icon/usdc.svg";
import bnb from "../../../assets/BSC.png";
import Web3 from "web3";
import { FiArrowDownCircle, FiChevronDown } from "react-icons/fi";
import { MdSwapCalls } from "react-icons/md";
import DailyTimer2 from "../../../components/Timer2";
import { formatEther } from "ethers/lib/utils";
import { IERC20, IGOAbi } from "../../../config";
import { useWeb3React } from "@web3-react/core";
import ResponsiveDialog from "../../../Spinner";
import { Contract } from "ethers";
import { toast } from "react-hot-toast";

export const getContract = (library, account, poolId) => {
  const signer = library?.getSigner(account).connectUnchecked();
  var contract = new Contract(poolId, IGOAbi, signer);
  return contract;
};

const Swap = ({ data, toggle, setToggle, sub_data,account }) => {
  const { library } = useWeb3React();
  const web3 = new Web3(Web3.givenProvider);
  var now = new Date().getTime() / 1000;
  const contract = new web3.eth.Contract(IERC20, data[2][0]);

  const [nBalance, setNbalance] = useState(0);
  const [tBalance, setTbalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [open, setOpen] = useState();
  const [title, setTitle] = useState();

  const myContract =  data &&  account ? getContract(library, account, data._address) : null
  useEffect(() => {
    const abc = async () => {
      if(account){
        const _nBal = await web3.eth.getBalance(account);
        setNbalance(Number(formatEther(_nBal)).toFixed(2));
  
        const _tbal = await contract.methods.balanceOf(account).call();
        setTbalance(formatEther(_tbal));
      }
 
    };
    abc();
  }, [toggle,account]);

  const _Swap = async () => {
    if (amount > 0 && account) {
      var counter = 0;
      setOpen(true);
      setAmount("");
      setTitle("Buy in process...");
      var tokens = amount / formatEther(data[4][1]);

      try {
        const tx1 = await myContract.Buy({
          gasLimit: 3000000,
          value: web3.utils.toWei(amount.toString(), "ether"),
        });
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

        await tx1.wait();

        // if(tx1){
        //   setToggle(!toggle)
        //   setOpen(false)
        //   setPhrase(`YOU GOT ${tokens} ${_title_Symbol[1]} TOKEN $${amount}`)
        //   setShowSC(true)
        // }
        if (tx1) {
          setToggle(!toggle);
          setOpen(false);
          // setPhrase(`YOU GOT ${tokens} ${_title_Symbol[1]} TOKEN $${amount}`)
          // setShowSC(true)
        }
      } catch (error) {
        console.log("error in Swap", error);
        setOpen(false);
      }
    } else if (amount == 0 || amount == undefined) {
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

      toast.error("please enter valid amount");
    } else {
      // toast("Please connect your wallet", {
      //   })
    }
  };

  const _EmergencyWithdraw = async () => {
    if (account) {
      var counter = 0;
      setOpen(true);
      setAmount("");
      setTitle("Emergency withdraw in process...");
      var tokens = amount / formatEther(data[4][1]);

      try {
        const tx1 = await myContract.withdraw({ gasLimit: 3000000 });
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

        await tx1.wait();

        // if(tx1){
        //   setToggle(!toggle)
        //   setOpen(false)
        //   setPhrase(`YOU GOT ${tokens} ${_title_Symbol[1]} TOKEN $${amount}`)
        //   setShowSC(true)
        // }
        if (tx1) {
          setToggle(!toggle);
          setOpen(false);
          // setPhrase(`YOU GOT ${tokens} ${_title_Symbol[1]} TOKEN $${amount}`)
          // setShowSC(true)
        }
      } catch (error) {
        console.log("error in Swap", error);
        setOpen(false);
      }
    } else {
      // toast("Please connect your wallet", {
      //   })
    }
  };

  console.log("data in edit", sub_data);

  const ethChangeHandle = (e) => {
    const { value } = e.target;
    setAmount(value);
    setTokenAmount(Number(value / formatEther(data[4][1])).toFixed(4));
  };

  const tokenChnageHandle = (e) => {
    const { value } = e.target;
    setTokenAmount(value);
    setAmount(Number(value * formatEther(data[4][1])).toFixed(4));
  };

  var progress_ =  Number(formatEther(sub_data.investedBUSD)) / Number(formatEther(data[4][16]))*100
console.log("progress",progress_,Number(formatEther(sub_data.investedBUSD)),Number(formatEther(data[4][0])))
  return (
    <div className="bg-white dark:bg-dark-400 border dark:border-lightDark p-4 sm:p-6 rounded-md shadow-xl py-14 h-full flex justify-center items-center  flex-col ">
      <div className="w-full">
        {/* <Timer /> */}
        <Timer start={data[4][5]} end={data[4][6]} />
        <div>
          <Progressbar
            complete={
             progress_
            }
          />
          <div className="flex items-center justify-between mt-1">
            <p>
              {formatEther(sub_data.investedBUSD)}{" "}
              {window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"}
            </p>
            <p>
              {data[4][16] ? formatEther(data[4][16]) : 10000}{" "}
              {window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"}
            </p>
          </div>
          <div className="mt-6">
            <div>
              <CustomInput
                value={amount}
                // setAmount={setAmount}
                onChange={ethChangeHandle}
                balance={nBalance}
                icon={window.ethereum?.networkVersion == 97 ? bnb : Eth}
              />
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
                // disabled={true}
                onChange={tokenChnageHandle}
                value={tokenAmount}
              />
            </div>
          </div>
          <div>
            <p className="text-center my-5 text-sm grid grid-flow-col justify-center items-center gap-x-1">
              1 {window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"} =
              {1 / formatEther(data[4][1])} {data[3][1]}
              <div className=" bg-dark-700 w-5 h-5 flex items-center justify-center rounded-full">
                <MdSwapCalls />
              </div>{" "}
            </p>
          </div>
          <button
            disabled={now < data[4][5] || now > data[4][6]}
            onClick={() => {
              if (data[6].length == 0 || data[6].indexOf(account) >= 0) {
                _Swap();
              } else {
                toast.error("You are not in white list");
              }
            }}
            className=" text-white rounded-lg py-1.5 sm:py-4 bg-primary-400 w-full text-xl font-bold"
          >
            Buy
          </button>
          <br />
          <button
            style={{ marginTop: "10px" }}
            onClick={_EmergencyWithdraw}
            className=" text-white rounded-lg py-1.5 sm:py-4 bg-primary-400 w-full text-xl font-bold"
          >
            Emergency Withdaraw
          </button>
        </div>
      </div>
      <ResponsiveDialog open={open} title={title} />
    </div>
  );
};

export default Swap;

const CustomInput = ({
  title = "Pay",
  balance = 0,
  icon = Eth,
  coin = window.ethereum?.networkVersion == 97 ? "BNB" : "ETH",
  value,
  disabled,
  setAmount,
  ...props
}) => {
  return (
    <div>
      <div className="flex justify-between  items-center">
        <p>{title}</p>
        <p className="text-sm">
          Available: <span> {balance}</span>
        </p>
      </div>
      <div className=" dark:bg-dark-500 rounded-md mt-1 h-14 flex items-center border border-lightDark overflow-hidden">
        <div className="grid grid-flow-col gap-x-1 justify-start items-center h-full p-2">
          <img src={icon} alt="" className="w-5 sm:w-7" />
          <span className=" font-semibold text-sm sm:text-lg">{coin}</span>
          {/* <span className="text-lg sm:text-xl">
            <FiChevronDown />
          </span> */}
        </div>
        <div className="flex-1">
          <input
            // onChange={(e) => {
            //   setAmount(e.target.value);
            // }}
            disabled={disabled}
            {...props}
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
