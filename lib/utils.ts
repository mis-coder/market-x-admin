import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//TODO: try different formats and can add locale support as well
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
