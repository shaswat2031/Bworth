"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Coins,
  Recycle,
  Sparkles,
  PackageCheck,
  Truck,
  ShoppingBag,
  Pause,
  Play,
  CheckCircle2,
  Zap,
  Leaf,
  Check,
  ShieldCheck
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function Hero() {
  const { theme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3 Slides definition with instant clarity & curiosity-building content
  const slides = [
    {
      id: 0,
      tabTitle: "01. What is BWorth?",
      badge: "CIRCULAR FASHION MARKETPLACE",
      headlinePrefix: "TURN UNUSED CLOTHES ",
      headlineHighlight: "INTO REWARDS.",
      subtitle: "BWorth is a sustainable marketplace that collects your unused clothes directly from your doorstep and rewards you with BWorth Coins (1 BWC = ₹1 CASH).",
      btn1: { text: "START SELLING", href: "https://play.google.com/store/apps/details?id=com.BworthGo", target: "_blank", isPrimary: true },
      btn2: { text: "EXPLORE BRANDS", href: "/brands", isPrimary: false },
      highlights: [
        { icon: Truck, text: "Free Doorstep Pickup" },
        { icon: Coins, text: "1 BWC = ₹1 CASH" },
        { icon: Leaf, text: "100% Zero-Landfill" },
        { icon: PackageCheck, text: "25,000+ kg Recycled" }
      ],
      visualType: "bworth_intro"
    },
    {
      id: 1,
      tabTitle: "02. How to Recycle",
      badge: "SIMPLE 3-STEP PROCESS",
      headlinePrefix: "RECYCLE IN UNDER ",
      headlineHighlight: "2 MINUTES.",
      subtitle: "Clear wardrobe clutter, protect the planet, and get paid instantly through our doorstep recycling program.",
      btn1: { text: "SCHEDULE PICKUP", href: "https://play.google.com/store/apps/details?id=com.BworthGo", target: "_blank", isPrimary: true },
      btn2: { text: "OUR MISSION", href: "/our-mission", isPrimary: false },
      highlights: [
        { icon: PackageCheck, text: "1. Request Pickup in App" },
        { icon: Truck, text: "2. Agent Collects & Weighs" },
        { icon: Recycle, text: "3. Instant Payback & Eco-Recycle" }
      ],
      visualType: "recycle_steps"
    },
    {
      id: 2,
      tabTitle: "03. Earn & Use BWC",
      badge: "BWC COIN ECONOMY",
      headlinePrefix: "EARN BWC COINS & ",
      headlineHighlight: "SPEND LIKE CASH.",
      subtitle: "BWorth Coin is our digital reward currency (1 BWC = ₹1). Earn by garment weight and spend seamlessly across partner fashion brands.",
      btn1: { text: "GET BWC COINS", href: "https://play.google.com/store/apps/details?id=com.BworthGo", target: "_blank", isPrimary: true },
      btn2: { text: "VIEW PARTNER BRANDS", href: "/brands", isPrimary: false },
      highlights: [
        { icon: Coins, text: "Earn by Garment Weight" },
        { icon: ShoppingBag, text: "Redeem on Partner Brands" },
        { icon: Zap, text: "Instant Checkout Savings" }
      ],
      visualType: "bwc_economy"
    }
  ];

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-play timer (Continuous loop every 4 seconds)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[activeSlide];

  // Variants for slide transition
  const slideVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, x: -30, transition: { duration: 0.25, ease: "easeIn" } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-24 pb-6 overflow-hidden select-none">
      {/* Interactive Background Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-25 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(20, 163, 199, 0.18), transparent 45%)`,
        }}
      />

      {/* Decorative ambient background blobs */}
      <div
        className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-[140px] -z-10 animate-pulse ${
          theme === "white" ? "bg-[#14A3C7]/10" : "bg-white/5"
        }`}
      />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#14A3C7]/[0.06] rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1500px] mx-auto w-full flex-1 flex flex-col justify-between relative z-20">
        
        {/* MAIN SLIDE ANIMATED CONTENT AREA */}
        <div className="flex-1 flex items-center my-auto py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
            >
              {/* LEFT CONTENT COLUMN */}
              <div className="lg:col-span-7 space-y-6 lg:space-y-7">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-current/15 bg-current/5 backdrop-blur-md">
                  <Sparkles size={15} className={theme === "white" ? "text-[#14A3C7]" : "text-white"} />
                  <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em]">
                    {currentSlideData.badge}
                  </span>
                </div>

                {/* Big Screen Headline */}
                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] 2xl:text-[6rem] font-serif font-black uppercase tracking-tighter leading-[0.92] ${
                  theme === "white" ? "text-black" : "text-white"
                }`}>
                  {currentSlideData.headlinePrefix}
                  <span className={theme === "white" ? "text-[#14A3C7] italic block sm:inline" : "text-black italic block sm:inline"}>
                    {currentSlideData.headlineHighlight}
                  </span>
                </h1>

                {/* Subtitle / Description */}
                <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl ${
                  theme === "white" ? "text-black/75" : "text-white/85"
                }`}>
                  {currentSlideData.subtitle}
                </p>

                {/* Clean Curiosity Highlights Bar */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {currentSlideData.highlights.map((h, i) => {
                    const IconComponent = h.icon;
                    return (
                      <div
                        key={i}
                        className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-black transition-all duration-300 hover:scale-105 shadow-sm ${
                          theme === "white"
                            ? "bg-white/90 border-black/10 text-black hover:border-[#14A3C7]/40"
                            : "bg-white/10 border-white/15 text-white hover:bg-white/20"
                        }`}
                      >
                        <IconComponent size={17} className={theme === "white" ? "text-[#14A3C7]" : "text-white"} />
                        <span>{h.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* 2 BUTTONS AREA (EXPLICIT USER REQUIREMENT!) */}
                <div className="flex flex-wrap items-center gap-5 pt-4">
                  {/* Button 1 - Primary CTA */}
                  <Link
                    href={currentSlideData.btn1.href}
                    target={currentSlideData.btn1.target || "_self"}
                    className={`px-10 py-5 rounded-full font-black uppercase tracking-wider text-sm sm:text-base flex items-center gap-2.5 group transition-all duration-300 active:scale-95 shadow-2xl ${
                      theme === "white"
                        ? "bg-black text-white hover:bg-[#14A3C7] shadow-black/10"
                        : "bg-white text-black hover:bg-black hover:text-white shadow-white/10"
                    }`}
                  >
                    <span>{currentSlideData.btn1.text}</span>
                    <ArrowDownRight size={20} className="group-hover:rotate-45 transition-transform" />
                  </Link>

                  {/* Button 2 - Secondary CTA */}
                  <Link
                    href={currentSlideData.btn2.href}
                    target={currentSlideData.btn2.target || "_self"}
                    className={`px-9 py-5 rounded-full font-black uppercase tracking-wider text-sm sm:text-base flex items-center gap-2.5 transition-all duration-300 border active:scale-95 ${
                      theme === "white"
                        ? "border-black/20 text-black hover:bg-black/5 hover:border-black"
                        : "border-white/30 text-white hover:bg-white/10 hover:border-white"
                    }`}
                  >
                    <span>{currentSlideData.btn2.text}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* RIGHT VISUAL CARD COLUMN */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                {/* Visual Card 1: Official BWORTH Generated Image Card */}
                {currentSlideData.visualType === "bworth_intro" && (
                  <div className={`relative group overflow-hidden rounded-[2.5rem] border shadow-2xl max-w-md lg:max-w-lg xl:max-w-xl w-full ${
                    theme === "white" ? "border-black/10 bg-white" : "border-white/15 bg-black/40"
                  }`}>
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src="/bworth_hero_official.jpg"
                        alt="BWorth Official Circular Fashion"
                        fill
                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                    </div>

                    {/* Floating Gold B-Coin Badge */}
                    <div className="absolute top-5 right-5 bg-black/80 backdrop-blur-xl border border-amber-400/50 rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-2xl animate-bounce">
                      <Coins size={20} className="text-amber-400" />
                      <span className="text-xs sm:text-sm font-black text-amber-300 tracking-wider">1 BWC = ₹1 CASH</span>
                    </div>

                    {/* Card Content Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#14A3C7] animate-ping"></span>
                        <span className="text-xs font-black tracking-[0.3em] text-white/80 uppercase">
                          BWORTH CIRCULAR FASHION
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-black uppercase tracking-tight leading-tight">
                        Sustainable Luxury Rewards
                      </h3>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-white/85 pt-3 border-t border-white/20 font-bold">
                        <span>25,000+ kg Collected</span>
                        <span className="font-mono text-[#14A3C7]">100% Zero-Landfill</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Card 2: How to Recycle Eco Metrics Card */}
                {currentSlideData.visualType === "recycle_steps" && (
                  <div className={`relative overflow-hidden rounded-[2.5rem] border shadow-2xl p-8 lg:p-10 max-w-md lg:max-w-lg xl:max-w-xl w-full flex flex-col justify-between space-y-8 ${
                    theme === "white" ? "border-black/10 bg-white" : "border-white/15 bg-[#0e1d24]"
                  }`}>
                    {/* Header badge & Icon */}
                    <div className="flex items-center justify-between pb-5 border-b border-current/10">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-black">
                          <Recycle size={28} />
                        </div>
                        <div>
                          <span className="text-xs font-black tracking-widest text-emerald-500 uppercase block">ECO GUARANTEE</span>
                          <h3 className={`text-lg font-serif font-black ${theme === "white" ? "text-black" : "text-white"}`}>
                            100% Zero-Landfill
                          </h3>
                        </div>
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-black uppercase">
                        ECO-SAFE
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h4 className={`text-base font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"}`}>
                        Garment Recycling Guarantee
                      </h4>
                      <p className={`text-sm leading-relaxed font-medium ${theme === "white" ? "text-black/70" : "text-white/80"}`}>
                        Every piece collected goes through professional sorting, sanitizing, and textile fiber repurposing. Nothing ends up in landfills.
                      </p>
                    </div>

                    {/* Eco Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-current/10 text-center">
                      <div className={`p-3.5 rounded-2xl ${theme === "white" ? "bg-black/5" : "bg-white/5"}`}>
                        <span className="block text-base sm:text-xl font-black text-[#14A3C7]">25,000+ kg</span>
                        <span className="text-[10px] opacity-70 font-bold uppercase tracking-wider block mt-1">Clothes Collected</span>
                      </div>
                      <div className={`p-3.5 rounded-2xl ${theme === "white" ? "bg-black/5" : "bg-white/5"}`}>
                        <span className="block text-base sm:text-xl font-black text-emerald-500">2.5 kg CO₂</span>
                        <span className="text-[10px] opacity-70 font-bold uppercase tracking-wider block mt-1">Saved / Garment</span>
                      </div>
                      <div className={`p-3.5 rounded-2xl ${theme === "white" ? "bg-black/5" : "bg-white/5"} col-span-2 sm:col-span-1`}>
                        <span className="block text-base sm:text-xl font-black text-amber-500">100%</span>
                        <span className="text-[10px] opacity-70 font-bold uppercase tracking-wider block mt-1">Zero-Landfill</span>
                      </div>
                    </div>

                    {/* Simple process badge list */}
                    <div className="space-y-3 pt-2">
                      <div className={`flex items-center gap-3 text-xs sm:text-sm font-bold p-3 rounded-xl ${
                        theme === "white" ? "bg-emerald-500/5 text-emerald-700" : "bg-emerald-500/10 text-emerald-300"
                      }`}>
                        <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                        <span>Professional Textile Upcycling</span>
                      </div>
                      <div className={`flex items-center gap-3 text-xs sm:text-sm font-bold p-3 rounded-xl ${
                        theme === "white" ? "bg-[#14A3C7]/5 text-[#14A3C7]" : "bg-white/10 text-white"
                      }`}>
                        <ShieldCheck size={18} className="shrink-0 text-[#14A3C7]" />
                        <span>Transparent Carbon Credits</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual Card 3: BWC Coin Economy Card */}
                {currentSlideData.visualType === "bwc_economy" && (
                  <div className={`relative overflow-hidden rounded-[2.5rem] border shadow-2xl p-8 lg:p-10 max-w-md lg:max-w-lg xl:max-w-xl w-full flex flex-col justify-between space-y-6 ${
                    theme === "white" ? "border-amber-500/20 bg-gradient-to-br from-white via-amber-500/5 to-white" : "border-amber-400/20 bg-gradient-to-br from-[#121820] via-amber-900/20 to-[#0d1117]"
                  }`}>
                    {/* Glowing Coin Header */}
                    <div className="flex items-center justify-between mb-2 pb-5 border-b border-amber-500/20">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-lg shadow-amber-500/30 text-black font-black">
                          <Coins size={28} />
                        </div>
                        <div>
                          <span className="text-xs font-black tracking-widest text-amber-500 uppercase block">CURRENCY RATE</span>
                          <h3 className={`text-lg font-serif font-black ${theme === "white" ? "text-black" : "text-white"}`}>
                            1 BWC = ₹1.00 INR
                          </h3>
                        </div>
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-black uppercase">
                        INSTANT VALUE
                      </span>
                    </div>

                    {/* Balance Preview Box */}
                    <div className="p-6 rounded-2xl bg-black/80 text-white space-y-3 border border-amber-400/30 shadow-2xl">
                      <div className="flex justify-between items-center text-xs sm:text-sm text-white/60">
                        <span>BWorth Rewards Wallet</span>
                        <span className="font-mono text-amber-400 font-bold">ACTIVE</span>
                      </div>
                      <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-amber-300 flex items-baseline gap-2.5">
                        1,500 <span className="text-xs sm:text-sm font-sans text-white/70">BWC Coins (₹1,500)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/70 font-medium">
                        Ready to spend on partner fashion brands!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM NAVIGATION & PROGRESS BAR */}
        <div className="pt-3 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Animated Slide Progress Bar */}
          <div className="w-full sm:w-1/2 flex items-center gap-3">
            <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${
              theme === "white" ? "bg-black/10" : "bg-white/10"
            }`}>
              <motion.div
                key={activeSlide + (isPlaying ? "-playing" : "-paused")}
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "0%" }}
                transition={{ duration: isPlaying ? 4.0 : 0, ease: "linear" }}
                className={`h-full ${theme === "white" ? "bg-[#14A3C7]" : "bg-white"}`}
              />
            </div>
            <span className={`text-[11px] font-mono font-bold ${theme === "white" ? "text-black/50" : "text-white/50"}`}>
              {slides[activeSlide]?.tabTitle?.split('.')[1] || slides[activeSlide]?.tabTitle || ""}
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                handlePrev();
              }}
              className={`p-2.5 rounded-full border transition-all active:scale-90 ${
                theme === "white"
                  ? "border-black/10 hover:bg-black/5 text-black"
                  : "border-white/15 hover:bg-white/10 text-white"
              }`}
              title="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => {
                handleNext();
              }}
              className={`p-2.5 rounded-full border transition-all active:scale-90 ${
                theme === "white"
                  ? "border-black/10 hover:bg-black/5 text-black"
                  : "border-white/15 hover:bg-white/10 text-white"
              }`}
              title="Next Slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
