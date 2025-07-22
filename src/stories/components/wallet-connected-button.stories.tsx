import type { Meta, StoryObj } from "@storybook/react";
import { WalletConnectedButton } from "@/components/wallet-connected-button";

const meta: Meta<typeof WalletConnectedButton> = {
  title: "Components/WalletConnectedButton",
  component: WalletConnectedButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    address: {
      control: "text",
      description: "The wallet address to display",
    },
    onDisconnect: {
      action: "disconnected",
      description: "Callback function when disconnect button is clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
  },
};

export const ShortAddress: Story = {
  args: {
    address: "0x1234567890abcdef",
  },
};

export const LongAddress: Story = {
  args: {
    address:
      "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
  },
};

export const WithCustomDisconnect: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    onDisconnect: () => {
      console.log("Custom disconnect handler");
    },
  },
};
