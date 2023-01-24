import React from "react";

const Tag = ({ upcoming , end  }) => {
  const color = upcoming
    ? "text-yellow-400  bg-yellow-400"
    : end
    ? " text-red-400  bg-red-400 "
    : "text-green-400  bg-green-400";

  return (
    <div
      className={`${color}  bg-opacity-30 text-yellow max-w-max p-0.5 sm:py-2 mt-2 sm:px-4 ml-auto rounded-md text-xs sm:text-sm`}
    >
      <p className=" uppercase flex flex-nowrap">
        {" "}
        <p className="block">•</p>&nbsp; <p>{upcoming ? "upComing" : end? "Ended": "Live" }</p>
      </p>
    </div>
  );
};

export default Tag;
