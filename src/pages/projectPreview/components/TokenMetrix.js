import React from "react";
import Graph from "../../../assets/graph.svg";

const TokenMetrix = ({data}) => {
  return (
    <div className="bg-dark-400 border border-lightDark rounded-md shadow-xl">
      <div className=" border-b  border-lightDark px-4 py-4">
        <p>Token Metrix</p>
      </div>
      <div className="py-4 flex justify-center  px-4">
        <img src={Graph} alt="" />
      </div>
    </div>
  );
};

export default TokenMetrix;
