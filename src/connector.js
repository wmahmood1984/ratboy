import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import QRCodeModal from "@walletconnect/qrcode-modal";
// export const injected = new InjectedConnector({
//   supportedChainIds: [56, 97],
// });
// export const walletconnect = new WalletConnectConnector({
//   rpc: {
//     56: "https://bsc-dataseed.binance.org/",
//     97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
//   },
//   supportedChainIds: [56, 97],
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true,
//   pollingInterval: 12000,
// });

export const CoinbaseWallet = new WalletLinkConnector({
    url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
    appName: "Web3-react Demo",
    supportedChainIds: [97],
   });


export const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: 12000,
    qrcodeModal: QRCodeModal
   });
   
export  const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42,56,97,43113]
   });