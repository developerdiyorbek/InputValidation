import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentLng(lng: string) {
  if (lng === "en") return "English";
  if (lng === "ru") return "Русский";
  if (lng === "uz") return "O‘zbek";
}
