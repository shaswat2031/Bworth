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
    subtitle: "100% Paid by BWorth",
    description:
      "BWorth pays for all delivery and return costs. You pay zero shipping fees, zero delivery charges, and no operational burden.",
    points: [
      "Zero forward and return delivery fees",
      "Free doorstep pickups across India",
      "Zero storage or warehouse handling charges",
    ],
    image: "/offering_01.jpg",
    badge: "BWORTH LOGISTICS",
    icon: Truck,
    accent: "text-[#14A3C7]",
  },
  {
    number: "02",
    title: "Money Back Guarantee",
    subtitle: "Zero Risk on Your Stock",
    description:
      "We commit to real sales. If your products do not sell through our circular marketplace, BWorth provides a direct Money Back Guarantee.",
    points: [
      "Zero commercial risk for your fashion label",
      "Direct access to active online buyers",
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
    subtitle: "Strict Quality Checks on Every Return",
    description:
      "We stop return fraud. Our in-house team checks every returned item by hand to ensure original tags, fresh condition, and zero damage.",
    points: [
      "100% manual check on all returned clothes",
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
    a: "BWorth covers 100% of all forward delivery and return costs. Your brand incurs zero shipping fees, zero delivery surcharge, and zero handling costs for customer pickups and returns.",
  },
  {
    q: "How does the Money Back Guarantee work?",
    a: "If your onboarded inventory does not achieve the committed baseline sales within the agreed period, BWorth provides a direct Money Back Guarantee to protect your label from unsold stock risk.",
  },
  {
    q: "How does BWorth protect returned products?",
    a: "Every returned item passes through our dedicated in-house inspection center before being restocked, guaranteeing zero garment substitution, damage, or missing tags.",
  },
  {
    q: "How quickly can my fashion label get onboarded?",
    a: "Our dedicated onboarding team reviews applications within 24 hours. Once your digital catalog is connected, your collection can go live within 48 to 72 hours.",
  },
];

export default function Brands() {
  const { theme } = useTheme();
  const isWhite = theme === "white";
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main
      className={`min-h-screen transition-colors duration-300 font-sans ${isWhite ? "bg-[#F8FAFC] text-slate-900" : "bg-[#061217] text-white"
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
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-sans font-black uppercase tracking-tight leading-[1.08] ${isWhite ? "text-slate-950" : "text-white"
                  }`}
              >
                Scale Your Fashion Brand <br className="hidden sm:block" />
                With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                  Zero Logistic Risk.
                </span>
              </h1>

              <p
                className={`text-sm sm:text-base leading-relaxed max-w-xl font-normal ${isWhite ? "text-slate-600" : "text-slate-300"
                  }`}
              >
                BWorth partners with modern and heritage fashion labels across India to monetize surplus stock, reach 25,000+ active circular buyers, and eliminate 100% of reverse logistics costs.
              </p>



            </div>

            {/* Right Column: Launch Onboarding Portal Button */}
            <div className="lg:col-span-5 w-full flex items-center justify-start lg:justify-end">
              <a
                href="https://brand.bworth.co.in/onBoarding"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-4 p-3.5 pr-8 rounded-full border shadow-xl transition-all duration-300 hover:scale-105 group ${isWhite
                    ? "bg-white border-slate-300 text-slate-900 hover:border-[#14A3C7]"
                    : "bg-[#081822] border-white/20 text-white hover:border-[#14A3C7]"
                  }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#14A3C7] text-white flex items-center justify-center shadow-md group-hover:bg-[#0d84a3] transition-colors">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#14A3C7] block">
                    ONBOARDING
                  </span>
                  <span className="font-sans font-black uppercase tracking-wider text-base">
                    Launch Onboarding Portal
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BRAND MARQUEE SHOWCASE ── */}
      <section
        className={`py-10 relative overflow-hidden border-y ${isWhite
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
                className={`text-lg sm:text-xl font-sans font-black uppercase tracking-tight ${isWhite ? "text-slate-900" : "text-white"
                  }`}
              >
                Trusted By 25+ Leading Fashion Labels
              </h2>
            </div>
            <div
              className={`flex items-center gap-1.5 text-xs font-semibold ${isWhite ? "text-emerald-700" : "text-emerald-400"
                }`}
            >
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
                className={`w-40 sm:w-48 h-20 sm:h-22 px-4 py-2 rounded-2xl border flex items-center justify-center transition-all ${isWhite
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
      <section id="offerings" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
            <Sparkles size={14} className="text-[#14A3C7]" />
            <span>PARTNER ADVANTAGES</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-sans font-black uppercase tracking-tight ${isWhite ? "text-slate-950" : "text-white"
              }`}
          >
            What Does BWorth Offer Your Label?
          </h2>

          <p
            className={`text-base sm:text-lg font-medium leading-relaxed ${isWhite ? "text-slate-600" : "text-slate-300"
              }`}
          >
            A zero-risk partnership that helps you sell more clothes, save on delivery, and protect your profits.
          </p>
        </div>

        {/* 3 Offerings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {offerings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${isWhite
                    ? "bg-white border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#14A3C7]/50"
                    : "bg-[#091823] border-white/15 shadow-xl hover:border-cyan-400/40"
                  }`}
              >
                {/* Visual Image Banner with Clean Badge */}
                <div className="relative w-full h-60 sm:h-72 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 pointer-events-none" />

                  {/* Header Badge Inside Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/25 text-white text-xs font-mono font-bold tracking-wider">
                    <Icon size={15} className="text-[#14A3C7]" />
                    <span>{item.badge}</span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                    <span className="text-xs sm:text-sm font-mono font-extrabold text-[#14A3C7] uppercase tracking-wider block">
                      {item.number} / OFFERING
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className={`text-base sm:text-lg font-black uppercase tracking-wide ${item.accent}`}>
                      {item.subtitle}
                    </p>
                    <p
                      className={`text-sm sm:text-base leading-relaxed font-normal ${isWhite ? "text-slate-600" : "text-slate-300"
                        }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Benefit Points */}
                  <div
                    className={`pt-5 border-t space-y-3 ${isWhite ? "border-slate-100" : "border-white/10"
                      }`}
                  >
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-sm sm:text-base">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span
                          className={`text-sm sm:text-base font-semibold leading-snug ${isWhite ? "text-slate-800" : "text-slate-200"
                            }`}
                        >
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
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y ${isWhite
            ? "bg-slate-100/60 border-slate-200/80"
            : "bg-[#07151e] border-white/10"
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#14A3C7]">
                <Award size={16} className="text-[#14A3C7]" />
                <span>MAKE IN INDIA ALLIANCE</span>
              </div>

              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-sans font-black uppercase tracking-tight leading-[1.1] ${isWhite ? "text-slate-900" : "text-white"
                  }`}
              >
                Championing Indian Brands
              </h2>

              <p
                className={`text-base sm:text-lg leading-relaxed font-normal ${isWhite ? "text-slate-700" : "text-slate-200"
                  }`}
              >
                We help Indian clothing brands sell their extra inventory quickly without any loss or waste.
              </p>
            </div>

            {/* Right 3 Impact Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className={`p-5 sm:p-6 rounded-2xl border ${isWhite
                    ? "bg-white border-slate-200/90 shadow-xs"
                    : "bg-white/5 border-white/10"
                  }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm mb-3.5 ${isWhite
                      ? "bg-amber-50 text-amber-600 border border-amber-200/60"
                      : "bg-amber-950/40 text-amber-400 border border-amber-500/30"
                    }`}
                >
                  <Building2 size={20} />
                </div>
                <h4
                  className={`text-base sm:text-lg font-black uppercase tracking-tight ${isWhite ? "text-slate-900" : "text-white"
                    }`}
                >
                  Homegrown Labels
                </h4>
                <p
                  className={`text-sm sm:text-base mt-2 leading-relaxed font-medium ${isWhite ? "text-slate-700" : "text-slate-300"
                    }`}
                >
                  Supporting local clothing creators and ethical apparel makers nationwide.
                </p>
              </div>

              <div
                className={`p-5 sm:p-6 rounded-2xl border ${isWhite
                    ? "bg-white border-slate-200/90 shadow-xs"
                    : "bg-white/5 border-white/10"
                  }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm mb-3.5 ${isWhite
                      ? "bg-cyan-50 text-[#14A3C7] border border-cyan-200/60"
                      : "bg-cyan-950/40 text-[#14A3C7] border border-cyan-500/30"
                    }`}
                >
                  <Zap size={20} />
                </div>
                <h4
                  className={`text-base sm:text-lg font-black uppercase tracking-tight ${isWhite ? "text-slate-900" : "text-white"
                    }`}
                >
                  Zero Waste
                </h4>
                <p
                  className={`text-sm sm:text-base mt-2 leading-relaxed font-medium ${isWhite ? "text-slate-700" : "text-slate-300"
                    }`}
                >
                  Selling extra stock directly to real buyers so no clothes end up in landfills.
                </p>
              </div>

              <div
                className={`p-5 sm:p-6 rounded-2xl border ${isWhite
                    ? "bg-white border-slate-200/90 shadow-xs"
                    : "bg-white/5 border-white/10"
                  }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm mb-3.5 ${isWhite
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-200/60"
                      : "bg-emerald-950/40 text-emerald-400 border border-emerald-500/30"
                    }`}
                >
                  <TrendingUp size={20} />
                </div>
                <h4
                  className={`text-base sm:text-lg font-black uppercase tracking-tight ${isWhite ? "text-slate-900" : "text-white"
                    }`}
                >
                  Pan-India Reach
                </h4>
                <p
                  className={`text-sm sm:text-base mt-2 leading-relaxed font-medium ${isWhite ? "text-slate-700" : "text-slate-300"
                    }`}
                >
                  Selling your fashion collection to active buyers across 100+ cities in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: 3-STEP ONBOARDING PROCESS (TIGHT & PURPOSEFUL) ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
            HOW IT WORKS
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-sans font-black uppercase tracking-tight ${isWhite ? "text-slate-950" : "text-white"
              }`}
          >
            Launch in 3 Simple Steps
          </h2>
          <p
            className={`text-base sm:text-lg font-medium leading-relaxed ${isWhite ? "text-slate-600" : "text-slate-300"
              }`}
          >
            Simple setup made for busy fashion founders and sales teams. Start selling in days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
              className={`p-6 sm:p-8 rounded-3xl border transition-all ${isWhite
                  ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md"
                  : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-black text-[#14A3C7] font-mono">
                  {s.step}
                </span>
                <span
                  className={`text-xs font-mono font-bold px-3 py-1 rounded-lg uppercase tracking-wide ${isWhite
                      ? "bg-slate-100 text-slate-800"
                      : "bg-white/10 text-slate-200"
                    }`}
                >
                  {s.tag}
                </span>
              </div>
              <h3
                className={`text-xl sm:text-2xl font-black uppercase tracking-tight mb-2 ${isWhite ? "text-slate-900" : "text-white"
                  }`}
              >
                {s.title}
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed font-medium ${isWhite ? "text-slate-700" : "text-slate-300"
                  }`}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: BRAND FAQ ACCORDION (FILLS VOID WITH REASSURANCE) ── */}
      <section
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t ${isWhite ? "bg-slate-50 border-slate-200" : "bg-[#061217] border-white/10"
          }`}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              COMMON QUESTIONS
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-sans font-black uppercase tracking-tight ${isWhite ? "text-slate-900" : "text-white"
                }`}
            >
              Frequently Asked Questions by Brands
            </h2>
          </div>

          <div className="space-y-4">
            {brandFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${isWhite
                      ? "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                      : "bg-[#091823] border-white/10 hover:border-white/20"
                    }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-bold leading-snug ${isWhite ? "text-slate-900" : "text-white"
                        }`}
                    >
                      {faq.q}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`text-[#14A3C7] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
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
                        <p
                          className={`pt-3.5 text-sm sm:text-base leading-relaxed border-t mt-3.5 font-normal ${isWhite
                              ? "text-slate-700 border-slate-100"
                              : "text-slate-300 border-white/10"
                            }`}
                        >
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-[#0a2333] to-[#0d3448] text-white border border-white/20 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              JOIN THE CIRCULAR NETWORK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black uppercase tracking-tight text-white leading-tight">
              Ready to Expand Your Reach With Zero Logistics Burden?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Apply today to get onboarded within 48 hours and unlock guaranteed sell-through.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="https://brand.bworth.co.in/onBoarding"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#14A3C7] hover:bg-[#0fa0c3] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg transition-transform hover:scale-105 active:scale-95 text-center cursor-pointer"
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
