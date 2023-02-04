import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import Rocket from "../../../assets/rocket.png";
import { useWeb3React } from "@web3-react/core";
import {
  chainIdSelected,
  IGOAbi,
  LaunchPadABI,
  LaunchPadAdd,
} from "../../../config";
import { Contract } from "ethers";
import ResponsiveDialog from "../../../Spinner";
import { Checkbox } from "@mui/material";

export const getContract = (library, account, tokenAdd) => {
  const signer = library?.getSigner(account).connectUnchecked();
  var contract = new Contract(tokenAdd, IGOAbi, signer);
  return contract;
};

const Ownerzone2 = ({ data }) => {
  const { library, account, chainId } = useWeb3React();
  const chain = chainId ? chainId : chainIdSelected;
  const [open, setOpen] = useState();
  const [badge1, setbadge1] = useState(false);
  const [badge2, setbadge2] = useState(false);
  const [badge3, setbadge3] = useState(false);
  const [badge4, setbadge4] = useState(false);
  const [badge5, setbadge5] = useState(false);
  const [badge6, setbadge6] = useState(false);
  const [badge7, setbadge7] = useState(false);
  const [badge8, setbadge8] = useState(false);
  const [badge9, setbadge9] = useState(false);
  const [badge10, setbadge10] = useState(false);
  const [title,setTitle] = useState()


  const myContract = getContract(library, account, data._address);

  useEffect(() => {
    const abc = async ()=>{
      const _badges = await myContract.getBadges()
      console.log("data", _badges);
      setbadge1(_badges[0])
      setbadge2(_badges[1])
      setbadge3(_badges[2])
      setbadge4(_badges[3])
      setbadge5(_badges[4])
      setbadge6(_badges[5])
      setbadge7(_badges[6])
      setbadge8(_badges[7])
      setbadge9(_badges[8])
      setbadge10(_badges[9])
    }

    abc()
  
    
  }, [])
  

  const authorize = async () => {
    
    setOpen(true);
    setTitle("Aurhotizing...")
    try {
      const tx1 = await myContract.adminAllowance(true);

      await tx1.wait();

      if (tx1) {
        setOpen(false);
      }
    } catch (error) {
      console.log("error in authorize", error);
      setOpen(false);
    }
  };


  const _addBadges = async () => {
    setOpen(true);
    setTitle("Adding badges...")
    try {
      const tx1 = await myContract.addBadges([badge1,badge2,badge3,badge4,badge5,badge6,badge7,badge8,badge9,badge10],{gasLimit:300000});

      const receipt = await tx1.wait();

      if (receipt) {
        setOpen(false);
      }
    } catch (error) {
      console.log("error in authorize", error);
      setOpen(false);
    }
  };

  return (
    <div 
    style={{width:"100%"}}
    className=" bg-white  md:col-span-12 dark:bg-dark-400 border dark:border-lightDark rounded-md shadow-xl">
      <div className=" border-b  border-lightDark px-4 py-4">
        <p>Admin zone</p>
      </div>
      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-flow-col gap-3 justify-start">
        {/* <div style={{marginRight:"5px"}} className="w-40">
          <img src={Rocket} alt="" className="w-40" />
        </div> */}
        <div className="mt-4 sm:mt-0">
          <FormControlLabel
            control={<Checkbox 
              checked={badge1}
              onChange={(e)=>{setbadge1(e.target.checked)}}
              color="primary" />}
            label="Audit Badge = 10 Point"
          />
          <FormControlLabel
            control={<Checkbox               
              checked={badge2}
              onChange={(e)=>{setbadge2(e.target.checked)}} color="primary" />}
            label="KYC Badge = 10 Point"
          />
          <FormControlLabel
            control={<Checkbox
              checked={badge3}               onChange={(e)=>{setbadge3(e.target.checked)}} color="primary" />}
            label="Secure Badge = 10 Point"
          />
          <FormControlLabel
            control={<Checkbox
              checked={badge4}               onChange={(e)=>{setbadge4(e.target.checked)}} color="primary" />}
            label="Stable Badge = 10 Point"
          />
          <FormControlLabel
            control={<Checkbox
              checked={badge5}               onChange={(e)=>{setbadge5(e.target.checked)}} color="primary" />}
            label="Super Badge = 10 Point"
          />
          <FormControlLabel
            control={<Checkbox
              checked={badge6}               onChange={(e)=>{setbadge6(e.target.checked)}} color="primary" />}
            label="Last 1 Hour Volume = 10 Point"
          />
          <FormControlLabel
            control={<Checkbox
              checked={badge7}               onChange={(e)=>{setbadge7(e.target.checked)}} color="primary" />}
            label="Last 1 Hour Visitor = 10 Point"
          />
          <FormControlLabel
            control={<Checkbox
              checked={badge8}               onChange={(e)=>{setbadge8(e.target.checked)}} color="primary" />}
            label="Live Connected Visitor = 10 Point"
          />
          <FormControlLabel
            control={<Checkbox
              checked={badge9}               onChange={(e)=>{setbadge9(e.target.checked)}} color="primary" />}
            label="Average Link Visit Time = 10 Point"
          />
          <FormControlLabel
            control={<Checkbox
              checked={badge10}               onChange={(e)=>{setbadge10(e.target.checked)}} color="primary" />}
            label="Unique Affiliate Link Share = 10 Point"
          />
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
                onClick={authorize}
                className="text-sm sm:text-base bg-primary-400 py-1.5 px-6 rounded-md"
              >
                Authorize Pool
              </button>
              <button
                onClick={_addBadges}
                className="text-sm sm:text-base bg-primary-400 py-1.5 px-6 rounded-md"
              >
                Assign Badges
              </button>
              {/* <button className="text-sm sm:text-base bg-primary-400 py-1.5 px-6 rounded-md">
                Cancel Pool
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveDialog open={open} title={title}></ResponsiveDialog>
    </div>
  );
};

export default Ownerzone2;
