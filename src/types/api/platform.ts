import { PlatformList } from "../platform";

export type GetAssetsPlatformsListRequest = {
  filter?: "nft";
};

export type GetAssetsPlatformsListResponse = PlatformList;
