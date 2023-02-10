import { useWeb3React } from "@web3-react/core";
import React from "react";
import { FaCopy } from "react-icons/fa";
// import { copyToClipBoard } from "../../helpers";
import Clipboard from "react-clipboard.js";
import { toast } from "react-hot-toast";
const ListItem = ({
  title = "",
  desc = "",
  color = "",
  linkable,
  refA,
  address,
}) => {
  const { chainId } = useWeb3React();
  return (
    <div className="text-xs sm:text-sm flex justify-between pb-2 items-center border-b border-lightDark">
      <p className=" ">{title}</p>
      <p
        className={`font-semibold grid grid-flow-col gap-1 items-center ${
          color === "primary" ? "text-primary-400" : "text-gray-400"
        } `}
      >
        {linkable ? (
          <a target={"_blank"} href={refA} rel="noreferrer">
            {desc}
          </a>
        ) : (
          `${desc}`
        )}
        {address && (
          <Clipboard
            data-clipboard-text={address}
            onSuccess={() => toast.success("Copied to clipboard!")}
          >
            <button>
              <FaCopy />
            </button>
          </Clipboard>
        )}
      </p>
    </div>
  );
};

export default ListItem;
