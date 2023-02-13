import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import Rocket from "../../../assets/rocket.png";
import { Contract } from "ethers";
import { IGOAbi } from "../../../config";
import { useWeb3React } from "@web3-react/core";
import ResponsiveDialog from "../../../Spinner";

export const getContract = (library, account, tokenAdd) => {
  const signer = library?.getSigner(account).connectUnchecked();
  var contract = new Contract(tokenAdd, IGOAbi, signer);
  return contract;
};

const Ownerzone = ({data,toggle,setToggle}) => {
  const { library, account} = useWeb3React();

  const [open, setOpen] = useState();
  const [title,setTitle] = useState()


  const myContract = getContract(library, account, data._address);

  const _finalize = async () => {
    
    setOpen(true);
    setTitle("Finalizing...")
    try {
      const tx1 = await myContract.finalize({gasLimit:30000000});

      await tx1.wait();

      if (tx1) {
        setOpen(false);
        setToggle(!toggle)
      }
    } catch (error) {
      console.log("error in authorize", error);
      setOpen(false);
    }
  };


  return (
    <div className=" bg-white  md:col-span-7 dark:bg-dark-400 border dark:border-lightDark rounded-md shadow-xl">
      <div className=" border-b  border-lightDark px-4 py-4">
        <p>Owner zone</p>
      </div>
      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-flow-col gap-3 justify-start">
        <div className="w-40">
          <img src={Rocket} alt="" className="w-40" />
        </div>
        <div className="flex flex-col justify-between">
          {/* <div className="">
            <label id="demo-row-radio-buttons-group-label">Sell type</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Public"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                value="whitelist"
                control={<Radio />}
                label="Whitelist"
              />
              <FormControlLabel
                value="public Anti-Bot"
                control={<Radio />}
                label="Public Anti-Bot"
              />
            </RadioGroup>
          </div> */}
          <div className="mt-4 sm:mt-0">
            <p className="mb-1">Pool Action</p>

            <div className="grid grid-flow-col gap-x-4 justify-start items-center text-md mt-4 text-white ">
              <button 
              onClick={_finalize}
              className="text-sm sm:text-base bg-primary-400 py-1.5 px-6 rounded-md">
                Finalize Pool
              </button>
              <button className="text-sm sm:text-base bg-primary-400 py-1.5 px-6 rounded-md">
                Cancel Pool
              </button>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveDialog open={open} title={title}></ResponsiveDialog>
    </div>
  );
};

export default Ownerzone;
