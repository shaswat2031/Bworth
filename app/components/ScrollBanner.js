"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Coins, Truck, Recycle, ShieldCheck, Leaf, Zap } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ScrollBanner() {
  const { theme } = useTheme();

  const metrics = [
    { label: "1 BWC = ₹1 CASH", icon: Coins, highlight: true },
    { label: "25,000+ KG CLOTHES RECYCLED", icon: Recycle, highlight: false },
    { label: "500+ TONS CO₂ EMISSIONS SAVED", icon: Leaf, highlight: true },
    { label: "FREE DOORSTEP PICKUP", icon: Truck, highlight: false },
    { label: "100% ZERO-LANDFILL GUARANTEE", icon: Leaf, highlight: true },
    { label: "TOP FASHION BRAND PARTNERS", icon: Sparkles, highlight: false },
    { label: "INSTANT COIN PAYOUT", icon: Zap, highlight: true },
    { label: "100% TRACEABLE CARBON CREDITS", icon: ShieldCheck, highlight: false },
  ];

  return (
    <div className="relative py-8 overflow-hidden select-none my-12">
      {/* Background ambient glow line */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-full h-24 bg-[#14A3C7]/10 blur-3xl rounded-full"></div>
      </div>

      {/* Main Glassmorphic Marquee Ribbon */}
      <div
        className={`relative py-5 border-y shadow-2xl backdrop-blur-2xl transition-all duration-500 ${
          theme === "white"
            ? "bg-white/80 border-black/10 text-black shadow-black/5"
            : "bg-[#091720]/80 border-white/15 text-white shadow-cyan-950/30"
        }`}
      >
        {/* Left and Right Fade Gradient Masks */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-20 bg-gradient-to-r ${
            theme === "white" ? "from-white to-transparent" : "from-[#091720] to-transparent"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-20 bg-gradient-to-l ${
            theme === "white" ? "from-white to-transparent" : "from-[#091720] to-transparent"
          }`}
        />

        {/* Row 1: Infinite Marquee Stream */}
        <div className="flex overflow-hidden whitespace-nowrap group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
            className="flex items-center gap-6 shrink-0 group-hover:[animation-play-state:paused]"
          >
            {[...metrics, ...metrics, ...metrics, ...metrics].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
                    item.highlight
                      ? theme === "white"
                        ? "bg-[#14A3C7] text-white border-[#14A3C7] shadow-lg shadow-[#14A3C7]/20"
                        : "bg-white text-black border-white shadow-lg shadow-white/20"
                      : theme === "white"
                      ? "bg-black/5 border-black/10 text-black/80 hover:bg-black/10"
                      : "bg-white/10 border-white/15 text-white/90 hover:bg-white/20"
                  }`}
                >
                  <IconComp size={16} className={item.highlight ? "animate-bounce" : "text-[#14A3C7]"} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

