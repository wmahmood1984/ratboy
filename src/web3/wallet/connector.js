import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const POLLING_INTERVAL = 12000;
const INFURA_KEY = "84842078b09946638c03157f83405213";
export const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  // 4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",
  // 97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  56: "https://bsc-dataseed.binance.org/",
};

export const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  appName: "",
  // supportedChainIds: [1, 4, 97, 56],
  supportedChainIds: [4],
});

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
  chainId: 1,
});

export const injected = new InjectedConnector({
  // supportedChainIds: [1, 4, 97, 56],
  supportedChainIds: [97, 5, 1, 56],
});
