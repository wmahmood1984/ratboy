/* eslint-disable no-unused-vars */

import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import CustomStepper from "../../components/stepper";
import { BUSD, IERC20, LaunchPadABI, LaunchPadAdd, tokenObj } from "../../config";
// import Step1 from "./steps/Step1";
import { Step1, Step2, Step3 } from "./steps";
import Step4 from "./steps/Step4";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse"
import { Contract } from "ethers";

import { ToastContainer, toast } from 'react-toastify';
import ResponsiveDialog from "../../Spinner";
import Launchpad from "../home/Launchpad";


const projectId = '2HdKrtd8GBGyqmO0u1BW2Re1hSK';
const projectSecret = '624bcf5bf92747f385771188371089f4';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
    const ipfsClient = require('ipfs-http-client');

export const getTokenContract = (library, account,tokenAdd) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(tokenAdd,IERC20, signer);
	return contract;
};


const CreateToken = () => {

  const [step, setStep] = useState(0);
  const { account,library, chainId} = useWeb3React();
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [title,setTitle] = useState()
  const [token,setToken] = useState()
  const [owner,setOwner] = useState()
  const [noOfToken,setNoOFTokens] = useState()
  const [price,setPrice] = useState()
  const [hash,setHash] = useState()
  const [twitter,setTwitter] = useState()
  const [medium,setMedium] = useState("a")
  const [telegram,setTelegram] = useState()
  const [telegramGroup,setTeleGramGroup] = useState("a")
  const [Max,setMax] = useState()
  const [Min,setMin] = useState()
  const [vesting,setVesting] = useState()
  const [IDOstart,setIDOStart] = useState()
  const [IDOEnd,setIDOEnd] = useState()
  const [currency,setCurrency] = useState(BUSD[`${chainId}`])
  const [vestingMonths,setVestingMonths] = useState(0)
  const [symbol,setSymbol] = useState(0)
  const web3 = new Web3(Web3.givenProvider)
  const navigate = useNavigate()
  const [csv,setCSV] = useState(["0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554"])
  const [team,setTeam] = useState()
  const [description,setDescription] = useState()
  const [Allocaiton1,setAllocation1] = useState(0)
  const [Allocaiton2,setAllocation2] = useState(0)
  const [Allocaiton3,setAllocation3] = useState(0)
  const [ListingRate,setListingRate] = useState()
  const [SoftCap,setSoftCap] = useState()
  const [hardCap,setHardCap] = useState()
  const [refund,setRefund] = useState()
  const [decimals,setDecimals] = useState()
  const [router,setRouter] = useState()
  const [liquidity,setLiquidity]= useState()
  const [liquidityLock,setLiquidityLock]= useState()


  const [website,setWebsite] = useState()
  const [facebook,setFacebook] = useState()
  const [github,setGithub] = useState()
  const [instagram,setInstagram] = useState()
  const [discord,setDiscord] = useState()
  const [redit,setRedit] = useState()





  const myContract2 = new web3.eth.Contract(LaunchPadABI,LaunchPadAdd[`${chainId}`])

  useEffect(()=>{
    const abc = async()=>{

      if(token && account){
        const tokenContract = getTokenContract(library,account,token)
        const _symbol = await tokenContract.symbol()
        setSymbol(_symbol)
        const _name = await tokenContract.name()
        setTitle(_name)
        const _decimals = await tokenContract.decimals()
        setDecimals(_decimals)
      }
    }

    abc()
    
    
  },[token,account,chainId])


  const array2 = csv && csv.map((v,e)=>v[0])

  csv && array2.pop()


//console.log("string",myContract2)
  const createPool = async ()=>{
    var counter = 0 
    setOpen(true)
    console.log("creat Pool",[[token,account,account,currency,router],
    [title,symbol,twitter,medium,telegram,telegramGroup,website,discord,facebook,instagram,github,redit],
    [noOfToken,
    price,
    Max,
    Min,
    //Date.parse(vesting)/1000,
    vestingMonths,
    Date.parse(IDOstart)/1000,
    Date.parse(IDOEnd)/1000
  ],
    hash,
    array2])
    try {
       const tx = await myContract2.methods.createIDO(
        [token,account,account,currency,router],
    [title,symbol,twitter,medium,telegram,telegramGroup,website,discord,facebook,instagram,github,redit],
    [web3.utils.toWei(noOfToken.toString(),"ether"),
    web3.utils.toWei(price.toString(),"ether"),
    web3.utils.toWei(Max.toString(),"ether"),
    web3.utils.toWei(Min.toString(),"ether"),
    //Date.parse(vesting)/1000,
    vestingMonths,
    Date.parse(IDOstart)/1000,
    Date.parse(IDOEnd)/1000,
    Allocaiton1,
    Allocaiton2,
    Allocaiton3,
    web3.utils.toWei(ListingRate.toString(),"ether"),
    liquidity,liquidityLock,
  ],
    hash,
    array2).send({from:account}).
        on("confirmation",(e,r)=>{
          if(counter===0){
            setOpen(false)
            navigate("/")
            counter++  
          }
        })
      
        //  await tx.wait()
        //  if(tx){
        //   setOpen(false)
        //   navigate("/")
        //  }

      } catch (error) {
       console.log("error in create pool",error)
       setOpen(false)
     }
  }


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
 client.add(imageBugger).then((res) => {
   setHash(`https://gateway.pinata.cloud/ipfs/${res.path}`)

});}
}



const handleChange = async event => {
 const file = await event.target.files[0]
 Papa.parse(file, {
   complete: updateData,
   header: false
 });
 // const reader = new window.FileReader()
 // reader.readAsText(file)
 // reader.onloadend = async ()=>{   console.log("reader",reader.result) }
}

function  updateData(result) {
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

  const approve = async ()=>{
    var counter =0
    try {
      const contract = new web3.eth.Contract(IERC20,token);
      contract.methods.approve(LaunchPadAdd[`${chainId}`],web3.utils.toWei(noOfToken.toString(), "ether")).send({from:account})
      .on("confirmation",(e,r)=>{
        if(counter===0){
          createPool()
          counter++
        }
      })
    } catch (error) {
      console.log("err in approval",error)
    }
  }

  

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
            increaseStep={increaseStep} decreaseStep={decreaseStep}
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
      <ResponsiveDialog open={open}/>
    </Layout>
  );
};

export default CreateToken;



const Steps = ({
  step,token,setToken,title,symbol,decimals,increaseStep,decreaseStep,handleChange,SoftCap,setSoftCap,hardCap,setHardCap,Min,setMin,Max
,setMax,refund,setRefund,router,setRouter,liquidity,setLiquidity,ListingRate,setListingRate,IDOstart,setIDOStart,liquidityLock
,setLiquidityLock, 
hash,
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
setDiscord,setPrice,
redit,setIDOEnd,noOfToken,setNoOFTokens,
setRedit,createPool,
description,setDescription,price,listingRate,iDOstart,IDOEnd,Allocaiton1,setAllocation1,Allocaiton2,setAllocation2,Allocaiton3,setAllocation3
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
        increaseStep={increaseStep} decreaseStep={decreaseStep} />
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
        increaseStep={increaseStep} decreaseStep={decreaseStep} />
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
        
        increaseStep={increaseStep} decreaseStep={decreaseStep} />
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
        increaseStep={increaseStep} decreaseStep={decreaseStep} />
      );
    default:
      return <div />;
  }
};