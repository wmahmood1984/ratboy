import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import Rocket from "../../../assets/rocket.png";
const Ownerzone = () => {
  return (
    <div className=" md:col-span-7 bg-dark-400 border border-lightDark rounded-md shadow-xl">
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

            <div className="grid grid-flow-col gap-x-4 justify-start items-center text-md mt-4 ">
              <button className="text-sm sm:text-base bg-primary-400 py-1.5 px-6 rounded-md">
                Finalize Pool
              </button>
              <button className="text-sm sm:text-base bg-primary-400 py-1.5 px-6 rounded-md">
                Cancel Pool
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ownerzone;
