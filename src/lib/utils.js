// Create this file at src/lib/utils.js
// This is the standard cn (className) utility used by MagicUI and shadcn/ui

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// If you don't have clsx and tailwind-merge installed, run:
// npm install clsx tailwind-merge