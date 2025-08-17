import {
  GetTokenFiatPricesByAddressesRequest,
  GetTokenFiatPricesByAddressesResponse,
  GetTokenFiatPricesByIdsRequest,
  GetTokenFiatPricesByIdsResponse,
} from "@/types/api/price";
import { coingeckoFetch } from "./client";
import { Stringify } from "@/types/stringify";

export async function getTokenFiatPricesByIds({
  ...rest
}: Stringify<GetTokenFiatPricesByIdsRequest>) {
  return await coingeckoFetch<GetTokenFiatPricesByIdsResponse>(
    "/simple/price",
    {
      ...rest,
    },
  );
}

export async function getTokenFiatPricesByAddresses({
  id,
  ...rest
}: Stringify<GetTokenFiatPricesByAddressesRequest>) {
  return await coingeckoFetch<GetTokenFiatPricesByAddressesResponse>(
    `/simple/token_price/${id}`,
    {
      ...rest,
    },
  );
}
