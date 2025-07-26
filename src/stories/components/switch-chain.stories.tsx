import type { Meta, StoryObj } from "@storybook/nextjs";
import { SwitchChain } from "@/components/switch-chain";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getConfig } from "@/app/config";

const queryClient = new QueryClient();

const meta: Meta<typeof SwitchChain> = {
  title: "Components/SwitchChain",
  component: SwitchChain,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <WagmiProvider config={getConfig()}>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </WagmiProvider>
    ),
  ],
  argTypes: {
    // Note: This component doesn't accept props, it uses wagmi hooks internally
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Default chain switcher component. Shows the currently connected chain and allows switching between available chains. The component automatically detects available chains from wagmi configuration.",
      },
    },
  },
};

export const DisabledState: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "When switching chains is in progress, the component shows a loading spinner and becomes disabled to prevent multiple simultaneous chain switches.",
      },
    },
  },
};

export const ChainSelection: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Click the dropdown to see available chains with their icons. Each chain displays its icon and name. The currently selected chain is highlighted.",
      },
    },
  },
};

export const LoadingState: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "During chain switching, the component shows a spinning loader icon next to each chain option to indicate the switching process.",
      },
    },
  },
};

export const ResponsiveDesign: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The component is designed to be responsive with a fixed width of 180px. It adapts well to different screen sizes and maintains consistent styling.",
      },
    },
  },
};
