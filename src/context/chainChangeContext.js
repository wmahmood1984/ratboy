import { useWeb3React } from "@web3-react/core";
import React, { createContext, useEffect, useState } from "react";
import ChainChangeModal from "../components/ChainChangeModal";
import { chains } from "../components/ChainChangeModal/chaindata";

export const ChainChangeContext = createContext();
const defaultValue = {
  icon: "",
  name: "",
  chain: 0,
  disabled: false,
};
const ChainChangeProvider = ({ children }) => {
  const { chainId } = useWeb3React();
  const [currentChain, setCurrentChain] = useState(defaultValue);
  const [open, setOpen] = React.useState(false);
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
        setCurrentChain(chains[1]);
      }
    };
    updateChain();
  }, [chainId]);
  return (
    <ChainChangeContext.Provider
      value={{ openChainModal: handleOpen, currentChain }}
    >
      {children}
      <ChainChangeModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        currentChain={currentChain}
        setCurrentChain={setCurrentChain}
      />
    </ChainChangeContext.Provider>
  );
};

export default ChainChangeProvider;
