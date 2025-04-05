"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Removed accentColor variable

export function CallToActionSection() {
  // Define primary HSL for inline styles (matching globals.css --primary)
  const primaryHsl = "267 100% 61%";

  return (
    // Section is already full-width
    <section className="relative py-8 sm:py-10 max-w-7xl px-6 lg:px-8 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        // Removed mx-auto max-w-6xl, changed border to border-2
        className="relative px-6 lg:px-8 py-6 sm:py-8 rounded-2xl border-2 border-purple-500/20 flex flex-wrap items-center justify-between gap-6 overflow-hidden"
        style={{
          // Subtle purple grid background
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), /* Dark overlay */
            linear-gradient(transparent 0px, hsla(${primaryHsl}, 0.1) 1px, transparent 2px), /* Horizontal lines (opacity 10%) */
            linear-gradient(90deg, transparent 0px, hsla(${primaryHsl}, 0.1) 1px, transparent 2px) /* Vertical lines (opacity 10%) */
          `,
          backgroundSize: "100%, 30px 30px, 30px 30px",
          backgroundColor: "#111827",
          // Border color still applied via className
        }}
      >
        {/* Left Content: Title and Description */}
        <div className="text-left">
          <h2
            // Use white text for title
            className="text-xl sm:text-2xl font-bold tracking-tight text-white"
          >
            Create a DAO
          </h2>
          <p className="mt-2 text-sm sm:text-base leading-6 text-gray-300 max-w-md">
            Pool ETH/SOL to invest and build on behalf of your community
          </p>
        </div>

        {/* Right Content: Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Link
            href="/create"
            // Button styling using purple theme
            className="rounded-lg bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            style={{
              // Purple glow effect
              boxShadow: `0 4px 14px 0 hsla(${primaryHsl}, 0.3)`, // Opacity 30%
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow = `0 6px 20px 0 hsla(${primaryHsl}, 0.4)`)
            } // Enhanced glow on hover (opacity 40%)
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = `0 4px 14px 0 hsla(${primaryHsl}, 0.3)`)
            }
          >
            CREATE FUND
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
