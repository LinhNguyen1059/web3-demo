/* eslint-disable @typescript-eslint/no-explicit-any */
import { Web3ReactHooks, initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect-v2";
import { EMPTY, Empty } from "@web3-react/empty";
import Web3 from "web3";

import { hooks as metaMaskHooks, metaMask } from "./metamask";
import {
  walletConnectBSCTestnet,
  walletConnectBSCMainnet,
  walletConnectETHMainnet,
  walletConnectETHTestnet,
  hooksBSCTestnet,
  hooksBSCMainnet,
  hooksETHMainnet,
  hooksETHTestnet,
} from "./walletConnect";
import { E_CONNECTOR_NAMES, E_NETWORK_ID } from "./constant";

export const [empty, hooks] = initializeConnector<Empty>(() => EMPTY);

export const getConnectorByName = (
  connectorName: E_CONNECTOR_NAMES,
  chainId: E_NETWORK_ID
): {
  connector: WalletConnect | MetaMask | Empty;
  hook: Web3ReactHooks;
} => {
  switch (connectorName) {
    case E_CONNECTOR_NAMES.WALLET_CONNECT:
      if (chainId === E_NETWORK_ID.BSC_TESTNET) {
        return {
          connector: walletConnectBSCTestnet,
          hook: hooksBSCTestnet,
        };
      } else if (chainId === E_NETWORK_ID.BSC_MAINNET) {
        return {
          connector: walletConnectBSCMainnet,
          hook: hooksBSCMainnet,
        };
      } else if (chainId === E_NETWORK_ID.ETH_MAINNET) {
        return {
          connector: walletConnectETHMainnet,
          hook: hooksETHMainnet,
        };
      } else {
        return {
          connector: walletConnectETHTestnet,
          hook: hooksETHTestnet,
        };
      }
    case E_CONNECTOR_NAMES.METAMASK:
      return {
        connector: metaMask,
        hook: metaMaskHooks,
      };
    case E_CONNECTOR_NAMES.UNKNOWN:
      return {
        connector: empty,
        hook: hooks,
      };
  }
};

export const connectWallet = async (
  connectorName: E_CONNECTOR_NAMES,
  chainId: E_NETWORK_ID
) => {
  try {
    const { connector } = getConnectorByName(connectorName, chainId);
    await connector.activate(chainId);
  } catch (error: any) {
    if (error.code === 4902) {
      await addBnbNetwork();
    }
  }
};

export const disconnectWallet = async (
  connectorName: E_CONNECTOR_NAMES,
  chainId: E_NETWORK_ID
) => {
  const { connector } = getConnectorByName(connectorName, chainId);
  await connector?.resetState();
};

export const getContract = (provider: any, abi: any, address: string) => {
  const web3 = new Web3(provider);
  return new web3.eth.Contract(abi, address);
};

export const addBnbNetwork = async (): Promise<boolean> => {
  const chainId = E_NETWORK_ID.BSC_TESTNET;
  const chainName = "BNB Smart Chain Testnet";
  const rpcUrl = "https://data-seed-prebsc-1-s1.bnbchain.org:8545";

  if ((window as any).ethereum && (window as any).ethereum.isMetaMask) {
    await (window as any).ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: `0x${chainId.toString(16)}`,
          chainName,
          nativeCurrency: {
            name: "tBNB",
            symbol: "tBNB",
            decimals: 18,
          },
          rpcUrls: [rpcUrl],
        },
      ],
    });
    return true;
  } else {
    return false;
  }
};

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnectETHTestnet, hooksETHTestnet],
  [walletConnectBSCTestnet, hooksBSCTestnet],
];

export default connectors;
