import React, { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";
const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="text-white">
      <div className="flex dashboard">
        <div className=" relative dashboard-left">
          <Sidebar show={show} setShow={setShow} />
        </div>
        <div className="dashboard-right flex-1">
          <Header show={show} setShow={setShow} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
