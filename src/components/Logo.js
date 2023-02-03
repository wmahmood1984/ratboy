import React from "react";

const Logo = () => {
  return (
    <div className="grid grid-flow-col gap-2 justify-start items-center">
      <img src="/assets/logo.png" className="w-14" alt="" />
      <p className="font-medium text-lg">Ratboy</p>
    </div>
  );
};

export default Logo;
