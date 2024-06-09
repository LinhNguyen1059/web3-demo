import { useCallback } from "react";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import ConnectButton from "./connectButton";
import { hooks as metaMaskhooks } from "@/connectors/metamask";
import { useToast } from "@/components/ui/use-toast";
import {
  E_CONNECTOR_DISPLAY_NAMES,
  E_CONNECTOR_NAMES,
} from "@/connectors/constant";
import useAccountStore from "@/stores/account";
import { connectWallet } from "@/connectors";
import useConnectorByName from "@/hooks/useConnectorByName";

import metamask_Logo from "@/assets/metamask_logo.svg";
import walletconnect_Logo from "@/assets/walletconnect_logo.svg";

const { useIsActivating: useMMIsActivating } = metaMaskhooks;

export default function ChooseWallet() {
  const { toast } = useToast();
  const isMMActivating = useMMIsActivating();

  const selectedChain = useAccountStore((state) => state.selectedChain);
  const setProps = useAccountStore((state) => state.setProps);
  const { hook: walletConnectHooks } = useConnectorByName(
    E_CONNECTOR_NAMES.WALLET_CONNECT,
    selectedChain
  );
  const isWCIsActivating = walletConnectHooks.useIsActivating();

  // events
  const activateConnector = useCallback(
    async (label: E_CONNECTOR_NAMES) => {
      try {
        if (
          [
            E_CONNECTOR_NAMES.METAMASK,
            E_CONNECTOR_NAMES.WALLET_CONNECT,
          ].includes(label)
        ) {
          setProps({ connectorName: label });
          connectWallet(label, selectedChain);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast({
          variant: "destructive",
          description: "Failed to connect wallet. Please try again.",
        });
      }
    },
    [selectedChain]
  );

  return (
    <>
      <DialogHeader className="mt-6">
        <DialogTitle>Choose wallet</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-2">
        <ConnectButton
          label={E_CONNECTOR_DISPLAY_NAMES.METAMASK}
          image={metamask_Logo}
          onClick={() => activateConnector(E_CONNECTOR_NAMES.METAMASK)}
          loading={isMMActivating}
          disabled={isMMActivating}
        />
        <ConnectButton
          label={E_CONNECTOR_DISPLAY_NAMES.WALLET_CONNECT}
          image={walletconnect_Logo}
          onClick={() => activateConnector(E_CONNECTOR_NAMES.WALLET_CONNECT)}
          loading={isWCIsActivating}
          disabled={isWCIsActivating}
        />
      </div>
    </>
  );
}
