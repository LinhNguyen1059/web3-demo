import { useCallback } from "react";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import ConnectButton from "./connectButton";
import { hooks as metaMaskhooks, metaMask } from "@/connectors/metamask";
import {
  hooks as walletConnecthooks,
  walletConnect,
} from "@/connectors/walletConnect";
import { useToast } from "@/components/ui/use-toast";
import { E_CONNECTOR_NAMES } from "@/connectors/constant";
import useAccountStore from "@/stores/account";

import metamask_Logo from "@/assets/metamask_logo.svg";
import walletconnect_Logo from "@/assets/walletconnect_logo.svg";

const { useIsActivating: useMMIsActivating } = metaMaskhooks;
const { useIsActivating: useWCIsActivating } = walletConnecthooks;

export default function ChooseWallet() {
  const { toast } = useToast();
  const isMMActivating = useMMIsActivating();
  const isWCIsActivating = useWCIsActivating();

  const selectedChain = useAccountStore((state) => state.selectedChain);

  // events
  const activateConnector = useCallback(
    async (label: string) => {
      try {
        switch (label) {
          case E_CONNECTOR_NAMES.METAMASK:
            await metaMask.activate(selectedChain);
            break;

          case E_CONNECTOR_NAMES.WALLET_CONNECT:
            await walletConnect.activate(selectedChain);
            break;

          default:
            break;
        }
      } catch (error) {
        console.log("🚀 ~ error:", error);
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
          label={E_CONNECTOR_NAMES.METAMASK}
          image={metamask_Logo}
          onClick={() => activateConnector(E_CONNECTOR_NAMES.METAMASK)}
          loading={isMMActivating}
        />
        <ConnectButton
          label={E_CONNECTOR_NAMES.WALLET_CONNECT}
          image={walletconnect_Logo}
          onClick={() => activateConnector(E_CONNECTOR_NAMES.WALLET_CONNECT)}
          loading={isWCIsActivating}
        />
      </div>
    </>
  );
}
