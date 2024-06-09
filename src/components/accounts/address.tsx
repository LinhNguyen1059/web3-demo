import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { getEllipsisTxt } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Jazzicons from "../commons/jazzicons";
import { Button } from "../ui/button";
import { disconnectWallet } from "@/connectors";
import useAccountStore from "@/stores/account";
import { E_CONNECTOR_NAMES } from "@/connectors/constant";

export default function Address() {
  const { account, provider } = useWeb3React();

  const selectedChain = useAccountStore((state) => state.selectedChain);

  const disconnect = useCallback(async () => {
    if (provider?.connection?.url) {
      disconnectWallet(
        provider?.connection?.url as E_CONNECTOR_NAMES,
        selectedChain
      );
    }
  }, [provider, selectedChain]);

  return account ? (
    <div className="flex items-center gap-2">
      <div className="p-[3px] rounded-lg bg-blue-100 text-blue-700">
        {getEllipsisTxt(account, 6)}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="w-auto h-auto rounded-full">
            <Jazzicons seed={account} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={disconnect}>Disconnect</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : null;
}
