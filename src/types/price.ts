import { CurrencyId } from "./currencies";

export type Price<T extends CurrencyId = CurrencyId> = Record<
  string,
  {
    [K in T]: number;
  } & {
    [K in T as `${K}_market_cap`]?: number;
  } & {
    [K in T as `${K}_24h_vol`]?: number;
  } & {
    [K in T as `${K}_24h_change`]?: number;
  } & {
    last_updated_at?: number;
  }
>;
