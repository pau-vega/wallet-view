"use client";

import { Button } from "@/components/ui/button";
import { Check, LogOut } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useTruncateAddress } from "@/hooks/useTruncateAddress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WalletConnectedButtonProps {
  address: string;
  onDisconnect: () => void;
}

export function WalletConnectedButton({
  address,
  onDisconnect,
}: WalletConnectedButtonProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const truncatedAddress = useTruncateAddress(address);

  return (
    <TooltipProvider>
      <div className="bg-background text-primary hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex w-fit items-center justify-center gap-2 overflow-hidden rounded-md border shadow-xs transition-all">
        <Tooltip open={isCopied}>
          <TooltipTrigger asChild>
            <span
              onClick={() => copyToClipboard(truncatedAddress)}
              className="flex h-9 cursor-pointer items-center overflow-hidden px-4 py-2 text-sm font-medium text-ellipsis whitespace-nowrap"
            >
              {truncatedAddress}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              <Check className="h-3 w-3" />
              <span>Address copied!</span>
            </div>
          </TooltipContent>
        </Tooltip>
        <Button size="icon" onClick={onDisconnect}>
          <LogOut />
        </Button>
      </div>
    </TooltipProvider>
  );
}
