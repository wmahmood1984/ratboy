import React from "react";
import StepWrap from "../components/StepWrap";
import { FaDiscord, FaGlobe, FaInstagram } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { RiGithubLine, RiTelegramLine } from "react-icons/ri";
import { ImReddit } from "react-icons/im";
import { GiTuba } from "react-icons/gi";
const Step3 = ({ increaseStep, decreaseStep 
  ,hash,
  captureFile,
  website,
  setWebsite,
  facebook,
  setFacebook,
  twitter,
  setTwitter,
  github,
  setGithub,
  telegram,
  setTelegram,
  instagram,
  setInstagram,
  discord,
  setDiscord,
  redit,
  setRedit,
  description,
  setDescription,

}) => {
  const inputList = [
    {
      label: "Website",
      placeholder: "https://google.com",
      required: true,
      icon: <IoIosGlobe />,
    },
    {
      label: "Facebook",
      placeholder: "https://google.com",
      required: false,
      icon: <FiFacebook />,
    },
    {
      label: "Twitter",
      placeholder: "https://google.com",
      required: false,
      icon: <FiTwitter />,
    },
    {
      label: "Github",
      placeholder: "https://google.com",
      required: false,
      icon: <RiGithubLine />,
    },
    {
      label: "Telegram",
      placeholder: "https://google.com",
      required: false,
      icon: <RiTelegramLine />,
    },
    {
      label: "Instagram",
      placeholder: "https://google.com",
      required: false,
      icon: <FaInstagram />,
    },
    {
      label: "Discord",
      placeholder: "https://google.com",
      required: false,
      icon: <FaDiscord />,
    },
    {
      label: "Reddit",
      placeholder: "https://google.com",
      required: false,
      icon: <ImReddit />,
    },
  ];

  return (
    <StepWrap>
      <div>
        {/* <CustomInputWithIcon
          required
          placeholder="https://www.zinksale.finance/#/launchpads?chain=BSC-Test"
        /> */}
        <div className="">
          <div className="lg:hidden text-center mb-10">
            <Note />
          </div>
          <div className=" flex justify-between ">
            <label htmlFor="" className="block mb-1 text-sm">
              Logo URL
              {<span className=" text-red-400 ">*</span>}
            </label>
            <div className="hidden lg:block">
              <Note />
            </div>
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
        
          <React.Fragment>
            <CustomInputWithIcon
              icon={inputList[0].icon}
              placeholder={inputList[0].placeholder}
              required={inputList[0].required}
              label={inputList[0].label}
              value={website}
              setValue={setWebsite}
            />
          </React.Fragment>
          <React.Fragment>
            <CustomInputWithIcon
              icon={inputList[1].icon}
              placeholder={inputList[1].placeholder}
              required={inputList[1].required}
              label={inputList[1].label}
              value={facebook}
              setValue={setFacebook}
            />
          </React.Fragment>
          <React.Fragment>
            <CustomInputWithIcon
               icon={inputList[2].icon}
               placeholder={inputList[2].placeholder}
               required={inputList[2].required}
               label={inputList[2].label}
               value={twitter}
               setValue={setTwitter}            />
          </React.Fragment>
          <React.Fragment>
            <CustomInputWithIcon
              icon={inputList[3].icon}
              placeholder={inputList[3].placeholder}
              required={inputList[3].required}
              label={inputList[3].label}
              value={github}
              setValue={setGithub}
            />
          </React.Fragment>
          <React.Fragment>
            <CustomInputWithIcon
               icon={inputList[4].icon}
               placeholder={inputList[4].placeholder}
               required={inputList[4].required}
               label={inputList[4].label}
               value={telegram}
               setValue={setTelegram}
            />
          </React.Fragment>
          <React.Fragment>
            <CustomInputWithIcon
              icon={inputList[5].icon}
              placeholder={inputList[5].placeholder}
              required={inputList[5].required}
              label={inputList[5].label}
              value={instagram}
              setValue={setInstagram}
            />
          </React.Fragment>
          <React.Fragment>
            <CustomInputWithIcon
              icon={inputList[6].icon}
              placeholder={inputList[6].placeholder}
              required={inputList[6].required}
              label={inputList[6].label}
              value={discord}
              setValue={setDiscord}
            />
          </React.Fragment>
          <React.Fragment>
            <CustomInputWithIcon
              icon={inputList[7].icon}
              placeholder={inputList[7].placeholder}
              required={inputList[7].required}
              label={inputList[7].label}
              value={redit}
              setValue={setRedit}
            />
          </React.Fragment>
        
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
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
          placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur possimus, ipsum esse deleniti accusantium facilis exercitationem. Aliquid delectus molestias rerum!"
        ></textarea>
      </div>
      <div className="grid grid-flow-col gap-x-8 mt-10 justify-end items-center">
        <button
          onClick={decreaseStep}
          className=" bg-transparent border border-primary-400 py-2 px-8 rounded-md  font-semibold "
        >
          BACK
        </button>
        <button
          onClick={()=>{
            if(hash==undefined){
              window.alert("URL must end with a supported extension png, jpg, jpeg or gif. You can upload your image athttps://upload.zinksale.finance/")
            }else{
              increaseStep()
            }
          }}
          className=" bg-primary-400 border border-primary-400  py-2 px-8 rounded-md text-white  font-semibold "
        >
          NEXT
        </button>
      </div>
    </StepWrap>
  );
};

export default Step3;

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
      <div className="dark:bg-dark-500 border border-lightDark rounded-md flex h-12">
        <div className="flex justify-center items-center w-12 text-primary-400 text-xl border border-primary-400 rounded-l-md">
          {icon}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
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
