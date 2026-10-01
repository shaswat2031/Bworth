"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Recycle,
  Coins,
  Leaf,
  Smartphone,
  ChevronRight,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Sparkles,
  MapPin,
  Check,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function AppDownloadSection() {
  const { theme } = useTheme();

  const [timeStr, setTimeStr] = useState("09:41");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("Today, 2:00 PM - 5:00 PM");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleConfirmBooking = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingOpen(false);
    }, 2400);
  };

  const [activePillar, setActivePillar] = useState(0);

  // 3 Crisp, Low-Text Value Pillars
  const appPillars = [
    {
      title: "Doorstep Pickup",
      tag: "Free • 2-Hr Slot",
      desc: "Book in 60 seconds. Our verified team collects right from your door.",
      icon: <Clock size={18} className="text-[#14A3C7]" />,
      iconBox: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200/90 dark:border-cyan-500/30 text-[#14A3C7]",
      badge: "border-[#14A3C7]/30 bg-[#14A3C7]/10 text-[#14A3C7]",
      activeGlow: "shadow-[0_8px_25px_rgba(20,163,199,0.12)] border-[#14A3C7]/60",
    },
    {
      title: "Instant 1:1 Cash",
      tag: "1 BWC = ₹1",
      desc: "Immediate wallet payouts the moment clothes are verified.",
      icon: <Coins size={18} className="text-amber-500" />,
      iconBox: "bg-amber-50 dark:bg-amber-950/40 border-amber-200/90 dark:border-amber-500/30 text-amber-500",
      badge: "border-amber-500/30 bg-amber-500/10 text-amber-500",
      activeGlow: "shadow-[0_8px_25px_rgba(245,158,11,0.12)] border-amber-500/60",
    },
    {
      title: "Zero-Landfill Proof",
      tag: "100% Recycled",
      desc: "Track your live CO₂ savings and verified circular certificates.",
      icon: <ShieldCheck size={18} className="text-emerald-500" />,
      iconBox: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/90 dark:border-emerald-500/30 text-emerald-500",
      badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
      activeGlow: "shadow-[0_8px_25px_rgba(16,185,129,0.12)] border-emerald-500/60",
    },
  ];

  return (
    <section
      className={`py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors ${
        theme === "white"
          ? "bg-gradient-to-b from-white via-slate-50 to-[#f0f8fb]"
          : "bg-[#061118]"
      }`}
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-80 h-80 bg-[#14A3C7]/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Main Showcase Container Frame ─────────────────────────── */}
        <div
          className={`rounded-[2rem] sm:rounded-[2.75rem] border p-5 sm:p-8 lg:p-10 transition-all duration-500 relative overflow-hidden ${
            theme === "white"
              ? "bg-white/95 border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
              : "bg-[#0a1824]/85 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          }`}
        >
          {/* Subtle Ambient Accent Corner */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-[#14A3C7]/10 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* ── Left Column: Story, 3 Pillars, and Conversion Suite (7 cols) ── */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Category Subtitle */}
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#14A3C7]">
                  <Sparkles size={13} className="text-[#14A3C7]" />
                  <span>CIRCULAR FASHION AT YOUR FINGERTIPS</span>
                </div>

                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl font-sans font-black uppercase tracking-tight leading-[1.1] ${
                    theme === "white" ? "text-slate-900" : "text-white"
                  }`}
                >
                  Turn Closet Clutter <br className="hidden sm:block" />
                  Into Cash{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                    In Minutes.
                  </span>
                </h2>

                <p
                  className={`text-xs sm:text-sm font-medium leading-relaxed max-w-lg ${
                    theme === "white" ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  Free doorstep pickup, instant 1:1 wallet payouts, and 100% verified circular recycling.
                </p>
              </div>

              {/* ── 3 Crisp, Low-Text Value Cards ───────────────── */}
              <div className="space-y-2.5 pt-1">
                {appPillars.map((p, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActivePillar(idx)}
                      onClick={() => setActivePillar(idx)}
                      className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 cursor-pointer relative group ${
                        isActive
                          ? theme === "white"
                            ? `bg-white ${p.activeGlow} -translate-y-0.5`
                            : `bg-white/10 ${p.activeGlow} -translate-y-0.5`
                          : theme === "white"
                          ? "bg-slate-50/60 border-slate-200/70 hover:bg-white hover:border-slate-300"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      {/* Left Accent Icon Container */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 shadow-xs ${
                          p.iconBox
                        } ${isActive ? "scale-105" : "group-hover:scale-105"}`}
                      >
                        {p.icon}
                      </div>

                      {/* Content Column */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4
                            className={`text-xs sm:text-sm font-extrabold font-sans uppercase tracking-tight ${
                              theme === "white" ? "text-slate-900" : "text-white"
                            }`}
                          >
                            {p.title}
                          </h4>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase border shrink-0 ${p.badge}`}
                          >
                            {p.tag}
                          </span>
                        </div>

                        <p
                          className={`text-xs leading-normal mt-0.5 ${
                            theme === "white" ? "text-slate-500" : "text-slate-400"
                          }`}
                        >
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── Download Action Bar + QR Code + Social Proof ─────── */}
              <div className="pt-2 space-y-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Google Play Store Button */}
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.BworthGo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-slate-950 hover:bg-[#14A3C7] text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
                  >
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                      <svg className="w-5 h-5" viewBox="0 0 512 512">
                        <path
                          fill="#00D2FF"
                          d="M380.93 234.66L95.84 71.49C82.88 64.08 67 73.43 67 88.33v335.34c0 14.9 15.88 24.25 28.84 16.84l285.09-163.17c12.1-6.92 12.1-25.76 0-32.68z"
                        />
                        <path
                          fill="#00F076"
                          d="M95.84 71.49l182.25 184.51L95.84 440.51C82.88 447.92 67 438.57 67 423.67V88.33c0-14.9 15.88-24.25 28.84-16.84z"
                        />
                        <path
                          fill="#FFC700"
                          d="M380.93 234.66l-102.84 21.34L95.84 71.49l285.09 163.17c12.1 6.92 12.1 25.76 0 32.68z"
                        />
                        <path
                          fill="#FF3B30"
                          d="M380.93 277.34l-285.09 163.17L278.09 256l102.84 21.34z"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-white/80 transition-colors">
                        GET IT ON
                      </div>
                      <div className="text-xs sm:text-sm font-black tracking-tight text-white flex items-center gap-1">
                        <span>Google Play</span>
                        <ArrowUpRight
                          size={13}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* QR Code Quick-Scan Box */}
                  <div
                    className={`inline-flex items-center gap-2.5 px-3 py-2 rounded-xl border ${
                      theme === "white"
                        ? "bg-slate-50 border-slate-200 text-slate-700"
                        : "bg-white/5 border-white/10 text-slate-200"
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-white p-1 shadow-xs border border-slate-200 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-900">
                        <path d="M2 2h8v8H2zM4 4v4h4V4zm10-2h8v8h-8zm2 2v4h4V4zM2 14h8v8H2zm2 2v4h4v-4zm13 2h2v2h-2zm-3-2h2v2h-2zm5-3h2v2h-2zm-5 5h2v2h-2zm3 0h2v2h-2zm2-2h2v2h-2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-bold tracking-tight">Scan to Install</div>
                      <div className="text-[8.5px] text-slate-400">Direct camera download</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Phone Mockup (5 cols, self-contained, no badges, zero screen overflow) ── */}
            <div className="lg:col-span-5 w-full flex items-center justify-center relative py-2 overflow-visible">
              <div className="relative w-full max-w-[240px] xs:max-w-[255px] sm:max-w-[270px] mx-auto">
                {/* Ambient Soft Glow Behind Phone */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-[#14A3C7]/20 blur-[35px] rounded-full pointer-events-none" />

                {/* ── Phone Hardware Chassis ── */}
                <div className="relative aspect-[9/18.5] bg-[#0A0F1E] rounded-[2.6rem] border-[6px] border-[#181d28] p-[3px] shadow-2xl overflow-hidden ring-1 ring-white/10">
                  {/* Screen Content Container */}
                  <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative flex flex-col text-black font-sans">
                    {/* Status Bar */}
                    <div className="h-7 w-full flex justify-between px-4 items-center pt-0.5 relative z-40 bg-slate-50 border-b border-slate-100">
                      <span className="text-[10px] font-extrabold font-mono tracking-tighter text-slate-900">
                        {timeStr}
                      </span>
                      {/* Dynamic Island Capsule */}
                      <div className="w-14 h-3 bg-slate-900 rounded-full" />
                      <div className="flex gap-1 items-center">
                        <div className="w-2 h-2 border border-slate-900 rounded-[2px] bg-slate-800" />
                        <div className="w-3 h-1.5 bg-slate-900 rounded-xs" />
                      </div>
                    </div>

                    {/* App Screen Content */}
                    <div className="flex-1 overflow-y-auto px-3.5 py-2.5 space-y-2.5 scrollbar-hide relative text-left">
                      {/* App Header with Logo & Location (Clean, NO badge) */}
                      <div className="flex justify-between items-center py-0.5">
                        <div className="h-4 w-auto flex items-center">
                          <Image
                            src="/logo.png"
                            alt="BWorth Logo"
                            width={65}
                            height={15}
                            className="h-full w-auto object-contain"
                          />
                        </div>
                        <div className="flex items-center gap-1 text-[8px] font-bold text-slate-500">
                          <MapPin size={9} className="text-[#14A3C7]" />
                          <span>Bengaluru</span>
                        </div>
                      </div>

                      {/* Wallet Balance Card */}
                      <div
                        className={`p-3 bg-[#08151c] rounded-xl text-white shadow-md relative overflow-hidden transition-all duration-300 ${
                          activePillar === 1
                            ? "ring-2 ring-amber-400/90 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                            : ""
                        }`}
                      >
                        <div className="absolute top-[-20%] right-[-10%] w-14 h-14 bg-[#14A3C7]/20 rounded-full blur-xl pointer-events-none" />
                        <span className="text-[7.5px] font-bold text-white/50 uppercase tracking-[0.2em] block">
                          Available Balance
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-lg font-serif font-black tracking-tight text-white">
                            2,450
                          </span>
                          <span className="text-[7.5px] font-bold uppercase text-[#14A3C7]">
                            BWorth Coins
                          </span>
                        </div>
                        <div className="mt-1.5 flex items-center justify-between border-t border-white/10 pt-1.5">
                          <span className="text-[7.5px] text-emerald-400 font-bold flex items-center gap-1">
                            <Zap size={8} /> 1 BWC = ₹1 Instant Cash
                          </span>
                        </div>
                      </div>

                      {/* Pickup Action Button */}
                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className={`w-full p-2.5 bg-[#14A3C7] hover:bg-black text-white rounded-xl font-black text-[10px] uppercase tracking-wider flex items-center justify-between shadow-sm transition-all duration-300 cursor-pointer ${
                          activePillar === 0
                            ? "ring-2 ring-white shadow-[0_0_15px_rgba(20,163,199,0.4)]"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <div className="p-1 rounded-md bg-white/20">
                            <Smartphone size={10} />
                          </div>
                          <span>Book Doorstep Pickup</span>
                        </div>
                        <ChevronRight size={12} />
                      </button>

                      {/* Sustainability Stats */}
                      <div
                        className={`space-y-1 transition-all duration-300 rounded-xl ${
                          activePillar === 2
                            ? "ring-2 ring-emerald-400/90 p-1 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                            : ""
                        }`}
                      >
                        <span className="text-[7.5px] font-black uppercase tracking-wider text-slate-400 px-0.5 block">
                          Sustainability Impact
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 flex flex-col gap-0.5">
                            <Leaf size={9} className="text-emerald-600 mb-0.5" />
                            <span className="text-[11px] font-black text-emerald-900 leading-none">
                              12.4kg
                            </span>
                            <span className="text-[6.5px] uppercase font-bold text-emerald-600/70">
                              CO₂ Offset
                            </span>
                          </div>
                          <div className="p-2 bg-[#14A3C7]/5 rounded-lg border border-[#14A3C7]/10 flex flex-col gap-0.5">
                            <Recycle size={9} className="text-[#14A3C7] mb-0.5" />
                            <span className="text-[11px] font-black text-[#14A3C7] leading-none">
                              8 Items
                            </span>
                            <span className="text-[6.5px] uppercase font-bold text-[#14A3C7]/70">
                              Recycled
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Booking Modal Inside Mockup */}
                    <AnimatePresence>
                      {isBookingOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 100 }}
                          className="absolute inset-0 bg-black/85 backdrop-blur-sm z-50 flex flex-col justify-end p-2.5 text-white text-left"
                        >
                          <div className="bg-[#08151c] p-3 rounded-xl border border-white/20 space-y-2 shadow-2xl">
                            {bookingSuccess ? (
                              <div className="text-center py-2.5 space-y-1">
                                <div className="w-7 h-7 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs animate-bounce">
                                  ✓
                                </div>
                                <h4 className="text-[10px] font-black uppercase text-emerald-400">
                                  Pickup Slot Booked!
                                </h4>
                                <p className="text-[8px] text-white/70">
                                  Executive assigned for {selectedSlot}.
                                </p>
                              </div>
                            ) : (
                              <>
                                <div className="flex justify-between items-center">
                                  <span className="text-[10px] font-black uppercase tracking-wider text-[#14A3C7]">
                                    Select Slot
                                  </span>
                                  <button
                                    onClick={() => setIsBookingOpen(false)}
                                    className="text-xs text-white/50 hover:text-white"
                                  >
                                    ✕
                                  </button>
                                </div>

                                <div className="space-y-1">
                                  {[
                                    "Today, 2:00 PM - 5:00 PM",
                                    "Tomorrow, 10:00 AM - 1:00 PM",
                                  ].map((slot, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => setSelectedSlot(slot)}
                                      className={`w-full p-1.5 rounded-md text-left text-[8px] font-bold border transition-colors flex justify-between items-center ${
                                        selectedSlot === slot
                                          ? "bg-[#14A3C7]/20 border-[#14A3C7] text-white"
                                          : "bg-white/5 border-white/10 text-white/60"
                                      }`}
                                    >
                                      <span>{slot}</span>
                                      {selectedSlot === slot && (
                                        <Check size={10} className="text-[#14A3C7]" />
                                      )}
                                    </button>
                                  ))}
                                </div>

                                <button
                                  onClick={handleConfirmBooking}
                                  className="w-full py-1.5 bg-[#14A3C7] hover:bg-[#0e8ca9] font-black text-[9.5px] uppercase rounded-md shadow-md text-white transition-colors cursor-pointer"
                                >
                                  Confirm Pickup
                                </button>
                              </>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Nav Mock */}
                    <div className="mt-auto border-t border-slate-100 bg-white/95 px-3 py-1.5 flex justify-around items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#14A3C7]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      <div className="w-5 h-5 rounded-full bg-[#14A3C7] flex items-center justify-center text-white text-[8px] font-bold">
                        +
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
