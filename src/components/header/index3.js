import React, { useContext, useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
// import Logo from "../../assets/logo.png";
import BSC from "../../assets/BSC.png";
import "./style.css";
import OutsideClickHandler from "react-outside-click-handler";

import { useWeb3React } from "@web3-react/core";

import { WalletModalContext } from "../../context/walletModalContext";
import { chains } from "./chaindata";
import { shortAddress } from "../../helpers";
import ChainChangeModal from "./ChainChangeModal";

const Header = ({ show, setShow }) => {
  const { connectHandler } = useContext(WalletModalContext);
  const { account, chainId } = useWeb3React();
  const [open, setOpen] = React.useState(false);
  const [currentChain, setCurrentChain] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const updateChain = () => {
      if (chainId) {
        const selectedChain = chains.filter((chain) => chain.chain === chainId);
        selectedChain.length !== 0
          ? setCurrentChain(selectedChain[0])
          : setCurrentChain(chains[0]);
        // console.log(chains.filter((chain) => chain.chain === chainId));
      } else {
        setCurrentChain(chains[2]);
      }
    };
    updateChain();
  }, [chainId]);

  return (
    <>
      <div className="text-white bg-dark-400 items-center flex justify-between md:justify-end  border-b border-lightDark header">
        {/* <ToastContainer /> */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setShow(false);
          }}
        >
          <button
            className="px-2 text-2xl  md:hidden toggle-bar relative z-50 transition-all duration-300"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? <FaTimes /> : <HiOutlineMenuAlt2 />}
          </button>
        </OutsideClickHandler>
        <div className="grid grid-flow-col justify-end items-center gap-x-6  px-4 py-4">
          <button
            className="grid grid-flow-col gap-x-2 h-full items-center justify-center font-medium uppercase bg-primary-400 border border-primary-400 bg-opacity-50 p-2 px-4 rounded-md text-sm md:text-base"
            onClick={handleOpen}
          >
            <img src={currentChain.icon} alt="" className="w-4 h-4 md:h-auto" />

            <div>{currentChain.name}</div>
          </button>
          <button
            onClick={connectHandler}
            className=" font-medium uppercase bg-primary-400 border border-primary-400 bg-opacity-50 p-2 px-4 rounded-md text-sm md:text-base"
          >
            <p>{account ? shortAddress(account) : "Connect Wallet"}</p>
          </button>
        </div>
      </div>
      <ChainChangeModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        currentChain={currentChain}
        setCurrentChain={setCurrentChain}
      />
    </>
  );
};

export default Header;
