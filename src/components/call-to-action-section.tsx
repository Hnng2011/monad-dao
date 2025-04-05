"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }} // Slight delay after section loads
        className="mx-auto max-w-7xl px-6 lg:px-8 text-center"
      >
        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300">
          Pool ETH/SOL to invest and build on behalf of your community. Join the
          future of decentralized investment.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              href="/create"
              className="rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors duration-200"
            >
              Create Fund
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/discover"
              className="rounded-full border border-purple-600 px-8 py-3 text-sm font-semibold text-white hover:bg-purple-950/30 transition-colors duration-200"
            >
              Discover DAOs
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
