/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { BiRocket } from "react-icons/bi";
import { AiOutlineUnlock, AiOutlineQuestionCircle } from "react-icons/ai";
import { GiAirBalloon } from "react-icons/gi";
import {
  HiOutlineDocumentSearch,
  HiOutlineDocumentReport,
} from "react-icons/hi";

import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Img/RatboyLogo.png";
import { useWeb3React } from "@web3-react/core";
const Sidebar = ({ show, setShow }) => {
const {account} = useWeb3React()
  return (
    <div
      className={`sidebar ${
        show && "active"
      } bg-dark-400 border-r border-lightDark flex flex-col`}
    >
      <div
        className=" border-b border-lightDark flex justify-center items-center sidebar-logo"
        style={{ minHeight: "75px" }}
      >
        <img width={"200px"} src={Logo} alt="" className="mx-auto" />
      </div>
      <div className="flex flex-col justify-between flex-1 px-6 py-4">
        <ul className="">
          {menuList.map((val, i) => (
            <React.Fragment key={i}>
              <li>
                <Link
                  to={account? `${val.link}` : "#"}
                  className="grid grid-flow-col text-sm justify-start gap-x-2 items-center py-2 px-2 hover:bg-primary-400 rounded-lg my-1"
                >
                  <span className="text-lg">{val.icon}</span>{" "}
                  <span>{val.text}</span>
                </Link>
              </li>
              {i === 2 && (
                <div className="border-b border-lightDark my-4"></div>
              )}
            </React.Fragment>
          ))}
          <li className="mt-6">
            <a href="#" className="font-light text-sm ">
              Terms & Conditions
            </a>
          </li>
          <li className="mt-2">
            <a href="#" className="font-light text-sm ">
              Privacy Policy
            </a>
          </li>
          <li>
            <ul className="grid grid-flow-col gap-2 justify-start items-center mt-2">
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.link} className="text-lg">
                    {val.icon}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div>
          <img src={Logo} alt="" />
          <div className="flex justify-between items-center mt-4 font-bold">
            <p>Balance:</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const menuList = [
  {
    text: "Presale Launches",
    icon: <BiRocket />,
    link: "/",
  },
  {
    text: "Token Lock",
    icon: <AiOutlineUnlock />,
    link: "/lockToken",
  },
  // {
  //   text: "Bulk Airdrops",
  //   icon: <GiAirBalloon />,
  //   link: "/",
  // },
  {
    text: "KYC & Audit",
    icon: <HiOutlineDocumentSearch />,
    link: "/",
  },
  {
    text: "Docs",
    icon: <AiOutlineQuestionCircle />,
    link: "/",
  },
  {
    text: "Docs",
    icon: <HiOutlineDocumentReport />,
    link: "/",
  },
];

const socialList = [
  {
    link: "",
    icon: <FaTelegramPlane />,
  },
  {
    link: "",
    icon: <FaTwitter />,
  },
];