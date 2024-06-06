import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getEllipsisTxt = (str: string, n = 6) => {
  if (str) {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
  }
  return "";
};

export function parseBigNumberToFloat(val: BigNumber, decimals = 18) {
  if (!val) {
    return 0;
  }

  const formatted = formatUnits(val, decimals);
  const parsed = parseFloat(formatted);
  return parsed;
}
