import { createConfig, http, cookieStorage, createStorage } from "wagmi";
import { mainnet, polygon, sepolia } from "wagmi/chains";
import { walletConnect, metaMask } from "wagmi/connectors";

// Create config once to prevent multiple initializations
const config = createConfig({
  chains: [sepolia, mainnet, polygon],
  syncConnectedChain: true,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors: [
    metaMask(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    }),
  ],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
});

export function getConfig() {
  return config;
}
