import React from "react";

const ListItem = ({ title = "", desc = "", color = "" }) => {
  return (
    <div className="text-xs sm:text-sm flex justify-between pb-2 items-center border-b border-lightDark">
      <p className=" ">{title}</p>
      <p
        className={`font-semibold ${
          color === "primary" ? "text-primary-400" : "text-gray-400"
        } `}
      >
        {desc}
      </p>
    </div>
  );
};

export default ListItem;
