import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import Launchpad from "./Launchpad";
import { Link } from "react-router-dom";
import {Contract, ethers, providers, utils} from "ethers"
import { LaunchPadABI, LaunchPadAdd } from "../../config";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3"
import { ToastContainer, toast } from 'react-toastify';



// export const getContract = (library, account,chainId) => {
// 	const signer = library?.getSigner(account).connectUnchecked();
// 	var contract = new Contract(LaunchPadAdd[`${chainId}`],LaunchPadABI, signer);
// 	return contract;
// };




const Home = () => {

  const { account,library, chainId} = useWeb3React();
  const [Data,setData] = useState()
  const [subData,setSubtData] = useState()
  const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/2d0256aba07e4704add58fd0713e24d5"))


  const myContract = chainId ?  new web3.eth.Contract(LaunchPadABI, LaunchPadAdd[`${chainId}`])
  : new web3.eth.Contract(LaunchPadABI, LaunchPadAdd[`5`])




  useEffect(() => {
    const abc = async ()=>{
      
        const data = await myContract.methods.getPoolDetails().call()
      
        setData(data[0])
        setSubtData(data[1])
      
    }
    abc()
}, [account])




  return (
    <Layout>
            <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>


      <main className="px-4 pb-10 pt-20">
        <h1 className="text-center mt-10 font-medium text-3xl">
          Current Presale
        </h1>
        <div className="mt-20">
          <div className=" w-full md:w-auto flex justify-between items-center">
            <div className="hidden md:block">
              <button className="grid grid-flow-col justify-start items-center cursor-pointer">
                <span className="">All Launchpads</span>
                <span className="text-2xl">
                  <BiChevronDown />
                </span>
              </button>
            </div>
            <div className="flex-1 md:flex-none grid gap-y-4 md:gap-y-0 grid-cols-1 md:grid-flow-col md:justify-end gap-x-3">
              <div className="md:w-auto w-full">
                <SearchBox />
              </div>
              <div className="grid grid-cols-2 md:grid-flow-col gap-2 items-center ">
                <CustomSelect text="Filter By" />
                <CustomSelect text="Sort By" />
                <Link
                  to={account ? "/createToken" : "#"}
                  className="col-span-2  md:col-span-auto uppercase block text-center bg-primary-400 p-4 py-2 h-max rounded-md"
                >
                  Create
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {Data && subData &&  Data.map((val, i) => (
            <React.Fragment key={i}>
              <Launchpad keyA={i} data={val} subData={subData[i]}/>
            </React.Fragment>
          ))}
        </div>
      </main>

    </Layout>
  );
};

export default Home;

const CustomSelect = ({ text }) => (
  <button className="flex border border-gray rounded-md items-center py-2 px-2 justify-between ">
    <span className="sm:mr-24">{text}</span>
    <span className=" text-xl">
      <BiChevronDown />
    </span>
  </button>
);

const SearchBox = () => (
  <div className=" border border-gray rounded-md flex items-center justify-between px-3 py-2">
    <input
      className=" bg-transparent h-full focus:outline-none"
      type={"text"}
      placeholder="Search"
    />
    <span className="text-gray text-xl">
      <BiSearch />
    </span>
  </div>
);
