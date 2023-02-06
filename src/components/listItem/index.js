import { useWeb3React } from "@web3-react/core";
import React from "react";

const ListItem = ({ title = "", desc = "", color = "",linkable,refA }) => {
  const {chainId } = useWeb3React()
  return (
    <div className="text-xs sm:text-sm flex justify-between pb-2 items-center border-b border-lightDark">
      <p className=" ">{title}</p>
      <p
        className={`font-semibold ${
          color === "primary" ? "text-primary-400" : "text-gray-400"
        } `}
      >
        {linkable? <a target={"_blank"} href={
refA
        }>{desc}</a> : `${desc}` }
      </p>
    </div>
  );
};

export default ListItem;
