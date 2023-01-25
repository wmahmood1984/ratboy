import React from "react";
import StepWrap from "../components/StepWrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import CustomDatePicker from "../components/CustomDatepicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
const Step2 = ({ increaseStep, decreaseStep, 
  token,handleChange,
  SoftCap,setSoftCap,hardCap,setHardCap,min,setMin,max,setMax,refund,setRefund,router,setRouter,liquidity,setLiquidity,listingRate,setListingRate,
  IDOstart,setIdoStart,liquidityLock,setLiquidityLock,IDOEnd,Allocaiton1,setAllocation1,Allocaiton2,setAllocation2,Allocaiton3,setAllocation3,setIDOEnd

}) => {
  return (
    <div className="pb-10">
      <StepWrap>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-lightDark pb-10">
            <div>
              <div className="flex justify-between items-center">
                <p>
                  Token Address <span className="text-red-400">*</span>
                </p>
                <p className="hidden sm:flex text-violet-300 text-sm  items-center">
                  <span>If i spent 1 BNB how many tokens i will recieve</span>
                  <span className="ml-1 cursor-pointer">
                    <AiOutlineQuestionCircle />
                  </span>
                </p>
              </div>
              <CustomInput
                value={token}
                placeholder="234mknjknfgj453456jmngjf87485hjb435nn23k"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p>Whitelist</p>
                <p className=" text-violet-300 hidden sm:block text-xs sm:text-sm">
                  <span>You can enable/disable whitelist anytime</span>
                </p>
              </div>
              <div
                className="bg-dark-500 border border-lightDark rounded-md"
                style={{ height: "56px" }}
              >
                <input
                  onChange={(e)=>{handleChange(e)}}
                  type="file"
                  className=" bg-transparent  w-full h-full text-gray-500 p-2 py-2 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p>
                  Softcap (BNB) <span className="text-red-400">*</span>
                </p>
                <p className="hidden md:block text-violet-300 text-sm ">
                  {"Softcap must be >= 50% of Hardcap!"}
                </p>
              </div>

              <CustomInput 
                  onChange={(e)=>{setSoftCap(e.target.value)}}
               value={SoftCap} placeholder="0" />
            </div>
            <CustomInputWithLabel value={hardCap} setValue={setHardCap} required />
            <CustomInputWithLabel value={min} setValue={setMin} required label="Minimun buy (BNB)" />
            <CustomInputWithLabel value={max} setValue={setMax} required label="Maximum buy (BNB)" />
            <CustomInputWithLabel value={refund} setValue={setRefund} label="Refund type" />
            <CustomInputWithLabel value={router} setValue={setRouter} label="Router" />
            <CustomInputWithLabel value={liquidity} setValue={setLiquidity} label="liquidity (%)" required />
            <CustomInputWithLabel value={Allocaiton1} setValue={setAllocation1} label="Allocation 1(%)" required />
            <CustomInputWithLabel value={Allocaiton2} setValue={setAllocation2} label="Allocaiton 2 (%)" required />
            <CustomInputWithLabel value={Allocaiton3} setValue={setAllocation3} label="Allocation 3 (%)" required />
            <div>
              <div className="flex justify-between items-center">
                <p>
                  listing rate<span className="text-red-400">*</span>
                </p>
                <p className=" text-violet-300 text-sm ">{"1 BNB = 0 ZETA"}</p>
              </div>
              <CustomInput value={listingRate} setValue={setListingRate} placeholder="0" />
            </div>
          </div>
          <div className="py-10">
            <p className=" text-xs text-violet-300">
              Enter the percentage of raised funds that should be allocated to
              Liquidity on (Min 51%, Max 100%)
            </p>
            <p className=" text-xs mt-4 text-violet-300">
              If i spend 1 BNB on how many tokens will i recieve? Usually this
              amount is lower than presale rate to allow for a higher listing
              price on
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <div>
                  <div className="flex justify-between items-center">
                    <p>
                      Select start time (UTC)
                      <span className="text-red-400">*</span>
                    </p>
                  </div>
                  <CustomDatePicker value={IDOstart}  setValue={setIdoStart}/>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex justify-between items-center">
                    <p>
                      Select End time (UTC)
                      <span className="text-red-400">*</span>
                    </p>
                  </div>
                  <CustomDatePicker value={IDOEnd}  setValue={setIDOEnd}/>
                </div>
              </div>
              <CustomInputWithLabel
                value={liquidityLock}
                setValue={setLiquidityLock}
                label="Liquidity lockup (minutes)"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="custom-checkbox mt-4">
                <div>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Using Vesting Contributor?"
                  />
                </div>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Using Team Vesting?"
                />
              </div>
              <div className="hidden sm:block">
                <p className="  text-primary-400 mt-4 text-sm">
                  Need 0 ZETA to create launchpad
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col gap-x-8 mt-10 justify-center sm:justify-end items-center">
              <button
                onClick={decreaseStep}
                className=" bg-transparent border border-primary-400 py-2 px-8 rounded-md  font-semibold "
              >
                BACK
              </button>
              <button
                onClick={increaseStep}
                className=" bg-primary-400 border border-primary-400  py-2 px-8 rounded-md  font-semibold "
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </StepWrap>
    </div>
  );
};

export default Step2;

const CustomInput = ({ placeholder, value,setValue,...props }) => {
  return (
    <div
      className="bg-dark-500 border border-lightDark rounded-md"
      style={{ height: "56px" }}
    >
      <input
        placeholder={placeholder}
       // key={key}
        {...props}
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
        type="text"
        className=" bg-transparent w-full h-full text-gray-500 p-2"
      />
    </div>
  );
};

const CustomInputWithLabel = ({
  label = "Hardcap (BNB)",
  required,
  placeholder = "0",
  value,
  setValue
}) => {
  return (
    <div>
      <p>
        {label}
        {required && <span className="text-red-400">*</span>}
      </p>
      <CustomInput value={value} setValue={setValue} placeholder={placeholder} />
    </div>
  );
};