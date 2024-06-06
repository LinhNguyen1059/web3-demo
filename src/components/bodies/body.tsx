import { Card, CardContent } from "@/components/ui/card";
import Status from "./status";

export default function Body() {
  return (
    <div className="container px-4 mx-auto my-10">
      <Card className="w-[350px] mx-auto py-4">
        <CardContent>
          <Status />
        </CardContent>
      </Card>
    </div>
  );
}
