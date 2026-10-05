"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Recycle, Leaf, Coins, CheckCircle2, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ScrollImpactBanner() {
  const { theme } = useTheme();
  const bannerRef = useRef(null);

  // Track scroll progress across this banner section
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  // Gentle spring physics for a calm, silky-smooth glide
  const springConfig = { stiffness: 45, damping: 25, mass: 0.5 };

  // Track 1 moves gently LEFT-TO-RIGHT as the user scrolls DOWN (calm, readable pace)
  const rawX1 = useTransform(scrollYProgress, [0, 1], ["-8%", "2%"]);
  const x1 = useSpring(rawX1, springConfig);

  // Track 2 moves gently RIGHT-TO-LEFT as the user scrolls DOWN
  const rawX2 = useTransform(scrollYProgress, [0, 1], ["2%", "-8%"]);
  const x2 = useSpring(rawX2, springConfig);

  // Primary banner items highlighting BWORTH and 25,000+ KG
  const primaryItems = [
    { type: "brand", text: "BWORTH" },
    { type: "star" },
    { type: "pill", highlight: true, text: "25,000+ KG", sub: "CLOTHES RECYCLED" },
    { type: "star" },
    { type: "pill", highlight: false, text: "100% ZERO-LANDFILL", sub: "GUARANTEED" },
    { type: "star" },
    { type: "brand", text: "BWORTH" },
    { type: "star" },
    { type: "pill", highlight: true, text: "25,000+ KG", sub: "SAVED FROM DUMPS" },
    { type: "star" },
    { type: "pill", highlight: false, text: "1 BWC = ₹1 CASH", sub: "INSTANT PAYOUT" },
    { type: "star" },
  ];

  // Secondary ticker items for additional impact metrics
  const secondaryItems = [
    { text: "500+ TONS CO₂ SAVED", icon: Leaf },
    { text: "DOORSTEP PICKUP IN 2 MINS", icon: Sparkles },
    { text: "BWORTH CIRCULAR IMPACT", icon: Recycle },
    { text: "25,000+ KG SUSTAINABLY REPURPOSED", icon: CheckCircle2 },
    { text: "TURN CLUTTER INTO WALLET CASH", icon: Coins },
    { text: "100% ZERO WASTE REVOLUTION", icon: Leaf },
  ];

  return (
    <section
      ref={bannerRef}
      aria-label="BWorth 25,000+ KG Recycling Impact"
      className={`relative py-10 sm:py-14 overflow-hidden border-y select-none transition-colors duration-300 ${
        theme === "white"
          ? "bg-gradient-to-b from-[#f0f9fc] via-white to-[#f0f9fc] border-[#14A3C7]/20"
          : "bg-gradient-to-b from-[#061219] via-[#081822] to-[#061219] border-white/10"
      }`}
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-full max-w-4xl h-36 bg-[#14A3C7]/15 blur-3xl rounded-full" />
      </div>

      {/* Left and Right Fade Gradient Edge Masks for cinema smooth scroll look */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 z-20 bg-gradient-to-r ${
          theme === "white"
            ? "from-[#f0f9fc] via-[#f0f9fc]/80 to-transparent"
            : "from-[#061219] via-[#061219]/80 to-transparent"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 z-20 bg-gradient-to-l ${
          theme === "white"
            ? "from-[#f0f9fc] via-[#f0f9fc]/80 to-transparent"
            : "from-[#061219] via-[#061219]/80 to-transparent"
        }`}
      />

      <div className="space-y-4 sm:space-y-5">
        {/* ── ROW 1: PRIMARY SCROLL-DRIVEN BANNER (LEFT TO RIGHT ON SCROLL DOWN) ── */}
        <div className="overflow-hidden flex whitespace-nowrap">
          <motion.div style={{ x: x1 }} className="flex items-center gap-6 sm:gap-8 shrink-0 will-change-transform">
            {[...primaryItems, ...primaryItems, ...primaryItems, ...primaryItems].map((item, idx) => {
              if (item.type === "brand") {
                return (
                  <span
                    key={idx}
                    className={`text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight uppercase leading-none transition-colors ${
                      theme === "white"
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#14A3C7] to-slate-900 drop-shadow-xs"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-white"
                    }`}
                  >
                    {item.text}
                  </span>
                );
              }

              if (item.type === "star") {
                return (
                  <span
                    key={idx}
                    className="text-lg sm:text-2xl text-[#14A3C7] font-black opacity-60 px-1"
                  >
                    ✦
                  </span>
                );
              }

              if (item.type === "pill") {
                return (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-3 px-5 sm:px-7 py-2 sm:py-3 rounded-full border transition-all duration-200 shadow-md ${
                      item.highlight
                        ? theme === "white"
                          ? "bg-gradient-to-r from-[#14A3C7] to-[#0284c7] text-white border-sky-300/60 shadow-[#14A3C7]/25"
                          : "bg-gradient-to-r from-[#0284c7] via-[#14A3C7] to-[#10B981] text-white border-cyan-400/50 shadow-cyan-950/40"
                        : theme === "white"
                        ? "bg-white/95 border-sky-200 text-slate-800 shadow-xs"
                        : "bg-[#0d2737]/90 border-cyan-500/30 text-white shadow-xs"
                    }`}
                  >
                    {item.highlight && (
                      <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shrink-0" />
                    )}
                    <span className="text-xl sm:text-3xl font-black font-sans tracking-tight leading-none whitespace-nowrap">
                      {item.text}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md whitespace-nowrap ${
                        item.highlight
                          ? "bg-black/20 text-white/95"
                          : theme === "white"
                          ? "bg-[#14A3C7]/10 text-[#14A3C7]"
                          : "bg-cyan-400/15 text-cyan-300"
                      }`}
                    >
                      {item.sub}
                    </span>
                  </div>
                );
              }

              return null;
            })}
          </motion.div>
        </div>

        {/* ── ROW 2: SECONDARY COUNTER-SCROLLING RIBBON (RIGHT TO LEFT ON SCROLL DOWN) ── */}
        <div className="overflow-hidden flex whitespace-nowrap">
          <motion.div style={{ x: x2 }} className="flex items-center gap-5 sm:gap-7 shrink-0 will-change-transform">
            {[...secondaryItems, ...secondaryItems, ...secondaryItems, ...secondaryItems].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-extrabold uppercase tracking-wider select-none ${
                    theme === "white"
                      ? "bg-white/80 border-slate-200/80 text-slate-700 shadow-xs"
                      : "bg-[#0b1f2b]/80 border-white/10 text-slate-200 shadow-xs"
                  }`}
                >
                  <IconComp size={15} className="text-[#14A3C7] shrink-0" />
                  <span className="whitespace-nowrap">{item.text}</span>
                  <span className="text-[#14A3C7]/40 text-xs ml-1">•</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
