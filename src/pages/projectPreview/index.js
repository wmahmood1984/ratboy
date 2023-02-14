import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import ProjectOverView from "./components/ProjectOverView";
import Swap from "./components/Swap";
import TokenMetrix from "./components/TokenMetrix";
import Ownerzone from "./components/Ownerzone";
import Information from "./components/Information";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers, providers, utils } from "ethers";
import {
  chainIdSelected,
  IERC20,
  IGOAbi,
  LaunchPadABI,
  LaunchPadAdd,
  rpcObj,
} from "../../config";
import Web3 from "web3";
import Ownerzone2 from "./components/Ownerzone2";
import Information2 from "./components/Information2";
import ResponsiveDialog from "../../Spinner";
import LockDetails from "./components/LockDetails";

const ProjectPreview = () => {
  const { account, library, chainId } = useWeb3React();

  let location = useLocation();

  let { params } = useParams();

  let splittedParams = params.split("=");
  var chain = chainId ? chainId : splittedParams[1];

  const web3 = new Web3(
    new Web3.providers.HttpProvider(`${rpcObj[`${chain}`]}`)
  );

  const myContract = new web3.eth.Contract(
    LaunchPadABI,
    LaunchPadAdd[`${chain}`]
  );

  const getIndex = async () => {
    const _ind = await myContract.methods
      .PresaleMapping(splittedParams[0])
      .call();
    console.log("get Index", _ind);
    return _ind;
  };
  //  const { Index } = location.state;

  const [_data, set_Data] = useState();
  const [sub_data, set_SubData] = useState();
  const [strings, setStrings] = useState();
  const [toggle, setToggle] = useState(false);
  const [allocations, setAllocaitons] = useState([]);
  const [totalSupply, setTotalSupply] = useState();
  const [decimals, setDecimals] = useState();
  const [entitlement, setEntitlement] = useState();
  const [open, setOpen] = useState();
  const [status, setStatus] = useState();
  const [hash, setHash] = useState();

  useEffect(() => {
    const abc = async () => {
      const IndexA = location.state?.Index
        ? location.state?.Index
        : await getIndex();

      const data = await myContract.methods.getPoolDetails().call();

      set_Data(data[0][IndexA]);
      set_SubData(data[1][IndexA]);
      console.log("indexA", data);
      const TokenContract = new web3.eth.Contract(
        IERC20,
        data[0][IndexA][2][0]
      );

      const _alloc = await myContract.methods
        .getLockContract(data[0][IndexA][1])
        .call();
      setAllocaitons(_alloc);

      const tSupply = await TokenContract.methods.totalSupply().call();
      const tdecimals = await TokenContract.methods.decimals().call();
      setTotalSupply(tSupply / 10 ** tdecimals);
      setDecimals(tdecimals);

      const PreSaleContract = new web3.eth.Contract(IGOAbi, data[0][IndexA][1]);
      if (account) {
        const ent = await PreSaleContract.methods
          .getEntitlement(account)
          .call({ from: account });
        setEntitlement(ent / 10 ** tdecimals);
      }

      const _string = await PreSaleContract.methods.getDetails().call();

      setStrings(_string[2]);
      setHash(_string[4]);
    };
    abc();
  }, [toggle, account, chainId]);

  const Claim = async () => {
    setOpen(true);
    setStatus("Claiming.....");
    var counter = 0;
    try {
      const contract = new web3.eth.Contract(IGOAbi, _data[1]);
      contract.methods
        .claim()
        .send({ from: account })
        .on("confirmation", (e, r) => {
          setOpen(false);
        });
    } catch (error) {
      console.log("err in Claim", error);
      setOpen(false);
    }
  };

  return (
    <Layout>
      {_data && sub_data && strings && hash && (
        <main className="px-4 pb-10 pt-28 grid grid-cols-1 gap-y-4">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectOverView
              chain={chain}
              data={_data && _data}
              sub_data={sub_data && sub_data}
              strings={strings && strings}
              hash={hash && hash}
            />
            <div className=" flex flex-col">
              <div className="flex-1">
                <Swap
                  data={_data && _data}
                  sub_data={sub_data && sub_data}
                  account={account}
                  toggle={toggle}
                  setToggle={setToggle}
                />
              </div>
              <div className="mt-6">
                <TokenMetrix
                  allocations={allocations}
                  decimals={decimals}
                  totalSupply={totalSupply}
                  dataA={_data && _data}
                  sub_data={sub_data && sub_data}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <LockDetails />

            {_data && _data[2][1] === account ? (
              <Ownerzone
                toggle={toggle}
                setToggle={setToggle}
                data={_data && _data}
                sub_data={sub_data && sub_data}
              />
            ) : null}
            <Information
              data={_data && _data}
              sub_data={sub_data && sub_data}
            />
            {_data && _data[2][2] === account ? (
              <Ownerzone2
                data={_data && _data}
                sub_data={sub_data && sub_data}
              />
            ) : null}
            {true ? (
              <Information2
                Claim={Claim}
                data={_data && _data}
                sub_data={sub_data && sub_data}
                ent={entitlement}
              />
            ) : null}
          </div>
        </main>
      )}

      <ResponsiveDialog open={open} title={status} />
    </Layout>
  );
};

export default ProjectPreview;
