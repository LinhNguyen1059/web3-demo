import useAccountStore from "@/stores/account";
import { Button } from "../ui/button";

export default function ConnectWalletButton() {
  const setProps = useAccountStore((state) => state.setProps);

  const onOpenDialog = () => {
    setProps({ isOpenConnectModal: true });
  };

  return (
    <Button onClick={onOpenDialog} size="sm">
      Connect Wallet
    </Button>
  );
}
