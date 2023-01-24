import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import WalletConnectLogo from "./assets/walletConnect.svg";
import MetaLogo from "./assets/meta.svg";
// import coinBase from "./assets/coinbase.svg";
import {
  injected,
  walletconnect,
  // CoinbaseWallet,
} from "../../wallet/connector";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "90%",
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: 4,
};

export default function BasicModal({
  open,
  handleClose,

  connectHandler,
}) {
  const listOfWallet = [
    {
      name: "Metamask",
      logo: MetaLogo,
      description: "Connect with the provider in your Browser",
      handler: () => console.log("CONNECT TO METAMASK"),
      connecter: injected,
    },
    {
      name: "WalletConnect",
      logo: WalletConnectLogo,
      description: "Scan with WalletConnect to connect",
      handler: () => console.log("CONNECT TO WalletConnect"),
      connecter: walletconnect,
    },
    // {
    //   name: "CoinBase",
    //   logo: coinBase,
    //   description: "Connect to your Coinbase Wallet",
    //   handler: () => console.log("CONNECT TO Coinbase"),
    //   connecter: CoinbaseWallet,
    // },
  ];

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {listOfWallet.map((val, i) => (
            <React.Fragment key={i}>
              <button
                className={`  block w-full text-black py-4 md:py-6 hover:bg-gray-100 rounded-md transition-all duration-300`}
                key={i}
                onClick={() => connectHandler(val.connecter, val.name)}
              >
                <img src={val.logo} alt="" className=" w-8 md:w-12 mx-auto" />
                <h2 className=" font-bold text-lg md:text-xl mt-4 mb-2">
                  {val.name}
                </h2>
                <p className="text-sm md:text-base text-gray-500 ">
                  {val.description}
                </p>
              </button>
              {i + 1 !== listOfWallet.length && <hr />}
            </React.Fragment>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
