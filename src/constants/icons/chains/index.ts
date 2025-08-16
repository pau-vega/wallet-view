import { goerli, mainnet, polygon, sepolia } from "wagmi/chains";
import Ethereum from "../../../../public/icons/chains/ethereum.svg";
import Polygon from "../../../../public/icons/chains/polygon.svg";
import Goerli from "../../../../public/icons/chains/goerli.svg";
import Sepolia from "../../../../public/icons/chains/sepolia.svg";

export const CHAIN_ICONS = {
  [mainnet.id]: Ethereum,
  [polygon.id]: Polygon,
  [sepolia.id]: Sepolia,
  [goerli.id]: Goerli,
};
