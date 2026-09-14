"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTheme } from '../context/ThemeContext';

const comingSoonBrands = [
  { name: "Burberry", src: "/BurBerry.png" },
  { name: "Calvin Klein", src: "/C&K.png" },
  { name: "H&M", src: "/H&M.png" },
  { name: "Jack & Jones", src: "/J&J.png" },
  { name: "Levi's", src: "/Levi.png" },
  { name: "Nalli", src: "/Nalli.png" },
  { name: "Prada", src: "/Parda.png" },
  { name: "Puma", src: "/Puma.png" },
  { name: "Shein", src: "/Shein.png" },
  { name: "Zara", src: "/Zara.png" }
];

const duplicatedBrands = [...comingSoonBrands, ...comingSoonBrands, ...comingSoonBrands];

export default function BrandComingSoon() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  return (
    <div className="py-20 relative overflow-hidden select-none">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
          <Sparkles size={16} />
          <span className="text-xs font-black uppercase tracking-widest">UPCOMING LINEUP</span>
        </div>

        <h2 className={`text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight ${
          isWhite ? "text-slate-900" : "text-white"
        }`}>
          Brand Coming Soon
        </h2>

        <p className={`text-base sm:text-xl font-serif italic ${
          isWhite ? "text-slate-600" : "text-slate-300"
        }`}>
          A curated lineup of fashion labels joining BWorth soon
        </p>
      </div>

      {/* Marquee Carousel */}
      <div className="relative flex overflow-hidden whitespace-nowrap group">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 45,
            ease: "linear",
          }}
          className="flex items-center gap-8 shrink-0 group-hover:[animation-play-state:paused] py-6"
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`coming-${index}`}
              className={`w-56 sm:w-72 h-32 sm:h-40 p-6 rounded-3xl border shadow-xl flex items-center justify-center transition-all duration-300 ${
                isWhite
                  ? "bg-white/90 border-slate-200 shadow-slate-200/50 hover:border-[#14A3C7]"
                  : "bg-[#081822]/90 border-white/15 shadow-black/80 hover:border-[#14A3C7]"
              }`}
            >
              <div className="relative w-full h-full flex items-center justify-center filter blur-[2.5px] opacity-80 hover:blur-none hover:opacity-100 transition-all duration-500">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={220}
                  height={110}
                  className="max-h-20 sm:max-h-26 w-auto object-contain p-1"
                  quality={90}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade Gradients */}
        <div className={`pointer-events-none absolute inset-y-0 left-0 w-28 sm:w-48 z-20 bg-gradient-to-r ${
          isWhite ? "from-slate-100 to-transparent" : "from-[#061217] to-transparent"
        }`} />
        <div className={`pointer-events-none absolute inset-y-0 right-0 w-28 sm:w-48 z-20 bg-gradient-to-l ${
          isWhite ? "from-slate-100 to-transparent" : "from-[#061217] to-transparent"
        }`} />
      </div>
    </div>
  );
}
