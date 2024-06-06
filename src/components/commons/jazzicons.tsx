import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Shows a Jazzicon for the provided wallet address
 * @param {*} props
 * @returns <Jazzicons /> JSX Elemenet
 */

const Jazzicons = ({ seed, size }: { seed: string; size?: number }) => {
  if (!seed) return <Skeleton className="w-10 h-10 rounded-full" />;

  if (size) return <Jazzicon seed={jsNumberForAddress(seed)} diameter={size} />;

  return <Jazzicon seed={jsNumberForAddress(seed)} />;
};

export default Jazzicons;
