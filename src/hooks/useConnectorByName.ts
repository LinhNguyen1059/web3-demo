import { getConnectorByName } from "@/connectors";
import { E_CONNECTOR_NAMES, E_NETWORK_ID } from "@/connectors/constant";
import { Web3ReactHooks } from "@web3-react/core";
import { Empty } from "@web3-react/empty";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect-v2";

const useConnectorByName = (
  connectorName: E_CONNECTOR_NAMES,
  chainId: E_NETWORK_ID
): {
  connector: WalletConnect | MetaMask | Empty;
  hook: Web3ReactHooks;
} => {
  return getConnectorByName(connectorName, chainId);
};

export default useConnectorByName;
