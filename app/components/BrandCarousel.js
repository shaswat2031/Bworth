"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext';

const brandLogos = [
  { name: "Cossential", src: "/Cossential.png" },
  { name: "Dhawan", src: "/Dawan.png" },
  { name: "Gheesa Peeta", src: "/GP.png" },
  { name: "HomeSolution", src: "/HomeSolution.png" },
  { name: "JRCY", src: "/JRCY.png" },
  { name: "Nandrani", src: "/Nand.png" },
  { name: "Neel & Ned", src: "/Neel & Ned.png" },
  { name: "The Plain Edition", src: "/Plain.png" },
  { name: "Sasha-The Label", src: "/Sasa.png" },
  { name: "SEEME", src: "/SEEME.png" },
  { name: "Seere", src: "/Seere.png" },
  { name: "tIM RAFT", src: "/tim.png" },
  { name: "TRENZIC", src: "/Trenzc.png" }
];

const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

export default function BrandCarousel() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  return (
    <div className="py-12 overflow-hidden relative select-none">
      {/* Top Infinite Marquee Track */}
      <div className="flex overflow-hidden whitespace-nowrap group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
          className="flex items-center gap-8 shrink-0 group-hover:[animation-play-state:paused] py-6"
        >
          {duplicatedLogos.map((brand, index) => (
            <div
              key={`top-${index}`}
              className={`w-64 sm:w-80 h-36 sm:h-44 p-6 sm:p-8 rounded-3xl border shadow-xl flex items-center justify-center transition-all duration-500 hover:scale-105 ${
                isWhite
                  ? "bg-white border-slate-200 shadow-slate-200/60 hover:border-[#14A3C7]"
                  : "bg-[#081822] border-white/15 shadow-black/80 hover:border-[#14A3C7]"
              }`}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={280}
                height={140}
                className="max-h-24 sm:max-h-32 w-auto object-contain transition-transform duration-300 hover:scale-110 p-2"
                unoptimized
                quality={100}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade Gradients at Edges */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-28 sm:w-48 z-20 bg-gradient-to-r ${
        isWhite ? "from-slate-50 to-transparent" : "from-[#061217] to-transparent"
      }`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-28 sm:w-48 z-20 bg-gradient-to-l ${
        isWhite ? "from-slate-50 to-transparent" : "from-[#061217] to-transparent"
      }`} />
    </div>
  );
}
