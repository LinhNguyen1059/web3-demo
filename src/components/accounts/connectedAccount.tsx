import { Card, CardContent } from "@/components/ui/card";
import Address from "./address";
import Balance from "./balance";
import ConnectorLogo from "./connectorLogo";
import NetworkLogo from "./networkLogo";

export default function ConnectedAccount() {
  return (
    <Card className="p-0">
      <CardContent className="p-[2px] flex items-center gap-4">
        <div className="flex items-center gap-2">
          <NetworkLogo />
          <ConnectorLogo />
          <Balance />
        </div>
        <Address />
      </CardContent>
    </Card>
  );
}
