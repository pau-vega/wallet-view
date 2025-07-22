import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Info } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "The visual style variant of the badge",
    },
    asChild: {
      control: "boolean",
      description: "Whether to render as a child component",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">
        <CheckCircle />
        Connected
      </Badge>
      <Badge variant="destructive">
        <AlertCircle />
        Error
      </Badge>
      <Badge variant="secondary">
        <Info />
        Info
      </Badge>
      <Badge variant="outline">
        <CheckCircle />
        Pending
      </Badge>
    </div>
  ),
};

export const WalletAddress: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="secondary">0x1234...5678</Badge>
      <Badge variant="outline">0xabcd...efgh</Badge>
    </div>
  ),
};

export const Status: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">
        <CheckCircle />
        Active
      </Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">
        <AlertCircle />
        Failed
      </Badge>
      <Badge variant="outline">Disconnected</Badge>
    </div>
  ),
};

export const Network: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Ethereum</Badge>
      <Badge variant="secondary">Polygon</Badge>
      <Badge variant="outline">Arbitrum</Badge>
      <Badge variant="destructive">Testnet</Badge>
    </div>
  ),
};
