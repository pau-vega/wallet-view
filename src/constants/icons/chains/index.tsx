import { mainnet, polygon, sepolia } from "viem/chains";
import Ethereum from "../../../../public/icons/chains/ethereum.svg";
import Polygon from "../../../../public/icons/chains/polygon.svg";

export const CHAIN_ICONS = {
  [mainnet.id]: Ethereum,
  [polygon.id]: Polygon,
  [sepolia.id]: Ethereum,
};
