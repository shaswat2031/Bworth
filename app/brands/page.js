"use client";

import React, { useState, useMemo } from "react";
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
  Search,
  Filter,
  Check,
  Store,
  BadgeCheck,
  MapPin,
  Tag,
  Clock,
  RefreshCw,
  SlidersHorizontal,
  Recycle,
  Percent,
  Repeat,
  ShoppingBag,
  Layers,
  Boxes,
} from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";

// Live Partner Brands Database
const partnerBrands = [
  {
    id: "cossential",
    name: "Cossential",
    src: "/Cossential.png",
    category: "Sustainable & Basics",
    type: "basics",
    origin: "New Delhi",
    tagline: "Everyday minimalist essentials & elevated staples crafted for modern living.",
    tags: ["Organic Cotton", "Slow Fashion", "Minimalist"],
    badge: "Certified Live Partner",
    stats: "Zero Return Loss",
  },
  {
    id: "dhawan",
    name: "Dhawan",
    src: "/Dawan.png",
    category: "Menswear & Tailoring",
    type: "menswear",
    origin: "Punjab / Delhi",
    tagline: "Refined everyday tailoring and smart casual wear with timeless appeal.",
    tags: ["Smart Casual", "Structured Fits", "Heritage"],
    badge: "Certified Live Partner",
    stats: "100% Tag Verified",
  },
  {
    id: "gp",
    name: "Gheesa Peeta",
    src: "/GP.png",
    category: "Streetwear & Modern",
    type: "streetwear",
    origin: "Mumbai",
    tagline: "Raw urban aesthetics, graphic drop capsules, and youth street culture.",
    tags: ["Oversized Drops", "Youth Culture", "Graphic Tees"],
    badge: "Certified Live Partner",
    stats: "Surplus Monetized",
  },
  {
    id: "plain",
    name: "The Plain Edition",
    src: "/Plain.png",
    category: "Sustainable & Basics",
    type: "basics",
    origin: "Bengaluru",
    tagline: "100% combed organic cotton essentials, monochrome palettes, zero clutter.",
    tags: ["Monochrome", "100% Cotton", "Eco-friendly"],
    badge: "Certified Live Partner",
    stats: "Zero Waste Stock",
  },
  {
    id: "nandrani",
    name: "Nandrani",
    src: "/Nand.png",
    category: "Ethnic & Heritage",
    type: "ethnic",
    origin: "Jaipur",
    tagline: "Handcrafted traditional silhouettes and authentic artisanal ethnic collections.",
    tags: ["Block Prints", "Handcrafted", "Heritage Silhouettes"],
    badge: "Certified Live Partner",
    stats: "Pan-India Reach",
  },
  {
    id: "neel-ned",
    name: "Neel & Ned",
    src: "/Neel & Ned.png",
    category: "Menswear & Tailoring",
    type: "menswear",
    origin: "Delhi NCR",
    tagline: "Contemporary menswear defined by precision cuts, sharp collars and luxury cottons.",
    tags: ["Precision Fit", "Executive Casual", "Sharp Cuts"],
    badge: "Certified Live Partner",
    stats: "Money-Back Protected",
  },
  {
    id: "sasha",
    name: "Sasha-The Label",
    src: "/Sasa.png",
    category: "Ethnic & Heritage",
    type: "ethnic",
    origin: "Kolkata",
    tagline: "Expressive bohemian styling, fusion silhouettes, and festive drape wear.",
    tags: ["Indie Fusion", "Festive Drapes", "Boho Chic"],
    badge: "Certified Live Partner",
    stats: "Certified Partner",
  },
  {
    id: "seeme",
    name: "SEEME",
    src: "/SEEME.png",
    category: "Streetwear & Modern",
    type: "streetwear",
    origin: "Mumbai",
    tagline: "Bold experimental fashion pieces designed for youth creators and tastemakers.",
    tags: ["Avant-Garde", "Statement Fits", "Gen-Z Fashion"],
    badge: "Certified Live Partner",
    stats: "Curated Drops",
  },
  {
    id: "seere",
    name: "Seere",
    src: "/Seere.png",
    category: "Ethnic & Heritage",
    type: "ethnic",
    origin: "Varanasi",
    tagline: "Rooted Indian handlooms reimagined into modern everyday wardrobe statements.",
    tags: ["Artisanal Looms", "Pure Fabrics", "Sustainable Heritage"],
    badge: "Certified Live Partner",
    stats: "100% Inspected",
  },
  {
    id: "tim-raft",
    name: "tIM RAFT",
    src: "/tim.png",
    category: "Menswear & Tailoring",
    type: "menswear",
    origin: "Ahmedabad",
    tagline: "Durable travel-friendly apparel and casual utility wear built for everyday movement.",
    tags: ["Utility Wear", "Travel Ready", "High Durability"],
    badge: "Certified Live Partner",
    stats: "Verified Quality",
  },
  {
    id: "trenzic",
    name: "TRENZIC",
    src: "/Trenzc.png",
    category: "Streetwear & Modern",
    type: "streetwear",
    origin: "Surat",
    tagline: "Trend-forward runway-inspired drops manufactured with zero fabric waste.",
    tags: ["Runway Inspired", "Fast drops", "Zero Fabric Waste"],
    badge: "Certified Live Partner",
    stats: "Money-Back Guarantee",
  },
  {
    id: "homesolution",
    name: "HomeSolution",
    src: "/HomeSolution.png",
    category: "Sustainable & Basics",
    type: "basics",
    origin: "Bengaluru",
    tagline: "Premium breathable loungewear and relaxed lifestyle apparel for daily comfort.",
    tags: ["Relaxed Fit", "Loungewear", "Breathable Fabrics"],
    badge: "Certified Live Partner",
    stats: "Certified Live",
  },
  {
    id: "jrcy",
    name: "JRCY",
    src: "/JRCY.png",
    category: "Streetwear & Modern",
    type: "streetwear",
    origin: "Mumbai",
    tagline: "High-performance athleisure and street-ready technical sportswear.",
    tags: ["Technical Sportswear", "Athleisure", "Performance"],
    badge: "Certified Live Partner",
    stats: "Surplus Protected",
  },
];

const duplicatedLive = [...partnerBrands, ...partnerBrands, ...partnerBrands];



// Circular infrastructure 5 steps
const circularJourney = [
  { step: "01", name: "Collection", desc: "Doorstep take-back" },
  { step: "02", name: "Sorting", desc: "Digital grading" },
  { step: "03", name: "Reuse", desc: "Thrift & second-life" },
  { step: "04", name: "Upcycling", desc: "Artisan accessories" },
  { step: "05", name: "Recycling", desc: "Yarn & fiber recovery" },
];

// One Partnership, Multiple Benefits (5 core cards)
const coreBenefits = [
  {
    icon: ShoppingBag,
    title: "Additional Sales Channel",
    desc: "Sell through BWorth and reach new, fashion-conscious customers across India.",
    tag: "NEW REACH",
    color: "text-[#14A3C7]",
    bg: "bg-[#14A3C7]/10 border-[#14A3C7]/30",
  },
  {
    icon: Percent,
    title: "Competitive Commission",
    desc: "Maintain healthier economics compared with high-cost marketplace models.",
    tag: "BETTER MARGINS",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    icon: Recycle,
    title: "Circular Infrastructure",
    desc: "Join BWorth's proven collection and textile recovery ecosystem with zero setup cost.",
    tag: "PLUG & PLAY",
    color: "text-sky-500",
    bg: "bg-sky-500/10 border-sky-500/30",
  },
  {
    icon: Coins,
    title: "Customer Rewards",
    desc: "Give shoppers the combined benefit of brand offers and BWorth Coins (BWC).",
    tag: "MORE VALUE",
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    icon: Repeat,
    title: "Repeat Business",
    desc: "Turn clothing take-back and rewards into another reason for customers to return.",
    tag: "HIGH RETENTION",
    color: "text-purple-500",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
];

// Brand FAQs
const brandFaqs = [
  {
    q: "Who covers the shipping and reverse logistics cost?",
    a: "Shipping and reverse logistics are coordinated through BWorth's pan-India logistics network at transparent, competitive rates. Doorstep pickups, courier management, and reverse checks are handled smoothly without operational burden on your team.",
  },
  {
    q: "How does the Money Back Guarantee work?",
    a: "If your onboarded inventory does not achieve the committed baseline sales within the agreed period, BWorth provides a direct Money Back Guarantee to protect your label from unsold stock risk.",
  },
  {
    q: "How does BWorth protect returned products?",
    a: "We stop return fraud. Our in-house team checks every returned item by hand to ensure original tags, fresh condition, and zero damage before any item is restocked.",
  },
  {
    q: "How quickly can my fashion label get onboarded?",
    a: "Our dedicated onboarding team reviews applications within 24 hours. Once your digital catalog is connected, your collection can go live within 48 to 72 hours.",
  },
  {
    q: "Do I need to shift my stock to a BWorth warehouse?",
    a: "No! You do not need to move your stock. You can retain your inventory at your current warehouse or studio. When an order is placed, BWorth's delivery partner coordinates pickup right from your doorstep.",
  },
  {
    q: "How and when are partner brand payouts cleared?",
    a: "All brand revenues and payouts are cleared on a transparent weekly automated settlement cycle directly into your registered bank account, with a live analytics dashboard to monitor real-time sales.",
  },
];

const categoryTabs = [
  { id: "all", label: "All Partner Brands" },
  { id: "streetwear", label: "Streetwear & Modern" },
  { id: "basics", label: "Sustainable & Basics" },
  { id: "ethnic", label: "Ethnic & Heritage" },
  { id: "menswear", label: "Menswear & Tailoring" },
];

export default function Brands() {
  const { theme } = useTheme();
  const isWhite = theme === "white";
  const [activeFaq, setActiveFaq] = useState(0);
  const [isBrandNetworkOpen, setIsBrandNetworkOpen] = useState(false);

  // Brand Directory Search & Filtering
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = useMemo(() => {
    return partnerBrands.filter((brand) => {
      const matchesCategory =
        selectedCategory === "all" || brand.type === selectedCategory;
      const matchesSearch =
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isWhite ? "bg-[#F8FAFC] text-slate-900" : "bg-[#061217] text-white"
      }`}
    >
      {/* ── SECTION 1: HERO & BRAND ONBOARDING LAUNCHPAD ── */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#14A3C7]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Narrative & Highlights (7 Cols) */}
            <div className="lg:col-span-7 space-y-7 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Handshake size={16} className="text-[#14A3C7]" />
                <span>CIRCULAR RETAIL PARTNERSHIPS • ONBOARDING PORTAL</span>
              </div>

              <h1
                className={`text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-sans font-black uppercase tracking-tight leading-[1.04] ${
                  isWhite ? "text-slate-950" : "text-white"
                }`}
              >
                Scale Your Fashion Brand <br className="hidden sm:block" />
                With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                  Circular Reach & Scale.
                </span>
              </h1>

              <p
                className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal ${
                  isWhite ? "text-slate-600" : "text-slate-300"
                }`}
              >
                BWorth partners with modern and heritage fashion labels across India to monetize surplus stock, reach 25,000+ active circular buyers, and streamline logistics operations.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <a
                  href="https://brand.bworth.co.in/onBoarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full bg-[#14A3C7] hover:bg-[#0fa0c3] text-white font-sans font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-[#14A3C7]/25 transition-transform hover:scale-105 active:scale-95 text-center group cursor-pointer"
                >
                  <span>Launch Onboarding Portal</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <a
                  href="#brands-directory"
                  className={`inline-flex items-center justify-center gap-2.5 px-7 py-4.5 rounded-full border text-sm sm:text-base font-sans font-black uppercase tracking-wider transition-all ${
                    isWhite
                      ? "border-slate-300 text-slate-800 hover:border-[#14A3C7] hover:bg-slate-50"
                      : "border-white/20 text-white hover:border-[#14A3C7] hover:bg-white/5"
                  }`}
                >
                  <Store size={18} className="text-[#14A3C7]" />
                  <span>Explore Partner Brands</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Fast-Track Onboarding Box */}
            <div className="lg:col-span-5 w-full">
              <div
                className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden transition-all ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-slate-200/60"
                    : "bg-[#081822] border-white/15 shadow-black/80"
                }`}
              >
                {/* Glow pill */}
                <div className="flex items-center justify-between pb-4.5 border-b border-current/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-emerald-500">
                      ONBOARDING FAST-TRACK OPEN
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#14A3C7]/15 text-[#14A3C7] font-bold">
                    BATCH 2026
                  </span>
                </div>

                <div className="py-6 space-y-5">
                  <div className="space-y-1.5">
                    <h3
                      className={`text-xl sm:text-2xl font-sans font-black uppercase tracking-tight ${
                        isWhite ? "text-slate-900" : "text-white"
                      }`}
                    >
                      Onboard Your Label In 3 Steps
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-medium ${
                        isWhite ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      Join India&apos;s leading fashion brands monetizing inventory with circular reach.
                    </p>
                  </div>

                  {/* 3 Step Mini Checklist */}
                  <div className="space-y-3">
                    {[
                      {
                        step: "01",
                        title: "2-Min Digital Application",
                        sub: "Submit your brand catalog URL & details",
                      },
                      {
                        step: "02",
                        title: "Automated Catalog Sync",
                        sub: "24-48 hours catalog review & activation",
                      },
                      {
                        step: "03",
                        title: "Start Selling & Scaling",
                        sub: "Doorstep pickup & money-back assurance",
                      },
                    ].map((st, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all ${
                          isWhite
                            ? "bg-slate-50 border-slate-200/80 hover:border-slate-300"
                            : "bg-white/5 border-white/10 hover:border-white/15"
                        }`}
                      >
                        <span className="w-8 h-8 rounded-xl bg-[#14A3C7]/20 text-[#14A3C7] font-mono text-xs sm:text-sm font-black flex items-center justify-center shrink-0">
                          {st.step}
                        </span>
                        <div>
                          <p
                            className={`text-xs sm:text-sm font-sans font-bold leading-tight ${
                              isWhite ? "text-slate-900" : "text-white"
                            }`}
                          >
                            {st.title}
                          </p>
                          <p
                            className={`text-[11px] sm:text-xs leading-relaxed mt-0.5 ${
                              isWhite ? "text-slate-500" : "text-slate-400"
                            }`}
                          >
                            {st.sub}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Big Button Link */}
                <a
                  href="https://brand.bworth.co.in/onBoarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-[#14A3C7] to-[#0284c7] hover:from-[#0fa0c3] hover:to-[#0369a1] text-white font-sans font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-[#14A3C7]/20 transition-transform hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
                >
                  <span>Start Onboarding Portal</span>
                  <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BRAND MARQUEE SHOWCASE (INFINITE TICKER) ── */}
      <section
        className={`py-8 relative overflow-hidden border-y ${
          isWhite
            ? "bg-slate-100/70 border-slate-200/80"
            : "bg-[#081720] border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4">
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
            <div
              className={`flex items-center gap-1.5 text-xs font-semibold ${
                isWhite ? "text-emerald-700" : "text-emerald-400"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Certified Partners</span>
            </div>
          </div>
        </div>

        {/* Track 1: Live Partners (Sliding Left) */}
        <div className="relative flex overflow-hidden whitespace-nowrap py-1">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            }}
            className="flex items-center gap-4 sm:gap-5 shrink-0 py-2"
          >
            {duplicatedLive.map((brand, idx) => (
              <div
                key={`live-${idx}`}
                className={`w-48 sm:w-60 h-24 sm:h-28 px-4 py-2.5 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-xs hover:border-[#14A3C7]"
                    : "bg-[#0b1d28] border-white/10 hover:border-[#14A3C7]"
                }`}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={200}
                  height={90}
                  className="max-h-16 sm:max-h-20 w-auto max-w-[90%] object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: "HUMARE PARTNER BRANDS" — COLLAPSIBLE DROPDOWN DIRECTORY ── */}
      <section id="brands-directory" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all ${
            isWhite
              ? "bg-white border-slate-200/90 shadow-md"
              : "bg-[#081822] border-white/10 shadow-xl"
          }`}
        >
          {/* Collapsible Dropdown Header Trigger */}
          <div
            onClick={() => setIsBrandNetworkOpen(!isBrandNetworkOpen)}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group"
          >
            <div className="space-y-1.5 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
                <Store size={15} className="text-[#14A3C7]" />
                <span>OUR BRAND NETWORK & PORTFOLIO</span>
              </div>
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-sans font-black uppercase tracking-tight group-hover:text-[#14A3C7] transition-colors ${
                  isWhite ? "text-slate-950" : "text-white"
                }`}
              >
                Explore Brands Live On BWorth
              </h2>
              <p
                className={`text-xs sm:text-sm font-medium leading-relaxed max-w-2xl ${
                  isWhite ? "text-slate-600" : "text-slate-300"
                }`}
              >
                From cutting-edge streetwear capsules to timeless Indian handlooms, discover the verified fashion labels actively monetizing surplus stock on our zero-risk platform.
              </p>
            </div>

            {/* Toggle Button / Badge */}
            <button
              type="button"
              className={`shrink-0 px-5 py-3 rounded-2xl border font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                isBrandNetworkOpen
                  ? "bg-[#14A3C7] text-white border-[#14A3C7] shadow-md shadow-[#14A3C7]/20"
                  : isWhite
                  ? "bg-slate-100 text-slate-800 border-slate-200 group-hover:bg-slate-200"
                  : "bg-white/10 text-slate-200 border-white/15 group-hover:bg-white/15"
              }`}
            >
              <span>{isBrandNetworkOpen ? "Hide Brand Directory" : `View All ${partnerBrands.length} Brands`}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isBrandNetworkOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Collapsible Content */}
          <AnimatePresence>
            {isBrandNetworkOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden pt-8 border-t border-current/10 mt-6 space-y-8"
              >
                {/* Search & Category Filter Bar */}
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                    {/* Search Input */}
                    <div className="relative flex-1 max-w-md">
                      <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#14A3C7]"
                      />
                      <input
                        type="text"
                        placeholder="Search brands by name, category, or city..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`w-full pl-11 pr-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border outline-none transition-all ${
                          isWhite
                            ? "bg-slate-50 border-slate-300 focus:border-[#14A3C7] text-slate-900 shadow-xs placeholder-slate-400"
                            : "bg-[#091823] border-white/20 focus:border-[#14A3C7] text-white placeholder-slate-400"
                        }`}
                      />
                    </div>

                    {/* Results count pill */}
                    <div className="flex items-center gap-2 self-end md:self-center">
                      <span
                        className={`text-xs font-mono font-bold px-3 py-1.5 rounded-full border ${
                          isWhite
                            ? "bg-slate-100 border-slate-200 text-slate-700"
                            : "bg-white/5 border-white/10 text-slate-300"
                        }`}
                      >
                        Showing {filteredBrands.length} of {partnerBrands.length} Partner Labels
                      </span>
                    </div>
                  </div>

                  {/* Category Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {categoryTabs.map((tab) => {
                      const active = selectedCategory === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedCategory(tab.id)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                            active
                              ? "bg-[#14A3C7] text-white shadow-md shadow-[#14A3C7]/20"
                              : isWhite
                              ? "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                              : "bg-[#091823] border border-white/10 text-slate-300 hover:text-white hover:border-white/20"
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Partner Brands Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBrands.map((brand) => (
                    <motion.div
                      key={brand.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className={`rounded-3xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${
                        isWhite
                          ? "bg-slate-50 border-slate-200/90 hover:border-[#14A3C7] hover:bg-white"
                          : "bg-[#091823] border-white/10 hover:border-[#14A3C7]"
                      }`}
                    >
                      <div>
                        {/* Card Header: Brand Logo & Live Badge */}
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div
                            className={`w-32 h-18 sm:w-36 sm:h-20 p-2.5 rounded-2xl border flex items-center justify-center transition-all ${
                              isWhite
                                ? "bg-white border-slate-200 shadow-xs"
                                : "bg-[#061217] border-white/10"
                            }`}
                          >
                            <Image
                              src={brand.src}
                              alt={brand.name}
                              width={140}
                              height={60}
                              className="max-h-14 sm:max-h-16 w-auto max-w-[92%] object-contain group-hover:scale-105 transition-transform"
                            />
                          </div>

                          <div className="flex items-center">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Live Partner
                            </span>
                          </div>
                        </div>

                        {/* Brand Name & Category */}
                        <div className="space-y-0.5 mb-2">
                          <h3
                            className={`text-lg font-sans font-black uppercase tracking-tight group-hover:text-[#14A3C7] transition-colors ${
                              isWhite ? "text-slate-900" : "text-white"
                            }`}
                          >
                            {brand.name}
                          </h3>
                          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#14A3C7]">
                            {brand.category}
                          </p>
                        </div>

                        {/* Tagline / Bio */}
                        <p
                          className={`text-xs leading-relaxed mb-3 ${
                            isWhite ? "text-slate-600" : "text-slate-300"
                          }`}
                        >
                          {brand.tagline}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {brand.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md ${
                                isWhite
                                  ? "bg-white text-slate-700 border border-slate-200"
                                  : "bg-white/5 text-slate-300"
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer: Verified Status */}
                      <div
                        className={`pt-3 border-t flex items-center justify-between text-xs font-bold ${
                          isWhite ? "border-slate-200" : "border-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-emerald-500">
                          <ShieldCheck size={14} />
                          <span className="text-[11px] font-mono uppercase font-bold">
                            {brand.stats}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>


              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PILLAR 1: GROW SALES WITH A LOW-COMMISSION MODEL
      ══════════════════════════════════════════════════════════════ */}
      <section id="pillars" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-current/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border shadow-2xl group bg-slate-900 aspect-[4/3] sm:aspect-[4/3.2]">
              <img
                src="/b2b_brand_growth.jpg"
                alt="Grow Sales with BWorth"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#14A3C7] block">
                    LOW-COMMISSION RETAIL
                  </span>
                  <p className="text-xs font-black">More Customers. Better Margins.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#14A3C7] text-white flex items-center justify-center font-black">
                  <TrendingUp size={20} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editorial Content (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
                01. RETAIL EXPANSION
              </span>
              <h2
                className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight leading-[1.05] ${
                  isWhite ? "text-slate-900" : "text-white"
                }`}
              >
                Grow Sales with a <br />
                <span className="text-[#14A3C7] italic">Low-Commission Model</span>
              </h2>
            </div>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}
            >
              List your products on BWorth and reach customers who are actively interested in fashion, rewards, and responsible shopping.
            </p>

            <div
              className={`p-5 rounded-2xl border ${
                isWhite
                  ? "bg-slate-100/70 border-slate-200 text-slate-800"
                  : "bg-white/5 border-white/10 text-slate-200"
              }`}
            >
              <p className="text-sm sm:text-base leading-relaxed">
                BWorth works on a <strong className="text-[#14A3C7]">competitive commission model</strong>, helping brands access an additional sales channel without heavy marketplace costs.
              </p>
            </div>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { title: "More Visibility", sub: "Curated conscious audience" },
                { title: "More Customers", sub: "High reward intent" },
                { title: "Better Margins", sub: "Low commission structure" },
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border text-center space-y-1 ${
                    isWhite
                      ? "bg-white border-slate-200 shadow-sm"
                      : "bg-[#091a24] border-white/10"
                  }`}
                >
                  <h4 className="font-black text-sm tracking-tight text-[#14A3C7]">
                    {pill.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">{pill.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PILLAR 2: CIRCULAR FASHION INFRASTRUCTURE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-current/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Content (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-500">
                02. PLUG & PLAY INFRASTRUCTURE
              </span>
              <h2
                className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight leading-[1.05] ${
                  isWhite ? "text-slate-900" : "text-white"
                }`}
              >
                Become Part of BWorth's <br />
                <span className="text-emerald-500 italic">Circular Fashion Infrastructure</span>
              </h2>
            </div>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}
            >
              Partner brands become part of a wider system designed to manage clothing beyond the first sale.
            </p>

            {/* 5-Step Connected Flow Chain */}
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                BWorth Supports The Entire Journey Through:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {circularJourney.map((st, i) => (
                  <div
                    key={st.step}
                    className={`p-3 rounded-2xl border text-center space-y-1 ${
                      isWhite
                        ? "bg-white border-emerald-300/80 shadow-xs"
                        : "bg-[#091a24] border-emerald-500/25"
                    }`}
                  >
                    <span className="text-[10px] font-black text-emerald-500 uppercase block">
                      {st.step}
                    </span>
                    <h4 className="font-bold text-xs tracking-tight">{st.name}</h4>
                    <p className="text-[9px] text-slate-400 font-medium">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}
            >
              This allows brands to participate in circular fashion without building their own collection and recovery infrastructure from scratch.
            </p>

            {/* Core Manifesto Highlight */}
            <div
              className={`p-5 rounded-2xl border-l-4 border-emerald-500 ${
                isWhite
                  ? "bg-emerald-50 text-emerald-950 border-emerald-200"
                  : "bg-emerald-950/20 text-emerald-300 border-emerald-500/30"
              }`}
            >
              <p className="text-sm sm:text-base font-black">
                "You sell the garment. BWorth helps manage its next journey."
              </p>
            </div>
          </motion.div>

          {/* Visual Showcase (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden border shadow-2xl group bg-slate-900 aspect-[4/3] sm:aspect-[4/3.2]">
              <img
                src="/b2b_circular_system.jpg"
                alt="Circular Fashion Infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                    ZERO-LANDFILL ECOSYSTEM
                  </span>
                  <p className="text-xs font-black">Collection • Sorting • Recovery</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black">
                  <Recycle size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PILLAR 3: GIVE CUSTOMERS MORE REASONS TO BUY
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-current/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border shadow-2xl group bg-slate-900 aspect-[4/3] sm:aspect-[4/3.2]">
              <img
                src="/b2b_customer_rewards.jpg"
                alt="Give Customers More Reasons to Buy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    DUAL DISCOUNT POWER
                  </span>
                  <p className="text-xs font-black">Brand Offers + BWorth Coins</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center font-black">
                  <Coins size={20} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editorial Content (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-amber-500">
                03. REWARD-POWERED CHECKOUT
              </span>
              <h2
                className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight leading-[1.05] ${
                  isWhite ? "text-slate-900" : "text-white"
                }`}
              >
                Give Customers <br />
                <span className="text-amber-500 italic">More Reasons to Buy</span>
              </h2>
            </div>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}
            >
              Brands can offer their own promotional discounts, while customers can also use eligible <strong className="text-amber-500">BWorth Coins (BWC)</strong> on purchases.
            </p>

            {/* The Value Equation Banner */}
            <div
              className={`p-6 rounded-3xl border shadow-lg ${
                isWhite
                  ? "bg-gradient-to-r from-amber-500/10 via-white to-amber-500/10 border-amber-300"
                  : "bg-gradient-to-r from-amber-950/20 via-[#0a1820] to-amber-950/20 border-amber-500/30"
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 block mb-2">
                THE VALUE EQUATION:
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-lg font-black tracking-tight">
                <span className="px-3 py-1 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-500">
                  Brand Discount
                </span>
                <span className="text-slate-400">+</span>
                <span className="px-3 py-1 rounded-xl bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
                  BWorth Coins
                </span>
                <span className="text-slate-400">=</span>
                <span className="px-3 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-500">
                  More Value for Customer
                </span>
              </div>
            </div>

            {/* Conversion • Repeat • Loyalty Triad */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: "Conversion", sub: "Lower price barriers" },
                { title: "Repeat Purchases", sub: "Recycled purchasing power" },
                { title: "Customer Loyalty", sub: "Sticky rewards loop" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border text-center space-y-1 ${
                    isWhite
                      ? "bg-white border-slate-200 shadow-sm"
                      : "bg-[#091a24] border-white/10"
                  }`}
                >
                  <h4 className="font-black text-sm tracking-tight text-amber-500">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">{item.sub}</p>
                </div>
              ))}
            </div>

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Customers can earn BWC by giving unused clothes through BWorth and use eligible rewards toward future purchases on the platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BENEFITS SUMMARY: ONE PARTNERSHIP. MULTIPLE BENEFITS.
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-current/10">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
              STRATEGIC ADVANTAGES
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              One Partnership. Multiple Benefits.
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Unlock complete commercial and circular advantages when you partner with BWorth:
            </p>
          </div>

          {/* 5 Core Benefit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreBenefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`p-7 rounded-3xl border flex flex-col justify-between space-y-5 transition-all shadow-lg ${
                    isWhite
                      ? "bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xl"
                      : "bg-[#091a24] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${b.bg} ${b.color}`}
                      >
                        <Icon size={24} />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider ${b.color}`}>
                        {b.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight">{b.title}</h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isWhite ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {b.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-current/10 flex items-center gap-1.5 text-xs font-bold text-[#14A3C7]">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>Active Benefit</span>
                  </div>
                </motion.div>
              );
            })}

            {/* 6th Card: Direct Connect Partner Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className={`p-7 rounded-3xl border flex flex-col justify-between space-y-5 text-white bg-gradient-to-br from-[#14A3C7] to-[#0284c7] shadow-xl`}
            >
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full inline-block">
                  READY TO ONBOARD?
                </span>
                <h3 className="text-xl font-bold tracking-tight">Become a Partner Brand Today</h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Join forward-thinking fashion brands already scaling with BWorth circular technology.
                </p>
              </div>

              <Link
                href="/contact-us"
                className="w-full py-3.5 px-6 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group"
              >
                <span>Connect With Partnership Team</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ── SECTION 6: 3-STEP ONBOARDING PROCESS (TIGHT & PURPOSEFUL) ── */}
      <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
            HOW IT WORKS
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-sans font-black uppercase tracking-tight ${
              isWhite ? "text-slate-950" : "text-white"
            }`}
          >
            Launch in 3 Simple Steps
          </h2>
          <p
            className={`text-base sm:text-lg font-medium leading-relaxed ${
              isWhite ? "text-slate-600" : "text-slate-300"
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
              desc: "Fill out a quick 2-minute brand form with your catalog and contact details.",
              tag: "2 MINUTES",
            },
            {
              step: "02",
              title: "Catalog Sync",
              desc: "Our partner team reviews your collection and connects your products to our delivery network.",
              tag: "24-48 HOURS",
            },
            {
              step: "03",
              title: "Sell & Scale",
              desc: "Your brand goes live. BWorth takes care of customer orders, logistics coordination, and smooth order dispatch.",
              tag: "SEAMLESS FULFILLMENT",
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                isWhite
                  ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-black text-[#14A3C7] font-mono">
                  {s.step}
                </span>
                <span
                  className={`text-xs font-mono font-bold px-3 py-1 rounded-lg uppercase tracking-wide ${
                    isWhite
                      ? "bg-slate-100 text-slate-800"
                      : "bg-white/10 text-slate-200"
                  }`}
                >
                  {s.tag}
                </span>
              </div>
              <h3
                className={`text-xl sm:text-2xl font-black uppercase tracking-tight mb-2 ${
                  isWhite ? "text-slate-900" : "text-white"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed font-medium ${
                  isWhite ? "text-slate-700" : "text-slate-300"
                }`}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: BRAND FAQ ACCORDION ── */}
      <section
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t ${
          isWhite ? "bg-slate-50 border-slate-200" : "bg-[#061217] border-white/10"
        }`}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              COMMON QUESTIONS
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
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
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    isWhite
                      ? "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                      : "bg-[#091823] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-bold leading-snug ${
                        isWhite ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {faq.q}
                    </h3>
                    <ChevronDown
                      size={20}
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
                        <p
                          className={`pt-3.5 text-sm sm:text-base leading-relaxed border-t mt-3.5 font-normal ${
                            isWhite
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

      {/* ── SECTION 9: HIGH-CONVERTING PARTNERSHIP CTA BANNER ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-[#0a2333] to-[#0d3448] text-white border border-white/20 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              GROW YOUR BRAND
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black uppercase tracking-tight text-white leading-tight">
              Ready to Expand Your Reach & Scale Your Brand?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Apply today to get onboarded within 48 hours and unlock guaranteed sales.
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
