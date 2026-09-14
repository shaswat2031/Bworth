"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Download, Smartphone, ArrowRight, Zap, Leaf } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function PromoAdBar() {
  const [topBannerDismissed, setTopBannerDismissed] = useState(false);
  const [floatingAdDismissed, setFloatingAdDismissed] = useState(false);
  const [showFloatingAd, setShowFloatingAd] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Show floating ad after 2.5 seconds or on scroll
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowFloatingAd(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setShowFloatingAd(true), 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* 1. TOP STICKY ANNOUNCEMENT AD BAR */}
      <AnimatePresence>
        {!topBannerDismissed && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-[90] bg-[#07151d] text-white py-2 px-4 shadow-xl border-b border-[#14A3C7]/30"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-black font-black uppercase text-[10px] tracking-wider shrink-0 shadow-sm">
                  <Zap size={11} className="fill-black" />
                  SPECIAL OFFER
                </span>
                <p className="font-medium text-slate-200 truncate text-xs sm:text-sm">
                  <span className="font-bold text-amber-300">BWorth Mobile App:</span> Get <span className="font-black text-white underline underline-offset-2">100 Free BWC Coins</span> (1 BWC = ₹1) on your 1st Doorstep Garment Pickup!
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href="https://play.google.com/store/apps/details?id=com.BworthGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14A3C7] text-white font-black text-xs hover:bg-white hover:text-[#0b1d26] transition-all shadow-md group shrink-0"
                >
                  <Download size={13} className="group-hover:translate-y-0.5 transition-transform" />
                  <span>GET APP</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  onClick={() => setTopBannerDismissed(true)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close announcement bar"
                >
                  <X size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FLOATING BOTTOM-RIGHT ULTRA-LUXURY PROMOTIONAL AD CARD */}
      <AnimatePresence>
        {showFloatingAd && !floatingAdDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-6 right-6 z-[85] max-w-sm w-[92%] sm:w-84 rounded-2xl p-4 bg-[#081721]/95 text-white border border-[#14A3C7]/40 shadow-2xl shadow-black/80 backdrop-blur-2xl transition-all duration-300"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#14A3C7]/15 rounded-full blur-2xl pointer-events-none" />

            {/* Top Dismiss Button */}
            <button
              onClick={() => setFloatingAdDismissed(true)}
              className="absolute top-3 right-3 p-1 rounded-full bg-white/5 hover:bg-white/20 text-slate-400 hover:text-white transition-colors z-10"
              aria-label="Dismiss app promo card"
            >
              <X size={14} />
            </button>

            <div className="flex items-start gap-3.5 relative z-10">
              {/* App Badge Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#14A3C7] via-amber-400 to-[#14A3C7] p-0.5 shrink-0 shadow-lg">
                <div className="w-full h-full bg-[#051118] rounded-[9px] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-[#14A3C7]" />
                </div>
              </div>

              {/* Ad Content Header */}
              <div className="space-y-0.5 pr-4">
                <div className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#14A3C7]">
                  <Sparkles size={11} />
                  <span>BWorth Mobile App</span>
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight leading-snug">
                  BWorth in your Pocket
                </h4>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Clear closet clutter, book doorstep pickup, & earn instant cash rewards (1 BWC = ₹1).
                </p>
              </div>
            </div>

            {/* Live Impact Stats Strip */}
            <div className="mt-3 py-2 px-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[11px] font-bold">
              <span className="flex items-center gap-1 text-amber-300">
                <Leaf size={12} className="text-amber-300" /> 500+ Tons CO₂ Saved
              </span>
              <span className="text-emerald-400">
                25,000+ kg Recycled
              </span>
            </div>

            {/* Download CTA Button */}
            <div className="mt-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.BworthGo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#14A3C7] via-[#1292b3] to-[#0c6b84] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-[#14A3C7]/30 flex items-center justify-center gap-2 transition-all"
              >
                <Download size={14} />
                <span>Get Google Play App</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
