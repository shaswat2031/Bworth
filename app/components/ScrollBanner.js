"use client";
import React from "react";
import { Sparkles, Coins, Truck, Recycle, ShieldCheck, Leaf, Zap } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ScrollBanner() {
  const { theme } = useTheme();

  const metrics = [
    { label: "1 BWC = ₹1 CASH", icon: Coins, highlight: true },
    { label: "FREE DOORSTEP PICKUP", icon: Truck, highlight: false },
    { label: "100% ZERO-LANDFILL GUARANTEE", icon: Leaf, highlight: true },
    { label: "TOP FASHION BRAND PARTNERS", icon: Sparkles, highlight: false },
    { label: "INSTANT COIN PAYOUT", icon: Zap, highlight: true },
    { label: "100% TRACEABLE CARBON CREDITS", icon: ShieldCheck, highlight: false },
    { label: "25,000+ KG CLOTHES RECYCLED", icon: Recycle, highlight: false },
    { label: "500+ TONS CO₂ EMISSIONS SAVED", icon: Leaf, highlight: true },
  ];

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* Background ambient glow line */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-3/4 h-8 bg-[#14A3C7]/15 blur-2xl rounded-full" />
      </div>

      {/* Main Glassmorphic Marquee Ribbon — docked seamlessly */}
      <div
        className={`relative py-3 sm:py-3.5 border-y backdrop-blur-md transition-colors duration-300 ${
          theme === "white"
            ? "bg-white/60 border-[#14A3C7]/20 text-slate-800 shadow-[0_4px_20px_rgba(20,163,199,0.05)]"
            : "bg-[#091720]/80 border-white/10 text-white shadow-cyan-950/20"
        }`}
      >
        {/* Left and Right Fade Gradient Masks matching Hero background tones */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 z-20 bg-gradient-to-r ${
            theme === "white"
              ? "from-[#d2edf7] via-[#d2edf7]/80 to-transparent"
              : "from-[#091720] via-[#091720]/80 to-transparent"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 z-20 bg-gradient-to-l ${
            theme === "white"
              ? "from-[#ebf8fd] via-[#ebf8fd]/80 to-transparent"
              : "from-[#091720] via-[#091720]/80 to-transparent"
          }`}
        />

        {/* Infinite Marquee Stream with smooth glide and hover pause */}
        <div className="flex overflow-hidden whitespace-nowrap marquee-track-hover">
          <div className="animate-marquee-slow flex items-center gap-3 sm:gap-4 shrink-0 pr-3 sm:pr-4">
            {[...metrics, ...metrics, ...metrics, ...metrics].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-2.5 px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full border text-[11px] sm:text-[12px] font-bold tracking-wider uppercase transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] cursor-pointer select-none ${
                    item.highlight
                      ? theme === "white"
                        ? "bg-gradient-to-r from-[#0284c7] via-[#14A3C7] to-[#0ea5e9] text-white border-sky-300/40 shadow-sm shadow-[#14A3C7]/25"
                        : "bg-gradient-to-r from-[#0284c7] via-[#14A3C7] to-[#38bdf8] text-white border-cyan-400/40 shadow-sm shadow-[#14A3C7]/30"
                      : theme === "white"
                      ? "bg-white/90 border-sky-200/80 text-slate-800 shadow-[0_2px_8px_rgba(20,163,199,0.06)] hover:bg-white hover:border-[#14A3C7]/40"
                      : "bg-[#0c2230]/85 border-cyan-500/20 text-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:bg-[#0f2a3c] hover:border-cyan-400/40"
                  }`}
                >
                  <div
                    className={`w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full flex items-center justify-center shrink-0 ${
                      item.highlight
                        ? "bg-white/20 text-white backdrop-blur-xs"
                        : theme === "white"
                        ? "bg-[#14A3C7]/10 text-[#14A3C7]"
                        : "bg-cyan-500/20 text-cyan-300"
                    }`}
                  >
                    <IconComp size={12} strokeWidth={2.5} className="shrink-0" />
                  </div>
                  <span className="leading-none whitespace-nowrap">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
