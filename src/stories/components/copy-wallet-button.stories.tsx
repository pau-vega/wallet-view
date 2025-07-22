import type { Meta, StoryObj } from "@storybook/nextjs";
import { CopyWalletbutton } from "@/components/copy-wallet-button";

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

const meta: Meta<typeof CopyWalletbutton> = {
  title: "Components/CopyWalletButton",
  component: CopyWalletbutton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    address: {
      control: "text",
      description: "The wallet address to display and copy",
    },
    ensName: {
      control: "text",
      description: "ENS name to display in avatar tooltip",
    },
    ensAvatar: {
      control: "text",
      description: "ENS avatar URL to display",
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
      <CopyWalletbutton address="0x1234567890abcdef1234567890abcdef12345678" />
      <CopyWalletbutton address="0xabcd1234efgh5678ijkl9012mnop3456" />
      <CopyWalletbutton address="0x1234567890abcdef" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows multiple wallet copy buttons with different address formats to demonstrate the truncation behavior.",
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

export const WithENSName: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    ensName: "vitalik.eth",
    ensAvatar: "https://github.com/shadcn.png",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the component with ENS name and avatar. Hover over the avatar to see the ENS name in a tooltip.",
      },
    },
  },
};

export const WithENSOnly: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    ensName: "alice.eth",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the component with ENS name but no avatar. The avatar fallback shows the first two characters of the address.",
      },
    },
  },
};
