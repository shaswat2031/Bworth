"use client";
import React from "react";
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
} from "lucide-react";
import ScrollBanner from "./ScrollBanner";

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
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#d0edf8] via-[#dff3fa] to-[#ecf8fd] pt-24 md:pt-28 pb-0">

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


      {/* 3-column grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1.1fr] gap-6 lg:gap-4 items-center">

          {/* ─── LEFT — Box visual ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Floating box */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[260px] sm:w-[290px] lg:w-[265px] xl:w-[305px]"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-[5px] border-white">
                <Image
                  src="/bworth_closet_box.jpg"
                  alt="BWorth wardrobe collection box with clothes"
                  width={310}
                  height={310}
                  className="object-cover w-full aspect-square"
                  priority
                />
              </div>
            </motion.div>

            {/* Icon row */}
            <div className="mt-4 flex items-center justify-center gap-5 w-[260px] sm:w-[290px] lg:w-[265px] xl:w-[305px]">
              {[
                { icon: PackageCheck, label: "COLLECT" },
                { icon: Recycle, label: "REUSE" },
                { icon: Zap, label: "UPCYCLE" },
                { icon: Leaf, label: "RECYCLE" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 rounded-full bg-white shadow-md border border-[#14A3C7]/20 flex items-center justify-center">
                    <Icon size={16} className="text-[#14A3C7]" />
                  </div>
                  <span className="text-[9px] font-black text-gray-500 uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── CENTER — Headline + CTAs ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 px-0 lg:px-4"
          >
            <h1 className="font-black uppercase leading-[0.95] tracking-tight text-gray-900">
              <span className="block whitespace-nowrap text-[1.85rem] sm:text-[2.7rem] md:text-[3.3rem] lg:text-[2.4rem] xl:text-[3.1rem]">
                DECLUTTER YOUR
              </span>
              <span className="block whitespace-nowrap text-[1.85rem] sm:text-[2.7rem] md:text-[3.3rem] lg:text-[2.4rem] xl:text-[3.1rem]">
                WARDROBE TO
              </span>
              <span className="relative inline-flex items-center gap-2 mt-1.5 max-w-full">
                <span className="block whitespace-nowrap bg-[#14A3C7] text-white italic rounded-2xl px-4 sm:px-5 py-1.5 sm:py-2 text-[1.45rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[1.85rem] xl:text-[2.4rem] leading-tight shadow-xl shadow-[#14A3C7]/25">
                  TURN INTO VALUE
                </span>
                <Zap
                  size={28}
                  className="text-yellow-400 fill-yellow-400 hidden xl:block shrink-0"
                  style={{ animation: "pulse 2s infinite" }}
                />
              </span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-[430px] font-medium">
              BWorth collects your unused wardrobe clutter right from your
              doorstep, credits instant BWC Coins (1 BWC = ₹1 value), and
              ensures 100% zero-landfill eco-recycling.
            </p>

            {/* Primary Hero CTA */}
            <div className="flex items-center justify-center lg:justify-start pt-1">
              <Link
                href="https://play.google.com/store/apps/details?id=com.BworthGo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gray-950 hover:bg-black text-white pl-4 sm:pl-5 pr-4 py-2.5 sm:py-3 rounded-full border border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.22)] hover:shadow-[0_10px_28px_rgba(20,163,199,0.32)] hover:border-[#14A3C7]/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
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
            </div>

            {/* Feature strip */}
            <div className="w-full pt-4 border-t border-gray-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Truck, title: "Free Doorstep Pickup", sub: "in 2 Minutes" },
                { icon: Coins, title: "Earn BWC Coins", sub: "1 BWC = ₹1 value" },
                { icon: Recycle, title: "Zero-Landfill Processing", sub: "100% Responsible" },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#14A3C7]/15 shadow-sm flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-[#14A3C7]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-800 uppercase tracking-wide leading-tight">
                      {title}
                    </p>
                    <p className="text-[9px] text-gray-400 font-semibold">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT — Tall image + perimeter-orbiting badges ─── */}
          {/*
            Padding of 24px gives badges room to sit on all 4 edges without
            being clipped by the section overflow-hidden.
            The inner image div uses inset-6 to offset that same padding.
          */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="hidden lg:block relative"
            style={{ height: 420, padding: 24 }}
          >
            {/* Main image */}
            <div
              className="absolute inset-6 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="/bworth_hero_official.jpg"
                alt="BWorth sustainable clothing collection"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

          </motion.div>

        </div>
      </div>

      {/* Seamlessly Connected Trust & Benefit Ticker at Hero Base */}
      <div className="relative w-full mt-2 sm:mt-4">
        <ScrollBanner />
      </div>
    </section>
  );
}