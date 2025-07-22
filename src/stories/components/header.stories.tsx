import type { Meta, StoryObj } from "@storybook/nextjs";
import { Header } from "@/components/header";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getConfig } from "@/app/config";

const queryClient = new QueryClient();

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomStyling: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The header component automatically shows either the connect modal or connected button based on wallet state.",
      },
    },
  },
};
