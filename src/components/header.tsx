"use client";

import { Connector, useAccount, useConnect, useDisconnect } from "wagmi";
import { WalletConnectedButton } from "./wallet-connected-button";
import { useState } from "react";
import { WalletConnectModal } from "./wallet-connect-modal";

export function Header() {
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const { connectors, connect, isPending } = useConnect();
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

  if (!isConnected || !address) {
    return (
      <WalletConnectModal
        connectingConnector={connectingConnector}
        onConnect={handleConnect}
        connectors={connectors}
        isPending={isPending}
      />
    );
  }
  return (
    <WalletConnectedButton
      address={address}
      onDisconnect={() => disconnect()}
    />
  );
}
