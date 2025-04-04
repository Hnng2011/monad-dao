'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Globe, Users } from 'lucide-react'

export default function Home() {
  const featuredDAOs = [
    {
      id: 'ggcap',
      name: 'GG Cap',
      symbol: 'GGCAP',
      chain: 'Base',
      status: 'Live',
      tvl: '$2.1M',
      description: 'Leading gaming and esports DAO'
    },
    {
      id: 'monark',
      name: 'Monark DAO',
      symbol: 'MONARK',
      chain: 'Solana',
      status: 'Live',
      tvl: '$1.8M',
      description: 'Decentralized content creation platform'
    },
    {
      id: 'hypurr',
      name: 'HypurrDAO',
      symbol: 'HYPURR',
      chain: 'Base',
      status: 'Funding',
      tvl: '$950K',
      description: 'NFT curation and trading protocol'
    },
  ]

  const upcomingDAOs = [
    {
      id: 'art',
      name: 'ArtistDAO',
      symbol: 'ART',
      chain: 'Base',
      description: 'Supporting digital artists worldwide'
    },
    {
      id: 'nfa',
      name: 'Non Fungible Alliance',
      symbol: 'NFA',
      chain: 'Base',
      description: 'NFT collector community governance'
    },
    {
      id: 'vivi',
      name: 'VIVI',
      symbol: 'VIVI',
      chain: 'Base',
      description: 'Virtual world infrastructure DAO'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            MonadDAO
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6"
          >
            <button className="glass-button">Discover</button>
            <button className="glass-button">Leaderboard</button>
            <button className="glass-button">Connect Wallet</button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge"
          >
            <Globe className="h-5 w-5" />
            <span>Fund Teams Trade Memes</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            The Future of
            <span className="gradient-text text-glow"> Decentralized </span>
            Investment
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-subtitle"
          >
            Pool ETH/SOL to invest and build on behalf of your community
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button className="glass-button">
              Create Fund <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="glass-button">
              Explore DAOs
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured DAOs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured DAOs
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredDAOs.map((dao, i) => (
              <motion.div
                key={dao.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="dao-card">
                  <div className="flex items-center gap-4">
                    <div className="dao-icon-wrapper">
                      <Users className="dao-icon" />
                    </div>
                    <div>
                      <h3 className="dao-name">{dao.name}</h3>
                      <p className="dao-symbol">${dao.symbol}</p>
                    </div>
                  </div>
                  
                  <p className="dao-description">{dao.description}</p>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <span className="status-badge status-badge-live">
                      {dao.chain}
                    </span>
                    <span className="status-badge status-badge-live">
                      {dao.status}
                    </span>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="dao-stats">TVL: {dao.tvl}</span>
                    <button className="glass-button">
                      View Details <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming DAOs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Upcoming DAOs
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingDAOs.map((dao, i) => (
              <motion.div
                key={dao.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="dao-card">
                  <div className="flex items-center gap-4">
                    <div className="dao-icon-wrapper">
                      <Users className="dao-icon" />
                    </div>
                    <div>
                      <h3 className="dao-name">{dao.name}</h3>
                      <p className="dao-symbol">${dao.symbol}</p>
                    </div>
                  </div>
                  
                  <p className="dao-description">{dao.description}</p>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <span className="status-badge status-badge-upcoming">
                      {dao.chain}
                    </span>
                    <span className="status-badge status-badge-upcoming">
                      Launching Soon
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <button className="glass-button w-full">
                      Get Notified <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}