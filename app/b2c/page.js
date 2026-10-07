"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Smartphone,
  Coins,
  Recycle,
  Truck,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Leaf,
  Scale,
  Gift,
  HelpCircle,
  ChevronDown,
  Droplets,
  PackageCheck,
  Tag,
  Shirt,
  Calendar,
  Layers,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

export default function B2CPage() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  // Active FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? -1 : index);



  // FAQ Items matching user requirements
  const faqs = [
    {
      q: "Is doorstep pickup really 100% free?",
      a: "Yes, completely free! There are zero pickup charges, zero convenience fees, and zero hidden deductions. We come to your doorstep and collect at no cost to you.",
    },
    {
      q: "Which clothes can I give to BWorth?",
      a: "You can give almost all men's, women's, and kids' everyday clothes — t-shirts, shirts, jeans, kurtas, dresses, jackets, winter wear, and bedsheets. They should be clean and dry.",
    },
    {
      q: "Can I give local or unbranded clothes, or only top brands?",
      a: "You can give any brand! We accept local market clothes, stitched garments, unbranded wear, as well as top brands like Zara, H&M, and Levi's. All clothes are welcome.",
    },
    {
      q: "Can I give damaged or torn clothes?",
      a: "Yes! While gently used clothes are routed for reuse, clothes with minor damage or tears are recycled into raw yarn and insulation. (Only wet, moldy, or soiled clothes cannot be accepted).",
    },
    {
      q: "How are BWC Coins calculated?",
      a: "Our verified executive weighs your clothes on a digital scale at your doorstep. Coins are calculated based on weight and garment grade. 1 BWC Coin is strictly equal to ₹1.00 INR value.",
    },
    {
      q: "When will I receive my BWC Coins?",
      a: "Instantly! The moment the partner executive completes the digital weight verification at your door, the BWC Coins are credited straight to your BWorth mobile app wallet.",
    },
    {
      q: "Where can I spend my BWC Coins?",
      a: "You can spend your BWC Coins directly on the BWorth App to purchase fresh fashion, new clothing, and partner brand collections with 100% coin redemption at checkout.",
    },
    {
      q: "What happens to my clothes after collection?",
      a: "100% zero-landfill guarantee! After pickup, garments are sanitized and sorted: wearable clothes are reused through second-hand thrift networks, items with minor flaws are upcycled into bags/accessories, and remaining textiles are recycled into yarn.",
    },
    {
      q: "Which locations are currently available?",
      a: "BWorth is currently live with daily doorstep pickups across the whole Delhi NCR region (Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, and Faridabad), with pan-India expansion coming soon!",
    },
  ];


  return (
    <main
      className={`min-h-screen transition-colors duration-500 font-sans ${
        isWhite ? "bg-[#f8fdff] text-slate-900" : "bg-[#061217] text-white"
      }`}
    >
      {/* ══════════════════════════════════════════════════════════════
          1. HOME / OVERVIEW: EXPLAIN BWORTH IN 10 SECONDS
      ══════════════════════════════════════════════════════════════ */}
      <section id="overview" className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 px-6 md:px-12 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#14A3C7]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-5"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <Sparkles size={14} />
              <span className="text-[11px] font-black uppercase tracking-widest">
                Explain BWorth In 10 Seconds
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-6xl lg:text-7xl font-sans font-black uppercase tracking-tight leading-[0.98] ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              Turn Unused Clothes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0092B3] via-[#14A3C7] to-[#0284c7] italic">
                Into Real Value.
              </span>
            </h1>

            {/* Short 12th-Pass English Narrative */}
            <p
              className={`text-base sm:text-xl leading-relaxed max-w-3xl font-medium ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}
            >
              Got clothes you never wear? Don't let them gather dust. Book a{" "}
              <strong className={isWhite ? "text-slate-900" : "text-white"}>free doorstep pickup in 2 minutes</strong>, 
              earn instant <strong className="text-[#14A3C7]">1 BWC = ₹1 in your BWorth wallet</strong>, and use your coins to buy fresh fashion. 100% zero-landfill.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.BworthGo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#14A3C7] hover:bg-[#0f8da4] text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-[#14A3C7]/25 flex items-center gap-2.5 group transition-all"
              >
                <span>Download App & Book</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#how-it-works"
                className={`px-7 py-4 rounded-full border font-black text-sm uppercase tracking-wider transition-colors ${
                  isWhite
                    ? "border-slate-300 hover:bg-slate-100 text-slate-800 shadow-xs"
                    : "border-white/20 hover:bg-white/5 text-white"
                }`}
              >
                See 4-Step Process
              </a>
            </div>
          </motion.div>

          {/* Quick 10-Second Visual Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-6">
            {[
              {
                icon: Truck,
                title: "Free Doorstep Pickup",
                sub: "Zero fees. Verified partner collects right from your door.",
                color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
              },
              {
                icon: Coins,
                title: "1 BWC = ₹1 Real Value",
                sub: "Instant coin credit in your app wallet right after weighing.",
                color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
              },
              {
                icon: ShoppingBag,
                title: "Buy New Clothes",
                sub: "Spend your earned coins 1:1 on the BWorth app shop.",
                color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
              },
              {
                icon: Leaf,
                title: "100% Zero Landfill",
                sub: "Clothes are responsibly reused, upcycled, or recycled.",
                color: "text-sky-500 bg-sky-500/10 border-sky-500/20",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-3xl border transition-all ${
                    isWhite
                      ? "bg-white border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-[#0b1d27] border-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-0.5"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 ${card.color}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h4 className="font-black text-base sm:text-lg tracking-tight mb-2">
                    {card.title}
                  </h4>
                  <p
                    className={`text-xs sm:text-sm font-medium leading-relaxed ${
                      isWhite ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    {card.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. HOW IT WORKS: THE 4-STEP PROCESS EXPLAINED CLEARLY
      ══════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 border-t border-current/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
              CLEAR 4-STEP PROCESS
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              How It Works
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}
            >
              No photos. No bargaining chats. Here is how you turn clothes into shopping cash in 4 easy steps:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Calendar,
                title: "Book Free Slot",
                desc: "Open the BWorth app, choose a pickup slot in under 2 minutes, and gather your unused clothes in any bag.",
                badge: "2-Min App Booking",
                accent: "text-emerald-500",
              },
              {
                step: "02",
                icon: Scale,
                title: "Clothes Collected",
                desc: "Our verified friendly partner arrives at your doorstep, weighs your bag accurately, and collects it hassle-free.",
                badge: "Free Doorstep Weighing",
                accent: "text-sky-500",
              },
              {
                step: "03",
                icon: Coins,
                title: "Earn BWC Coins",
                desc: "Instant 1 BWC = ₹1 cash value credited directly to your BWorth app wallet. Zero commission fees.",
                badge: "1 BWC = ₹1 Real Value",
                accent: "text-amber-500",
              },
              {
                step: "04",
                icon: Recycle,
                title: "Responsible Route",
                desc: "Clothes are sorted for second-life reuse, upcycling into lifestyle goods, or eco-textile recycling.",
                badge: "100% Zero Landfill",
                accent: "text-purple-500",
              },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border flex flex-col justify-between relative group hover:-translate-y-1 transition-all ${
                    isWhite
                      ? "bg-white border-slate-200/90 shadow-md"
                      : "bg-[#091b25] border-white/10 shadow-lg"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-current/15 flex items-center justify-center">
                        <Icon size={22} className={s.accent} />
                      </div>
                      <span className="text-3xl font-black font-mono opacity-25">
                        {s.step}
                      </span>
                    </div>

                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#14A3C7]/10 text-[#14A3C7] text-[10px] font-extrabold uppercase tracking-wider">
                      {s.badge}
                    </div>

                    <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        isWhite ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Box */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
              isWhite
                ? "bg-gradient-to-r from-sky-50 via-white to-sky-50 border-[#14A3C7]/30"
                : "bg-gradient-to-r from-[#0d222e] via-[#091820] to-[#0d222e] border-[#14A3C7]/30"
            }`}
          >
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-black uppercase tracking-tight">
                Ready to clear your wardrobe clutter?
              </h4>
              <p
                className={`text-xs sm:text-sm font-medium ${
                  isWhite ? "text-slate-600" : "text-slate-300"
                }`}
              >
                Free doorstep pickup across whole Delhi NCR. Zero bargaining, instant BWC cash.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.BworthGo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#14A3C7] text-white font-black text-xs uppercase tracking-wider shadow-md hover:bg-[#0e8ea3] transition-colors shrink-0"
            >
              Book Your Pickup
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BWORTH COINS: EXPLAIN THE REWARD SYSTEM
      ══════════════════════════════════════════════════════════════ */}
      <section id="bwc-coins" className="py-20 px-6 md:px-12 border-t border-current/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
              REWARD SYSTEM
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              BWorth Coins (BWC)
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Not complicated points. Guaranteed real shopping cash at 1:1 Rupee value.
            </p>
          </div>

          {/* 1 BWC = ₹1 Highlight Banner with Rich Animations */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`relative overflow-hidden p-8 sm:p-9 rounded-3xl border shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left transition-all ${
              isWhite
                ? "bg-gradient-to-r from-amber-500/10 via-white to-amber-500/10 border-amber-400/50 shadow-amber-500/5"
                : "bg-gradient-to-r from-amber-900/25 via-[#0a1820] to-amber-900/25 border-amber-400/30 shadow-black/40"
            }`}
          >
            {/* Top continuous running gradient shimmer line */}
            <motion.div
              animate={{ x: ["-100%", "250%"] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none"
            />

            {/* Subtle floating sparkle particles */}
            <motion.div
              animate={{ y: [0, -7, 0], opacity: [0.3, 0.85, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-3 right-8 text-amber-400 pointer-events-none hidden sm:block"
            >
              <Sparkles size={18} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 7, 0], opacity: [0.2, 0.75, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-3 left-1/3 text-amber-500/70 pointer-events-none hidden sm:block"
            >
              <Sparkles size={14} />
            </motion.div>

            {/* Left side: Floating Coin & Parity Headline */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 z-10">
              {/* 3D Floating Coin with Pulsing Aura */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-black font-black flex items-center justify-center shadow-xl shadow-amber-500/40 shrink-0"
              >
                {/* Pulsing aura ring */}
                <motion.div
                  animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-2xl bg-amber-400 -z-10"
                />
                <Coins size={32} className="text-slate-950 drop-shadow-sm" />
              </motion.div>

              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-amber-500">
                    GUARANTEED VALUE
                  </span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  1 BWC Coin = ₹1.00 INR Shopping Cash
                </h3>
              </div>
            </div>

            {/* Right side: Interactive Spring Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-bold z-10 shrink-0">
              {[
                {
                  text: "Zero Commission",
                  color: "text-emerald-600 dark:text-emerald-400",
                  bg: "bg-emerald-500/15 border-emerald-500/30 hover:border-emerald-500/60",
                },
                {
                  text: "Instant App Credit",
                  color: "text-sky-600 dark:text-sky-400",
                  bg: "bg-sky-500/15 border-sky-500/30 hover:border-sky-500/60",
                },
                {
                  text: "100% Usable on Shopping",
                  color: "text-purple-600 dark:text-purple-400",
                  bg: "bg-purple-500/15 border-purple-500/30 hover:border-purple-500/60",
                },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.07, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 20 }}
                  className={`px-3.5 py-1.5 rounded-full ${item.bg} ${item.color} border cursor-pointer flex items-center gap-1.5 shadow-xs transition-colors`}
                >
                  <CheckCircle2 size={13} className="shrink-0" />
                  <span>{item.text}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>


        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          4. YOUR CLOTHES' NEXT JOURNEY (BUILD TRUST)
      ══════════════════════════════════════════════════════════════ */}
      <section id="next-journey" className="py-20 px-6 md:px-12 border-t border-current/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
              TRANSPARENT LIFE CYCLE
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              Your Clothes' Next Journey
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Where do your clothes go after we pick them up? We never dump clothes. Here is our exact 3-route journey:
            </p>
          </div>

          {/* Simple Visual Flow: Collection → Sorting → 3 Routes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Route A: 70% Reuse */}
            <div
              className={`p-7 rounded-3xl border space-y-4 ${
                isWhite
                  ? "bg-white border-emerald-300 shadow-md"
                  : "bg-[#0a1e17] border-emerald-500/30"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-500 text-xs font-black uppercase">
                  Route A
                </span>
                <span className="text-2xl font-black text-emerald-500">REUSE</span>
              </div>
              <h3 className="text-lg font-bold">Thrift & Second Life Wear</h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isWhite ? "text-slate-600" : "text-slate-300"
                }`}
              >
                Wearable, good-quality garments are professionally sanitized, checked, and circulated back to consumers through verified thrift stores and affordable wardrobes.
              </p>
            </div>

            {/* Route B: 20% Upcycle */}
            <div
              className={`p-7 rounded-3xl border space-y-4 ${
                isWhite ? "bg-white border-sky-300 shadow-md" : "bg-[#091a25] border-sky-500/30"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-sky-500/15 text-sky-500 text-xs font-black uppercase">
                  Route B
                </span>
                <span className="text-2xl font-black text-sky-500">UPCYCLE</span>
              </div>
              <h3 className="text-lg font-bold">Artisan Upcycling</h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isWhite ? "text-slate-600" : "text-slate-300"
                }`}
              >
                Garments with minor cuts or tears are passed to women self-help artisan groups who craft them into designer denim bags, cushion covers, and sustainable accessories.
              </p>
            </div>

            {/* Route C: 10% Recycle */}
            <div
              className={`p-7 rounded-3xl border space-y-4 ${
                isWhite
                  ? "bg-white border-purple-300 shadow-md"
                  : "bg-[#180e22] border-purple-500/30"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-500 text-xs font-black uppercase">
                  Route C
                </span>
                <span className="text-2xl font-black text-purple-500">RECYCLE</span>
              </div>
              <h3 className="text-lg font-bold">Textile Fiber Shredding</h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isWhite ? "text-slate-600" : "text-slate-300"
                }`}
              >
                Severely worn-out textiles are mechanically shredded into raw yarn, acoustic insulation, and mattress padding. <strong>Zero grams end up in landfills.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. IMPACT: MAKE SUSTAINABILITY VISIBLE (VERIFIED DATA)
      ══════════════════════════════════════════════════════════════ */}
      <section id="impact" className="py-20 px-6 md:px-12 border-t border-current/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
              VERIFIED SUSTAINABILITY DATA
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              Real Impact You Create
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Every bag of clothes collected helps protect our environment from landfill crisis:
            </p>
          </div>

          {/* Big Stat Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                stat: "25,000+",
                label: "Clothes Collected",
                sub: "Saved from dustbins & dumping",
                color: "text-[#14A3C7]",
              },
              {
                stat: "12,500 kg",
                label: "Textiles Recovered",
                sub: "Kept out of Delhi NCR landfills",
                color: "text-emerald-500",
              },
              {
                stat: "18M Litres",
                label: "Fresh Water Saved",
                sub: "Through reuse vs new cotton",
                color: "text-sky-500",
              },
              {
                stat: "100%",
                label: "Zero-Landfill Guarantee",
                sub: "Every thread is given a route",
                color: "text-amber-500",
              },
            ].map((st, i) => (
              <div
                key={i}
                className={`p-6 sm:p-7 rounded-3xl border text-center space-y-2 ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-sm"
                    : "bg-[#091a24] border-white/10"
                }`}
              >
                <span className={`text-3xl sm:text-4xl font-black font-mono block ${st.color}`}>
                  {st.stat}
                </span>
                <h4 className="font-bold text-xs sm:text-sm">{st.label}</h4>
                <p className="text-[10px] text-slate-400 font-medium leading-tight">{st.sub}</p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="text-center pt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.BworthGo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all"
            >
              <span>Add Your Clothes to the Impact</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. REFER & EARN: CONSUMER GROWTH
      ══════════════════════════════════════════════════════════════ */}
      <section id="refer" className="py-20 px-6 md:px-12 border-t border-current/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-amber-500">
              GROWTH REWARDS
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              Refer & Earn
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Clear wardrobes together. Invite your friends and family to declutter their cupboards.
            </p>
          </div>

          {/* 3 Step Referral Flow */}
          <div
            className={`p-8 sm:p-12 rounded-[2.5rem] border shadow-xl ${
              isWhite
                ? "bg-gradient-to-br from-white via-amber-50/50 to-white border-amber-300/80"
                : "bg-gradient-to-br from-[#091a24] via-amber-950/20 to-[#091a24] border-amber-400/30"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
              {[
                {
                  step: "Step 1",
                  title: "Invite Friends",
                  desc: "Share your referral link from the BWorth app on WhatsApp or Instagram.",
                  icon: Gift,
                },
                {
                  step: "Step 2",
                  title: "They Complete Pickup",
                  desc: "Your friend books and completes their first free doorstep clothing pickup.",
                  icon: Truck,
                },
                {
                  step: "Step 3",
                  title: "Both Earn 50 BWC",
                  desc: "You get 50 BWC Coins, and your friend gets 50 BWC Coins credited instantly!",
                  icon: Coins,
                },
              ].map((rf, idx) => {
                const Icon = rf.icon;
                return (
                  <div key={idx} className="space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-500 flex items-center justify-center mx-auto">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-amber-500">
                      {rf.step}
                    </span>
                    <h4 className="font-bold text-base">{rf.title}</h4>
                    <p
                      className={`text-xs leading-relaxed max-w-xs mx-auto ${
                        isWhite ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {rf.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. FAQ: ALL MUST-HAVE QUESTIONS ANSWERED
      ══════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 px-6 md:px-12 border-t border-current/10">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
              HAVE QUESTIONS?
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              Frequently Asked Questions
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Everything you need to know before booking your doorstep collection:
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isWhite
                      ? isOpen
                        ? "bg-white border-[#14A3C7] shadow-md"
                        : "bg-white/80 border-slate-200 hover:border-slate-300"
                      : isOpen
                      ? "bg-[#0b1d28] border-[#14A3C7] shadow-md"
                      : "bg-[#091a24] border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span
                      className={`font-bold text-sm sm:text-base tracking-tight ${
                        isWhite ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-300 text-[#14A3C7] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t border-current/10 pt-3 ${
                          isWhite ? "text-slate-800 font-medium" : "text-slate-200 font-normal"
                        }`}
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom Help Contact Box */}
          <div
            className={`p-6 rounded-3xl border text-center space-y-3 ${
              isWhite ? "bg-slate-100/70 border-slate-200" : "bg-white/5 border-white/10"
            }`}
          >
            <h4 className="font-bold text-sm">Still have a question?</h4>
            <p className="text-xs text-slate-500">
              Our customer happiness team is available on WhatsApp and call at{" "}
              <a
                href="tel:+918826668050"
                className="text-[#14A3C7] font-bold hover:underline"
              >
                +91-8826668050
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
