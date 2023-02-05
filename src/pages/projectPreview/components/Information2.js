import { formatEther } from "ethers/lib/utils";
import React from "react";
import ListItem from "../../../components/listItem";




const Information2 = ({data,ent}) => {
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
        <p>Vesting Information</p>
      </div>
      <div className="p-4 sm:p-6 ">
        <div className="grid gap-y-4 mt-4">

            <React.Fragment >
              <ListItem title={"First Release"} desc={`${data[4][13]}%`} color={"primary"} />
            </React.Fragment>
            <React.Fragment >
              <ListItem title={"Vesting Cycle in Days"} desc={`${data[4][4]} Day(s)`} color={"parimary"} />
            </React.Fragment>
            <React.Fragment >
              <ListItem title={"Subsequent release per cycle"} desc={`${data[4][14]}%`} />
            </React.Fragment>
            <React.Fragment >
              <ListItem title={"Your Entitlement"}desc={`${ent}`} />
            </React.Fragment>

        </div>
      </div>
    </div>
  );
};

export default Information2;
