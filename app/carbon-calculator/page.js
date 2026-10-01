"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  Trash2,
  ArrowRight,
  RotateCcw,
  Car,
  Trees,
  ShowerHead,
  Smartphone,
  Coins,
  Sparkles,
  Info,
  Zap,
  Truck,
  Recycle,
} from "lucide-react";

// Clean Vector Icons for Apparel Categories
const TShirtIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z" />
  </svg>
);

const PantsIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 3h16v4l-2 14h-4.5L12 11l-1.5 10H6L4 7V3z" />
    <path d="M4 7h16" />
    <path d="M12 3v8" />
  </svg>
);

const JacketIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 3h14l-2 5v13H7V8L5 3z" />
    <path d="M12 3v18" />
    <path d="M8 3l4 6 4-6" />
  </svg>
);

const DressIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 3h6l1.5 5L18 21H6l1.5-13L9 3z" />
    <path d="M9 3c.5 2 1.5 3 3 3s2.5-1 3-3" />
  </svg>
);

// Standardized Peer-Reviewed Garment LCA Benchmarks (UNEP & Ellen MacArthur Foundation)
const GARMENT_TYPES = [
  {
    id: "tshirt",
    name: "T-Shirts & Tops",
    icon: TShirtIcon,
    avgWeightKg: 0.25,
    co2ePerItem: 3.0,
    waterPerItem: 2500,
    bwcCoinsPerItem: 35,
    tag: "Cotton / Poly Blends",
  },
  {
    id: "jeans",
    name: "Denim & Trousers",
    icon: PantsIcon,
    avgWeightKg: 0.65,
    co2ePerItem: 13.0,
    waterPerItem: 7500,
    bwcCoinsPerItem: 120,
    tag: "Heavy Twill & Denim",
  },
  {
    id: "jackets",
    name: "Jackets & Outerwear",
    icon: JacketIcon,
    avgWeightKg: 1.20,
    co2ePerItem: 20.0,
    waterPerItem: 4500,
    bwcCoinsPerItem: 250,
    tag: "Layered Fabrics & Coats",
  },
  {
    id: "ethnic",
    name: "Dresses & Ethnic Wear",
    icon: DressIcon,
    avgWeightKg: 0.55,
    co2ePerItem: 8.5,
    waterPerItem: 3800,
    bwcCoinsPerItem: 95,
    tag: "Sarees, Kurtas & Dresses",
  },
];

const PRESETS = [
  {
    name: "Small Bag",
    items: { tshirt: 3, jeans: 1, jackets: 0, ethnic: 1 },
  },
  {
    name: "Medium Box",
    items: { tshirt: 6, jeans: 3, jackets: 1, ethnic: 2 },
  },
  {
    name: "Full Wardrobe",
    items: { tshirt: 12, jeans: 5, jackets: 3, ethnic: 4 },
  },
];

export default function CarbonCalculatorPage() {
  const { theme } = useTheme();

  // Quantities per garment ID (default to ~9 items)
  const [quantities, setQuantities] = useState({
    tshirt: 4,
    jeans: 2,
    jackets: 1,
    ethnic: 2,
  });

  const impact = useMemo(() => {
    let totalWeightKg = 0;
    let totalVirginCO2eKg = 0;
    let totalWaterLiters = 0;
    let totalBwcCoins = 0;
    let totalGarmentCount = 0;

    GARMENT_TYPES.forEach((item) => {
      const count = quantities[item.id] || 0;
      if (count > 0) {
        totalGarmentCount += count;
        totalWeightKg += count * item.avgWeightKg;
        totalVirginCO2eKg += count * item.co2ePerItem;
        totalWaterLiters += count * item.waterPerItem;
        totalBwcCoins += count * item.bwcCoinsPerItem;
      }
    });

    // 88% net avoided virgin footprint factor (accounting for transport/sorting logistics)
    const efficiencyFactor = 0.88;
    const avoidedCO2eKg = totalVirginCO2eKg * efficiencyFactor;
    const avoidedWaterLiters = totalWaterLiters * efficiencyFactor;
    const divertedLandfillKg = totalWeightKg;

    // Equivalencies (US EPA & EEA benchmarks)
    const kmCarDriven = Math.round(avoidedCO2eKg * 8.0);
    const treeYears = (avoidedCO2eKg / 22.0).toFixed(1);
    const showerDays = Math.round(avoidedWaterLiters / 65.0);
    const smartphoneCharges = Math.round(avoidedCO2eKg / 0.0082);

    return {
      totalGarmentCount,
      totalWeightKg: totalWeightKg.toFixed(1),
      avoidedCO2eKg: avoidedCO2eKg.toFixed(1),
      avoidedCO2eMetricTons: (avoidedCO2eKg / 1000.0).toFixed(3),
      avoidedWaterLiters: Math.round(avoidedWaterLiters).toLocaleString(),
      divertedLandfillKg: divertedLandfillKg.toFixed(1),
      totalBwcCoins: Math.round(totalBwcCoins),
      kmCarDriven: kmCarDriven.toLocaleString(),
      treeYears,
      showerDays: showerDays.toLocaleString(),
      smartphoneCharges: smartphoneCharges.toLocaleString(),
    };
  }, [quantities]);

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const handleApplyPreset = (presetItems) => {
    setQuantities(presetItems);
  };

  const handleReset = () => {
    setQuantities({ tshirt: 0, jeans: 0, jackets: 0, ethnic: 0 });
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#14A3C7] selection:text-white transition-colors duration-300 ${
        theme === "white" ? "bg-[#f8fafc] text-slate-900" : "bg-[#061118] text-white"
      }`}
    >
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        {/* ── HEADER ───────────────────────────────────────────────── */}
        <section className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#14A3C7]">
            <Sparkles size={12} className="text-[#14A3C7]" />
            <span>MEASURE YOUR ENVIRONMENTAL IMPACT</span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight leading-tight uppercase ${
              theme === "white" ? "text-slate-950" : "text-white"
            }`}
          >
            Clothing Resource{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] to-teal-500">
              Calculator
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              theme === "white" ? "text-slate-600" : "text-slate-300"
            }`}
          >
            Calculate the exact emissions, water, and landfill waste averted when you divert pre-loved clothes into certified circular recycling with BWorth.
          </p>
        </section>

        {/* ── CALCULATOR BODY: 2 COLUMNS ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ── LEFT: GARMENT SELECTOR (7 Cols) ───────────────────── */}
          <div className="lg:col-span-7 space-y-4">
            <div
              className={`p-5 sm:p-7 rounded-3xl border transition-all ${
                theme === "white"
                  ? "bg-white border-slate-200/90 shadow-sm"
                  : "bg-[#0a1824]/90 border-white/10 shadow-xl"
              }`}
            >
              {/* Presets and Header Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200/70 dark:border-white/10">
                <div>
                  <h2
                    className={`text-sm font-black uppercase tracking-wider ${
                      theme === "white" ? "text-slate-900" : "text-white"
                    }`}
                  >
                    Select Wardrobe Items
                  </h2>
                  <p className="text-xs text-slate-400">
                    Adjust item quantities to simulate savings
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#14A3C7] transition-colors"
                >
                  <RotateCcw size={12} />
                  <span>Reset</span>
                </button>
              </div>

              {/* Quick Presets Bar */}
              <div className="pt-3.5 pb-2 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                  Presets:
                </span>
                {PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => handleApplyPreset(preset.items)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                      theme === "white"
                        ? "bg-slate-100 hover:bg-slate-200/80 border-slate-200 text-slate-700"
                        : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300"
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>

              {/* Garment Cards List */}
              <div className="space-y-3 pt-3">
                {GARMENT_TYPES.map((item) => {
                  const count = quantities[item.id] || 0;
                  const itemWeight = (count * item.avgWeightKg).toFixed(1);

                  return (
                    <div
                      key={item.id}
                      className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                        count > 0
                          ? theme === "white"
                            ? "bg-cyan-50/40 border-[#14A3C7]/40 shadow-xs"
                            : "bg-[#14A3C7]/10 border-[#14A3C7]/40 shadow-xs"
                          : theme === "white"
                          ? "bg-slate-50/60 border-slate-200/80 hover:border-slate-300"
                          : "bg-white/[0.03] border-white/10 hover:border-white/20"
                      }`}
                    >
                      {/* Left: Icon & Details */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                            count > 0
                              ? "bg-[#14A3C7] text-white border-[#14A3C7]"
                              : theme === "white"
                              ? "bg-white border-slate-200 text-slate-700"
                              : "bg-white/5 border-white/10 text-slate-300"
                          }`}
                        >
                          <item.icon size={19} />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h3
                              className={`text-xs sm:text-sm font-bold uppercase tracking-tight truncate ${
                                theme === "white" ? "text-slate-900" : "text-white"
                              }`}
                            >
                              {item.name}
                            </h3>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-tight">
                            {item.tag} • ~{item.avgWeightKg} kg/pc
                          </p>
                        </div>
                      </div>

                      {/* Right: Stepper & Weight */}
                      <div className="flex items-center gap-3 shrink-0">
                        {count > 0 && (
                          <span className="hidden sm:inline-block text-[11px] font-mono font-bold text-[#14A3C7]">
                            {itemWeight} kg
                          </span>
                        )}

                        <div className="flex items-center gap-1.5 p-1 rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={count <= 0}
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                              count <= 0
                                ? "opacity-30 cursor-not-allowed"
                                : "hover:bg-slate-100 dark:hover:bg-white/20 active:scale-95 cursor-pointer"
                            }`}
                          >
                            –
                          </button>
                          <span className="w-6 text-center font-mono font-black text-xs">
                            {count}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="w-7 h-7 rounded-full bg-[#14A3C7] hover:bg-[#0fa0c3] text-white flex items-center justify-center font-bold text-xs active:scale-95 transition-all cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Methodology Citation Footnote */}
              <div className="pt-5 mt-4 border-t border-slate-200/70 dark:border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                <Info size={13} className="shrink-0 text-[#14A3C7]" />
                <span>
                  Metrics standardized via ISO 14040/44 textile lifecycle assessment benchmarks.
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: DYNAMIC IMPACT DASHBOARD (5 Cols) ─────────── */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            <div
              className={`p-6 sm:p-7 rounded-3xl border transition-all relative overflow-hidden ${
                theme === "white"
                  ? "bg-white text-slate-900 border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                  : "bg-[#09161F] text-white border-white/15 shadow-2xl"
              }`}
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#14A3C7]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div
                className={`flex items-center justify-between pb-4 border-b ${
                  theme === "white" ? "border-slate-100" : "border-white/10"
                }`}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
                  TOTAL SAVINGS ESTIMATE
                </span>
                <span
                  className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                    theme === "white"
                      ? "bg-slate-100/80 text-slate-700 border-slate-200"
                      : "bg-white/10 text-white border-white/15"
                  }`}
                >
                  {impact.totalGarmentCount} Items ({impact.totalWeightKg} kg)
                </span>
              </div>

              {/* Primary KPI: CO₂e Avoided */}
              <div className="py-5 space-y-1">
                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                    theme === "white" ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Avoided Carbon Emissions (CO₂e)
                </span>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl sm:text-5xl font-sans font-black tracking-tight ${
                      theme === "white" ? "text-emerald-600" : "text-emerald-400"
                    }`}
                  >
                    {impact.avoidedCO2eKg}
                  </span>
                  <span
                    className={`text-lg font-bold ${
                      theme === "white" ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    kg CO₂e
                  </span>
                </div>
                <p
                  className={`text-[11px] ${
                    theme === "white" ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Equal to{" "}
                  <span
                    className={`font-semibold ${
                      theme === "white" ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {impact.avoidedCO2eMetricTons} metric tons
                  </span>{" "}
                  of emissions prevented.
                </p>
              </div>

              {/* 3 Secondary Metric Cards */}
              <div
                className={`grid grid-cols-3 gap-2.5 py-4 border-t border-b ${
                  theme === "white" ? "border-slate-100" : "border-white/10"
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl border text-center ${
                    theme === "white"
                      ? "bg-slate-50/80 border-slate-200/80"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <Droplets size={14} className="text-[#14A3C7] mx-auto mb-1" />
                  <p
                    className={`text-sm sm:text-base font-black leading-tight ${
                      theme === "white" ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {impact.avoidedWaterLiters}
                  </p>
                  <p className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">
                    Liters Water
                  </p>
                </div>

                <div
                  className={`p-2.5 rounded-xl border text-center ${
                    theme === "white"
                      ? "bg-slate-50/80 border-slate-200/80"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <Trash2 size={14} className="text-amber-500 mx-auto mb-1" />
                  <p
                    className={`text-sm sm:text-base font-black leading-tight ${
                      theme === "white" ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {impact.divertedLandfillKg} kg
                  </p>
                  <p className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">
                    Dump Prevented
                  </p>
                </div>

                <div
                  className={`p-2.5 rounded-xl border text-center ${
                    theme === "white"
                      ? "bg-slate-50/80 border-slate-200/80"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <Coins size={14} className="text-emerald-500 mx-auto mb-1" />
                  <p
                    className={`text-sm sm:text-base font-black leading-tight ${
                      theme === "white" ? "text-emerald-600" : "text-emerald-400"
                    }`}
                  >
                    ₹{impact.totalBwcCoins}
                  </p>
                  <p className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">
                    Est. BWC Coins
                  </p>
                </div>
              </div>

              {/* Equivalency Context Grid */}
              <div className="py-4 space-y-2.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Real-World Equivalents
                </span>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div
                    className={`flex items-center gap-2 p-2 rounded-xl border ${
                      theme === "white"
                        ? "bg-slate-50/80 border-slate-100"
                        : "bg-white/[0.04] border-transparent"
                    }`}
                  >
                    <Car size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div>
                      <p
                        className={`font-bold text-[11px] ${
                          theme === "white" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {impact.kmCarDriven} km
                      </p>
                      <p className="text-[9px] text-slate-400 leading-none">Driving offset</p>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-2 p-2 rounded-xl border ${
                      theme === "white"
                        ? "bg-slate-50/80 border-slate-100"
                        : "bg-white/[0.04] border-transparent"
                    }`}
                  >
                    <Trees size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div>
                      <p
                        className={`font-bold text-[11px] ${
                          theme === "white" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {impact.treeYears} Trees
                      </p>
                      <p className="text-[9px] text-slate-400 leading-none">Absorption / year</p>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-2 p-2 rounded-xl border ${
                      theme === "white"
                        ? "bg-slate-50/80 border-slate-100"
                        : "bg-white/[0.04] border-transparent"
                    }`}
                  >
                    <ShowerHead size={14} className="text-[#14A3C7] dark:text-sky-400 shrink-0" />
                    <div>
                      <p
                        className={`font-bold text-[11px] ${
                          theme === "white" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {impact.showerDays} Days
                      </p>
                      <p className="text-[9px] text-slate-400 leading-none">Daily showers</p>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-2 p-2 rounded-xl border ${
                      theme === "white"
                        ? "bg-slate-50/80 border-slate-100"
                        : "bg-white/[0.04] border-transparent"
                    }`}
                  >
                    <Smartphone size={14} className="text-indigo-500 dark:text-purple-400 shrink-0" />
                    <div>
                      <p
                        className={`font-bold text-[11px] ${
                          theme === "white" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {impact.smartphoneCharges}
                      </p>
                      <p className="text-[9px] text-slate-400 leading-none">Phone charges</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion CTA */}
              <div className="pt-2">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.BworthGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#14A3C7] hover:bg-[#0fa0c3] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 text-center cursor-pointer"
                >
                  <span>Book Doorstep Pickup</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── LIFECYCLE STAGE BREAKDOWN (REDESIGNED 5-COLUMN PROCESS GRID) ── */}
        <section
          className={`p-6 sm:p-8 rounded-3xl border transition-all ${
            theme === "white"
              ? "bg-white border-slate-200/90 shadow-sm"
              : "bg-[#0a1824]/90 border-white/10 shadow-xl"
          }`}
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
                CIRCULAR LIFECYCLE ANALYSIS
              </span>
              <h2
                className={`text-xl sm:text-2xl font-sans font-black uppercase tracking-tight ${
                  theme === "white" ? "text-slate-900" : "text-white"
                }`}
              >
                Where Do Your Carbon Savings Come From?
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl">
                Giving clothes a second life eliminates emissions across 5 major phases of virgin textile production.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10 text-xs font-semibold bg-slate-50 dark:bg-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                100% Avoided Footprint
              </span>
            </div>
          </div>

          {/* Unified 100% Cumulative Segmented Bar */}
          <div className="mb-6 space-y-1.5">
            <div className="h-3 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden flex gap-1 p-0.5">
              {[
                { share: 38, color: "bg-emerald-500", name: "Farming" },
                { share: 29, color: "bg-[#14A3C7]", name: "Dyeing" },
                { share: 18, color: "bg-blue-500", name: "Spinning" },
                { share: 9, color: "bg-indigo-500", name: "Assembly" },
                { share: 6, color: "bg-teal-400", name: "Landfill" },
              ].map((segment, idx) => (
                <div
                  key={idx}
                  style={{ width: `${segment.share}%` }}
                  title={`${segment.name}: ${segment.share}%`}
                  className={`h-full ${segment.color} rounded-full transition-all duration-300 hover:opacity-85`}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 px-1">
              <span>0% Avoided Extraction</span>
              <span>100% Circular Savings</span>
            </div>
          </div>

          {/* 5-Column Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5">
            {[
              {
                num: "01",
                title: "Raw Material & Farming",
                share: 38,
                desc: "Prevents water-heavy cotton cultivation and petrochemical synthesis.",
                color: "text-emerald-500",
                badgeBorder: "border-t-emerald-500",
                icon: <Leaf size={15} className="text-emerald-500" />,
                iconBox: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-500/30",
              },
              {
                num: "02",
                title: "Wet Dyeing & Processing",
                share: 29,
                desc: "Eliminates toxic chemical wastewater, heavy dyes, and boiler heat emissions.",
                color: "text-[#14A3C7]",
                badgeBorder: "border-t-[#14A3C7]",
                icon: <Droplets size={15} className="text-[#14A3C7]" />,
                iconBox: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-500/30",
              },
              {
                num: "03",
                title: "Spinning & Grid Energy",
                share: 18,
                desc: "Cuts high-draw industrial electricity consumed during yarn spinning.",
                color: "text-blue-500",
                badgeBorder: "border-t-blue-500",
                icon: <Zap size={15} className="text-blue-500" />,
                iconBox: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-500/30",
              },
              {
                num: "04",
                title: "Assembly & Logistics",
                share: 9,
                desc: "Reduces factory fabric cutting scraps and cross-border maritime shipping.",
                color: "text-indigo-500",
                badgeBorder: "border-t-indigo-500",
                icon: <Truck size={15} className="text-indigo-500" />,
                iconBox: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-500/30",
              },
              {
                num: "05",
                title: "Landfill Methane",
                share: 6,
                desc: "Halts anaerobic textile decomposition and greenhouse landfill gases.",
                color: "text-teal-500",
                badgeBorder: "border-t-teal-400",
                icon: <Recycle size={15} className="text-teal-500" />,
                iconBox: "bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-500/30",
              },
            ].map((stage, idx) => {
              const stageCO2 = (impact.avoidedCO2eKg * (stage.share / 100)).toFixed(1);
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between border-t-[3px] ${stage.badgeBorder} ${
                    theme === "white"
                      ? "bg-slate-50/70 border-slate-200/80 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/8 hover:border-white/20 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="space-y-2.5">
                    {/* Header: Icon & Step */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center border ${stage.iconBox}`}
                      >
                        {stage.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        {stage.num}
                      </span>
                    </div>

                    {/* Stats */}
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-xl sm:text-2xl font-black font-sans tracking-tight ${stage.color}`}
                        >
                          {stage.share}%
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          share
                        </span>
                      </div>
                      <p className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300">
                        ~{stageCO2} kg CO₂
                      </p>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-1">
                      <h4
                        className={`text-xs font-bold uppercase tracking-tight leading-snug ${
                          theme === "white" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {stage.title}
                      </h4>
                      <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
