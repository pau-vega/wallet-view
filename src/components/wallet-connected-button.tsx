"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface WalletConnectedButtonProps {
  address: string;
  onDisconnect: () => void;
}

export function WalletConnectedButton({
  address,
  onDisconnect,
}: WalletConnectedButtonProps) {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary" className="text-sm">
        {`${address.slice(0, 6)}...${address.slice(-4)}`}
      </Badge>
      <Button onClick={onDisconnect} variant="outline" size="sm">
        Disconnect
      </Button>
    </div>
  );
}
