/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./style.css";
import { BiRocket } from "react-icons/bi";
import { AiOutlineUnlock, AiOutlineQuestionCircle } from "react-icons/ai";
import DarkModeToggle from "react-dark-mode-toggle";
import { GiAirBalloon } from "react-icons/gi";
import {
  HiOutlineDocumentSearch,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { ThemeContext } from "../../context/themeContext";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Img/Ratpad logo compressed.png";
import { useWeb3React } from "@web3-react/core";
const Sidebar = ({ show, setShow }) => {
  const { theme, setTheme } = useContext(ThemeContext);
const {account} = useWeb3React()
  return (
    <div
    className={`sidebar ${
      show && "active"
    } bg-white dark:bg-dark-400 border-r dark:border-lightDark border-gray-300 flex flex-col text-black dark:text-white`}
    >
      <div
        className=" border-b border-gray-300  dark:border-lightDark flex pl-6 items-center sidebar-logo"
        style={{ minHeight: "75px" }}
      >
<div className="grid grid-flow-col gap-2 justify-start items-center">
      <img src={Logo} className="w-14" alt="" />
      <p className="font-medium text-lg">Ratboy</p>
    </div>
      </div>
      <div className="flex flex-col justify-between flex-1 px-6 py-4">
        <ul className="">
          {menuList.map((val, i) => (
            <React.Fragment key={i}>
              <li>
                <Link
                  to={account? `${val.link}` : "#"}
                  className="grid grid-flow-col text-sm justify-start gap-x-2 items-center py-2 px-2 hover:bg-primary-400 hover:text-white rounded-lg my-1 font-bold"
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
        <div className="grid grid-flow-col gap-2 justify-start items-center">
      <img src={Logo} className="w-14" alt="" />
      <p className="font-medium text-lg">Ratboy</p>
    </div>
          {/* <div className="flex justify-between items-center mt-4 font-bold">
            <p>Balance:</p>
            <p>$0.00</p>
          </div> */}
          <div className="mt-2">
              {/* <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button> */}
              <DarkModeToggle
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                checked={theme === "dark"}
                size={50}
              />
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
  // {
  //   text: "Docs",
  //   icon: <AiOutlineQuestionCircle />,
  //   link: "/",
  // },
  // {
  //   text: "Docs",
  //   icon: <HiOutlineDocumentReport />,
  //   link: "/",
  // },
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
