"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  Recycle,
  ArrowRight,
  PackageCheck,
  Scissors,
  Coins,
} from "lucide-react";

/* ═══════════════════════════════════════════════════
   CIRCULAR LIFECYCLE 4 STEPS
═══════════════════════════════════════════════════ */
const circularSteps = [
  { step: "01", label: "COLLECT", icon: PackageCheck },
  { step: "02", label: "REUSE", icon: Recycle },
  { step: "03", label: "UPCYCLE", icon: Scissors },
  { step: "04", label: "RECYCLE", icon: Leaf },
];

/* ═══════════════════════════════════════════════════
   MAIN HERO COMPONENT
═══════════════════════════════════════════════════ */
export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto rotate lifecycle steps smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % circularSteps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#cce8f5] via-[#ddf1f8] to-[#edf7fc] pt-24 sm:pt-26 lg:pt-28 pb-12 sm:pb-16 min-h-[85vh] flex flex-col justify-center">

      {/* ── Background Subtle Ambient Lighting ── */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#14A3C7]/12 blur-[140px] rounded-full -z-0" />
      <div className="pointer-events-none absolute top-1/3 left-10 w-[420px] h-[420px] bg-emerald-400/10 blur-[120px] rounded-full -z-0" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-amber-300/12 blur-[120px] rounded-full -z-0" />

      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">

        {/* ── Main High-Impact Layout Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* ══════════════════════════════════════════════════════
              LEFT / CENTER DOMAIN (Cols 1-7): GIANT EDITORIAL HEADLINE + CTAs
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">

            {/* ── GIANT HIGH-FASHION EDITORIAL TYPOGRAPHY ── */}
            <h1 className="font-sans font-black uppercase leading-[0.88] tracking-tighter text-slate-950 text-left w-full">
              <span className="block text-[2.1rem] sm:text-[3.15rem] md:text-[3.85rem] lg:text-[3.35rem] xl:text-[4.2rem] 2xl:text-[4.85rem]">
                STILL CONFUSED
              </span>
              <span className="block text-[2.1rem] sm:text-[3.15rem] md:text-[3.85rem] lg:text-[3.35rem] xl:text-[4.2rem] 2xl:text-[4.85rem] text-slate-900/90 mt-1">
                WHERE TO SELL
              </span>
              <span className="block text-[2.1rem] sm:text-[3.15rem] md:text-[3.85rem] lg:text-[3.35rem] xl:text-[4.2rem] 2xl:text-[4.85rem] text-slate-950 mt-1">
                USED CLOTHES?
              </span>
              <span className="block text-[2.25rem] sm:text-[3.35rem] md:text-[4.05rem] lg:text-[3.55rem] xl:text-[4.4rem] 2xl:text-[5.05rem] text-[#14A3C7] mt-1 sm:mt-2">
                BWORTH IS HERE.
              </span>
            </h1>

            {/* Value Proposition Highlight Banner */}
            <div className="relative inline-flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-2xl bg-white/80 backdrop-blur-md border border-[#14A3C7]/20 shadow-md">
              <span className="relative overflow-hidden group bg-gradient-to-r from-[#0092B3] via-[#14A3C7] to-[#0284c7] text-white italic font-sans font-black uppercase rounded-xl px-4 sm:px-6 py-2 text-[1.3rem] sm:text-[1.85rem] md:text-[2.1rem] lg:text-[1.8rem] xl:text-[2.2rem] leading-none shadow-md">
                TURN INTO VALUE ⚡
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 px-2 sm:px-3">
                1 BWC = ₹1 in BWorth Wallet • Zero Bargaining
              </span>
            </div>

            {/* Editorial Paragraph Narrative */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-[560px] font-medium text-left">
              No photos. No bargaining. No dust. <span className="font-bold text-slate-900">Your wardrobe holds hidden value...</span> and we unlock it right from your doorstep.
            </p>

            {/* CTA App Store Row */}
            <div className="flex flex-wrap items-center justify-start gap-3.5 sm:gap-4 pt-2 w-full">
              {/* Play Store Button */}
              <div className="relative group">
                {/* Ambient glowing backlight on hover */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#14A3C7]/40 via-cyan-400/40 to-emerald-400/40 blur-lg opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
                
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.BworthGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative inline-flex items-center gap-3.5 bg-slate-950 hover:bg-black text-white pl-5 pr-4 py-3 rounded-full border border-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(20,163,199,0.45)] hover:border-cyan-400/80 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Shimmer light beam sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />

                  {/* Play Store Brand Icon */}
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300 shadow-inner">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" viewBox="0 0 512 512">
                      <path fill="#00D2FF" d="M380.93 234.66L95.84 71.49C82.88 64.08 67 73.43 67 88.33v335.34c0 14.9 15.88 24.25 28.84 16.84l285.09-163.17c12.1-6.92 12.1-25.76 0-32.68z" />
                      <path fill="#00F076" d="M95.84 71.49l182.25 184.51L95.84 440.51C82.88 447.92 67 438.57 67 423.67V88.33c0-14.9 15.88-24.25 28.84-16.84z" />
                      <path fill="#FFC700" d="M380.93 234.66l-102.84 21.34L95.84 71.49l285.09 163.17c12.1 6.92 12.1 25.76 0 32.68z" />
                      <path fill="#FF3B30" d="M380.93 277.34l-285.09 163.17L278.09 256l102.84 21.34z" />
                    </svg>
                  </div>

                  {/* Main Text Content */}
                  <div className="flex flex-col text-left">
                    <span className="font-extrabold uppercase tracking-wider text-xs text-white group-hover:text-cyan-300 transition-colors">
                      INSTALL ON PLAY STORE
                    </span>
                    <span className="text-[9.5px] text-slate-400 font-semibold group-hover:text-slate-300 transition-colors">
                      Free Doorstep Pickup Kit
                    </span>
                  </div>

                  {/* Animated Interactive Arrow */}
                  <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#14A3C7] group-hover:shadow-[0_0_14px_rgba(20,163,199,0.8)] flex items-center justify-center transition-all duration-300 ml-1">
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </motion.a>
              </div>

              {/* iOS App Store Button (Interactive with Hover Glow & Click Feedback) */}
              <div className="relative group">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    alert("🍎 iOS App is launching soon! Our TestFlight build is undergoing final review.");
                  }}
                  className="relative inline-flex items-center gap-3 bg-white/95 hover:bg-white text-slate-900 pl-4 pr-5 py-2.5 rounded-full border border-slate-200/90 hover:border-[#14A3C7]/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(20,163,199,0.18)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Subtle shine bar */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent skew-x-12 pointer-events-none" />

                  <div className="w-8 h-8 rounded-full bg-slate-900 group-hover:bg-black flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.47c.63-.78 1.07-1.85.95-2.94-.93.04-2.03.63-2.68 1.4-.58.67-1.09 1.76-.95 2.82 1.03.08 2.06-.52 2.68-1.28" />
                    </svg>
                  </div>

                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#14A3C7]"></span>
                      </span>
                      <span className="text-[8.5px] font-black text-[#14A3C7] uppercase tracking-widest leading-none">
                        COMING SOON
                      </span>
                    </div>
                    <span className="text-xs font-extrabold text-slate-800 group-hover:text-slate-950 leading-tight">
                      App Store (iOS)
                    </span>
                  </div>
                </motion.button>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT DOMAIN (Cols 8-12): EDITORIAL VISUAL + CIRCULAR LIFECYCLE
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 w-full">

            {/* ── 4 STEP CIRCULAR LIFECYCLE CARD ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl bg-white/95 backdrop-blur-xl p-4 sm:p-5 border-2 border-[#14A3C7]/40 shadow-[0_16px_40px_rgba(20,163,199,0.12)] overflow-hidden"
            >
              {/* 4 Step Clickable Navigation Grid with Icon + One Word */}
              <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
                {circularSteps.map((stepItem, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={stepItem.step}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`relative flex flex-col items-center justify-center py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                        isActive
                          ? "bg-slate-950 text-white border-slate-900 shadow-md scale-[1.03]"
                          : "bg-slate-50/90 border-slate-200/80 text-slate-700 hover:bg-sky-50 hover:border-sky-200"
                      }`}
                    >
                      <stepItem.icon
                        size={22}
                        className={`stroke-[2.2] mb-1.5 transition-colors ${
                          isActive ? "text-[#14A3C7]" : "text-slate-600 group-hover:text-[#14A3C7]"
                        }`}
                      />
                      <span
                        className={`text-[9.5px] sm:text-[10.5px] font-black uppercase tracking-wider leading-none transition-colors ${
                          isActive ? "text-cyan-300" : "text-slate-800"
                        }`}
                      >
                        {stepItem.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Step Flow Progress Bar */}
              <div className="mt-3.5 pt-2 border-t border-sky-100 flex items-center gap-1.5 w-full">
                {[0, 1, 2, 3].map((stepIdx) => {
                  const isActive = activeStep === stepIdx;
                  const isPassed = activeStep > stepIdx;
                  return (
                    <div
                      key={stepIdx}
                      onClick={() => setActiveStep(stepIdx)}
                      className="flex-1 h-1.5 rounded-full overflow-hidden bg-sky-100 cursor-pointer"
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-[#14A3C7] to-emerald-400 w-full"
                            : isPassed
                            ? "bg-[#14A3C7]/40 w-full"
                            : "w-0"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* ── DUAL EDITORIAL FASHION VISUAL CARDS ── */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Photo 1: Disorganized Messy Almirah with Confused Customer */}
              <div className="group relative rounded-3xl overflow-hidden border-[3px] border-white shadow-xl aspect-[4/4.5] bg-slate-100">
                <Image
                  src="/messy_closet_clutter.jpg"
                  alt="Confused person standing in front of open messy disorganized wardrobe with clothes strewn everywhere"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-rose-500 text-white text-[11px] sm:text-[12px] font-black uppercase tracking-wider shadow-lg shadow-rose-500/40 border border-white/30 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>CLOSET CLUTTER</span>
                  </span>
                </div>
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 text-white">
                  <p className="text-[11px] sm:text-[12px] font-black uppercase leading-tight">
                    Overflowing Almirah
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-rose-200 font-semibold leading-tight mt-0.5">
                    Still confused where to sell?
                  </p>
                </div>
              </div>

              {/* Photo 2: BWORTH Fashion Model & Cash Reward */}
              <div className="group relative rounded-3xl overflow-hidden border-[3px] border-white shadow-xl aspect-[4/4.5] bg-slate-100">
                <Image
                  src="/bworth_hero_woman.jpg"
                  alt="BWorth circular fashion customer receiving rewards"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500 text-white text-[11px] sm:text-[12px] font-black uppercase tracking-wider shadow-lg shadow-emerald-500/40 border border-white/30 backdrop-blur-md">
                    <Coins size={13} className="text-amber-300 fill-amber-300 shrink-0" />
                    <span>+₹1,250 BWorth Coins</span>
                  </span>
                </div>
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 text-white">
                  <p className="text-[11px] sm:text-[12px] font-black uppercase leading-tight">
                    Instant Wallet Value
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-emerald-300 font-semibold leading-tight mt-0.5">
                    1 BWC = ₹1 in BWorth Wallet
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}