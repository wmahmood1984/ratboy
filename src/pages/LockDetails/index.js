import React from "react";
import { Layout } from "../../components";
import ListItem from "../../components/listItem";

const LockDetails = () => {
  return (
    <Layout>
      <div className=" px-6 mt-28  mb-20 ">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  ">
          <p className="p-4  border-b dark:border-lightDark">Lock Info</p>
          <div className="p-4">
            <div className="grid gap-y-4 mt-4">
              <ListItem title={" Current Locked Amount"} desc={"80,000 QJT"} />
              <ListItem title={"Current Values Locked"} desc={"$0"} />{" "}
              <ListItem
                title={"Token Address"}
                desc={"0xc0d3d6602E183f433bf44675B85Aeb5483361755"}
                color={"primary"}
              />{" "}
              <ListItem title={"Token Name"} desc={"QJI"} />
              <ListItem title={"Token Symbol"} desc={"QJI"} />
              <ListItem title={"Token Decimal"} desc={"18"} />
            </div>
          </div>
        </div>{" "}
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  mt-7 ">
          <p className="p-4  border-b dark:border-lightDark">Lock records</p>
          <div className="p-4">
            <div className="grid gap-y-4 mt-4">
              <ListItem title={" Current Locked Amount"} desc={"80,000 QJT"} />
              <ListItem title={"Current Values Locked"} desc={"$0"} />{" "}
              <ListItem
                title={"Token Address"}
                desc={"0xc0d3d6602E183f433bf44675B85Aeb5483361755"}
                color={"primary"}
              />{" "}
              <ListItem title={"Token Name"} desc={"QJI"} />
              <ListItem title={"Token Symbol"} desc={"QJI"} />
              <ListItem title={"Token Decimal"} desc={"18"} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LockDetails;
