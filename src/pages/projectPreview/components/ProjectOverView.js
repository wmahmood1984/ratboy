import React, { useEffect, useState } from "react";
import Tag from "../../../components/tag";
import UserImage from "../../../assets/user.png";
import { FaRegEdit } from "react-icons/fa";
import { FaDiscord, FaGlobe, FaInstagram } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { RiGithubLine, RiTelegramLine } from "react-icons/ri";
import { ImReddit } from "react-icons/im";
import ListItem from "../../../components/listItem";
import Web3 from "web3";
import { IERC20 } from "../../../config";
import { formatEther } from "ethers/lib/utils";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SocialIcons = [
  {
    icon: <FaGlobe />,
    link: "www.google.com",
  },
  {
    icon: <RiTelegramLine />,
    link: "",
  },
  {
    icon: <FaDiscord />,
    link: "",
  },
  {
    icon: <FiFacebook />,
    link: "",
  },
  {
    icon: <FaInstagram />,
    link: "",
  },
  {
    icon: <ImReddit />,
    link: "",
  },
  {
    icon: <RiGithubLine />,
    link: "",
  },
  {
    icon: <FiTwitter />,
    link: "",
  },
];

const ProjectOverView = ({ data, strings, hash,sub_data }) => {
  const web3 = new Web3(Web3.givenProvider);
  var now = new Date().getTime() / 1000;
  const contract = new web3.eth.Contract(IERC20, data[2][0]);
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();
  const [decimals, setDecimals] = useState();
  const [totalSupply, settotalSupply] = useState();
  const { chainId } = useWeb3React();

  const navigate = useNavigate();

  useEffect(() => {
    const abc = async () => {
      const _name = await contract.methods.name().call();
      setName(_name);
      const _symbol = await contract.methods.symbol().call();
      console.log("first", _symbol);

      setSymbol(_symbol);
      const _decimals = await contract.methods.decimals().call();
      setDecimals(_decimals);
      const _totalSupply = await contract.methods.totalSupply().call();
      //settotalSupply(formatEther(_totalSupply))
    };
    abc();
  }, [detailList1]);

  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  function dateFormat(string) {
    var day = new Date(string).getDay();
    var date = new Date(string).getUTCDate();
    var month = new Date(string).getUTCMonth() + 1;
    var _year1 = new Date(string).getUTCFullYear();
    var hours = new Date(string).getUTCHours();
    var formatedHours = hours / 10 > 1 ? `${hours}` : `0${hours}`;
    var minutes = new Date(string).getUTCMinutes();
    var formatedMinutes = minutes / 10 > 1 ? `${hours}` : `0${hours}`;

    return `${days[day]} ${date}:${month}:${_year1}  UTC ${formatedHours}:${formatedMinutes}`;
  }

  const SocialIcons = [
    {
      icon: <FaGlobe />,
      link: strings[6] ? strings[6] : undefined,
    },
    {
      icon: <RiTelegramLine />,
      link: strings[4] ? strings[4] : undefined,
    },
    {
      icon: <FaDiscord />,
      link: strings[7] ? strings[7] : undefined,
    },
    {
      icon: <FiFacebook />,
      link: strings[8] ? strings[8] : undefined,
    },
    {
      icon: <FaInstagram />,
      link: strings[9] ? strings[9] : undefined,
    },
    {
      icon: <ImReddit />,
      link: strings[11] ? strings[11] : undefined,
    },
    {
      icon: <RiGithubLine />,
      link: strings[10] ? strings[10] : undefined,
    },
    {
      icon: <FiTwitter />,
      link: strings[2] ? strings[2] : undefined,
    },
  ];

  return (
    <div className="bg-white dark:bg-dark-400 border dark:border-lightDark p-4 sm:p-6 rounded-md shadow-xl">
      <div className="flex justify-between items-center">
        <div className="grid grid-flow-col justify-start items-center  gap-2">
          <img width={"150px"} src={data[5]} alt="" />
          <div>
            <p className="font-semibold ">{strings[0]}</p>
          </div>
          <Link
            to="/edit_presale"
            state={{ strings, hash, data }}
            className="text-xl sm:text-2xl"
          >
            <FaRegEdit />
          </Link>
        </div>
        <div>
          {/* <Tag upcoming={now < data[4][5]} end={now > data[4][6]} /> */}
          <div
            className={`${
              now < data[4][5]
                ? "text-red-400  bg-yellow-400"
                : now > data[4][6]
                ? " text-red-400  bg-red-400 "
                : "text-green-400  bg-green-400"
            }  bg-opacity-30 text-yellow max-w-max p-0.5 sm:py-2 mt-2 sm:px-4 ml-auto rounded-md text-xs sm:text-sm`}
          >
            <p className=" uppercase flex flex-nowrap">
              {" "}
              <p className="block">•</p>&nbsp;{" "}
              <p>
                {now < data[4][5]
                  ? "upComing"
                  : now > data[4][6]
                  ? "Ended"
                  : "Live"}
              </p>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-6 border-b border-lightDark  pb-2 font-semibold">
          Project Overview
        </p>
        <p className="text-gray-400 text-sm mt-3">{strings[7]}</p>

        <ul className=" flex justify-between items-center my-6">
          {SocialIcons.map((val, i) => {
            if (val.link) {
              return (
                <li>
                  <a href={val.link} className=" text-primary-400 text-2xl ">
                    {val.icon}
                  </a>
                </li>
              );
            }
          })}
        </ul>
        <div>
          <p className="mt-10 border-b border-lightDark  pb-2 font-semibold">
            Token Information
          </p>
          <div className="grid gap-y-4 mt-4">
            <React.Fragment>
              <ListItem
                title={"Presale Address"}
                refA={
                  chainId == "5"
                    ? `https://goerli.etherscan.io/address/${data._address}`
                    : `https://testnet.bscscan.com/address/${data._address}`
                }
                address={data._address}
                linkable={true}
                desc={`${data._address.slice(0, 5)}...${data._address.slice(
                  -4
                )}`}
                color={"primary"}
              />
              <ListItem
                title={"Token Address"}
                refA={
                  chainId == "5"
                    ? `https://goerli.etherscan.io/token/${data[2][0]}`
                    : `https://testnet.bscscan.com/token/${data[2][0]}`
                }
                address={data[2][0]}
                linkable={true}
                desc={`${data[2][0].slice(0, 5)}...${data[2][0].slice(-4)}`}
                color={"primary"}
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem title={"Token name"} desc={name} />
            </React.Fragment>
            <React.Fragment>
              <ListItem title={"Token Symbol"} desc={symbol} />
            </React.Fragment>
            <React.Fragment>
              <ListItem title={"Token Decimals"} desc={decimals} />
            </React.Fragment>
            <React.Fragment>
              <ListItem
                title={"Tokens for Presale"}
                desc={`${Number(formatEther(data[4][0]))} ${strings[1]}`}
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem
                title={"Tokens for Liquidity"}
                desc={`${Number(formatEther(data[4][0])) * data[4][8]} ${
                  strings[1]
                }`}
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem
                title={"Presale Rate"}
                desc={`1 ${
                  window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"
                } = 
            
            ${1 / formatEther(data[4][1])} 
            
            ${strings[1]}`}
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem
                title={"Listing Rate"}
                desc={`1 ${
                  window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"
                } = 
            
            ${1 / formatEther(data[4][10])} 
            
            ${strings[1]}`}
              />
            </React.Fragment>

            <React.Fragment>
              <ListItem
                title={"Soft Cap"}
                desc={Number(formatEther(data[4][2]))}
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem
                title={"Hard Cap"}
                desc={Number(formatEther(data[4][0]))}
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem
                title={"Refund Type"}
                desc={
                  data[4][17] && Number(formatEther(data[4][17])) == 0
                    ? "Refund"
                    : "Burn"
                }
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem
                title={"Presale Start Time"}
                desc={dateFormat(data[4][6] * 1000)}
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem
                title={"Presale End Time"}
                desc={dateFormat(data[4][6] * 1000)}
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem
                title={"Listing On"}
                linkable={true}
                refA={data[2][4]}
                desc={`${data[2][4].slice(0, 4)}...${data[2][4].slice(-4)}`}
                color={"primary"}
                address={data[2][4]}
              />
            </React.Fragment>
            <React.Fragment>
              <ListItem title={"Liquidity Percent"} desc={`${data[4][11]}%`} />
            </React.Fragment>
            {sub_data.liquidity!=0 ?
            <React.Fragment>
            <ListItem
              color={"primary"}
              linkable={true}
              refA={"/lp_list"}
              title={"Liquidity Lockup Time"}
              desc={`${dateFormat(sub_data.liquidity * 1000)}`}
            />
          </React.Fragment> : null
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverView;
const detailList1 = [];
