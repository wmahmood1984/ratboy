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





const ProjectOverView = ({data}) => {



  const web3 = new Web3(Web3.givenProvider)
  var now = new Date().getTime()/1000
  const contract = new web3.eth.Contract(IERC20,data[2][0])
  const [name,setName]=useState()
  const [symbol,setSymbol]=useState()
  const [decimals,setDecimals]=useState()
  const [totalSupply,settotalSupply]=useState()





  

  useEffect(() => {
    const abc = async () => {
      const _name = await contract.methods.name().call()
      setName(_name)
      const _symbol = await contract.methods.symbol().call()
      console.log("first",_symbol )

      setSymbol(_symbol)
      const _decimals = await contract.methods.decimals().call()
      setDecimals(_decimals)
      const _totalSupply = await contract.methods.totalSupply().call()
       //settotalSupply(formatEther(_totalSupply))

    };
    abc();
  }, [detailList1]);

  const days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]

  function dateFormat(string){
    var day = new Date(string).getDay()
    var date = new Date(string).getUTCDate()
    var month = new Date(string).getUTCMonth()+1
    var _year1 = new Date(string).getUTCFullYear()
    var hours = new Date(string).getUTCHours()
    var formatedHours = hours/10>1? `${hours}` : `0${hours}`
    var minutes = new Date(string).getUTCMinutes()
    var formatedMinutes = minutes/10>1? `${hours}` : `0${hours}`
    
    return `${days[day]} ${date}:${month}:${_year1}  UTC ${formatedHours}:${formatedMinutes}`
  }


  const SocialIcons = [
    {
      icon: <FaGlobe />,
      link: data[3][6]?data[3][6]:undefined,
    },
    {
      icon: <RiTelegramLine />,
      link: data[3][4]?data[3][4]:undefined,
    },
    {
      icon: <FaDiscord />,
      link: data[3][7]?data[3][7]:undefined,
    },
    {
      icon: <FiFacebook />,
      link: data[3][8]?data[3][8]:undefined,
    },
    {
      icon: <FaInstagram />,
      link: data[3][9]?data[3][9]:undefined,
    },
    {
      icon: <ImReddit />,
      link: data[3][11]?data[3][11]:undefined,
    },
    {
      icon: <RiGithubLine />,
      link: data[3][10]?data[3][10]:undefined,
    },
    {
      icon: <FiTwitter />,
      link: data[3][2]?data[3][2]:undefined,
    },
  ];

  return (
    <div className="bg-dark-400 border border-lightDark p-4 sm:p-6 rounded-md shadow-xl">
      <div className="flex justify-between items-center">
        <div className="grid grid-flow-col justify-start items-center  gap-2">
          <img src={UserImage} alt="" className="w-10 sm:w-auto" />
          <div>
            <p className="font-semibold ">{data[3][0]}</p>
          </div>
          <button className="text-xl sm:text-2xl">
            <FaRegEdit />
          </button>
        </div>
        <div>
        <Tag upcoming={now < data[4][6]} end={now > data[4][7]} />
        </div>
      </div>
      <div>
        <p className="mt-6 border-b border-lightDark  pb-2 font-semibold">
          Project Overview
        </p>
        <p className="text-gray-400 text-sm mt-3">
          {data[3][7]}
        </p>

        <ul className=" flex justify-between items-center my-6">
          {SocialIcons.map((val, i) => {
            if(val.link){
              return(
                <li >
                  <a href={val.link} className=" text-primary-400 text-2xl ">
                    {val.icon}
                  </a>
                </li>
              )
            }
          }
            
            
          )}
        </ul>
        <div>
          <p className="mt-10 border-b border-lightDark  pb-2 font-semibold">
            Token Information
          </p>
          <div className="grid gap-y-4 mt-4">
              <React.Fragment >
                <ListItem title={"Presale Address"} desc={`${data._address.slice(0,5)}...${data._address.slice(-4)}`} color={"primary"} />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Token name"} desc={name} />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Token Symbol"} desc={symbol} />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Token Decimals"} desc={decimals} />
              </React.Fragment> 
              <React.Fragment >
                <ListItem title={"Tokens for Presale"} desc={`${Number(formatEther(data[4][0]))} ${data[3][1]}`}  />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Tokens for Liquidity"} desc={`${Number(formatEther(data[4][0]))*data[4][8]} ${data[3][1]}`}  />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Presale Rate"} desc={`1 ${window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"} = 
            
            ${1/ formatEther(data[4][1])} 
            
            ${data[3][1]}`} />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Listing Rate"} desc={`1 ${window.ethereum?.networkVersion == 97 ? "BNB" : "ETH"} = 
            
            ${1/ formatEther(data[4][10])} 
            
            ${data[3][1]}`}  />
              </React.Fragment>
             
              <React.Fragment >
                <ListItem title={"Soft Cap"} desc={Number(formatEther(data[4][2]))} />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Hard Cap"} desc={Number(formatEther(data[4][0]))}  />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"UnSold Tokens"} desc={Number(formatEther(data[4][0]))-Number(data.investedTokens)}  />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Presale Start Time"} desc={dateFormat(data[4][6]*1000)}  />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Presale End Time"} desc={dateFormat(data[4][6]*1000)}  />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Listing On"} desc={`dummy`} color={"primary"} />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Liquidity Percent"} desc={`dummy%`} />
              </React.Fragment>
              <React.Fragment >
                <ListItem title={"Liquidity Lockup Time"} desc={"dummy"} />
              </React.Fragment>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverView;
const detailList1 = [

 



  
 

 




  
];



