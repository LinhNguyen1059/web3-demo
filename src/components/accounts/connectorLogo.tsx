import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";

import metamask_Logo from "@/assets/metamask_logo.svg";
import walletconnect_Logo from "@/assets/walletconnect_logo.svg";

export default function ConnectorLogo() {
  const { provider } = useWeb3React();

  const logoImg = useMemo(() => {
    if (provider?.connection?.url?.includes("walletconnect")) {
      return walletconnect_Logo;
    } else if (provider?.connection?.url?.includes("metamask")) {
      return metamask_Logo;
    }
  }, [provider?.connection?.url]);

  return <img src={logoImg} alt="connector-logo" className="w-7 h-7" />;
}
