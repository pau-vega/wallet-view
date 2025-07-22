import type { Meta, StoryObj } from "@storybook/nextjs";
import { WalletConnectedButton } from "@/components/wallet-connected-button";

// Mock clipboard API for Storybook
if (typeof window !== "undefined") {
  Object.defineProperty(navigator, "clipboard", {
    value: {
      writeText: async (text: string) => {
        console.log("Copied to clipboard:", text);
        return Promise.resolve();
      },
    },
    writable: true,
    configurable: true,
  });
}

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
      description: "The wallet address to display and copy",
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
  parameters: {
    docs: {
      description: {
        story:
          "Default wallet connected button with copy functionality. The address is truncated and displayed with a copy button.",
      },
    },
  },
};

export const ShortAddress: Story = {
  args: {
    address: "0x1234567890abcdef",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows how the component handles shorter wallet addresses.",
      },
    },
  },
};

export const LongAddress: Story = {
  args: {
    address:
      "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the component handles very long wallet addresses with proper truncation.",
      },
    },
  },
};

export const CopyInteraction: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the copy functionality. Click the address to copy it to clipboard. A tooltip will appear showing 'Address copied!' with a check icon.",
      },
    },
  },
};

export const DifferentAddressFormats: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <WalletConnectedButton
        address="0x1234567890abcdef1234567890abcdef12345678"
        onDisconnect={() => console.log("Disconnect 1")}
      />
      <WalletConnectedButton
        address="0xabcd1234efgh5678ijkl9012mnop3456"
        onDisconnect={() => console.log("Disconnect 2")}
      />
      <WalletConnectedButton
        address="0x1234567890abcdef"
        onDisconnect={() => console.log("Disconnect 3")}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows multiple wallet connected buttons with different address formats to demonstrate the truncation behavior.",
      },
    },
  },
};

export const CopyWithTooltip: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click the address to copy it. A tooltip will appear showing 'Address copied!' with a check icon, providing visual feedback for the copy action.",
      },
    },
  },
};

export const WithCustomDisconnect: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    onDisconnect: () => {
      console.log("Custom disconnect handler");
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the component with a custom disconnect handler. Note: The disconnect functionality is handled by the parent component.",
      },
    },
  },
};
