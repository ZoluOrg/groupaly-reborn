import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function styleMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
