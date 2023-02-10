import React, { useEffect, useState } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  injected,
  walletconnect,
  CoinbaseWallet,
} from "../web3/wallet/connector";
import toast from "react-hot-toast";
import WalletModal from "../components/walletModal";
export const WalletModalContext = React.createContext();

export const WalletModalProvider = ({ children }) => {
  const { account, activate, deactivate, error } = useWeb3React();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (error instanceof UnsupportedChainIdError) {
      toast.error("Unsupported Chain Selected in your wallet");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  const connectWallet = async (connectTo, name) => {
    try {
      if (name === "Metamask") {
        if (window.ethereum) {
          await activate(connectTo);
          window.localStorage.setItem("WEB3_REACT_CURRENT_PROVIDER", name);
        } else {
          window.location.href = `https://metamask.app.link/dapp/${window.location.host}`;
        }
      } else {
        await activate(connectTo);
        window.localStorage.setItem("WEB3_REACT_CURRENT_PROVIDER", name);
      }
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const localProvider = window.localStorage.getItem(
      "WEB3_REACT_CURRENT_PROVIDER"
    );

    if (localProvider === "Metamask") {
      connectWallet(injected, "Metamask");
    } else if (localProvider === "WalletConnect") {
      connectWallet(walletconnect, "WalletConnect");
    } else if (localProvider === "CoinBase") {
      connectWallet(CoinbaseWallet, "CoinBase");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const connectHandler = () => {
    if (!account) {
      handleOpen();
    } else if (account) {
      deactivate();
      window.localStorage.clear();
      window.location.reload();
    }
  };

  const logoutWalltHandler = () => {
    deactivate();
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <WalletModalContext.Provider value={{ connectHandler, logoutWalltHandler }}>
      {children}
      <WalletModal
        open={open}
        connectHandler={connectWallet}
        handleClose={handleClose}
      />
    </WalletModalContext.Provider>
  );
};
