"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy, LogOut } from "lucide-react";
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
      <div className="flex w-fit items-center justify-between overflow-hidden rounded-md border p-1">
        <Tooltip open={isCopied}>
          <TooltipTrigger asChild>
            <span
              onClick={() => copyToClipboard(truncatedAddress)}
              className="max-w-[25ch] cursor-pointer overflow-hidden pr-2 pl-4 text-sm text-ellipsis whitespace-nowrap"
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
        <Button size="icon" className="rounded-md" onClick={onDisconnect}>
          <LogOut />
        </Button>
      </div>
    </TooltipProvider>
  );
}
