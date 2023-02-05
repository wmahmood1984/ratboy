import React, { useState } from "react";
import { Layout } from "../../components";
import All from "./components/All";
import MyLock from "./components/MyLock";

const LpLockList = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["All", "My Lock"];

  return (
    <Layout>
      <div className=" px-6 mt-28  mb-20 ">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark   rounded-md shadow grid grid-cols-1  p-6">
          <div>
            <input
              type="text"
              className="py-2 rounded-md w-full bg-transparent border dark:border-gray-500 px-6"
              placeholder="Search by token address..."
            />
          </div>
          <div className="grid grid-flow-col gap-4 justify-end items-center mt-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${
                  selectedTab === index
                    ? "border-primary-400 text-primary-400"
                    : " border-transparent"
                } border-b`}
                onClick={() => setSelectedTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          {selectedTab === 0 ? <All /> : <MyLock />}
        </div>
      </div>
    </Layout>
  );
};

export default LpLockList;
