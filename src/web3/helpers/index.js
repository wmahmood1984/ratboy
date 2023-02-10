import { Contract, ethers } from "ethers";
import { toast } from "react-hot-toast";
import Web3 from "web3";

export const shortAddress = (str) => {
  if (str.length < 10) return str;
  return `${str.slice(0, 4)}...${str.slice(-4)}`;
};
export const shortAddressWithParams = (str, number) => {
  if (str.length < 36) return str;
  return `${str.slice(0, number)}...${str.slice(-number)}`;
};

export const toHex = (number) => {
  if (number) {
    return `0x${number.toString(16)}`;
  } else {
    return;
  }
};
export const copyToClipBoard = async (copyMe) => {
  try {
    await navigator.clipboard.writeText(copyMe);
    toast.success("Copied!");
  } catch (err) {
    toast.error("Failed to copy!");
  }
};
export const getContract = (address, abi, providerOrSigner) => {
  try {
    let contract = new Contract(address, abi, providerOrSigner);
    return { contract };
  } catch (error) {
    return { contract: null };
  }
};

export const getProvider = (link) => {
  return new ethers.providers.JsonRpcProvider(link);
};
export const getContractWEB3 = (abi, address, provider) => {
  try {
    let contract = new provider.eth.Contract(abi, address);
    return { contract };
  } catch (error) {
    console.log(error.message);
    return { contract: null };
  }
};

export const getProviderWEB3 = (link) => {
  return new Web3(new Web3.providers.HttpProvider(link));
};
