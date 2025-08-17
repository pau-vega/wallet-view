import { Platform, PlatformList } from "@/types/platform";
import { useCallback } from "react";
import { useChainId, useChains } from "wagmi";

export function usePlatformApi() {
  const chains = useChains();
  const chainId = useChainId();

  const getAllAvailablePlatforms =
    useCallback(async (): Promise<PlatformList> => {
      const chainIds = chains.map((chain) => chain.id);
      const response = await fetch(`/api/platforms/${chainIds}`);
      return response.json();
    }, [chains]);

  const getCurrentPlatform = useCallback(async (): Promise<Platform> => {
    let existingChainId = chainId;
    if (chainId === 11155111 || chainId === 5) existingChainId = 1;

    const response = await fetch(`/api/platform/${existingChainId}`);
    return response.json();
  }, [chainId]);

  return { getAllAvailablePlatforms, getCurrentPlatform };
}
