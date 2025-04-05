"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Lucide Icons
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Mock Data (only need images and IDs/links now)
const mockNewsImages = [
  {
    id: 1,
    image: "/placeholder-news-1.png", // Replace with actual paths
    link: "#",
  },
  {
    id: 2,
    image: "/placeholder-news-2.png",
    link: "#",
  },
  {
    id: 3,
    image: "/placeholder-news-3.png",
    link: "#",
  },
  {
    id: 4,
    image: "/placeholder-news-4.png",
    link: "#",
  },
  {
    id: 5,
    image: "/placeholder-news-5.png",
    link: "#",
  },
];

// Simple SVG Placeholder (Rectangle Gradient)
const svgPlaceholder = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 90'>
    <defs>
      <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stop-color='rgba(123, 31, 162, 0.4)' /> {/* purple-700/40 */}
        <stop offset='100%' stop-color='rgba(76, 29, 149, 0.6)' /> {/* purple-800/60 */}
      </linearGradient>
    </defs>
    <rect width='160' height='90' fill='url(#grad)' />
  </svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const dataUrl = `data:image/svg+xml;base64,${toBase64(svgPlaceholder)}`;

export function NewsCarousel() {
  // State to hold the Swiper instance
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Optional: Subtle background pattern or gradient if needed */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"/> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Optional Title */}
        {/* <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-8">Latest News</h2> */}

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={setSwiperInstance}
          navigation={false}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          className="!pb-10"
        >
          {mockNewsImages.map((news) => (
            <SwiperSlide key={news.id}>
              {/* Animation for each slide */}
              <motion.div
                initial={{ opacity: 0.6, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Link href={news.link} className="block group">
                  <div
                    className="relative aspect-[32/9] w-full rounded-xl overflow-hidden border border-purple-500/10 shadow-lg hover:shadow-purple-600/30 transition-shadow duration-300 bg-cover bg-center"
                    style={{ backgroundImage: `url("${dataUrl}")` }} // SVG Background
                  >
                    <Image
                      src={news.image}
                      alt={`News ${news.id}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        {swiperInstance && (
          <>
            <button
              onClick={() => swiperInstance.slidePrev()}
              className="absolute top-1/2 -translate-y-1/2 left-72 z-10 w-9 h-9 rounded-full bg-purple-600/40 hover:bg-purple-600/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperInstance.slideNext()}
              className="absolute top-1/2 -translate-y-1/2 right-72 z-10 w-9 h-9 rounded-full bg-purple-600/40 hover:bg-purple-600/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </motion.div>
    </section>
  );
}

// Add to globals.css for scrollbar styling (optional)
/*
@layer utilities {
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: hsl(var(--primary) / 0.5) transparent;
  }
  .scrollbar-thin::-webkit-scrollbar {
    height: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: hsl(var(--primary) / 0.5);
    border-radius: 3px;
    border: none;
  }
}
*/
