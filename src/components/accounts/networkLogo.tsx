import { useMemo } from "react";
import { chainIds } from "@/data/chainIds";
import useAccountStore from "@/stores/account";

import ethereum_Logo from "@/assets/ethereum_logo.png";
import binance_Logo from "@/assets/bsc_logo.svg";

export default function NetworkLogo() {
  const selectedChain = useAccountStore((state) => state.selectedChain);

  const networkLogo = useMemo(() => {
    switch (selectedChain) {
      case chainIds.bsc:
      case chainIds.bsctest:
        return binance_Logo;
      case chainIds.ethereum:
      case chainIds.sepolia:
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
