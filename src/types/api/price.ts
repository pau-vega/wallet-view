import { Address } from "viem";
import { CurrencyId } from "../currencies";

type CurrencyPriceData<T extends CurrencyId> = {
  [key in T]: number;
} & {
  [key in `${T}_market_cap`]?: number;
} & {
  [key in `${T}_24h_vol`]?: number;
} & {
  [key in `${T}_24h_change`]?: number;
} & {
  last_updated_at?: number;
};

export interface GetTokenFiatPricesByAddressesRequest {
  /** Asset platform's ID (e.g., "ethereum") */
  id: string;
  /** Contract addresses of tokens, comma-separated if querying more than 1 token */
  contract_addresses: string;
  /** Target currencies, comma-separated if querying more than 1 currency */
  vs_currencies: string;
  /** Include market capitalization, default: false */
  include_market_cap?: boolean;
  /** Include 24hr volume, default: false */
  include_24hr_vol?: boolean;
  /** Include 24hr change, default: false */
  include_24hr_change?: boolean;
  /** Include last updated price time in UNIX, default: false */
  include_last_updated_at?: boolean;
  /** Decimal place for currency price value */
  precision?: string;
}

export type GetTokenFiatPricesByAddressesResponse<
  T extends CurrencyId = CurrencyId,
> = Record<Address, CurrencyPriceData<T>>;

export interface GetTokenFiatPricesByIdsRequest {
  /**
   * Target currency of coins, comma-separated if querying more than 1 currency.
   * Example: "usd,eur"
   * Required
   */
  vs_currencies: string;

  /**
   * Coins' IDs, comma-separated if querying more than 1 coin.
   * Refers to /coins/list
   * Example: "bitcoin,ethereum"
   */
  ids?: string;

  /**
   * Coins' names, comma-separated if querying more than 1 coin.
   * Example: "Bitcoin,Ethereum"
   */
  names?: string;

  /**
   * Coins' symbols, comma-separated if querying more than 1 coin.
   * Example: "btc,eth"
   */
  symbols?: string;

  /**
   * For `symbols` lookups, specify "all" to include all matching tokens.
   * Default: "top" (returns top-ranked tokens by market cap or volume).
   */
  include_tokens?: "all" | "top";

  /**
   * Include market capitalization. Default: false.
   */
  include_market_cap?: boolean;

  /**
   * Include 24hr volume. Default: false.
   */
  include_24hr_vol?: boolean;

  /**
   * Include 24hr change. Default: false.
   */
  include_24hr_change?: boolean;

  /**
   * Include last updated price time in UNIX. Default: false.
   */
  include_last_updated_at?: boolean;

  /**
   * Decimal place for currency price value.
   * Example: "2" → 2 decimal places
   */
  precision?: string;
}

export type GetTokenFiatPricesByIdsResponse<T extends CurrencyId = CurrencyId> =
  Record<string, CurrencyPriceData<T>>;
