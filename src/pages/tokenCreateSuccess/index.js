import React from "react";
import { Layout } from "../../components";
// import ListItem from "../../components/listItem";
import { shortAddress } from "../../helpers";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
const TokenCreateSuccess = () => {
  const token = "0xE769D4bA7FbE3890427a577C96714429c91210BF";
  const data = [
    {
      title: "Name",
      data: "Mytoken",
    },
    {
      title: "Symbol",
      data: "MT",
    },
    {
      title: "Total Supply",
      data: "10,000,000,000",
    },
    {
      title: "Address",
      data: (
        <span>
          <span className="md:hidden">{shortAddress(token)} </span>
          <span
            className=" hidden md:inline-block
          "
          >
            {token}
          </span>
        </span>
      ),
    },
  ];
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      toast.success("Copied!");
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };
  return (
    <Layout>
      <div className="px-4 pb-10 pt-24 grid grid-cols-1 gap-y-4">
        <div className="bg-white md:col-span-5 dark:bg-dark-400 border dark:border-lightDark rounded-md shadow-xl p-4 py-10 px-6">
          <p className="text-green-400 text-center text-xl">
            Your token was created!
          </p>
          <table className="w-full mt-5">
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b dark:border-lightDark">
                  <td className="py-3 pr-4">{item.title}</td>
                  <td className="text-primary-400 py-3 pr-4">{item.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col md:flex-row  justify-center items-center mt-5">
            <button className="bg-primary-400 text-white md:w-auto w-full px-10 py-1.5 sm:py-2 rounded-md">
              View Transaction
            </button>
            <button
              onClick={() => copyToClipBoard(token)}
              className="bg-primary-400 text-white md:w-auto w-full px-10 py-1.5 sm:py-2 my-4 md:my-0 md:ml-2 rounded-md"
            >
              Copy Address
            </button>{" "}
            <button className="bg-primary-400 text-white md:w-auto w-full px-10 py-1.5 sm:py-2 md:ml-2 rounded-md">
              Create LaunchPad
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TokenCreateSuccess;
