import React from "react";

const Progressbar = ({complete}) => {
  console.log("complete",complete)
  return (
    <div className=" overflow-x-hidden rounded-full w-full border-2 border-primary-400 dark:border-white h-4 mt-10">
      <div style={{width:`${complete}%`}} className={` bg-primary-400 h-full rounded-full`}></div>
    </div>
  );
};

export default Progressbar;
