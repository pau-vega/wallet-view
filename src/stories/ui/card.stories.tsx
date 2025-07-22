import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, Users } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>
          This card has an action in the header.
        </CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            <Wallet />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Content with an action button in the header.</p>
      </CardContent>
    </Card>
  ),
};

export const Stats: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            Total Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$1,234.56</div>
          <p className="text-muted-foreground text-xs">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-muted-foreground text-xs">+12% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Active Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">892</div>
          <p className="text-muted-foreground text-xs">+5.2% from last month</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const WalletCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Connected Wallet</CardTitle>
        <CardDescription>Your wallet information</CardDescription>
        <CardAction>
          <Badge variant="secondary">Connected</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Address:</span>
            <span className="font-mono text-sm">0x1234...5678</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Network:</span>
            <span className="text-sm">Sepolia</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Balance:</span>
            <span className="text-sm">0.5 ETH</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          View Details
        </Button>
        <Button variant="destructive" size="sm">
          Disconnect
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const TransactionCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Recent Transaction</CardTitle>
        <CardDescription>Transaction details</CardDescription>
        <CardAction>
          <Badge variant="default">Confirmed</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">From:</span>
            <span className="font-mono text-sm">0x1234...5678</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">To:</span>
            <span className="font-mono text-sm">0xabcd...efgh</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">Amount:</span>
            <span className="text-sm font-bold">0.1 ETH</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">Gas Used:</span>
            <span className="text-sm">21,000</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          View on Explorer
        </Button>
        <Button size="sm">Copy Hash</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardContent className="p-6">
        <p>Simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};
