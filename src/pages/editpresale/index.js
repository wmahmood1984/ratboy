import React from "react";
import { Layout } from "../../components";
import { FaDiscord, FaGlobe, FaInstagram } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { RiGithubLine, RiTelegramLine } from "react-icons/ri";
import { ImReddit } from "react-icons/im";
const EditPresale = () => {
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
                  //   type="file"
                  //   onChange={captureFile}
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
              placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur possimus, ipsum esse deleniti accusantium facilis exercitationem. Aliquid delectus molestias rerum!"
            ></textarea>
          </div>
          <div className="grid grid-flow-col gap-x-8 mt-10 justify-center items-center">
            <button className=" bg-transparent border border-primary-400  py-2 px-8 rounded-md  font-semibold ">
              BACK
            </button>
            <button className=" bg-primary-400 text-white border border-primary-400  py-2 px-8 rounded-md  font-semibold ">
              UPDATE
            </button>
          </div>
        </div>
      </div>
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
      <div className="dark:bg-dark-500 border border-lightDark rounded-md flex h-12">
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
