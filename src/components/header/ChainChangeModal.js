import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaTimes } from "react-icons/fa";
import { chains } from "./chaindata";
import { toHex } from "../../helpers/index";
import { useWeb3React } from "@web3-react/core";
import { RPC_URLS, POLLING_INTERVAL } from "../../wallet/connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletModalContext } from "../../context/walletModalContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#111721",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  color: "#fff",
  borderRadius: 2,
};

export default function ChainChangeModal({
  open,
  setOpen,
  handleOpen,
  handleClose,
  currentChain,
  setCurrentChain,
}) {
  const { account, library, chainId, connector, deactivate, activate } =
    useWeb3React();
  const { connectHandler } = React.useContext(WalletModalContext);
  const currentProvider = window.localStorage.getItem(
    "WEB3_REACT_CURRENT_PROVIDER"
  );
  const switchNetwork = async (network) => {
    if (!account) connectHandler();
    console.log(library);
    if (chainId === network) return;
    try {
      if (currentProvider === "WalletConnect") {
        const walletconnect = new WalletConnectConnector({
          rpc: RPC_URLS,
          bridge: "https://bridge.walletconnect.org",
          qrcode: true,
          pollingInterval: POLLING_INTERVAL,
          chainId: network,
        });
        await activate(walletconnect);
        window.localStorage.setItem(
          "WEB3_REACT_CURRENT_PROVIDER",
          "WalletConnect"
        );
      } else {
        await library.provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: toHex(network) }],
        });
      }
      // await connector.a
    } catch (switchError) {
      console.log(switchError);
      if (switchError.code === 4902) {
        console.log("sorry your wallet does not have the network");
        // try {
        //   // await library.provider.request({
        //   //   method: "wallet_addEthereumChain",
        //   //   params: [networkParams[toHex(network)]]
        //   // });
        // } catch (error) {
        //   setError(error);
        // }
      }
    }
  };
  const setChain = async (value) => {
    if (chainId === value.chain) {
      handleClose();
      return;
    }
    const currentProvider = window.localStorage.getItem(
      "WEB3_REACT_CURRENT_PROVIDER"
    );
    if (currentProvider === "WalletConnect") {
      await deactivate();
      await window.localStorage.clear();
      await switchNetwork(value.chain);
    } else {
      await switchNetwork(value.chain);
    }

    handleClose();
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-lg font-bold">Change Chain</h2>
            <button onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
          <div className="grid gap-4">
            {chains.map((value, index) => (
              <button
                key={index}
                className={`${
                  value.disabled
                    ? " pointer-events-none bg-gray-800 opacity-50"
                    : "bg-[#202734]"
                } grid  grid-flow-col justify-start gap-3 items-center  p-2 rounded-lg`}
                onClick={() => setChain(value)}
              >
                <img src={value.icon} alt={value.name} className="w-4" />
                <p>{value.name}</p>
              </button>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
