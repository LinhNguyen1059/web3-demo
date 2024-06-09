import { useMemo } from "react";
import useAccountStore from "@/stores/account";

import ethereum_Logo from "@/assets/ethereum_logo.png";
import binance_Logo from "@/assets/bsc_logo.svg";
import { E_NETWORK_ID } from "@/connectors/constant";

export default function NetworkLogo() {
  const selectedChain = useAccountStore((state) => state.selectedChain);

  const networkLogo = useMemo(() => {
    switch (selectedChain) {
      case E_NETWORK_ID.BSC_MAINNET:
      case E_NETWORK_ID.BSC_TESTNET:
        return binance_Logo;
      case E_NETWORK_ID.ETH_MAINNET:
      case E_NETWORK_ID.ETH_TESTNET:
        return ethereum_Logo;
      default:
        return "";
    }
  }, [selectedChain]);

  return (
    <div>
      <img src={networkLogo} alt="network logo" className="w-7 h-7" />
    </div>
  );
}
