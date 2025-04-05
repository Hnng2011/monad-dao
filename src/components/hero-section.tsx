"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-black pt-20 pb-8 sm:pt-24 sm:pb-8">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 [perspective:1000px]">
          <div className="absolute inset-0 [transform:rotateX(65deg)]">
            {/* Grid container with double height for seamless loop */}
            <div className="relative h-[200vh] w-full">
              {/* First grid section */}
              <div className="animate-grid absolute inset-0 h-[100vh] w-full [background-image:linear-gradient(transparent_0px,_rgba(123,_31,_162,_0.2)_1px,_transparent_2px),_linear-gradient(90deg,_transparent_0px,_rgba(123,_31,_162,_0.2)_1px,_transparent_2px)] [background-size:30px_30px]" />
              {/* Duplicated grid section for seamless loop */}
              <div className="absolute top-[100vh] inset-x-0 h-[100vh] w-full [background-image:linear-gradient(transparent_0px,_rgba(123,_31,_162,_0.2)_1px,_transparent_2px),_linear-gradient(90deg,_transparent_0px,_rgba(123,_31,_162,_0.2)_1px,_transparent_2px)] [background-size:30px_30px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Fund Teams{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Trade Memes
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Pool ETH/SOL to invest and build on behalf of your community. Join
            the future of decentralized investment.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/create"
              className="rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Create Fund
            </Link>
            <Link
              href="/discover"
              className="rounded-full border border-purple-600 px-8 py-3 text-sm font-semibold text-white hover:bg-purple-950/30"
            >
              Discover DAOs
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-3"
        >
          {[
            ["Active DAOs", "200+"],
            ["Total Value Locked", "$50M+"],
            ["Community Members", "10K+"],
          ].map(([label, value]) => (
            <div key={label} className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dt className="text-base leading-7 text-gray-400">{label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                {value}
              </dd>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
