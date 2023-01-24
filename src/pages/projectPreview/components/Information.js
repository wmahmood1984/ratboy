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
    <div className="md:col-span-5 bg-dark-400 border border-lightDark rounded-md shadow-xl">
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
              <ListItem title={"Max Buy"} desc={`${formatEther(data[4][2])} ${data[3][1]}`} />
            </React.Fragment>
            <React.Fragment >
              <ListItem title={"Minimum Buy"}desc={`${formatEther(data[4][3])} ${data[3][1]}`} />
            </React.Fragment>

        </div>
      </div>
    </div>
  );
};

export default Information;
