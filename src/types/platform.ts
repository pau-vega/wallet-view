/**
 * Represents a blockchain platform/network supported by CoinGecko
 */
export type Platform = {
  /** Unique identifier for the platform (e.g., "ethereum", "binance-smart-chain") */
  id: string;
  /** Numeric chain identifier used by wallets and other tools */
  chain_identifier: number;
  /** Full display name of the platform */
  name: string;
  /** Abbreviated name or ticker symbol */
  shortname: string;
  /** CoinGecko ID of the platform's native token */
  native_coin_id: string;
  /** Platform logo images in different sizes */
  image: {
    /** Small thumbnail image URL */
    thumb: string;
    /** Medium-sized image URL */
    small: string;
    /** Large image URL */
    large: string;
  };
};

/**
 * Array of Platform objects representing multiple blockchain platforms
 */
export type PlatformList = Platform[];
