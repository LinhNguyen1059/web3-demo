import { Check, Loader2 } from "lucide-react";

import { Button } from "../ui/button";

interface ConnectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  image: string;
  loading?: boolean;
  checked?: boolean;
}

export default function ConnectButton({
  label,
  image,
  loading,
  checked,
  ...rest
}: ConnectButtonProps) {
  return (
    <Button className="flex items-center justify-start gap-2" {...rest}>
      <img src={image} alt={label} width={24} height={24} />
      {label}
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {checked ? <Check className="ml-auto" /> : null}
    </Button>
  );
}
