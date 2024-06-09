import { useWeb3React } from "@web3-react/core";
import { Card, CardContent } from "@/components/ui/card";
import BalanceVinachain from "./balance";

export default function Body() {
  const { account } = useWeb3React();

  return account ? (
    <div className="container px-4 mx-auto my-10">
      <Card className="w-[350px] mx-auto py-4">
        <CardContent>
          <BalanceVinachain />
        </CardContent>
      </Card>
    </div>
  ) : null;
}
