import { useWeb3React } from "@web3-react/core";
import { useNativeBalance } from "@/hooks/useNativeBalance";
import { parseBigNumberToFloat } from "@/lib/utils";

export default function Balance() {
  const { account, provider } = useWeb3React();
  const balance = useNativeBalance(provider, account);

  return <p>{balance ? parseBigNumberToFloat(balance).toFixed(4) : 0}</p>;
}
