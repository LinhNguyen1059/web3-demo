import { useWeb3React } from "@web3-react/core";
import { getContract } from "@/connectors";
import { IAbis } from "@/types/abi";

export default function useGetBalance() {
  const { account, connector } = useWeb3React();

  const getBalance = async (
    addressToken: string,
    contractAbi: IAbis
  ): Promise<string> => {
    if (!account) {
      return "0";
    }

    try {
      const contract = getContract(
        connector.provider,
        contractAbi,
        addressToken
      );
      const balance = await contract.methods
        .balanceOf(account)
        .call()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => res.toString());
      return balance;
    } catch (error) {
      return "0";
    }
  };

  return getBalance;
}
