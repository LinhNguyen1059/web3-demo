import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { CONTRACT_ADDRESS } from "@/connectors/constant";
import useGetBalance from "@/hooks/useBalance";
import abiToken from "@/abi/token.json";

export default function BalanceVinachain() {
  const getBalance = useGetBalance();
  const { provider } = useWeb3React();
  const [balance, setBalance] = useState<string>("10");

  const handleGetBalance = async () => {
    if (provider?.network && provider?.network.chainId) {
      const address =
        CONTRACT_ADDRESS.USDT[
          provider?.network.chainId as keyof typeof CONTRACT_ADDRESS.USDT
        ];

      const balance = await getBalance(address, abiToken);
      setBalance(balance);
    }
  };

  useEffect(() => {
    handleGetBalance();
  }, [provider?.network]);

  return (
    <div className="flex items-center gap-4 text-sm">
      VPL balance: {balance}
    </div>
  );
}
