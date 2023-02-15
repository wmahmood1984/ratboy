import { formatEther } from "ethers/lib/utils";
import React, { useState } from "react";
import ListItem from "../../../components/listItem";
import { CSVLink } from "react-csv";
import ContribotrsListModal from "../../../components/ContributorsListModal";

const Information = ({ data }) => {
  const [showList, setShowList] = useState(false);
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
  const contributorList = [
    {
      address: "abc",
      value: 0.01,
    },
    {
      address: "acx",
      value: 0.02,
    },
  ];
  const handleList = () => setShowList(false);
  return (
    <div className="bg-white md:col-span-5 dark:bg-dark-400 border dark:border-lightDark rounded-md shadow-xl">
      <div className=" border-b  border-lightDark px-4 py-4">
        <p>Information</p>
      </div>
      <div className="p-4 sm:p-6 ">
        <div className="grid gap-y-4 mt-4">
          <ListItem title={"Status"} desc={"Incoming"} color={"primary"} />
          <ListItem title={"Sale Type"} desc={"Public"} color={"parimary"} />
          <ListItem
            title={"Max Buy"}
            desc={`${formatEther(data[4][2])} ${
              window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"
            }`}
          />
          <ListItem
            title={"Minimum Buy"}
            desc={`${formatEther(data[4][3])} ${
              window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"
            }`}
          />{" "}
          <ListItem title={"Total Contributors"} desc={`0`} />{" "}
          <button
            className=" text-white rounded-lg py-2.5  bg-primary-400 w-full text-sm font-bold"
            onClick={() => setShowList(true)}
          >
            See All Contributors
          </button>
          <CSVLink data={contributorList} filename="contributor_list">
            <button className=" text-white rounded-lg py-2.5  bg-primary-400 w-full text-sm font-bold">
              Export Contributor List
            </button>
          </CSVLink>
        </div>
      </div>
      <ContribotrsListModal open={showList} handleClose={handleList} />
    </div>
  );
};

export default Information;
