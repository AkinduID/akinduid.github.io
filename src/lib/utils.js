import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

/**
 * cn merges class name inputs with clsx (conditional class composition)
 * and then resolves any conflicting Tailwind utility classes with
 * tailwind-merge, so the last conflicting class wins.
 *
 * @param {...(string|Record<string, boolean>|Array|null|undefined)} inputs - Class name values accepted by clsx.
 * @returns {string} The merged, de-duplicated class name string.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
