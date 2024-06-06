import type { AddEthereumChainParameter } from "@web3-react/types";

const infuraKey = import.meta.env.REACT_APP_INFURA_KEY;
const alchemyKey = infuraKey;
const groveAppId = import.meta.env.REACT_APP_GROVE_APPID;

const ETH: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Ether",
  symbol: "ETH",
  decimals: 18,
};

const BSC: AddEthereumChainParameter["nativeCurrency"] = {
  name: "BNB Chain",
  symbol: "BNB",
  decimals: 18,
};

interface BasicChainInformation {
  chainId: string;
  urls: string[];
  publicUrls: string[];
  name: string;
}

interface ExtendedChainInformation extends BasicChainInformation {
  nativeCurrency: AddEthereumChainParameter["nativeCurrency"];
  blockExplorerUrls: AddEthereumChainParameter["blockExplorerUrls"];
}

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation)?.nativeCurrency;
}

export function getAddChainParameters(
  chainId: number
): AddEthereumChainParameter | number {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.publicUrls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}

export const getNativeByChain = (chainId: number): string | undefined => {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation))
    return chainInformation.nativeCurrency.symbol;
  return undefined;
};

export const getExplorer = (chainId: number): string[] | undefined => {
  const chainInformation = CHAINS[chainId];
  if (isExtendedChainInformation(chainInformation))
    return chainInformation.blockExplorerUrls;
  return undefined;
};

export const CHAINS: {
  [chainId: number]: BasicChainInformation | ExtendedChainInformation;
} = {
  // BSC
  97: {
    chainId: "97",
    urls: [
      "https://data-seed-prebsc-1-s1.binance.org:8545/",
      "https://data-seed-prebsc-1-s3.binance.org:8545/",
    ].filter(Boolean),
    publicUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"].filter(
      Boolean
    ),
    name: "BNB Testnet",
    nativeCurrency: BSC,
    blockExplorerUrls: ["https://testnet.bscscan.com/"],
  },
  56: {
    chainId: "56",
    urls: [
      groveAppId ? `https://bsc-mainnet.rpc.grove.city/v1/${groveAppId}` : "",
      "https://bsc-dataseed.binance.org/",
      "https://rpc.ankr.com/bsc",
    ].filter(Boolean),
    publicUrls: ["https://rpc.ankr.com/bsc"].filter(Boolean),
    name: "BNB Smart Chain",
    nativeCurrency: BSC,
    blockExplorerUrls: ["https://bscscan.com/"],
  },
  // ETH
  1: {
    chainId: "1",
    urls: [
      infuraKey ? `https://mainnet.infura.io/v3/${infuraKey}` : "",
      alchemyKey ? `https://eth-mainnet.g.alchemy.com/v2/${alchemyKey}` : "",
      groveAppId ? `https://eth-mainnet.rpc.grove.city/v1/${groveAppId}` : "",
      "https://rpc.ankr.com/eth",
      "https://cloudflare-eth.com",
    ].filter(Boolean),
    publicUrls: ["https://rpc.ankr.com/eth"].filter(Boolean),
    name: "Mainnet",
    nativeCurrency: ETH,
    blockExplorerUrls: ["https://etherscan.io"],
  },
  11155111: {
    chainId: "11155111",
    urls: [
      infuraKey ? `https://sepolia.infura.io/v3/${infuraKey}` : "",
      alchemyKey ? `https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}` : "",
      groveAppId ? `https://sepolia.rpc.grove.city/v1/${groveAppId}` : "",
    ].filter(Boolean),
    publicUrls: [
      "https://sepolia.infura.io/v3/",
      "https://rpc.sepolia.org",
    ].filter(Boolean),
    name: "Sepolia",
    nativeCurrency: ETH,
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
};

export const URLS: { [chainId: number]: string[] } = Object.keys(
  CHAINS
).reduce<{ [chainId: number]: string[] }>((accumulator, chainId) => {
  const validURLs: string[] = CHAINS[Number(chainId)].urls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});

export const CHAINIDs: { [chainId: number]: string } = Object.keys(
  CHAINS
).reduce<{ [chainId: number]: string }>((accumulator, chainId) => {
  const validCHAINIDs: string = CHAINS[Number(chainId)].chainId;

  if (validCHAINIDs) {
    accumulator[Number(chainId)] = validCHAINIDs;
  }

  return accumulator;
}, {});
