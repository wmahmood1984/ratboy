// import { useState } from "react";
import user from "../../../assets/user.png";
import coin from "../../../assets/coin.png";
import StepWrap from "../components/StepWrap";
import { useState } from "react";
import CreateTokenModal from "../../../components/CreateTokenModal";
const Step1 = ({ increaseStep, decreaseStep,token,setToken,name,symbol,decimals }) => {
  const [openCreateToken, setOpenCreateToken] = useState();

  return (
    <StepWrap>
      <div className=" grid md:grid-cols-12">
        <div className="order-2 md:order-1 md:col-span-8 md:pr-20 border-t md:border-t-0 pt-10 mt-10 md:pt-0 md:mt-0  md:border-r border-lightDark">
          <div className="flex justify-between items-center text-xs sm:text-base">
            <p>
              Token Address <span className=" text-red-400">*</span>{" "}
            </p>
            <p className=" text-violet-300">Create pool fee: 1BNB</p>
          </div>
          <div className="w-full border border-dark-500 dark:bg-dark-500 overflow-hidden rounded-lg text-gray-600 mt-5">
            <input
              type="text"
              value={token}
              onChange={(e)=>{setToken(e.target.value)}}
              className="  py-4 px-4 w-full h-full bg-transparent focus:outline-none"
              placeholder="234mknjknfgj453456jmngjf87485hjb435nn23k"
            />
          </div>

          <div className="mt-4 sm:mt-10">
            <div className=" py-4 flex justify-between items-center mb-1.5 border-b  border-lightDark text-sm">
              <p>Name</p>
              <p className="text-primary-400">{name}</p>
            </div>
            <div className="py-4 flex justify-between items-center mb-1.5 border-b  border-lightDark text-sm">
              <p>Symbol</p>
              <p className="flex items-center">
                <span className="text-gray-500">{symbol}</span>
                <div className="w-6 ml-2">
                  <img src={user} alt="" />
                </div>{" "}
              </p>
            </div>
            <div className="py-4 flex justify-between items-center mb-1.5 border-b  border-lightDark text-sm">
              <p>Decimal</p>
              <p className=" text-gray-500">{decimals}</p>
            </div>
          </div>
          <div className="flex justify-between mt-10 items-center">
            <p className="text-sm ">
              <span className="text-red-400">*</span> is required field
            </p>
            <button
              className=" text-white bg-primary-400 rounded-md px-10 py-2"
              onClick={increaseStep}
            >
              Next
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 md:col-span-4 flex flex-col justify-between items-center">
          <h3 className=" font-bold text-center text-xl">
            Want to Create a new Token?
          </h3>
          <img src={coin} alt="" className="mx-auto " />
          <button
            className="px-10 py-2 rounded-md  border border-primary-400"
            onClick={() => setOpenCreateToken(true)}
          >
            Create Token
          </button>
        </div>
      </div>
      <CreateTokenModal open={openCreateToken} setOpen={setOpenCreateToken} />
    </StepWrap>
  );
};

export default Step1;
