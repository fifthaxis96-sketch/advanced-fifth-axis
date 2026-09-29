import { products } from "@/lib/site";

export type QuoteItem = { slug: string; variant: string; quantity: number };
const key = "afa-quote-list-v1";
const eventName = "afa-quote-list-change";
let fallback = "[]";

export function quoteListSnapshot() {
  try { return window.localStorage.getItem(key) || fallback; }
  catch { return fallback; }
}

export function readQuoteList(): QuoteItem[] {
  if (typeof window === "undefined") return [];
  try {
    const value: unknown = JSON.parse(quoteListSnapshot());
    if (!Array.isArray(value)) return [];
    return value.filter((item): item is QuoteItem =>
      !!item && typeof item === "object" &&
      typeof item.slug === "string" &&
      products.some(product => product.slug === item.slug &&
        (item.variant === "" || product.variants.includes(item.variant))) &&
      typeof item.quantity === "number" && Number.isInteger(item.quantity) &&
      item.quantity >= 1 && item.quantity <= 9999 && typeof item.variant === "string"
    ).slice(0, 30);
  } catch { return []; }
}

export function saveQuoteList(items: QuoteItem[]) {
  fallback = JSON.stringify(items);
  try { window.localStorage.setItem(key, fallback); } catch { /* Continue in this tab if storage is unavailable. */ }
  window.dispatchEvent(new Event(eventName));
}

export function addQuoteItem(item: QuoteItem) {
  const items = readQuoteList();
  const existing = items.find(row => row.slug === item.slug && row.variant === item.variant);
  if (existing) existing.quantity = Math.min(9999, existing.quantity + item.quantity);
  else if (items.length < 30) items.push(item);
  saveQuoteList(items);
}

export function observeQuoteList(callback: () => void) {
  window.addEventListener(eventName, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(eventName, callback);
    window.removeEventListener("storage", callback);
  };
}
