import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Info,
  HelpCircle,
  Copy,
  Settings,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  argTypes: {
    delayDuration: {
      control: { type: "number", min: 0, max: 5000, step: 100 },
      description: "Delay before showing the tooltip (in milliseconds)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Click for more information</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const HelpText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span>Wallet Address</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="text-muted-foreground h-4 w-4 cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Your unique wallet identifier</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const CopyAddress: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="font-mono text-sm">0x1234...5678</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Copy className="h-3 w-3" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy address to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex cursor-help items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Connected</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Wallet is connected and ready</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex cursor-help items-center gap-2">
            <AlertCircle className="h-4 w-4 text-yellow-500" />
            <span>Pending</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Transaction is being processed</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex cursor-help items-center gap-2">
            <XCircle className="h-4 w-4 text-red-500" />
            <span>Failed</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Transaction failed to complete</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const NetworkInfo: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge variant="secondary">Sepolia</Badge>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="text-muted-foreground h-4 w-4 cursor-help" />
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-medium">Sepolia Testnet</p>
            <p className="text-xs">Ethereum test network for development</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const SettingsTooltip: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className="space-y-1">
          <p className="font-medium">Settings</p>
          <p className="text-xs">Configure your wallet preferences</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Complex Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-2">
          <p className="font-medium">Advanced Configuration</p>
          <p className="text-xs">
            This tooltip contains detailed information about the current
            feature. It can include multiple paragraphs and complex formatting.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <CheckCircle className="h-3 w-3 text-green-500" />
            <span>Feature enabled</span>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="outline">Instant</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows immediately</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Button variant="outline">Delayed</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows after 500ms</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <Button variant="outline">Slow</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows after 1 second</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const MultipleTooltips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm">Button 1</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>First button tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="outline">
            Button 2
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Second button tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="secondary">
            Button 3
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Third button tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="destructive">
            Button 4
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Fourth button tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const DisabledElement: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button disabled>Disabled Button</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This button is disabled</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Custom Styled</Button>
      </TooltipTrigger>
      <TooltipContent className="border-blue-600 bg-blue-500 text-white">
        <p>Custom styled tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};
