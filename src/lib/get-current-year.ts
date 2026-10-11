// src/lib/get-current-year.ts
import { cacheLife } from "next/cache";

export async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}