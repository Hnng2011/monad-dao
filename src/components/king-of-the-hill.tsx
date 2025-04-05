"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, TrendingUpIcon, TrendingDownIcon } from "lucide-react";

// Mock data based on the image
const kingOfTheHillData = {
  name: "AicroStrategy",
  symbol: "$AISTR",
  marketCap: 134701.0,
  marketCapChange: 62235.0,
  marketCapChangePercent: 85.0,
  volume24h: 4285.82,
  liquidity: 16448.11,
  wlParticipants: 1010,
  image: "/placeholder-koth.png", // Replace with actual image path if available
  chainIcon:
    "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png", // Assuming Base chain for now
};

const recentActivity = [
  {
    type: "buy",
    amount: 0.0,
    value: 14634.93,
    time: "40 minutes ago",
    address: "0x86f...f805",
  },
  {
    type: "buy",
    amount: 0.0,
    value: 14655.09,
    time: "50 minutes ago",
    address: "0xbd...499e",
  },
  {
    type: "buy",
    amount: 0.0079,
    value: 16292.11,
    time: "59 minutes ago",
    address: "0x7a7...00ab",
  },
  {
    type: "buy",
    amount: 0.0002,
    value: 2253.03,
    time: "59 minutes ago",
    address: "0x8fb...9ce5",
  },
  {
    type: "sell",
    amount: 0.2777,
    value: 3360895.24,
    time: "59 minutes ago",
    address: "0x29f...fab3",
  },
];

// Helper to format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

// Helper to format address
const formatAddress = (address: string) => {
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
};

export function KingOfTheHill() {
  return (
    <section className="relative py-16 sm:py-24 bg-black/30 backdrop-blur-sm border-y border-purple-500/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-white">King of the hill</h2>
            <img src="/crown.svg" alt="Crown" className="w-6 h-6" />{" "}
            {/* Add crown SVG to public folder */}
          </div>
          <p className="text-sm text-gray-400 mb-8">Most traded DAO token</p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {/* Details Block */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-3xl font-bold text-white">
                  {kingOfTheHillData.name}
                </h3>
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
              </div>
              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Marketcap
                </p>
                <p className="text-3xl font-semibold text-white">
                  {formatCurrency(kingOfTheHillData.marketCap)}
                </p>
                <p className="text-sm text-green-400 mt-1">
                  + {formatCurrency(kingOfTheHillData.marketCapChange)} (
                  {kingOfTheHillData.marketCapChangePercent.toFixed(2)}%)
                </p>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Volume
                  </p>
                  <div className="flex gap-1 text-xs">
                    <button className="px-2 py-0.5 bg-purple-800/50 rounded">
                      24h
                    </button>
                    <button className="px-2 py-0.5 bg-gray-800/50 rounded text-gray-400 hover:bg-gray-700/50">
                      1h
                    </button>
                  </div>
                </div>
                <p className="text-xl font-semibold text-white">
                  {formatCurrency(kingOfTheHillData.volume24h)}
                </p>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Liquidity
                </p>
                <p className="text-xl font-semibold text-white">
                  {formatCurrency(kingOfTheHillData.liquidity)}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  WL Participants
                </p>
                <p className="text-xl font-semibold text-white">
                  {kingOfTheHillData.wlParticipants}
                </p>
              </div>
            </div>

            {/* Image Block */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-purple-500/20 shadow-xl shadow-purple-900/30">
                <Image
                  src={kingOfTheHillData.image}
                  alt={`${kingOfTheHillData.name} image`}
                  layout="fill"
                  objectFit="cover"
                  className="animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-purple-500/20">
                  <p className="text-xl font-bold text-white tracking-widest">
                    {kingOfTheHillData.symbol.substring(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-white">Watch the action</h2>
            <span className="flex items-center gap-1 text-green-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              LIVE
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-8">Most recent activity</p>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:bg-gray-700/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={kingOfTheHillData.chainIcon}
                    alt="Chain Icon"
                    className="w-6 h-6 rounded-full"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {kingOfTheHillData.name}
                    </p>
                    <p
                      className={`flex items-center gap-1 text-xs ${
                        activity.type === "buy"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {activity.type === "buy" ? (
                        <TrendingUpIcon size={12} />
                      ) : (
                        <TrendingDownIcon size={12} />
                      )}
                      {activity.type}
                      <span className="text-white font-mono ml-1">
                        {activity.amount.toFixed(4)}
                      </span>
                      <span className="text-gray-400 ml-1">
                        ({activity.value.toLocaleString()})
                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-1">{activity.time}</p>
                  <Link
                    href="#"
                    className="flex items-center justify-end gap-1 text-xs text-purple-400 hover:text-purple-300 font-mono"
                  >
                    {formatAddress(activity.address)}
                    <ArrowRightIcon size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Add this to your globals.css or tailwind.config.js theme.extend.animation
/*
@keyframes pulse-slow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.95; transform: scale(1.02); }
}
.animate-pulse-slow {
  animation: pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
*/
