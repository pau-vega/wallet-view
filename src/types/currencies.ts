const CURRENCY_IDS = {
  EUR: "eur",
  USD: "usd",
} as const;

type CurrencyId = (typeof CURRENCY_IDS)[keyof typeof CURRENCY_IDS];

const CURRENCY_SYMBOLS = {
  EUR: "€",
  USD: "$",
} as const;

type CurrencySymbol = (typeof CURRENCY_SYMBOLS)[keyof typeof CURRENCY_SYMBOLS];

export { CURRENCY_IDS, CURRENCY_SYMBOLS, type CurrencyId, type CurrencySymbol };
