import { Address } from "viem";
import { CurrencyId } from "../currencies";

export interface GetFiatPriceByTokenAddressesRequest {
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

export type CurrencyPriceData<T extends CurrencyId> = {
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

export type GetFiatPriceByTokenAddressesResponse<
  T extends CurrencyId = CurrencyId,
> = Record<Address, CurrencyPriceData<T>>;
