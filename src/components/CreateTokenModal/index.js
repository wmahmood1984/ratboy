import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoCloseSharp } from "react-icons/io5";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ThemeContext } from "../../context/themeContext";
import { useWeb3React } from "@web3-react/core";
import {
  chainIdSelected,
  LaunchPadABI,
  LaunchPadAdd,
  tokenLauncherAbi,
  tokenlauncherAdd,
} from "../../config";
import { Contract } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { useNavigate } from "react-router-dom";
import spinner from "../../Img/spinner.gif";

export const getContract = (library, account, abi, tokenAdd) => {
  const signer = library?.getSigner(account).connectUnchecked();
  var contract = new Contract(tokenAdd, abi, signer);
  return contract;
};

const CreateTokenModal = ({ open = false, setOpen }) => {
  const [tokenOption, setTokenOption] = React.useState();
  const [name, setName] = React.useState();
  const [symbol, setSymbol] = React.useState();
  const [decimals, setDecimals] = React.useState();
  const [totalSupply, setTotalSupply] = React.useState();
  const [openA, setOpenA] = React.useState(false);

  const { theme } = React.useContext(ThemeContext);
  const { account, library, chainId } = useWeb3React();
  const navigate = useNavigate();
  const chain = chainId ? chainId : chainIdSelected;

  const contract = getContract(
    library,
    account,
    tokenLauncherAbi,
    tokenlauncherAdd[`${chain}`]
  );

  const createToken = async () => {
    setOpenA(true);
    try {
      const tx1 = await contract.launchToken(
        name,
        symbol,
        parseEther(totalSupply),
        { gasLimit: 3000000 }
      );

      var receipt = await tx1.wait();

      if (receipt) {
        console.log("response", receipt);
        navigate(
          "/my_tokens"
          //,{state:{hash:receipt.transactionHash,address:receipt.events[0].address,name,symbol,decimals,totalSupply}}
        );
        setOpenA(false);
        setOpen(false);
      }
    } catch (error) {
      console.log("error in create Token", error);
      setOpenA(false);
    }
  };

  console.log("create token", name, symbol, decimals, totalSupply);

  const optionList = [
    "Standard Token",
    // "Liquidity Genrator Token",
    // "Baby Token",
    // "Buyback Baby Token",
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 500,
    width: "90%",
    bgcolor: theme === "dark" ? "#111721" : "#fff",
    boxShadow: 24,
    borderRadius: 2,
    color: theme === "light" ? "#111721" : "#fff",
  };
  return (
    <Modal open={open} onClose={() => {}}>
      <Box sx={style}>
        <div className="">
          <div className="  flex justify-between items-center p-3  border-b border-gray-600">
            <h2 className=" text-lg">Create Token</h2>
            <button onClick={() => setOpen(false)}>
              <IoCloseSharp className="text-2xl" />
            </button>
          </div>
          <div className="p-4 pb-8 grid gap-4">
            <div>
              <CustomSelect
                id="tokentype"
                label="Token Type"
                value={tokenOption}
                setValue={setTokenOption}
                list={optionList}
              />
              <p className="text-primary-400 text-sm mt-1 ">0.01 BNB</p>
            </div>
            <CustomInput
              validation={"text"}
              value={name}
              setValue={setName}
              label={"Name"}
              required
            />

            <CustomInput
              validation={"text"}
              value={symbol}
              setValue={setSymbol}
              label={"Symbol"}
              required
            />
            <CustomInput
              validation={"number"}
              value={decimals}
              setValue={setDecimals}
              label={"Decimals"}
              required
            />
            <CustomInput
              validation={"number"}
              value={totalSupply}
              setValue={setTotalSupply}
              label={"Total supply"}
              required
            />
            {/* <div className="custom-checkbox ">
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="
                Implement Rat Anti-Bot System?"
              />
            </div> */}
            <button
              disabled={openA}
              onClick={createToken}
              className="bg-primary-400 text-white block mx-auto rounded-md mt-4 px-4 py-2"
            >
              Create Token{" "}
              {openA ? (
                <img
                  style={{ marginLeft: "33%" }}
                  width="33px"
                  src={spinner}
                ></img>
              ) : null}
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateTokenModal;
