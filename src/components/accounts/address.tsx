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
import { metaMask } from "@/connectors/metamask";
import { walletConnect } from "@/connectors/walletConnect";
import { Button } from "../ui/button";

export default function Address() {
  const { account } = useWeb3React();

  const disconnect = useCallback(async () => {
    const connector = metaMask || walletConnect;
    localStorage.removeItem("connectorId");
    if (connector.deactivate) {
      connector.deactivate();
    } else {
      connector.resetState();
    }
    // @ts-expect-error close can be returned by wallet
    if (connector?.close) {
      // @ts-expect-error close can be returned by wallet
      await connector.close();
    }
  }, []);

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
