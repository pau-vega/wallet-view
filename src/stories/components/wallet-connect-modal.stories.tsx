import type { Meta, StoryObj } from "@storybook/nextjs";
import { WalletConnectModal } from "@/components/wallet-connect-modal";
import type { Connector } from "wagmi";

// Mock connectors for stories
const mockConnectors = [
  {
    id: "metaMask",
    name: "MetaMask",
    ready: true,
  },
  {
    id: "walletConnect",
    name: "WalletConnect",
    ready: true,
  },
  {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    ready: true,
  },
] as any[];

const meta: Meta<typeof WalletConnectModal> = {
  title: "Components/WalletConnectModal",
  component: WalletConnectModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onConnect: {
      action: "connect",
      description: "Callback function when a connector is selected",
    },
    connectors: {
      control: false,
      description: "Available wallet connectors",
    },
    isPending: {
      control: "boolean",
      description: "Whether a connection is in progress",
    },
    connectingConnector: {
      control: "text",
      description: "ID of the connector currently being connected",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    connectors: mockConnectors,
    isPending: false,
    connectingConnector: null,
  },
};

export const WithPendingConnection: Story = {
  args: {
    connectors: mockConnectors,
    isPending: true,
    connectingConnector: "metaMask",
  },
};

export const WithMultipleConnectors: Story = {
  args: {
    connectors: [
      ...mockConnectors,
      {
        id: "rainbow",
        name: "Rainbow",
        ready: true,
      },
      {
        id: "trust",
        name: "Trust Wallet",
        ready: true,
      },
    ] as any[],
    isPending: false,
    connectingConnector: null,
  },
};

export const WithUnreadyConnectors: Story = {
  args: {
    connectors: [
      {
        id: "metaMask",
        name: "MetaMask",
        ready: true,
      },
      {
        id: "walletConnect",
        name: "WalletConnect",
        ready: false,
      },
    ] as any[],
    isPending: false,
    connectingConnector: null,
  },
};
