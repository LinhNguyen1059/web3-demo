import useAccountStore from "@/stores/account";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import ConnectButton from "./connectButton";
import { E_NETWORK_ID, E_NETWORK_NAMES } from "@/connectors/constant";

import ethereum_Logo from "@/assets/ethereum_logo.png";
import binance_Logo from "@/assets/bsc_logo.svg";

export default function ChooseNetwork() {
  const selectedChain = useAccountStore((state) => state.selectedChain);
  const setProps = useAccountStore((state) => state.setProps);

  const onSwitchChain = (chainId: number) => {
    setProps({ selectedChain: chainId });
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Choose network</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-2">
        <ConnectButton
          label={E_NETWORK_NAMES.ETH}
          image={ethereum_Logo}
          onClick={() => onSwitchChain(E_NETWORK_ID.ETH_TESTNET)}
          checked={selectedChain === E_NETWORK_ID.ETH_TESTNET}
        />
        <ConnectButton
          label={E_NETWORK_NAMES.BNB}
          image={binance_Logo}
          onClick={() => onSwitchChain(E_NETWORK_ID.BSC_TESTNET)}
          checked={selectedChain === E_NETWORK_ID.BSC_TESTNET}
        />
      </div>
    </>
  );
}
