"use client";

import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { CopyWalletbutton } from "./copy-wallet-button";
import { useState } from "react";
import { WalletConnectModal } from "./wallet-connect-modal";
import { normalize } from "viem/ens";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const { connectors, connect, isPending } = useConnect();
  const { data: ensName } = useEnsName({
    address,
  });
  const { data: ensAvatar } = useEnsAvatar({
    name: normalize(ensName!),
    query: { enabled: !!ensName },
  });

  const [connectingConnector, setConnectingConnector] = useState<string | null>(
    null,
  );
  const handleConnect = (connector: Connector) => {
    setConnectingConnector(connector.id);
    connect(
      { connector },
      {
        onSettled: () => setConnectingConnector(null),
      },
    );
  };

  return (
    <div className="flex items-center justify-end gap-2 p-2">
      {isConnected && address ? (
        <>
          <CopyWalletbutton
            ensAvatar={ensAvatar ?? undefined}
            ensName={ensName ?? undefined}
            address={address}
          />
          <Button size="icon" variant="default" onClick={() => disconnect()}>
            <LogOut />
          </Button>
        </>
      ) : (
        <WalletConnectModal
          connectingConnector={connectingConnector}
          onConnect={handleConnect}
          connectors={connectors}
          isPending={isPending}
        />
      )}
    </div>
  );
}
