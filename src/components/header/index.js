import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
// import Logo from "../../assets/logo.png";
import BSC from "../../assets/BSC.png";
import ETH from "../../assets/icon/eth.svg";
import "./style.css";
import OutsideClickHandler from "react-outside-click-handler";
import Web3 from "web3";
import { toast, ToastContainer } from "react-toastify";
import { useWeb3React } from "@web3-react/core";
import { Injected, WalletConnect } from "../../connector";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {
  chainIdSelected,
  LaunchPadABI,
  LaunchPadAdd,
  logoArray,
} from "../../config";
import metamask from "../../Img/201-2010951_metamask-ethereum.png";
import walletC from "../../Img/WalletConnect-Logo.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Contract } from "ethers";
import { formatEther, formatUnits } from "ethers/lib/utils";

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

export const getContract = (library, account, tokenAdd) => {
  const signer = library?.getSigner(account).connectUnchecked();
  var contract = new Contract(tokenAdd, LaunchPadABI, signer);
  return contract;
};

const Header = ({ show, setShow }) => {
  const localNet = localStorage.getItem("localNet")
    ? localStorage.getItem("localNet")
    : chainIdSelected;
  const [open, setOpen] = useState(false);
  const [openA, setOpenA] = useState(false);
  const [network, setNetwork] = useState(localNet);
  const web3 = new Web3(Web3.givenProvider);
  const { account, library, chainId,activate } = useWeb3React();
  const [tier, setTier] = useState();
  const chain = chainId ? chainId : chainIdSelected;

  const myContract = getContract(library, account, LaunchPadAdd[`${chain}`]);

  useEffect(() => {
    if(localStorage.getItem("Connected")){
      activate(Injected)
    }
    const abc = async () => {
      if (account) {
        const _tier = await myContract.getTiers(account);
        setTier(formatUnits(_tier, 0));
      }
    };
    abc();
  }, [account, network]);

  console.log("tier", tier);

  // window.ethereum?.on("accountsChanged", (e, r) => {
  //   window.location.reload();
  // });

  window.ethereum?.on("chainChanged", (e, r) => {
    window.location.reload();
  });

  if (window.ethereum?.networkVersion !== network) {
    try {
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(network) }],
      });
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        // await window.ethereum.request({
        //   method: 'wallet_addEthereumChain',
        //   params: [
        //     {
        //       chainName: 'Polygon Mainnet',
        //       chainId: web3.utils.toHex(chainId),
        //       nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
        //       rpcUrls: ['https://polygon-rpc.com/']
        //     }
        //   ]
        // });
        toast("This chain is not configured in your metamask", {
          type: "failure",
          position: toast.POSITION.BOTTOM_CENTER,
          closeOnClick: true,
        });
      }
    }
  }

  return (
    <div className="text-white bg-white border-gray-300  dark:bg-dark-400 items-center flex justify-between md:justify-end  border-b dark:border-lightDark header">
      <OutsideClickHandler
        onOutsideClick={() => {
          setShow(false);
        }}
      >
        <button
          className="px-2 text-2xl  md:hidden toggle-bar relative z-50 transition-all duration-300 dark:text-white text-black"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <FaTimes /> : <HiOutlineMenuAlt2 />}
        </button>
      </OutsideClickHandler>
      <div className="grid grid-flow-col justify-end items-center gap-x-2  px-4 py-4">
        {account ? (
          <div className="font-medium uppercase bg-primary-400 border border-primary-400 dark:bg-opacity-50 p-2 px-4 rounded-md text-xs md:text-base">
            <span>Your Tier: </span>
            <span>
              {tier == "1" ? "Tier 0" : tier == 2 ? "Tier 2" : "Tier 3"}
            </span>
          </div>
        ) : null}

        <button
          style={{ display: "flex" }}
          onClick={() => {
            setOpenA(true);
          }}
          className="font-medium uppercase bg-primary-400 border border-primary-400 dark:bg-opacity-50 p-2 px-4 rounded-md text-xs md:text-base"
        >
          <img
            width={"25px"}
            src={window.ethereum?.networkVersion == 97 ? BSC : ETH}
            alt=""
          />
          <span style={{ marginLeft: "15px" }} className="hidden sm:block">
            {window.ethereum?.networkVersion == 97 ? "BSC Testnet" : "Goerli"}
          </span>
        </button>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className=" font-medium uppercase bg-primary-400 border border-primary-400 dark:bg-opacity-50 p-2 px-4 rounded-md text-xs md:text-base"
        >
          {account
            ? `${account.slice(0, 7)}...${account.slice(-4)}`
            : "CONNECT WALLET"}
        </button>
      </div>
      <ResponsiveDialogWallet
        open={open}
        setOpen={setOpen}
        network={network}
        setNetwork={setNetwork}
      />
      <ResponsiveDialogChain
        open={openA}
        setOpen={setOpenA}
        network={network}
        setNetwork={setNetwork}
      />
    </div>
  );
};

export default Header;

function ResponsiveDialogWallet({ open, setOpen, network, setNetwork }) {
  const { activate, deactivate } = useWeb3React();
  const handleClose = () => {
    setOpen(false);
    activate(WalletConnect);
  };

  const handleClose2 = () => {
    setOpen(false);
    activate(Injected);
    localStorage.setItem("Connected", true);

  };

  const handleDeactivate = () => {
    setOpen(false);
    deactivate();
  };

  return (
    <div style={{ backgroundColor: "white !important" }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Please Choose Wallet</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {window.ethereum != undefined ? (
              <div
                style={{
                  cursor: "pointer",
                  border: network == 97 ? "2px solid grey" : "none",
                  padding: "5px",
                  display: "flex",
                }}
                onClick={handleClose2}
              >
                <span>
                  <img width="50px" src={metamask}></img>
                </span>{" "}
                <span style={{ marginLeft: "15px", fontSize: "20px" }}>
                  MetaMask
                </span>
              </div>
            ) : null}

            <br />
            <div
              style={{
                cursor: "pointer",
                border: network == 97 ? "2px solid grey" : "none",
                padding: "5px",
                display: "flex",
              }}
              onClick={handleClose}
            >
              <span>
                <img width="50px" src={walletC}></img>
              </span>{" "}
              <span style={{ marginLeft: "15px", fontSize: "20px" }}>
                Wallet Connectk
              </span>
            </div>

            <br />
            <button
              style={{
                marginLeft: "10%",
                cursor: `${network ? "pointer" : null}`,
                border: "transparent",
                borderRadius: "15px",
                width: "200px",
                backgroundColor: "rgb(84,84,84)",
                color: "white",
                height: "40px",
              }}
              onClick={handleDeactivate}
            >
              Logout
            </button>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

function ResponsiveDialogChain({ open, setOpen, network, setNetwork }) {
  const { activate, deactivate } = useWeb3React();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ backgroundColor: "white !important" }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Please Choose Network</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <div
                style={{
                  cursor: "pointer",
                  border: network == 97 ? "2px solid grey" : "none",
                  padding: "5px",
                  display: "flex",
                }}
                onClick={() => {
                  setNetwork("97");
                  setOpen(false);
                  localStorage.setItem("localNet", JSON.stringify(97));
                }}
              >
                <span>
                  <img width="50px" src={logoArray["97"]}></img>
                </span>{" "}
                <span style={{ marginLeft: "15px", fontSize: "25px" }}>
                  BSC Mainnet
                </span>
              </div>

              <br />
              <div
                style={{
                  cursor: "pointer",
                  border: network == 5 ? "2px solid grey" : "none",
                  padding: "5px",
                  display: "flex",
                }}
                onClick={() => {
                  setNetwork("5");
                  setOpen(false);
                  localStorage.setItem("localNet", JSON.stringify(5));
                }}
              >
                <span>
                  <img width="50px" src={logoArray["5"]}></img>
                </span>{" "}
                <span style={{ marginLeft: "15px", fontSize: "25px" }}>
                  Ethereum Mainnet
                </span>
              </div>

              {/* <br/>
            <div         style={{ cursor: "pointer" }} onClick={()=>{
              setNetwork("80001")
              localStorage.setItem("localNet",JSON.stringify(80001))
              }}>
            <span><img width="40px" src={logoArray["80001"]}></img></span>
            <span>Polygon</span>
            </div>
             
            <br/>
            <div         style={{ cursor: "pointer" }} onClick={()=>{
              setNetwork("43113")
              localStorage.setItem("localNet",JSON.stringify(43113))
              }}>
            <span><img width="40px" src={logoArray["43113"]}></img></span>
            <span>Avalanche</span>
            </div> */}
            </div>
          </DialogContentText>
        </DialogContent>

        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

function ResponsiveDialogChain2({ open, setOpen, network, setNetwork }) {
  const { activate, deactivate } = useWeb3React();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
            <button
              className={`${" pointer-events-none bg-gray-800 opacity-50"} grid  grid-flow-col justify-start gap-3 items-center  p-2 rounded-lg`}
              onClick={() => {
                setNetwork("97");
                setOpen(false);
                localStorage.setItem("localNet", JSON.stringify(97));
              }}
            >
              <img src={logoArray["97"]} alt={""} className="w-4" />
              <p>BSC Mainnet</p>
            </button>

            <button
              className={`${" pointer-events-none bg-gray-800 opacity-50"} grid  grid-flow-col justify-start gap-3 items-center  p-2 rounded-lg`}
              onClick={() => {
                setNetwork("5");
                setOpen(false);
                localStorage.setItem("localNet", JSON.stringify(5));
              }}
            >
              <img src={logoArray["5"]} alt={""} className="w-4" />
              <p>Ethereum Mainnet</p>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
