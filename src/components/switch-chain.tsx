"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useChainId, useSwitchChain } from "wagmi";
import { CHAIN_ICONS } from "@/constants/icons/chains";
import Image from "next/image";
import { Loader2Icon } from "lucide-react";

export function SwitchChain() {
  const chainId = useChainId();
  const { chains, switchChain, isPending } = useSwitchChain();

  const currentChain = chains.find((c) => c.id === chainId);

  return (
    <Select
      disabled={isPending}
      value={currentChain?.id.toString()}
      onValueChange={(value) => switchChain({ chainId: Number(value) })}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={currentChain?.name} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a chain</SelectLabel>
          {chains.map((chain) => (
            <SelectItem key={chain.id} value={chain.id.toString()}>
              {isPending ? (
                <Loader2Icon className="h-6 w-6 animate-spin" />
              ) : (
                <Image
                  src={CHAIN_ICONS[chain.id as keyof typeof CHAIN_ICONS]}
                  className="h-6 w-6"
                  alt={chain.name}
                />
              )}
              {chain.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
