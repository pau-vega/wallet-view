import { PlatformList } from "@/types/platform";
import { useCallback } from "react";
import { useChains } from "wagmi";

export function usePlatformApi() {
  const chains = useChains();

  const getAllAvailablePlatforms =
    useCallback(async (): Promise<PlatformList> => {
      const chainIds = chains.map((chain) => chain.id);
      const response = await fetch(`/api/platforms/${chainIds}`);
      return response.json();
    }, [chains]);

  return { getAllAvailablePlatforms };
}
