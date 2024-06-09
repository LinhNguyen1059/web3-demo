export enum EToken {
  USC = "USC",
  USDT = "USDT",
  VPL = "VPL",
}

export enum E_CONNECTOR_NAMES {
  METAMASK = "metamask",
  WALLET_CONNECT = "walletconnect",
  UNKNOWN = "unknown",
}

export enum E_CONNECTOR_DISPLAY_NAMES {
  METAMASK = "MetaMask",
  WALLET_CONNECT = "WalletConnect",
  UNKNOWN = "unknown",
}

export enum E_NETWORK_NAMES {
  ETH = "Ethereum",
  BNB = "Binance",
}

export enum E_NETWORK_ID {
  BSC_TESTNET = 97,
  BSC_MAINNET = 56,
  ETH_TESTNET = 11155111,
  ETH_MAINNET = 1,
}

export const CONTRACT_ADDRESS = {
  [EToken.USC]: {
    [E_NETWORK_ID.ETH_MAINNET]: "0x0B37377071aF24921114dccf5eb8EA6E746D0410", // ethereumMainNetId
    [E_NETWORK_ID.ETH_TESTNET]: "0x1Af0D914920B2A1Ab057faDE71043E1B8B0BCbb4", // ethereumTestNetId
    [E_NETWORK_ID.BSC_MAINNET]: "0x151F5d74823Bd2DBD7e574706474a291Db8CAF95", // binanceMainNetId
    [E_NETWORK_ID.BSC_TESTNET]: "0xd34BccbB0AE0866d16EAc857a6e5dF9dBD9f97ce", // binanceTestNetId
  },
  [EToken.USDT]: {
    [E_NETWORK_ID.ETH_MAINNET]: "0xdAC17F958D2ee523a2206206994597C13D831ec7", // ethereumMainNetId
    [E_NETWORK_ID.ETH_TESTNET]: "0x1f1ef35EFe2BD0AD76600791bC652EC56d96f9ea", // ethereumTestNetId
    [E_NETWORK_ID.BSC_MAINNET]: "0x55d398326f99059ff775485246999027b3197955", // binanceMainNetId
    [E_NETWORK_ID.BSC_TESTNET]: "0x70Ac99C98d0123111a4A4A32d44A9a03667Caed1", // binanceTestNetId
  },
  [EToken.VPL]: {
    [E_NETWORK_ID.ETH_MAINNET]: "0xd34BccbB0AE0866d16EAc857a6e5dF9dBD9f97ce", // ethereumMainNetId
    [E_NETWORK_ID.ETH_TESTNET]: "0xd34BccbB0AE0866d16EAc857a6e5dF9dBD9f97ce", // ethereumTestNetId
    [E_NETWORK_ID.BSC_MAINNET]: "0x31dD51eB09A21ad6d95035D0164827acF362E308", // binanceMainNetId
    [E_NETWORK_ID.BSC_TESTNET]: "0xd34BccbB0AE0866d16EAc857a6e5dF9dBD9f97ce", // binanceTestNetId
  },
  VINACHAIN: {
    0: "",
    [E_NETWORK_ID.ETH_MAINNET]: "0x8E4cCC3E28E4817eD24b420C31B5c42C4D79fdb0", // ethereumMainNetId
    [E_NETWORK_ID.ETH_TESTNET]: "0x8E4cCC3E28E4817eD24b420C31B5c42C4D79fdb0", // ethereumTestNetId
    [E_NETWORK_ID.BSC_MAINNET]: "0x8E4cCC3E28E4817eD24b420C31B5c42C4D79fdb0", // binanceMainNetId
    [E_NETWORK_ID.BSC_TESTNET]: "0x8E4cCC3E28E4817eD24b420C31B5c42C4D79fdb0", // binanceTestNetId
  },
};
