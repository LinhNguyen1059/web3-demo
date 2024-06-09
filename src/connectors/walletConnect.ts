import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect-v2";

import { E_NETWORK_ID } from "./constant";

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? "";
const metadata = {
  name: "Web3 Demo",
  description: "Web3 demo",
  url: "http://localhost",
  icons: ["favicon.ico"],
};
const options = {
  projectId,
  showQrModal: true,
  metadata,
};

function initializeWalletConnect(chainId: number) {
  return initializeConnector<WalletConnect>(
    (actions) =>
      new WalletConnect({
        actions,
        options: {
          ...options,
          chains: [chainId],
          optionalChains: [chainId],
        },
      })
  );
}

export const [walletConnectBSCMainnet, hooksBSCMainnet] =
  initializeWalletConnect(E_NETWORK_ID.BSC_MAINNET);
export const [walletConnectBSCTestnet, hooksBSCTestnet] =
  initializeWalletConnect(E_NETWORK_ID.BSC_TESTNET);
export const [walletConnectETHMainnet, hooksETHMainnet] =
  initializeWalletConnect(E_NETWORK_ID.ETH_MAINNET);
export const [walletConnectETHTestnet, hooksETHTestnet] =
  initializeWalletConnect(E_NETWORK_ID.ETH_TESTNET);
