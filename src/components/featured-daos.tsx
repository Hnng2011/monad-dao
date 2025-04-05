"use client";

import { motion } from "framer-motion";

const FEATURED_DAOS = [
  {
    name: "GG Cap",
    symbol: "$GGCAP",
    chain: "Base",
    status: "Live",
    description: "Leading gaming investment DAO",
  },
  {
    name: "Monark DAO",
    symbol: "$MONARK",
    chain: "Solana",
    status: "Live",
    description: "Community-driven investment collective",
  },
  {
    name: "HypurrDAO",
    symbol: "$HYPURR",
    chain: "Solana",
    status: "Funding",
    description: "AI-powered investment strategies",
  },
  {
    name: "Rwok DAO",
    symbol: "$RWOK",
    chain: "Base",
    status: "Live",
    description: "DeFi yield optimization",
  },
];

export function FeaturedDAOs() {
  return (
    <section className="relative py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Featured DAOs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Join the most innovative DAOs in the ecosystem
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {FEATURED_DAOS.map((dao, index) => (
            <motion.div
              key={dao.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-black/50 p-8 backdrop-blur-sm hover:border-purple-500/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${dao.chain.toLowerCase()}/info/logo.png`}
                      alt={`${dao.chain} logo`}
                      className="w-4 h-4 rounded-full"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <p className="text-sm text-gray-400">{dao.chain}</p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      dao.status === "Live"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {dao.status}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-white">
                  <span className="absolute inset-0" />
                  {dao.name}
                </h3>
                <p className="mt-1 text-sm text-purple-400">{dao.symbol}</p>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  {dao.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
