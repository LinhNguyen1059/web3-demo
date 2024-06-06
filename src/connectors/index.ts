import { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect-v2";

import { hooks as metaMaskHooks, metaMask } from "./metamask";
import { hooks as walletConnectHooks, walletConnect } from "./walletConnect";

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
];

export default connectors;
