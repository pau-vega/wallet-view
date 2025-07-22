import type { Meta, StoryObj } from "@storybook/nextjs";
import { useTruncateAddress } from "@/hooks/useTruncateAddress";

// Component to demonstrate the hook
function TruncateAddressDemo({
  address,
  startLength = 6,
  endLength = 4,
  separator = "...",
}: {
  address: string;
  startLength?: number;
  endLength?: number;
  separator?: string;
}) {
  const truncated = useTruncateAddress(address, {
    startLength,
    endLength,
    separator,
  });

  return (
    <div className="space-y-2">
      <div className="text-muted-foreground text-sm">Original: {address}</div>
      <div className="font-mono text-sm">Truncated: {truncated}</div>
      <div className="text-muted-foreground text-xs">
        Config: start={startLength}, end={endLength}, separator="{separator}"
      </div>
    </div>
  );
}

const meta: Meta<typeof TruncateAddressDemo> = {
  title: "Hooks/useTruncateAddress",
  component: TruncateAddressDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    address: {
      control: "text",
      description: "The wallet address to truncate",
    },
    startLength: {
      control: { type: "number", min: 1, max: 20 },
      description: "Number of characters to show at the start",
    },
    endLength: {
      control: { type: "number", min: 1, max: 20 },
      description: "Number of characters to show at the end",
    },
    separator: {
      control: "text",
      description: "Separator string between start and end parts",
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
  parameters: {
    docs: {
      description: {
        story:
          "Shows how the hook handles shorter addresses that don't need truncation.",
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
          "Shows how the hook handles very long addresses with proper truncation.",
      },
    },
  },
};

export const CustomLengths: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    startLength: 8,
    endLength: 6,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates custom start and end lengths for truncation.",
      },
    },
  },
};

export const CustomSeparator: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    separator: "---",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows how to use a custom separator between the truncated parts.",
      },
    },
  },
};

export const VeryShortConfig: Story = {
  args: {
    address: "0x1234567890abcdef1234567890abcdef12345678",
    startLength: 2,
    endLength: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates very short truncation configuration.",
      },
    },
  },
};

export const Comparison: Story = {
  render: () => (
    <div className="space-y-4">
      <TruncateAddressDemo
        address="0x1234567890abcdef1234567890abcdef12345678"
        startLength={4}
        endLength={4}
      />
      <TruncateAddressDemo
        address="0x1234567890abcdef1234567890abcdef12345678"
        startLength={6}
        endLength={4}
      />
      <TruncateAddressDemo
        address="0x1234567890abcdef1234567890abcdef12345678"
        startLength={8}
        endLength={6}
      />
      <TruncateAddressDemo
        address="0x1234567890abcdef1234567890abcdef12345678"
        startLength={10}
        endLength={8}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows different truncation configurations side by side for comparison.",
      },
    },
  },
};
