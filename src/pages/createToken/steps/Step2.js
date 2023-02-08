import React, { useContext, useState } from "react";
import StepWrap from "../components/StepWrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import CustomDatePicker from "../components/CustomDatepicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import { toast } from "react-hot-toast";
import { ThemeContext } from "@emotion/react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Step2 = ({
  increaseStep,
  decreaseStep,
  token,
  handleChange,
  SoftCap,
  setSoftCap,
  hardCap,
  setHardCap,
  min,
  setMin,
  max,
  setMax,
  refund,
  setRefund,
  router,
  setRouter,
  liquidity,
  setLiquidity,
  listingRate,
  setListingRate,
  IDOstart,
  setIdoStart,
  liquidityLock,
  setLiquidityLock,
  IDOEnd,
  Allocaiton1,
  setAllocation1,
  Allocaiton2,
  setAllocation2,
  Allocaiton3,
  setAllocation3,
  setIDOEnd,
  noOfToken,
  setNoOFTokens,
  setPrice,
  price,
  initialVesting,
  setInitialVesting,
  vesting,setVesting,vestingMonths,setVestingMonths,
}) => {
  const [usingVest, setUsingVest] = useState(false);
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
                <p className="hidden sm:flex  text-violet-500 dark:text-violet-300 text-sm  items-center">
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
                <p className="  text-violet-500 dark:text-violet-300 hidden sm:block text-xs sm:text-sm">
                  <span>You can enable/disable whitelist anytime</span>
                </p>
              </div>
              <div
                className="dark:bg-dark-500 border border-lightDark rounded-md"
                style={{ height: "56px" }}
              >
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="file"
                  className=" bg-transparent  w-full h-full text-gray-500 p-2 py-2 focus:outline-none"
                />
              </div>
            </div>
            <CustomInputWithLabel
              validation={"number"}
              value={noOfToken}
              setValue={setNoOFTokens}
              required
              label={"No of Tokens"}
            />
            <CustomInputWithLabel
              validation={"number"}
              value={price}
              setValue={setPrice}
              required
              label={"Presale Rate"}
            />
            <div>
              <div className="flex justify-between items-center">
                <p>
                  listing rate<span className="text-red-400">*</span>
                </p>
                <p className=" text-violet-300 text-sm ">{"1 BNB = 0 ZETA"}</p>
              </div>
              <CustomInput
                validation={"number"}
                value={listingRate}
                setValue={setListingRate}
                placeholder="0"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p>
                  Softcap{" "}
                  {`${
                    window.ethereum?.networkVersion == 97 ? "(BNB)" : "(Eth)"
                  }`}{" "}
                  <span className="text-red-400">*</span>
                </p>
                <p className="hidden md:block  text-violet-500 dark:text-violet-300 text-sm ">
                  {"Softcap must be >= 50% of Hardcap!"}
                </p>
              </div>

              <CustomInput
                validation={"number"}
                setValue={setSoftCap}
                value={SoftCap}
                placeholder="0"
              />
            </div>

            <CustomInputWithLabel
              validation={"number"}
              value={hardCap}
              setValue={setHardCap}
              required
              label={`HardCap ${`${
                window.ethereum?.networkVersion == 97 ? "(BNB)" : "(Eth)"
              }`}`}
            />
            <CustomInputWithLabel
              validation={"number"}
              value={min}
              setValue={setMin}
              required
              label={`Minimum buy ${
                window.ethereum?.networkVersion == 97 ? "(BNB)" : "(Eth)"
              }`}
            />
            <CustomInputWithLabel
              validation={"number"}
              value={max}
              setValue={setMax}
              required
              label={`Maximum buy ${
                window.ethereum?.networkVersion == 97 ? "(BNB)" : "(Eth)"
              }`}
            />
            <div>
              <p>
                Refund
                <span className="text-red-400">*</span>
              </p>
              <CustomSelect
                id="Refund"
                label="Refund"
                value={refund}
                setValue={setRefund}
                list={["Refund", "Burn"]}
              />
            </div>

            <CustomInputWithLabel
              validation={"address"}
              value={router}
              setValue={setRouter}
              label="Router"
            />
            <CustomInputWithLabel
              validation={"number"}
              value={liquidity}
              setValue={setLiquidity}
              label="liquidity (%)"
              required
            />
            {/* <CustomInputWithLabel validation={"number"} value={Allocaiton1} setValue={setAllocation1} label="Allocation 1(%)" required />
            <CustomInputWithLabel validation={"number"} value={Allocaiton2} setValue={setAllocation2} label="Allocaiton 2 (%)" required />
            <CustomInputWithLabel validation={"number"} value={Allocaiton3} setValue={setAllocation3} label="Allocation 3 (%)" required /> */}
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
                  <CustomDatePicker value={IDOstart} setValue={setIdoStart} />
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
                  <CustomDatePicker value={IDOstart+(24*60*60*1000)} setValue={setIDOEnd} />
                </div>
              </div>
              <CustomInputWithLabel
                validation={"number"}
                value={liquidityLock}
                setValue={setLiquidityLock}
                label="Liquidity lockup (Days)"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="custom-checkbox mt-4">
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={usingVest}
                        onChange={() => setUsingVest(!usingVest)}
                      />
                    }
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
            {usingVest && (
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className=" md:col-span-2">
                  <CustomInputWithLabel
                    validation={"number"}
                    label="First release for presale (percent)"
                    required
                    value={initialVesting}
                    setValue={setInitialVesting}
                    placeholder="EX: 40%"
                  />
                </div>
                <CustomInputWithLabel
                  validation={"number"}
                  label="Vesting period each cycle (days)"
                  required
                  placeholder="EX: 40%"
                  value={vestingMonths}
                  setValue={setVestingMonths}
                />{" "}
                <CustomInputWithLabel
                  validation={"number"}
                  label="Presale token release each cycle (percent)"
                  required
                  placeholder="EX: 40%"
                  value={vesting}
                  setValue={setVesting}

                />
              </div>
            )}
            <div className="grid grid-flow-col gap-x-8 mt-10 justify-center sm:justify-end items-center">
              <button
                onClick={decreaseStep}
                className=" bg-transparent border border-primary-400  py-2 px-8 rounded-md  font-semibold "
              >
                BACK
              </button>
              <button
                onClick={increaseStep}
                className=" bg-primary-400 text-white border border-primary-400  py-2 px-8 rounded-md  font-semibold "
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

const CustomInput = ({
  placeholder,
  value,
  setValue,
  validation,
  ...props
}) => {
  return (
    <div
      className="dark:bg-dark-500 border border-lightDark rounded-md"
      style={{ height: "56px" }}
    >
      <input
        placeholder={placeholder}
        // key={key}
        {...props}
        value={value}
        onChange={(e) => {
          if (validation == "number") {
            if (!isNaN(e.target.value)) {
              setValue(e.target.value);
            } else {
              toast.error("not a valid number");
            }
          } else if (validation == "address") {
            if (
              e.target.value.slice(0, 2) == "0x" &&
              e.target.value.length == 42
            ) {
              setValue(e.target.value);
            } else {
              toast.error("not a valid address");
            }
          } else {
            setValue(e.target.value);
          }
        }}
        type="text"
        className=" bg-transparent  w-full h-full text-gray-500 p-2 py-2 focus:outline-none"
      />
    </div>
  );
};

const CustomInputWithLabel = ({
  label,
  required,
  placeholder = "0",
  value,
  setValue,
  validation,
}) => {
  return (
    <div>
      <p>
        {label}
        {required && <span className="text-red-400">*</span>}
      </p>
      <CustomInput
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        validation={validation}
      />
    </div>
  );
};

const CustomSelect = ({ list, id, label, value, setValue }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        theme === "dark"
          ? "custom-select"
          : "dark:bg-dark-500 border border-lightDark rounded-md"
      }`}
    >
      <FormControl size="small" fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          className=" bg-transparent  w-full h-full text-gray-500 p-2 py-2 focus:outline-none"
          labelId={id}
          // id="demo-simple-select"
          value={value}
          label={label}
          onChange={(e) => setValue(e.target.value)}
        >
          {list.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
