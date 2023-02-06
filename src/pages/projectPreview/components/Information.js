import { formatEther } from "ethers/lib/utils";
import React from "react";
import ListItem from "../../../components/listItem";

const Information = ({data}) => {
  const informationList = [
    {
      title: "Status",
      desc: "Incoming",
      color: "primary",
    },
    {
      title: "Sale Type",
      desc: "Public",
      color: "primary",
    },
    {
      title: "Minimum Buy",
      desc: "0.1 BNB",
    },
    {
      title: "Minimum Sell",
      desc: "0.1 BNB",
    },
  ];

  return (
    <div className="bg-white md:col-span-5 dark:bg-dark-400 border dark:border-lightDark rounded-md shadow-xl">
      <div className=" border-b  border-lightDark px-4 py-4">
        <p>Information</p>
      </div>
      <div className="p-4 sm:p-6 ">
        <div className="grid gap-y-4 mt-4">

            <React.Fragment >
              <ListItem title={"Status"} desc={"Incoming"} color={"primary"} />
            </React.Fragment>
            <React.Fragment >
              <ListItem title={"Sale Type"} desc={"Public"} color={"parimary"} />
            </React.Fragment>
            <React.Fragment >
              <ListItem title={"Max Buy"} desc={`${formatEther(data[4][2])} ${window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"}`} />
            </React.Fragment>
            <React.Fragment >
              <ListItem title={"Minimum Buy"}desc={`${formatEther(data[4][3])} ${window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"}`} />
            </React.Fragment>

        </div>
      </div>
    </div>
  );
};

export default Information;
