import React, { useState } from "react";
import { Layout } from "../../components";
import { FaDiscord, FaGlobe, FaInstagram } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { RiGithubLine, RiTelegramLine } from "react-icons/ri";
import { ImReddit } from "react-icons/im";
import { Contract } from "ethers";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { useLocation, useNavigate } from "react-router";
import { IGOAbi, LaunchPadABI, LaunchPadAdd } from "../../config";
import ResponsiveDialog from "../../Spinner";
const projectId = '2HdKrtd8GBGyqmO0u1BW2Re1hSK';
const projectSecret = '624bcf5bf92747f385771188371089f4';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
    const ipfsClient = require('ipfs-http-client');


export const getContract = (library, account,tokenAdd,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(tokenAdd,abi, signer);
	return contract;
};

const web3 = new Web3(Web3.givenProvider)
const EditPresale = () => {
  const {state} = useLocation()
  const {chainId,account} = useWeb3React()
  const [website,setWebsite] = useState(`${state.strings[2]}`)
  const [facebook,setFacebook] = useState(`${state.strings[3]}`)
  const [twitter,setTwitter] = useState(`${state.strings[4]}`)
  const [github,setGithub] = useState(`${state.strings[5]}`)
  const [telegram,setTelegram] = useState(`${state.strings[6]}`)
  const [instagram,setInstagram] = useState(`${state.strings[7]}`)
  const [discord,setDiscord] = useState(`${state.strings[8]}`)
  const [redit,setRedit] = useState(`${state.strings[9]}`)
  const [desc,setDesc] = useState(`${state.strings[10]}`)
  const [hash,setHash] = useState(`${state.hash}`)
  const [open,setOpen] = useState(false)
  const [status,setStatus] = useState("")
  const navigate = useNavigate()
  console.log("data in edit",state) 
  const myContract2 = new web3.eth.Contract(IGOAbi,state.data[1])




  const inputList = [
    {
      label: "Website",
      placeholder: `${website}`,
      required: true,
      setValue : setWebsite,
      icon: <IoIosGlobe />,
    },
    {
      label: "Facebook",
      placeholder: `${facebook}`,
      required: false,
      setValue: setFacebook,
      icon: <FiFacebook />,
    },
    {
      label: "Twitter",
      placeholder: `${twitter}`,
      required: false,
      setValue : setTwitter,
      icon: <FiTwitter />,
    },
    {
      label: "Github",
      placeholder: `${github}`,
      required: false,
      setValue : setGithub,
      icon: <RiGithubLine />,
    },
    {
      label: "Telegram",
      placeholder: `${telegram}`,
      required: false,
      setValue: setTelegram,
      icon: <RiTelegramLine />,
    },
    {
      label: "Instagram",
      placeholder: `${instagram}`,
      required: false,
      setValue : setInstagram,
      icon: <FaInstagram />,
    },
    {
      label: "Discord",
      placeholder: `${discord}`,
      required: false,
      setValue : setDiscord,
      icon: <FaDiscord />,
    },
    {
      label: "Reddit",
      placeholder: `${redit}`,
      required: false,
      setValue: setRedit,
      icon: <ImReddit />,
    },
  ];

  var imageBugger;

  const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
 });
 
 
 
 const captureFile = async(e)=>{
      e.preventDefault()
    const file = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = async ()=>{
     imageBugger = Buffer(reader.result)
      console.log("buffer",imageBugger)
    client.add(imageBugger).then((res,error) => {
     console.log("pic",res.path,error)
    setHash(`https://gateway.pinata.cloud/ipfs/${res.path}`)
 
 });}
 }

 const update = async ()=>{
  setOpen(true)
  setStatus("Editing PreSale....")
  var counter =0
  try {
    var copyArray = [...state.strings[3]]
    copyArray[2] = website
    copyArray[3] = facebook
    copyArray[4] = twitter
    copyArray[5] = github
    copyArray[6] = telegram
    copyArray[7] = instagram
    copyArray[8] = discord
    copyArray[9] = redit
    copyArray[10] = desc

    myContract2.methods.editPool(copyArray,hash).send({from:account})
    .on("confirmation",(e,r)=>{
      if(counter===0){
        navigate("/")
        setOpen(false)
        counter++
      }
    })
  } catch (error) {
    console.log("err in edit",error)
    setOpen(false)
  }
}


  return (
    <Layout>
      <div className="px-6 mb-10 ">
        <div className="bg-white dark:bg-dark-400 border dark:border-lightDark p-4 sm:p-6 rounded-md shadow mt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <div className=" flex justify-between ">
                <label htmlFor="" className="block mb-1 text-sm">
                  Logo URL
                  {<span className=" text-red-400 ">*</span>}
                </label>
              </div>
              <div className="dark:bg-dark-500 border border-lightDark rounded-md flex h-12">
                <div className="flex justify-center items-center w-12 text-primary-400 text-xl border border-primary-400 rounded-l-md">
                  <FaGlobe />
                </div>
                <input
                     type="file"
                     onChange={captureFile}
                  required
                  className="w-full bg-transparent focus:outline-none flex-1 px-4 text-sm border-l-primary-400 border-l"
                  placeholder={
                    "https://www.zinksale.finance/#/launchpads?chain=BSC-Test"
                  }
                />
              </div>
            </div>
            {inputList.map((item, index) => (
              <React.Fragment key={index}>
                <CustomInputWithIcon
                  required={item.required}
                  icon={item.icon}
                  label={item.label}
                  placeholder={item.placeholder}
                  value={item.placeholder}
                  setValue={item.setValue}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-sm">
              Description
            </label>
            <textarea
              className="border rounded-md border-lightDark dark:bg-dark-500 text-sm w-full mt-1 p-4 focus:outline-none"
              id="w3review"
              name="w3review"
              rows="6"
              cols="50"
              value={desc}
              onChange={(e)=>{setDesc(e.target.value)}}
              placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur possimus, ipsum esse deleniti accusantium facilis exercitationem. Aliquid delectus molestias rerum!"
            ></textarea>
          </div>
          <div className="grid grid-flow-col gap-x-8 mt-10 justify-center items-center">
            <button className=" bg-transparent border border-primary-400  py-2 px-8 rounded-md  font-semibold ">
              BACK
            </button>
            <button 
            onClick={update}
            className=" bg-primary-400 text-white border border-primary-400  py-2 px-8 rounded-md  font-semibold ">
              UPDATE
            </button>
          </div>
        </div>
      </div>
      <ResponsiveDialog open={open} status={status}></ResponsiveDialog>
    </Layout>
  );
};

export default EditPresale;


const CustomInputWithIcon = ({
  placeholder = "placeholder",
  required = false,
  label = "Logo URL",
  value,
  setValue,
  icon = <FaGlobe />,
  labelHelper = "",
}) => {
  return (
    <div className="">
      <label htmlFor="" className="block mb-1 text-sm">
        {label}
        {required && <span className=" text-red-400 ">*</span>}
      </label>
      <div className="dark:bg-dark-500 border border-lightDark rounded-md flex h-12 overflow-hidden">
        <div className="flex justify-center items-center w-12 text-primary-400 text-xl border border-primary-400 rounded-l-md">
          {icon}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          required={required}
          className="w-full bg-transparent focus:outline-none flex-1 px-4 text-sm border-l-primary-400 border-l"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

const Note = () => (
  <div className="note">
    <p className="text-xs">
      <span className=" text-violet-300 mr-2 text-opacity-60">
        URL must end with a supported extension png, jpg, jpeg or gif. You can
        upload your image at
      </span>
      <a
        href=" https://upload.zinksale.finance/"
        className=" text-primary-400"
        target={"_blank"}
      >
        https://upload.zinksale.finance/
      </a>
    </p>
  </div>
);
