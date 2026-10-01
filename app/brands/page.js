"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  ArrowRight,
  Truck,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building2,
  TrendingUp,
  Users,
  ChevronDown,
  HelpCircle,
  ExternalLink,
  PackageCheck,
  Award,
  Zap,
} from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";

// Live Partner Brands
const livePartners = [
  { name: "Cossential", src: "/Cossential.png" },
  { name: "Dhawan", src: "/Dawan.png" },
  { name: "Gheesa Peeta", src: "/GP.png" },
  { name: "HomeSolution", src: "/HomeSolution.png" },
  { name: "JRCY", src: "/JRCY.png" },
  { name: "Nandrani", src: "/Nand.png" },
  { name: "Neel & Ned", src: "/Neel & Ned.png" },
  { name: "The Plain Edition", src: "/Plain.png" },
  { name: "Sasha-The Label", src: "/Sasa.png" },
  { name: "SEEME", src: "/SEEME.png" },
  { name: "Seere", src: "/Seere.png" },
  { name: "tIM RAFT", src: "/tim.png" },
  { name: "TRENZIC", src: "/Trenzc.png" },
];

const duplicatedLive = [...livePartners, ...livePartners, ...livePartners];

// Brand Offerings
const offerings = [
  {
    number: "01",
    title: "Zero Logistic Charges",
    subtitle: "100% Covered by BWorth",
    description:
      "Zero shipping cost, zero hidden reverse delivery fees, and no extra operational burden. BWorth covers full end-to-end logistics so you can focus entirely on designing and scaling your label.",
    points: [
      "Zero forward & reverse transport fees",
      "Direct doorstep pickup network across India",
      "Zero storage or warehouse handling surcharges",
    ],
    image: "/offering_01.jpg",
    badge: "BWORTH LOGISTICS",
    icon: Truck,
    accent: "text-[#14A3C7]",
  },
  {
    number: "02",
    title: "Money Back Guarantee",
    subtitle: "Because We Believe in Your Growth",
    description:
      "We don't just promise empty visibility—we commit to commercial performance. If your products do not sell through our circular marketplace, BWorth offers a full Money Back Guarantee.",
    points: [
      "Zero commercial risk for your fashion label",
      "Direct channel to 25,000+ conscious buyers",
      "Transparent live inventory performance tracking",
    ],
    image: "/offering_02.jpg",
    badge: "GROWTH PROMISE",
    icon: Coins,
    accent: "text-amber-500",
  },
  {
    number: "03",
    title: "Return Assurance Guarantee",
    subtitle: "Strict In-House Quality Inspection",
    description:
      "We solve the industry's biggest return fraud headache with our dedicated in-house inspection hub. Every returned piece is thoroughly authenticated, verified, and protected.",
    points: [
      "100% in-house verification on every return",
      "Returned items stay pristine, tagged & authentic",
      "Complete inventory accountability and reporting",
    ],
    image: "/offering_03.jpg",
    badge: "QUALITY ASSURANCE",
    icon: ShieldCheck,
    accent: "text-emerald-500",
  },
];

// Brand FAQs
const brandFaqs = [
  {
    q: "Who covers the shipping and reverse logistics cost?",
    a: "BWorth covers 100% of all forward and reverse logistics costs. Your brand incurs zero shipping fees, zero delivery surcharge, and zero handling costs for customer pickups and returns.",
  },
  {
    q: "How does the Money Back Guarantee work?",
    a: "If your onboarded inventory does not achieve the committed baseline sell-through within the agreed cycle, BWorth provides a direct Money Back Guarantee to protect your label against dead-stock risk.",
  },
  {
    q: "How does BWorth protect returned products?",
    a: "Every returned article passes through our proprietary in-house quality inspection center before being restocked or routed, guaranteeing zero garment substitution, tampering, or damage.",
  },
  {
    q: "How quickly can my fashion label get onboarded?",
    a: "Our dedicated brand onboarding team reviews applications within 24 hours. Once your digital catalog is connected, your collection can be live within 48 to 72 hours.",
  },
];

export default function Brands() {
  const { theme } = useTheme();
  const isWhite = theme === "white";
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isWhite ? "bg-[#F8FAFC] text-slate-900" : "bg-[#061217] text-white"
      }`}
    >
      {/* ── SECTION 1: HERO (DENSE 2-COLUMN POWERHOUSE — ZERO DEAD SPACE) ── */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#14A3C7]/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Headline, Narrative & Dual CTAs (7 Cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7] text-xs font-bold uppercase tracking-wider">
                <Handshake size={14} className="text-[#14A3C7]" />
                <span>CIRCULAR RETAIL PARTNERSHIPS</span>
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-sans font-black uppercase tracking-tight leading-[1.08] ${
                  isWhite ? "text-slate-950" : "text-white"
                }`}
              >
                Scale Your Fashion Brand <br className="hidden sm:block" />
                With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                  Zero Logistic Risk.
                </span>
              </h1>

              <p
                className={`text-sm sm:text-base leading-relaxed max-w-xl font-normal ${
                  isWhite ? "text-slate-600" : "text-slate-300"
                }`}
              >
                BWorth partners with modern and heritage fashion labels across India to monetize surplus stock, reach 25,000+ active circular buyers, and eliminate 100% of reverse logistics costs.
              </p>

              {/* 3 Quick Value Badges */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div
                  className={`p-3 rounded-2xl border text-center ${
                    isWhite
                      ? "bg-white border-slate-200/80 shadow-xs"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <p className="text-base sm:text-lg font-black text-[#14A3C7] leading-none">
                    100% Free
                  </p>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase">
                    Logistics Covered
                  </p>
                </div>

                <div
                  className={`p-3 rounded-2xl border text-center ${
                    isWhite
                      ? "bg-white border-slate-200/80 shadow-xs"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <p className="text-base sm:text-lg font-black text-amber-500 leading-none">
                    Money-Back
                  </p>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase">
                    Growth Guarantee
                  </p>
                </div>

                <div
                  className={`p-3 rounded-2xl border text-center ${
                    isWhite
                      ? "bg-white border-slate-200/80 shadow-xs"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <p className="text-base sm:text-lg font-black text-emerald-500 leading-none">
                    25,000+
                  </p>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1 uppercase">
                    Conscious Buyers
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://brand.bworth.co.in/onBoarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#14A3C7] hover:bg-[#0fa0c3] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#14A3C7]/25 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Become a Partner Brand</span>
                  <ArrowRight size={15} />
                </a>

                <a
                  href="#offerings"
                  className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                    isWhite
                      ? "bg-white border-slate-300 text-slate-700 hover:border-slate-400"
                      : "bg-white/5 border-white/15 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <span>Explore Offerings</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Brand Partner Advantage Card (5 Cols) */}
            <div className="lg:col-span-5 w-full">
              <div
                className={`p-6 rounded-3xl border transition-all relative overflow-hidden ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-xl"
                    : "bg-[#091823] border-white/15 shadow-2xl text-white"
                }`}
              >
                {/* Ambient Highlight */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#14A3C7]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top: Status & Verified Chip */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#14A3C7]">
                      BWORTH BRAND PORTAL
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                    VERIFIED PARTNER
                  </span>
                </div>

                {/* Simulated Partner Performance Dashboard */}
                <div className="py-4 space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Circular Sell-Through Uplift
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                        +34.8%
                      </span>
                      <span className="text-xs font-bold text-emerald-500">
                        Monthly Average
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isWhite
                          ? "bg-slate-50 border-slate-200/70"
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      <p className="text-[9px] uppercase font-bold text-slate-400">
                        Logistics Expense
                      </p>
                      <p className="text-sm font-black text-emerald-500 mt-0.5">
                        ₹0 Incurred
                      </p>
                    </div>

                    <div
                      className={`p-2.5 rounded-xl border ${
                        isWhite
                          ? "bg-slate-50 border-slate-200/70"
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      <p className="text-[9px] uppercase font-bold text-slate-400">
                        Return Protection
                      </p>
                      <p className="text-sm font-black text-[#14A3C7] mt-0.5">
                        100% Inspected
                      </p>
                    </div>
                  </div>
                </div>

                {/* Partner Perks Checklist */}
                <div className="pt-3 border-t border-slate-100 dark:border-white/10 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Included In Partnership
                  </span>

                  {[
                    "Zero shipping fees on all forward & reverse deliveries",
                    "Direct integration with 25,000+ coin-earning shoppers",
                    "Dedicated account manager & 48-hour onboarding",
                  ].map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 size={13} className="text-[#14A3C7] shrink-0" />
                      <span
                        className={`text-[11px] font-medium leading-tight ${
                          isWhite ? "text-slate-600" : "text-slate-300"
                        }`}
                      >
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct Portal Link */}
                <div className="pt-4 mt-2">
                  <a
                    href="https://brand.bworth.co.in/onBoarding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Launch Onboarding Portal</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BRAND MARQUEE SHOWCASE ── */}
      <section
        className={`py-10 relative overflow-hidden border-y ${
          isWhite
            ? "bg-slate-100/70 border-slate-200/80"
            : "bg-[#081720] border-white/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
                BRAND NETWORK
              </span>
              <h2
                className={`text-lg sm:text-xl font-sans font-black uppercase tracking-tight ${
                  isWhite ? "text-slate-900" : "text-white"
                }`}
              >
                Trusted By 25+ Leading Fashion Labels
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Certified Partners</span>
            </div>
          </div>
        </div>

        {/* Track 1: Live Partners (Sliding Left) */}
        <div className="relative flex overflow-hidden whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            }}
            className="flex items-center gap-4 shrink-0"
          >
            {duplicatedLive.map((brand, idx) => (
              <div
                key={`live-${idx}`}
                className={`w-40 sm:w-48 h-20 sm:h-22 px-4 py-2 rounded-2xl border flex items-center justify-center transition-all ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-xs hover:border-[#14A3C7]"
                    : "bg-[#0b1d28] border-white/10 hover:border-[#14A3C7]"
                }`}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={140}
                  height={60}
                  className="max-h-12 w-auto object-contain filter hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: CORE BRAND OFFERINGS (DENSE, RICH 3-CARD GRID) ── */}
      <section id="offerings" className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
            <Sparkles size={12} className="text-[#14A3C7]" />
            <span>PARTNER ADVANTAGES</span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-sans font-black uppercase tracking-tight ${
              isWhite ? "text-slate-950" : "text-white"
            }`}
          >
            What Does BWorth Offer Your Label?
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            A risk-free commercial partnership engineered to protect your brand equity and maximize margins.
          </p>
        </div>

        {/* 3 Offerings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#14A3C7]/50"
                    : "bg-[#091823] border-white/15 shadow-xl hover:border-cyan-400/40"
                }`}
              >
                {/* Visual Image Banner with Clean Badge */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Header Badge Inside Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9px] font-mono font-bold">
                    <Icon size={12} className="text-[#14A3C7]" />
                    <span>{item.badge}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono font-bold text-[#14A3C7] uppercase">
                      {item.number} / OFFERING
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className={`text-xs font-bold uppercase tracking-wider ${item.accent}`}>
                      {item.subtitle}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Benefit Points */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/10 space-y-1.5">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                        <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 4: "MAKE IN INDIA" & CRAFTSMANSHIP SPOTLIGHT ── */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 border-y ${
          isWhite
            ? "bg-slate-100/60 border-slate-200/80"
            : "bg-[#07151e] border-white/10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#14A3C7]">
                <Award size={13} className="text-[#14A3C7]" />
                <span>MAKE IN INDIA ALLIANCE</span>
              </div>

              <h2
                className={`text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight ${
                  isWhite ? "text-slate-900" : "text-white"
                }`}
              >
                Championing Indian Craftsmanship
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                BWorth proudly supports conscious Indian apparel manufacturers, homegrown direct-to-consumer labels, and indigenous artisans by building a transparent circular ecosystem that eliminates dead inventory.
              </p>
            </div>

            {/* Right 3 Impact Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div
                className={`p-4 rounded-2xl border ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-xs"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-600 flex items-center justify-center font-bold text-xs mb-2">
                  🇮🇳
                </div>
                <h4 className="text-xs font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                  Local Excellence
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  Promoting indigenous talent and ethical apparel production nationwide.
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-xs"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-[#14A3C7] flex items-center justify-center font-bold text-xs mb-2">
                  ⚡
                </div>
                <h4 className="text-xs font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                  Zero Waste Stream
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  Diverting overstocked pieces directly to high-intent shoppers or verified recycling.
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-xs"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center font-bold text-xs mb-2">
                  📈
                </div>
                <h4 className="text-xs font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                  Pan-India Reach
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  Connecting your catalog to conscious consumers across Tier 1, 2, and 3 cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: 3-STEP ONBOARDING PROCESS (TIGHT & PURPOSEFUL) ── */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
            HOW IT WORKS
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight ${
              isWhite ? "text-slate-950" : "text-white"
            }`}
          >
            Launch in 3 Simple Steps
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Frictionless integration designed for busy fashion founders and sales teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              step: "01",
              title: "Apply Online",
              desc: "Complete the 2-minute brand onboarding form with your catalog and brand details.",
              tag: "2 MINUTES",
            },
            {
              step: "02",
              title: "Catalog Sync",
              desc: "Our partner team reviews your collection and sets up automated logistics mapping.",
              tag: "24-48 HOURS",
            },
            {
              step: "03",
              title: "Sell & Scale",
              desc: "Your label goes live to 25k+ buyers. BWorth handles all doorstep collection & delivery.",
              tag: "ZERO SHIPPING FEES",
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all ${
                isWhite
                  ? "bg-white border-slate-200/90 shadow-sm"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-black text-[#14A3C7] font-mono">
                  {s.step}
                </span>
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-tight text-slate-900 dark:text-white mb-1">
                {s.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: BRAND FAQ ACCORDION (FILLS VOID WITH REASSURANCE) ── */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${
          isWhite ? "bg-slate-50 border-slate-200" : "bg-[#061217] border-white/10"
        }`}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              COMMON QUESTIONS
            </span>
            <h2
              className={`text-xl sm:text-2xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              Frequently Asked Questions by Brands
            </h2>
          </div>

          <div className="space-y-2.5">
            {brandFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isWhite
                      ? "bg-white border-slate-200 hover:border-slate-300"
                      : "bg-[#091823] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {faq.q}
                    </h3>
                    <ChevronDown
                      size={16}
                      className={`text-[#14A3C7] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/10 mt-2">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: HIGH-CONVERTING PARTNERSHIP CTA BANNER ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-[#0a2333] to-[#0d3448] text-white border border-white/20 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              JOIN THE CIRCULAR NETWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight text-white leading-tight">
              Ready to Expand Your Reach With Zero Logistics Burden?
            </h2>
            <p className="text-xs text-slate-300">
              Apply today to get onboarded within 48 hours and unlock guaranteed sell-through.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="https://brand.bworth.co.in/onBoarding"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#14A3C7] hover:bg-[#0fa0c3] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 active:scale-95 text-center cursor-pointer"
            >
              Start Onboarding Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
