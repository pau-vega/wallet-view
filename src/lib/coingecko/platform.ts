import {
  GetAssetsPlatformsListRequest,
  GetAssetsPlatformsListResponse,
} from "@/types/api/platform";
import { Stringify } from "@/types/stringify";
import { coingeckoFetch } from "./client";

export async function getAssetsPlatformsList({
  ...rest
}: Stringify<GetAssetsPlatformsListRequest>) {
  return coingeckoFetch<GetAssetsPlatformsListResponse>(`/asset_platforms`, {
    ...rest,
  });
}
