import { useWeb3React } from "@web3-react/core";
import ConnectWalletButton from "./connectWalletButton";
import ConnectWalletDialog from "./connectWalletDialog";
import ConnectedAccount from "./connectedAccount";

export default function ConnectAccount() {
  const { account } = useWeb3React();

  return !account ? (
    <>
      <ConnectWalletButton />
      <ConnectWalletDialog />
    </>
  ) : (
    <ConnectedAccount />
  );
}
