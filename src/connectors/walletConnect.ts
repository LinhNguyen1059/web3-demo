import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect-v2";

import { CHAINS } from "@/data/networks";
import { chainIds } from "@/data/chainIds";

const chain = import.meta.env.DEV ? chainIds.bsctest : chainIds.bsc;

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? "",
        chains: [chain],
        optionalChains: [chain],
        showQrModal: true,
        metadata: {
          name: CHAINS[chain].name,
          url: CHAINS[chain].urls[0],
          description: CHAINS[chain].name,
          icons: [],
        },
      },
    })
);
