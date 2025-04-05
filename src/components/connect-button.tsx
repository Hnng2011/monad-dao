"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleConnect = (connectorId: string) => {
    const connector = connectors.find((c) => c.id === connectorId);
    if (connector) {
      connect({ connector });
      setIsDropdownOpen(false);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setIsDropdownOpen(false);
  };

  if (!isMounted) {
    return (
      <button
        disabled
        className="rounded-full bg-purple-600/50 px-4 py-2 text-sm font-medium text-white/70 cursor-wait animate-pulse"
      >
        Loading...
      </button>
    );
  }

  return (
    <div className="relative z-50">
      {isConnected ? (
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 rounded-full bg-purple-900/30 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800/40 border border-purple-500/30 transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-green-400"></span>
          {address && formatAddress(address)}
        </button>
      ) : (
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500 transition-colors"
        >
          Connect Wallet
        </button>
      )}

      {isDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-56 rounded-md bg-black/80 p-2 backdrop-blur-lg border border-purple-500/20 shadow-lg"
        >
          {isConnected ? (
            <button
              onClick={handleDisconnect}
              className="flex w-full items-center gap-2 rounded px-4 py-2 text-left text-sm text-white hover:bg-purple-900/20"
            >
              Disconnect
            </button>
          ) : (
            <>
              {connectors.map((connector) => (
                <button
                  key={connector.id}
                  onClick={() => handleConnect(connector.id)}
                  className="flex w-full items-center gap-2 rounded px-4 py-2 text-left text-sm text-white hover:bg-purple-900/20"
                >
                  {connector.name}
                </button>
              ))}
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}
