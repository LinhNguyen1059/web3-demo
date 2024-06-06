import { useEffect } from "react";
import useAccountStore from "@/stores/account";
import { Dialog, DialogContent } from "../ui/dialog";
import ChooseWallet from "./chooseWallet";
import ChooseNetwork from "./chooseNetwork";

export default function ConnectWalletDialog() {
  const isOpen = useAccountStore((state) => state.isOpenConnectModal);
  const setProps = useAccountStore((state) => state.setProps);

  // events
  const onCloseDialog = () => {
    setProps({ isOpenConnectModal: false });
  };

  // hooks
  useEffect(() => {
    return () => {
      onCloseDialog();
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onCloseDialog}>
      <DialogContent className="max-w-xs">
        <ChooseNetwork />
        <ChooseWallet />
      </DialogContent>
    </Dialog>
  );
}
