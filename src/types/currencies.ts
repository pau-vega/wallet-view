export const CURRENCY_IDS = {
  EUR: "eur",
  USD: "usd",
} as const;

export type CurrencyId = (typeof CURRENCY_IDS)[keyof typeof CURRENCY_IDS];

export const CURRENCY_SYMBOLS = {
  EUR: "€",
  USD: "$",
} as const;

export type CurrencySymbol =
  (typeof CURRENCY_SYMBOLS)[keyof typeof CURRENCY_SYMBOLS];
