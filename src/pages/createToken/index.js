/* eslint-disable no-unused-vars */

import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import CustomStepper from "../../components/stepper";
import {
  BUSD,
  chainIdSelected,
  IERC20,
  LaunchPadABI,
  LaunchPadAdd,
  RouterA,
  tokenObj,
} from "../../config";
// import Step1 from "./steps/Step1";
import { Step1, Step2, Step3 } from "./steps";
import Step4 from "./steps/Step4";
import Web3 from "web3";
import { Router, useNavigate } from "react-router-dom";
import Papa from "papaparse";
import { Contract } from "ethers";

import { ToastContainer, toast } from "react-toastify";
import ResponsiveDialog from "../../Spinner";
import Launchpad from "../home/Launchpad";
import { formatEther, parseEther } from "@ethersproject/units";
import dayjs from "dayjs";

const projectId = "2HdKrtd8GBGyqmO0u1BW2Re1hSK";
const projectSecret = "624bcf5bf92747f385771188371089f4";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
const ipfsClient = require("ipfs-http-client");

export const getTokenContract = (library, account, tokenAdd) => {
  const signer = library?.getSigner(account).connectUnchecked();
  var contract = new Contract(tokenAdd, IERC20, signer);
  return contract;
};

const CreateToken = () => {
  const [step, setStep] = useState(0);
  const { account, library, chainId } = useWeb3React();
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [title, setTitle] = useState();
  const [token, setToken] = useState();
  const [owner, setOwner] = useState();
  const [noOfToken, setNoOFTokens] = useState();
  const [price, setPrice] = useState();
  const [hash, setHash] = useState();
  const [twitter, setTwitter] = useState();
  const [medium, setMedium] = useState("a");
  const [telegram, setTelegram] = useState();
  const [telegramGroup, setTeleGramGroup] = useState("a");
  const [Max, setMax] = useState();
  const [Min, setMin] = useState();
  const [vesting, setVesting] = useState(0);
  const [IDOstart, setIDOStart] = useState(
    dayjs().format("YYYY-MM-DDTHH:mm:ss")
  );
  const [IDOEnd, setIDOEnd] = useState(
    dayjs((dayjs().unix() + 24 * 60 * 60) * 1000).format("YYYY-MM-DDTHH:mm:ss")
  );
  const [currency, setCurrency] = useState(
    "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee"
  );
  const [vestingMonths, setVestingMonths] = useState(1);
  const [symbol, setSymbol] = useState(0);
  const web3 = new Web3(Web3.givenProvider);
  const navigate = useNavigate();
  const [csv, setCSV] = useState([
    "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554",
  ]);
  const [team, setTeam] = useState();
  const [description, setDescription] = useState();
  const [Allocaiton1, setAllocation1] = useState(0);
  const [Allocaiton2, setAllocation2] = useState(0);
  const [Allocaiton3, setAllocation3] = useState(0);
  const [ListingRate, setListingRate] = useState();
  const [SoftCap, setSoftCap] = useState();
  const [hardCap, setHardCap] = useState();
  const [refund, setRefund] = useState();
  const [decimals, setDecimals] = useState();
  const [router, setRouter] = useState(RouterA[`${chainId}`]);
  const [liquidity, setLiquidity] = useState();
  const [liquidityLock, setLiquidityLock] = useState();
  const [status, setStatus] = useState();
  const [initialVesting, setInitialVesting] = useState(100);

  const [website, setWebsite] = useState(" ");
  const [facebook, setFacebook] = useState(" ");
  const [github, setGithub] = useState(" ");
  const [instagram, setInstagram] = useState(" ");
  const [discord, setDiscord] = useState(" ");
  const [redit, setRedit] = useState(" ");
  const [feePool, setfeePool] = useState(" ");

  var now = new Date().getTime() / 1000;

  const chain = chainId ? chainId : chainIdSelected;

  const myContract2 = new web3.eth.Contract(
    LaunchPadABI,
    LaunchPadAdd[`${chain}`]
  );

  const refArray = ["Refund", "Burn"];
  const toUnix = (string) => {
    return dayjs(string).unix();
  };

  useEffect(() => {
    const abc = async () => {
      if (token && account) {
        const tokenContract = getTokenContract(library, account, token);
        const _symbol = await tokenContract.symbol();
        setSymbol(_symbol);
        const _name = await tokenContract.name();
        setTitle(_name);
        const _decimals = await tokenContract.decimals();
        setDecimals(_decimals);
      }

      const _fee = await myContract2.methods.feeForPooCreation().call();
      setfeePool(formatEther(_fee));
      console.log("string", _fee);
    };

    abc();
  }, [token, account, chainId]);

  const array2 = csv && csv.map((v, e) => v[0]);

  csv && array2.pop();

  const createPool = async () => {
    var counter = 0;
    setOpen(true);
    setStatus("Creating Pool....");
    console.log("creat Pool", [
      [token, account, account, currency, router],
      [
        title,
        symbol,
        twitter,
        medium,
        telegram,
        telegramGroup,
        website,
        discord,
        facebook,
        instagram,
        github,
        redit,
      ],
      [
        web3.utils.toWei(noOfToken.toString(), "ether"),
        web3.utils.toWei(price.toString(), "ether"),
        web3.utils.toWei(Max.toString(), "ether"),
        web3.utils.toWei(Min.toString(), "ether"),
        vestingMonths,
        toUnix(IDOstart),
        toUnix(IDOEnd),
        Allocaiton1,
        Allocaiton2,
        Allocaiton3,
        web3.utils.toWei(ListingRate.toString(), "ether"),
        liquidity,
        Number(Math.floor(now) + liquidityLock * 24 * 60 * 60),
        initialVesting,
        vesting,
        web3.utils.toWei(SoftCap.toString(), "ether"),
        web3.utils.toWei(hardCap.toString(), "ether"),
        refArray.indexOf(refund),
      ],
      hash,
      array2,
    ]);
    try {
      const tx = await myContract2.methods
        .createPresale(
          [token, account, account, currency, router],
          [
            title,
            symbol,
            twitter,
            medium,
            telegram,
            telegramGroup,
            website,
            discord,
            facebook,
            instagram,
            github,
            redit,
          ],
          [
            web3.utils.toWei(noOfToken.toString(), "ether"),
            web3.utils.toWei(price.toString(), "ether"),
            web3.utils.toWei(Max.toString(), "ether"),
            web3.utils.toWei(Min.toString(), "ether"),
            vestingMonths,
            toUnix(IDOstart),
            toUnix(IDOEnd),
            Allocaiton1,
            Allocaiton2,
            Allocaiton3,
            web3.utils.toWei(ListingRate.toString(), "ether"),
            liquidity,
            liquidityLock * 24 * 60 * 60,
            initialVesting,
            vesting,
            web3.utils.toWei(SoftCap.toString(), "ether"),
            web3.utils.toWei(hardCap.toString(), "ether"),
            refArray.indexOf(refund),
          ],
          hash,
          array2
        )
        .send({ from: account, value: parseEther("0.001") })
        .on("confirmation", (e, r) => {
          if (counter === 0) {
            setOpen(false);
            navigate("/");
            counter++;
          }
        });

      //  await tx.wait()
      //  if(tx){
      //   setOpen(false)
      //   navigate("/")
      //  }
    } catch (error) {
      console.log("error in create pool", error);
      setOpen(false);
    }
  };

  var imageBugger;

  const client = ipfsClient.create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  const captureFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = async () => {
      imageBugger = Buffer(reader.result);
      console.log("buffer", imageBugger);
      client.add(imageBugger).then((res, error) => {
        console.log("pic", res.path, error);
        setHash(`https://gateway.pinata.cloud/ipfs/${res.path}`);
      });
    };
  };

  const handleChange = async (event) => {
    const file = await event.target.files[0];
    Papa.parse(file, {
      complete: updateData,
      header: false,
    });
    // const reader = new window.FileReader()
    // reader.readAsText(file)
    // reader.onloadend = async ()=>{   console.log("reader",reader.result) }
  };

  function updateData(result) {
    var data = result.data;
    console.log(data);
    setCSV(data);
  }

  const increaseStep = () => {
    setStep((prev) => prev + 1);
  };

  const decreaseStep = () => {
    setStep((prev) => prev - 1);
  };

  const approve = async () => {
    setOpen(true);
    setStatus("Approving tokens....");
    var counter = 0;
    try {
      const contract = new web3.eth.Contract(IERC20, token);
      contract.methods
        .approve(
          LaunchPadAdd[`${chainId}`],
          web3.utils.toWei(noOfToken.toString(), "ether")
        )
        .send({ from: account })
        .on("confirmation", (e, r) => {
          if (counter === 0) {
            createPool();
            counter++;
          }
        });
    } catch (error) {
      console.log("err in approval", error);
      setOpen(false);
    }
  };

  console.log("data in something", csv);

  return (
    <Layout>
      <div className="mt-28 px-4">
        <div className="my-20">
          <div className=" hidden md:block">
            <CustomStepper step={step} />
          </div>
          <div className="mt-10">
            <Steps
              step={step}
              token={token}
              setToken={setToken}
              price={price}
              setPrice={setPrice}
              title={title}
              noOfToken={noOfToken}
              setNoOFTokens={setNoOFTokens}
              symbol={symbol}
              decimals={decimals}
              handleChange={handleChange}
              SoftCap={SoftCap}
              setSoftCap={setSoftCap}
              hardCap={hardCap}
              setHardCap={setHardCap}
              Min={Min}
              setMin={setMin}
              Max={Max}
              setMax={setMax}
              refund={refund}
              setRefund={setRefund}
              router={router}
              setRouter={setRouter}
              liquidity={liquidity}
              setLiquidity={setLiquidity}
              listingRate={ListingRate}
              setListingRate={setListingRate}
              iDOstart={IDOstart}
              setIDOStart={setIDOStart}
              liquidityLock={liquidityLock}
              setLiquidityLock={setLiquidityLock}
              increaseStep={increaseStep}
              decreaseStep={decreaseStep}
              hash={hash}
              captureFile={captureFile}
              website={website}
              setWebsite={setWebsite}
              facebook={facebook}
              setFacebook={setFacebook}
              twitter={twitter}
              setTwitter={setTwitter}
              github={github}
              setGithub={setGithub}
              telegram={telegram}
              setTelegram={setTelegram}
              instagram={instagram}
              setInstagram={setInstagram}
              discord={discord}
              setDiscord={setDiscord}
              redit={redit}
              setRedit={setRedit}
              description={description}
              setDescription={setDescription}
              createPool={approve}
              IDOstart={IDOstart}
              IDOEnd={IDOEnd}
              setIDOEnd={setIDOEnd}
              Allocaiton1={Allocaiton1}
              setAllocation1={setAllocation1}
              Allocaiton2={Allocaiton2}
              setAllocation2={setAllocation2}
              Allocaiton3={Allocaiton3}
              setAllocation3={setAllocation3}
              initialVesting={initialVesting}
              setInitialVesting={setInitialVesting}
              vesting={vesting}
              setVesting={setVesting}
              vestingMonths={vestingMonths}
              setVestingMonths={setVestingMonths}
            />
          </div>
        </div>

        <p className="mt-40 text-sm text-center max-w-3xl mx-auto w-full mb-2 text-gray-500">
          Disclaimer: The information provided shall not in any way constitute a
          recommendation as to whether you should invest in any product
          discussed. We accept no liability for any loss occasioned to any
          person acting or refraining from action as a result of any material
          provided or published.
        </p>
      </div>
      <ResponsiveDialog open={open} title={status} />
    </Layout>
  );
};

export default CreateToken;

const Steps = ({
  step,
  token,
  setToken,
  title,
  symbol,
  decimals,
  increaseStep,
  decreaseStep,
  handleChange,
  SoftCap,
  setSoftCap,
  hardCap,
  setHardCap,
  Min,
  setMin,
  Max,
  setMax,
  refund,
  setRefund,
  router,
  setRouter,
  liquidity,
  setLiquidity,
  ListingRate,
  setListingRate,
  IDOstart,
  setIDOStart,
  liquidityLock,
  setLiquidityLock,
  initialVesting,
  setInitialVesting,
  hash,
  vesting,
  setVesting,
  vestingMonths,
  setVestingMonths,
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
  setPrice,
  redit,
  setIDOEnd,
  noOfToken,
  setNoOFTokens,
  setRedit,
  createPool,
  description,
  setDescription,
  price,
  listingRate,
  iDOstart,
  IDOEnd,
  Allocaiton1,
  setAllocation1,
  Allocaiton2,
  setAllocation2,
  Allocaiton3,
  setAllocation3,
}) => {
  switch (step) {
    case 0:
      return (
        <Step1
          token={token}
          setToken={setToken}
          name={title}
          symbol={symbol}
          decimals={decimals}
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
        />
      );
    case 1:
      return (
        <Step2
          token={token}
          handleChange={handleChange}
          SoftCap={SoftCap}
          setSoftCap={setSoftCap}
          hardCap={hardCap}
          setHardCap={setHardCap}
          min={Min}
          price={price}
          setPrice={setPrice}
          setMin={setMin}
          max={Max}
          setMax={setMax}
          refund={refund}
          setRefund={setRefund}
          router={router}
          setRouter={setRouter}
          liquidity={liquidity}
          setLiquidity={setLiquidity}
          listingRate={ListingRate}
          setListingRate={setListingRate}
          IDOstart={IDOstart}
          setIdoStart={setIDOStart}
          liquidityLock={liquidityLock}
          setLiquidityLock={setLiquidityLock}
          IDOEnd={IDOEnd}
          Allocaiton1={Allocaiton1}
          setAllocation1={setAllocation1}
          Allocaiton2={Allocaiton2}
          setAllocation2={setAllocation2}
          Allocaiton3={Allocaiton3}
          setAllocation3={setAllocation3}
          setIDOEnd={setIDOEnd}
          noOfToken={noOfToken}
          setNoOFTokens={setNoOFTokens}
          initialVesting={initialVesting}
          setInitialVesting={setInitialVesting}
          vesting={vesting}
          setVesting={setVesting}
          vestingMonths={vestingMonths}
          setVestingMonths={setVestingMonths}
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
        />
      );
    case 2:
      return (
        <Step3
          hash={hash}
          captureFile={captureFile}
          website={website}
          setWebsite={setWebsite}
          facebook={facebook}
          setFacebook={setFacebook}
          twitter={twitter}
          setTwitter={setTwitter}
          github={github}
          setGithub={setGithub}
          telegram={telegram}
          setTelegram={setTelegram}
          instagram={instagram}
          setInstagram={setInstagram}
          discord={discord}
          setDiscord={setDiscord}
          redit={redit}
          setRedit={setRedit}
          description={description}
          setDescription={setDescription}
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
        />
      );
    case 3:
      return (
        <Step4
          name={title}
          hardCap={hardCap}
          decimals={decimals}
          symbol={symbol}
          price={price}
          listingRate={listingRate}
          SoftCap={SoftCap}
          Min={Min}
          Max={Max}
          liquidity={liquidity}
          IDOEnd={IDOEnd}
          iDOstart={iDOstart}
          liquidityLock={liquidityLock}
          website={website}
          facebook={facebook}
          twitter={twitter}
          telegram={telegram}
          github={github}
          instagram={instagram}
          redit={redit}
          createPool={createPool}
          description={description}
          noOfToken={noOfToken}
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
        />
      );
    default:
      return <div />;
  }
};
