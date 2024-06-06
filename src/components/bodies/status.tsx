import { Badge } from "@/components/ui/badge";
import { useWeb3React } from "@web3-react/core";

const statusMapping = {
  isActivating: <Badge className="bg-yellow-500">Connecting</Badge>,
  isActive: <Badge className="bg-green-500">Connected</Badge>,
  default: <Badge className="bg-red-500">Disconnected</Badge>,
};

export default function Status() {
  const { isActivating, isActive } = useWeb3React();

  let status = statusMapping.default;
  if (isActivating) {
    status = statusMapping.isActivating;
  } else if (isActive) {
    status = statusMapping.isActive;
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      Status
      {status}
    </div>
  );
}
