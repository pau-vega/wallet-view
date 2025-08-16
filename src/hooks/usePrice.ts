import {
  GetFiatPriceByTokenAddressesRequest,
  GetFiatPriceByTokenAddressesResponse,
} from "@/types/api/price";
import { useCallback } from "react";

export function usePrice() {
  const getFiatPriceByTokenAddresses = useCallback(
    async ({
      id,
      contract_addresses,
      vs_currencies,
      include_24hr_change,
      include_24hr_vol,
      include_last_updated_at,
      include_market_cap,
      precision,
    }: GetFiatPriceByTokenAddressesRequest): Promise<GetFiatPriceByTokenAddressesResponse> => {
      try {
        const searchParams = new URLSearchParams({
          contract_addresses,
          vs_currencies,
          ...(include_24hr_change !== undefined && {
            include_24hr_change: String(include_24hr_change),
          }),
          ...(include_24hr_vol !== undefined && {
            include_24hr_vol: String(include_24hr_vol),
          }),
          ...(include_last_updated_at !== undefined && {
            include_last_updated_at: String(include_last_updated_at),
          }),
          ...(include_market_cap !== undefined && {
            include_market_cap: String(include_market_cap),
          }),
          ...(precision !== undefined && { precision }),
        });

        const res = await fetch(`/api/prices/${id}?${searchParams.toString()}`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        return data;
      } catch (error) {
        console.error("Error fetching price:", error);
        throw error;
      }
    },
    [],
  );

  return {
    fetchFiatPriceByTokenAddresses: getFiatPriceByTokenAddresses,
  };
}
