import React from "react";

const StepWrap = ({ children }) => {
  return (
    <div className=" bg-white shadow dark:bg-dark-400 px-4 py-10 md:p-10 rounded-lg mb-10">
      {children}
    </div>
  );
};

export default StepWrap;
