import { CurrencyId } from "@/types/currencies";
import { Price } from "@/types/price";

export function usePriceApi() {
  const getFiatPriceListByPlatformIds = async ({
    currencies,
    platformIds,
  }: {
    platformIds: string[];
    currencies: CurrencyId[];
  }): Promise<Price> => {
    const vs_currencies = currencies.join(",");
    const ids = platformIds.join(",");

    const response = await fetch(
      `/api/token/prices/${ids}&vs_currencies=${vs_currencies}`,
    );
    return response.json();
  };

  const getFiatPriceByPlatformId = async ({
    currencies,
    platformId,
  }: {
    platformId: string;
    currencies: CurrencyId[];
  }): Promise<Price> => {
    const vs_currencies = currencies.join(",");

    const response = await fetch(
      `/api/token/prices/${platformId}?vs_currencies=${vs_currencies}`,
    );

    return response.json();
  };

  return {
    getFiatPriceListByPlatformIds,
    getFiatPriceByPlatformId,
  };
}
