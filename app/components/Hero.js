"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Coins,
  Leaf,
  Recycle,
  ArrowRight,
  Zap,
  PackageCheck,
  RefreshCw,
} from "lucide-react";

/* ── Leaf SVG decoration ── */
function LeafDecor({ className, size = 32, rotate = 0, opacity = 0.65 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M8 56 C8 56 16 8 56 8 C56 8 48 48 8 56Z"
        fill="#4CAF50"
        stroke="#388E3C"
        strokeWidth="1.5"
      />
      <line x1="8" y1="56" x2="32" y2="32" stroke="#388E3C" strokeWidth="1.5" />
    </svg>
  );
}

/* ── Shirt icon decoration ── */
function ShirtIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN HERO EXPORT
═══════════════════════════════════════════════════ */
export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const circularSteps = [
    {
      icon: PackageCheck,
      label: "COLLECT",
      step: "01",
      color: "text-sky-700",
      activeColor: "text-sky-950 font-black",
      activeRing: "ring-2 ring-sky-400 bg-sky-100 shadow-md shadow-sky-400/25 border-sky-300",
      bg: "bg-sky-50 border-sky-200 hover:bg-sky-100/70",
      iconBg: "bg-sky-500/15 text-sky-600",
      activeIconBg: "bg-sky-500 text-white shadow-sm shadow-sky-500/40",
    },
    {
      icon: Recycle,
      label: "REUSE",
      step: "02",
      color: "text-emerald-700",
      activeColor: "text-emerald-950 font-black",
      activeRing: "ring-2 ring-emerald-400 bg-emerald-100 shadow-md shadow-emerald-400/25 border-emerald-300",
      bg: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100/70",
      iconBg: "bg-emerald-500/15 text-emerald-600",
      activeIconBg: "bg-emerald-500 text-white shadow-sm shadow-emerald-500/40",
    },
    {
      icon: Zap,
      label: "UPCYCLE",
      step: "03",
      color: "text-amber-700",
      activeColor: "text-amber-950 font-black",
      activeRing: "ring-2 ring-amber-400 bg-amber-100 shadow-md shadow-amber-400/25 border-amber-300",
      bg: "bg-amber-50 border-amber-200 hover:bg-amber-100/70",
      iconBg: "bg-amber-500/15 text-amber-600",
      activeIconBg: "bg-amber-500 text-white shadow-sm shadow-amber-500/40",
    },
    {
      icon: Leaf,
      label: "RECYCLE",
      step: "04",
      color: "text-teal-700",
      activeColor: "text-teal-950 font-black",
      activeRing: "ring-2 ring-teal-400 bg-teal-100 shadow-md shadow-teal-400/25 border-teal-300",
      bg: "bg-teal-50 border-teal-200 hover:bg-teal-100/70",
      iconBg: "bg-teal-500/15 text-teal-600",
      activeIconBg: "bg-teal-500 text-white shadow-sm shadow-teal-500/40",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#d0edf8] via-[#dff3fa] to-[#ecf8fd] pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-14 min-h-[75vh] lg:min-h-[78vh] flex flex-col justify-center">

      {/* Leaf decorations */}
      <LeafDecor className="absolute top-5 left-4 pointer-events-none" size={52} rotate={-25} opacity={0.6} />
      <LeafDecor className="absolute top-10 left-16 pointer-events-none" size={33} rotate={15} opacity={0.4} />
      <LeafDecor className="absolute top-3 right-6 pointer-events-none" size={48} rotate={35} opacity={0.55} />
      <LeafDecor className="absolute top-14 right-24 pointer-events-none" size={28} rotate={-8} opacity={0.35} />
      <LeafDecor className="absolute bottom-24 left-10 pointer-events-none" size={38} rotate={50} opacity={0.28} />
      <LeafDecor className="absolute bottom-28 right-14 pointer-events-none" size={30} rotate={-42} opacity={0.28} />

      {/* Shirt icon decorations */}
      <div className="absolute top-7 left-[17%] pointer-events-none opacity-[0.18]">
        <ShirtIcon size={30} className="text-[#14A3C7]" />
      </div>
      <div className="absolute top-7 right-[20%] pointer-events-none opacity-[0.18]">
        <ShirtIcon size={24} className="text-[#14A3C7]" />
      </div>


      {/* 3-column grid container spanning edge-to-edge with balanced fluid margins */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12 py-5 sm:py-7 lg:py-8 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr_360px] xl:grid-cols-[420px_1.05fr_420px] 2xl:grid-cols-[460px_1.1fr_460px] gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 items-center w-full">

          {/* ─── LEFT — Box visual + Circular Ecosystem Process ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start w-full"
          >
            {/* Floating box */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[360px] xl:max-w-[420px] 2xl:max-w-[460px]"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-[5px] border-white">
                <Image
                  src="/bworth_box_clean.jpg"
                  alt="BWorth wardrobe decluttering collection box with clothes"
                  width={460}
                  height={460}
                  className="object-cover w-full aspect-square"
                  priority
                />
              </div>
            </motion.div>

            {/* Circular Process Highlight Banner — Collect, Reuse, Upcycle, Recycle with Infinite Looping Animation */}
            <div className="mt-4 w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[360px] xl:max-w-[420px] 2xl:max-w-[460px] rounded-2xl bg-white/95 backdrop-blur-md p-3 border border-[#14A3C7]/30 shadow-xl shadow-sky-950/5">
              <div className="flex items-center justify-between px-1 pb-2 mb-2 border-b border-sky-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
                  <RefreshCw size={11} className="text-[#14A3C7] animate-spin [animation-duration:6s]" />
                  Circular Lifecycle
                </span>
                <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  100% Closed Loop
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {circularSteps.map(({ icon: Icon, label, step, color, activeColor, activeRing, bg, iconBg, activeIconBg }, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <motion.div
                      key={label}
                      animate={{
                        scale: isActive ? 1.06 : 1,
                        y: isActive ? -3 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      onClick={() => setActiveStep(idx)}
                      onMouseEnter={() => setActiveStep(idx)}
                      className={`relative flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl border transition-all duration-300 cursor-pointer group select-none ${
                        isActive ? activeRing : bg
                      }`}
                    >
                      <span
                        className={`absolute top-1 right-1 text-[7.5px] font-black leading-none transition-opacity ${
                          isActive ? "opacity-100 font-extrabold text-gray-900" : "opacity-45"
                        }`}
                      >
                        {step}
                      </span>
                      <motion.div
                        animate={
                          isActive
                            ? {
                                y: [0, -3, 0],
                                rotate: [0, -8, 8, 0],
                              }
                            : { y: 0, rotate: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          repeat: isActive ? Infinity : 0,
                          repeatDelay: 0.6,
                          ease: "easeInOut",
                        }}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg shadow-xs flex items-center justify-center mb-1 transition-all duration-300 ${
                          isActive ? activeIconBg : iconBg
                        }`}
                      >
                        <Icon size={14} className="stroke-[2.5]" />
                      </motion.div>
                      <span
                        className={`text-[9px] sm:text-[10px] font-black uppercase tracking-tight leading-none transition-colors duration-300 ${
                          isActive ? activeColor : color
                        }`}
                      >
                        {label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Looping Step Flow Indicator Bar */}
              <div className="mt-2.5 pt-1.5 border-t border-sky-100/60 flex items-center gap-1 w-full px-0.5">
                {[0, 1, 2, 3].map((stepIdx) => {
                  const isActive = activeStep === stepIdx;
                  const isPassed = activeStep > stepIdx;
                  return (
                    <div
                      key={stepIdx}
                      onClick={() => setActiveStep(stepIdx)}
                      className="flex-1 h-1.5 rounded-full overflow-hidden bg-sky-100/80 cursor-pointer"
                    >
                      <motion.div
                        className={`h-full rounded-full ${
                          isActive
                            ? "bg-gradient-to-r from-[#14A3C7] to-emerald-400"
                            : isPassed
                            ? "bg-[#14A3C7]/40"
                            : "bg-transparent"
                        }`}
                        animate={{
                          width: isActive || isPassed ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.35 }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ─── CENTER — Headline + CTAs ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 px-0 lg:px-2 xl:px-4"
          >
            <h1 className="font-black uppercase leading-[0.95] tracking-tight text-gray-900">
              <span className="block whitespace-nowrap text-[1.85rem] sm:text-[2.7rem] md:text-[3.3rem] lg:text-[2.55rem] xl:text-[3.25rem] 2xl:text-[3.7rem]">
                DECLUTTER YOUR
              </span>
              <span className="block whitespace-nowrap text-[1.85rem] sm:text-[2.7rem] md:text-[3.3rem] lg:text-[2.55rem] xl:text-[3.25rem] 2xl:text-[3.7rem]">
                WARDROBE TO
              </span>
              <span className="relative inline-flex items-center gap-2 mt-2 max-w-full">
                <span className="block whitespace-nowrap bg-[#14A3C7] text-white italic rounded-2xl px-4 sm:px-5 py-1.5 sm:py-2 text-[1.45rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[1.95rem] xl:text-[2.5rem] 2xl:text-[2.85rem] leading-tight shadow-xl shadow-[#14A3C7]/25">
                  TURN INTO VALUE
                </span>
                <Zap
                  size={28}
                  className="text-yellow-400 fill-yellow-400 hidden xl:block shrink-0"
                  style={{ animation: "pulse 2s infinite" }}
                />
              </span>
            </h1>

            {/* Non-repetitive, clear narrative description */}
            <p className="text-gray-600 text-sm sm:text-[15px] lg:text-[16px] leading-relaxed max-w-[540px] font-medium">
              Give your pre-loved fashion a purposeful second life. Clear closet clutter
              effortlessly from home, unlock guaranteed value back, and keep textiles
              safely in a sustainable circular loop.
            </p>

            {/* App Store & Play Store Action Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              {/* Official Google Play Store Button */}
              <Link
                href="https://play.google.com/store/apps/details?id=com.BworthGo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 sm:gap-3 bg-gray-950 hover:bg-black text-white pl-4 sm:pl-5 pr-4 py-2.5 sm:py-3 rounded-full border border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.22)] hover:shadow-[0_10px_28px_rgba(20,163,199,0.32)] hover:border-[#14A3C7]/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                {/* Official Google Play multicolor icon with frosted circular plate */}
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 512 512">
                    <path fill="#00D2FF" d="M380.93 234.66L95.84 71.49C82.88 64.08 67 73.43 67 88.33v335.34c0 14.9 15.88 24.25 28.84 16.84l285.09-163.17c12.1-6.92 12.1-25.76 0-32.68z" />
                    <path fill="#00F076" d="M95.84 71.49l182.25 184.51L95.84 440.51C82.88 447.92 67 438.57 67 423.67V88.33c0-14.9 15.88-24.25 28.84-16.84z" />
                    <path fill="#FFC700" d="M380.93 234.66l-102.84 21.34L95.84 71.49l285.09 163.17c12.1 6.92 12.1 25.76 0 32.68z" />
                    <path fill="#FF3B30" d="M380.93 277.34l-285.09 163.17L278.09 256l102.84 21.34z" />
                  </svg>
                </div>

                {/* Text Label */}
                <span className="font-extrabold uppercase tracking-wider text-[11px] sm:text-xs text-white group-hover:text-cyan-300 transition-colors">
                  INSTALL ON PLAY STORE
                </span>

                {/* Interactive Micro Arrow Chip */}
                <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#14A3C7] flex items-center justify-center transition-all duration-300 ml-0.5">
                  <ArrowRight
                    size={12}
                    className="text-gray-300 group-hover:text-white group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </Link>

              {/* Apple App Store (Coming Soon for iPhone) */}
              <div className="inline-flex items-center gap-2.5 bg-slate-900/90 text-white pl-3.5 pr-4 py-2 sm:py-2.5 rounded-full border border-white/20 backdrop-blur-md shadow-md shadow-sky-950/10 select-none">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.47c.63-.78 1.07-1.85.95-2.94-.93.04-2.03.63-2.68 1.4-.58.67-1.09 1.76-.95 2.82 1.03.08 2.06-.52 2.68-1.28" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8.5px] font-black text-[#14A3C7] uppercase tracking-widest leading-none">
                    COMING SOON
                  </span>
                  <span className="text-[11px] font-extrabold text-white leading-tight">
                    App Store (iOS)
                  </span>
                </div>
              </div>
            </div>

            {/* Distinct, Spacious Feature Cards — Responsive Flow, Never Overflows */}
            <div className="w-full pt-5 sm:pt-6 border-t border-sky-200/60 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-2.5 xl:gap-3">
              {[
                {
                  icon: Truck,
                  title: "Doorstep Pickup",
                  sub: "Book in 2 mins",
                  accent: "bg-sky-500/10 text-sky-600 border-sky-200/60",
                },
                {
                  icon: Coins,
                  title: "Earn BWC Coins",
                  sub: "1 BWC = ₹1 Value",
                  accent: "bg-amber-500/10 text-amber-600 border-amber-200/60",
                },
                {
                  icon: Recycle,
                  title: "Zero Landfill",
                  sub: "100% Recycled",
                  accent: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60",
                },
              ].map(({ icon: Icon, title, sub, accent }) => (
                <div
                  key={title}
                  className="flex flex-col sm:flex-col xl:flex-row items-start xl:items-center gap-2 xl:gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 hover:bg-white border border-sky-200/70 hover:border-[#14A3C7]/50 shadow-xs hover:shadow-md transition-all duration-300 group text-left w-full"
                >
                  <div className={`w-8 h-8 rounded-xl ${accent} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0 flex-1 w-full">
                    <p className="font-sans text-xs sm:text-[12px] xl:text-[12.5px] font-bold text-gray-900 leading-tight">
                      {title}
                    </p>
                    <p className="font-sans text-[10px] sm:text-[10.5px] text-gray-500 font-medium leading-tight mt-0.5">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT — Editorial Hero Photo + BWORTH Box ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center relative w-full h-[450px] xl:h-[510px] 2xl:h-[560px]"
          >
            {/* Main image */}
            <div className="relative w-full h-full max-w-[350px] xl:max-w-[420px] 2xl:max-w-[460px] rounded-3xl overflow-hidden shadow-2xl border-[5px] border-white">
              <Image
                src="/bworth_hero_woman.jpg"
                alt="BWorth sustainable wardrobe collection and rewards"
                fill
                sizes="(max-width: 1280px) 360px, 460px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}