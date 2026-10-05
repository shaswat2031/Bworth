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
  Trees,
  ArrowRight,
  RotateCcw,
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
  const [hoveredStage, setHoveredStage] = useState(null);

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
      [id]: Math.min(50, Math.max(0, (prev[id] || 0) + delta)),
    }));
  };

  const handleApplyPreset = (presetItems) => {
    const capped = {};
    Object.entries(presetItems).forEach(([key, val]) => {
      capped[key] = Math.min(50, Math.max(0, val));
    });
    setQuantities(capped);
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
                            disabled={count >= 50}
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                              count >= 50
                                ? "bg-slate-200 dark:bg-white/10 text-slate-400 cursor-not-allowed opacity-50"
                                : "bg-[#14A3C7] hover:bg-[#0fa0c3] text-white active:scale-95 cursor-pointer"
                            }`}
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

              {/* Parameter 1: Avoided Carbon Emissions (CO₂e) - BIG SIZE */}
              <div
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  theme === "white"
                    ? "bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/30 border-emerald-200/90 shadow-sm"
                    : "bg-emerald-950/20 border-emerald-500/25"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs sm:text-sm font-mono font-black uppercase tracking-wider ${
                      theme === "white" ? "text-emerald-800" : "text-emerald-300"
                    }`}
                  >
                    Avoided Carbon Emissions (CO₂e)
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Leaf size={18} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div className="flex flex-wrap items-baseline gap-2 my-1">
                  <span
                    className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-none ${
                      theme === "white" ? "text-emerald-700" : "text-emerald-400"
                    }`}
                  >
                    {impact.avoidedCO2eKg}
                  </span>
                  <span
                    className={`text-base sm:text-lg font-extrabold whitespace-nowrap ${
                      theme === "white" ? "text-emerald-800" : "text-emerald-300"
                    }`}
                  >
                    kg CO₂e
                  </span>
                </div>
                <p
                  className={`text-xs sm:text-[13px] font-medium mt-1.5 ${
                    theme === "white" ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  Equal to{" "}
                  <span
                    className={`font-bold ${
                      theme === "white" ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {impact.avoidedCO2eMetricTons} metric tons
                  </span>{" "}
                  of emissions prevented.
                </p>
              </div>

              {/* Parameters 2, 3, 4: Resilient 3-Column Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {/* Parameter 2: Liters Water */}
                <div
                  className={`p-2.5 sm:p-3.5 rounded-2xl border text-center flex flex-col justify-between transition-all min-w-0 ${
                    theme === "white"
                      ? "bg-sky-50/60 border-sky-200/90 shadow-xs"
                      : "bg-sky-950/20 border-sky-500/25"
                  }`}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-sky-500/10 flex items-center justify-center mx-auto mb-1.5 shrink-0">
                    <Droplets size={16} className="text-[#14A3C7]" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-base sm:text-xl lg:text-2xl font-black leading-tight tracking-tight whitespace-nowrap ${
                        theme === "white" ? "text-slate-900" : "text-white"
                      }`}
                      title={`${impact.avoidedWaterLiters} Liters`}
                    >
                      {impact.avoidedWaterLiters}
                    </p>
                    <p
                      className={`text-[10px] sm:text-[11px] uppercase font-extrabold mt-1 whitespace-nowrap truncate ${
                        theme === "white" ? "text-sky-800" : "text-sky-300"
                      }`}
                    >
                      Liters Water
                    </p>
                  </div>
                </div>

                {/* Parameter 3: Dump Prevented */}
                <div
                  className={`p-2.5 sm:p-3.5 rounded-2xl border text-center flex flex-col justify-between transition-all min-w-0 ${
                    theme === "white"
                      ? "bg-amber-50/60 border-amber-200/90 shadow-xs"
                      : "bg-amber-950/20 border-amber-500/25"
                  }`}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-1.5 shrink-0">
                    <Trash2 size={16} className="text-amber-500" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-base sm:text-xl lg:text-2xl font-black leading-tight tracking-tight whitespace-nowrap flex items-baseline justify-center gap-0.5 ${
                        theme === "white" ? "text-slate-900" : "text-white"
                      }`}
                    >
                      <span>{impact.divertedLandfillKg}</span>
                      <span
                        className={`text-[11px] sm:text-xs font-extrabold ${
                          theme === "white" ? "text-amber-800" : "text-amber-300"
                        }`}
                      >
                        kg
                      </span>
                    </p>
                    <p
                      className={`text-[10px] sm:text-[11px] uppercase font-extrabold mt-1 whitespace-nowrap truncate ${
                        theme === "white" ? "text-amber-800" : "text-amber-300"
                      }`}
                    >
                      Dump Prevented
                    </p>
                  </div>
                </div>

                {/* Parameter 4: Trees Equivalent */}
                <div
                  className={`p-2.5 sm:p-3.5 rounded-2xl border text-center flex flex-col justify-between transition-all min-w-0 ${
                    theme === "white"
                      ? "bg-emerald-50/60 border-emerald-200/90 shadow-xs"
                      : "bg-emerald-950/20 border-emerald-500/25"
                  }`}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-1.5 shrink-0">
                    <Trees
                      size={16}
                      className={theme === "white" ? "text-emerald-700" : "text-emerald-400"}
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-base sm:text-xl lg:text-2xl font-black leading-tight tracking-tight whitespace-nowrap flex items-baseline justify-center gap-0.5 ${
                        theme === "white" ? "text-emerald-700" : "text-emerald-400"
                      }`}
                    >
                      <span>{impact.treeYears}</span>
                      <span
                        className={`text-[11px] sm:text-xs font-extrabold ${
                          theme === "white" ? "text-emerald-800" : "text-emerald-300"
                        }`}
                      >
                        Trees
                      </span>
                    </p>
                    <p
                      className={`text-[10px] sm:text-[11px] uppercase font-extrabold mt-1 whitespace-nowrap truncate ${
                        theme === "white" ? "text-emerald-800" : "text-emerald-300"
                      }`}
                    >
                      Absorption / yr
                    </p>
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#14A3C7] flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#14A3C7]" />
                HOW YOUR SAVINGS WORK
              </span>
              <h2
                className={`text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight ${
                  theme === "white" ? "text-slate-900" : "text-white"
                }`}
              >
                Where Do Your Carbon Savings Come From?
              </h2>
              <p
                className={`text-xs sm:text-sm font-semibold leading-relaxed ${
                  theme === "white" ? "text-slate-700" : "text-slate-200"
                }`}
              >
                Giving clothes a second life stops emissions across all 5 stages of making new clothes from scratch.
              </p>
            </div>

            {/* Live Certified Badge with Animated Ping */}
            <div className="flex items-center gap-2.5 self-start sm:self-auto px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold shrink-0 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span
                className={`text-[11px] font-mono uppercase tracking-wider font-extrabold ${
                  theme === "white" ? "text-emerald-800" : "text-emerald-300"
                }`}
              >
                100% Pollution Saved
              </span>
            </div>
          </div>

          {/* Unified 100% Cumulative Segmented Bar (Interactive + Animated) */}
          <div className="mb-8 space-y-2">
            <div className="h-4 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden flex gap-1 p-0.5 shadow-inner">
              {[
                { share: 38, color: "bg-emerald-500", name: "Farming", id: 0 },
                { share: 29, color: "bg-[#14A3C7]", name: "Dyeing", id: 1 },
                { share: 18, color: "bg-blue-500", name: "Spinning", id: 2 },
                { share: 9, color: "bg-indigo-500", name: "Assembly", id: 3 },
                { share: 6, color: "bg-teal-400", name: "Landfill", id: 4 },
              ].map((segment, idx) => {
                const isHovered = hoveredStage === segment.id;
                const isAnyHovered = hoveredStage !== null;

                return (
                  <motion.div
                    key={idx}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: `${segment.share}%`, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                    onMouseEnter={() => setHoveredStage(segment.id)}
                    onMouseLeave={() => setHoveredStage(null)}
                    title={`${segment.name}: ${segment.share}%`}
                    className={`h-full ${segment.color} rounded-full transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? "brightness-125 scale-y-110 shadow-md ring-2 ring-white/50"
                        : isAnyHovered
                        ? "opacity-50"
                        : "hover:opacity-90"
                    }`}
                  />
                );
              })}
            </div>
            <div
              className={`flex justify-between text-[11px] font-mono font-bold px-1 ${
                theme === "white" ? "text-slate-700" : "text-slate-300"
              }`}
            >
              <span>0% New Materials Used</span>
              <span className="text-[#14A3C7] font-black">100% Total Savings (~{impact.avoidedCO2eKg} kg CO₂e)</span>
            </div>
          </div>

          {/* 5-Column Grid Cards with Staggered Entrance Animations & Hover Glow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4"
          >
            {[
              {
                num: "01",
                title: "Farming & Raw Materials",
                share: 38,
                desc: "Stops wasting huge amounts of water on cotton fields and avoids making polyester plastic from oil.",
                color: theme === "white" ? "text-emerald-700" : "text-emerald-400",
                barColor: "bg-emerald-500",
                badgeBorder: "border-t-emerald-500",
                glowShadow: "hover:shadow-emerald-500/15",
                icon: <Leaf size={16} className={theme === "white" ? "text-emerald-700" : "text-emerald-400"} />,
                iconBox: theme === "white" ? "bg-emerald-50 border-emerald-300" : "bg-emerald-950/60 border-emerald-500/30",
              },
              {
                num: "02",
                title: "Dyeing & Washing Fabrics",
                share: 29,
                desc: "Stops harmful chemical dyes, polluted factory water, and high heat used to colour new clothes.",
                color: theme === "white" ? "text-[#0284c7]" : "text-[#14A3C7]",
                barColor: "bg-[#14A3C7]",
                badgeBorder: "border-t-[#14A3C7]",
                glowShadow: "hover:shadow-[#14A3C7]/15",
                icon: <Droplets size={16} className={theme === "white" ? "text-[#0284c7]" : "text-[#14A3C7]"} />,
                iconBox: theme === "white" ? "bg-sky-50 border-sky-300" : "bg-cyan-950/60 border-cyan-500/30",
              },
              {
                num: "03",
                title: "Spinning & Weaving Thread",
                share: 18,
                desc: "Saves massive factory electricity used by heavy machines to spin yarn and weave cloth.",
                color: theme === "white" ? "text-blue-700" : "text-blue-400",
                barColor: "bg-blue-500",
                badgeBorder: "border-t-blue-500",
                glowShadow: "hover:shadow-blue-500/15",
                icon: <Zap size={16} className={theme === "white" ? "text-blue-700" : "text-blue-400"} />,
                iconBox: theme === "white" ? "bg-blue-50 border-blue-300" : "bg-blue-950/60 border-blue-500/30",
              },
              {
                num: "04",
                title: "Stitching & Shipping",
                share: 9,
                desc: "Prevents fabric wasted when cutting patterns and cuts fuel burned by global cargo ships.",
                color: theme === "white" ? "text-indigo-700" : "text-indigo-400",
                barColor: "bg-indigo-500",
                badgeBorder: "border-t-indigo-500",
                glowShadow: "hover:shadow-indigo-500/15",
                icon: <Truck size={16} className={theme === "white" ? "text-indigo-700" : "text-indigo-400"} />,
                iconBox: theme === "white" ? "bg-indigo-50 border-indigo-300" : "bg-indigo-950/60 border-indigo-500/30",
              },
              {
                num: "05",
                title: "Garbage Dumps & Landfills",
                share: 6,
                desc: "Keeps clothes out of dump yards, stopping rotting fabrics from releasing harmful methane gas.",
                color: theme === "white" ? "text-teal-700" : "text-teal-400",
                barColor: "bg-teal-400",
                badgeBorder: "border-t-teal-400",
                glowShadow: "hover:shadow-teal-500/15",
                icon: <Recycle size={16} className={theme === "white" ? "text-teal-700" : "text-teal-400"} />,
                iconBox: theme === "white" ? "bg-teal-50 border-teal-300" : "bg-teal-950/60 border-teal-500/30",
              },
            ].map((stage, idx) => {
              const stageCO2 = (impact.avoidedCO2eKg * (stage.share / 100)).toFixed(1);
              const isHovered = hoveredStage === idx;

              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.96 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                  onMouseEnter={() => setHoveredStage(idx)}
                  onMouseLeave={() => setHoveredStage(null)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between border-t-[3px] ${
                    stage.badgeBorder
                  } ${stage.glowShadow} ${
                    isHovered
                      ? theme === "white"
                        ? "bg-white border-slate-300 shadow-xl ring-2 ring-[#14A3C7]/25"
                        : "bg-white/[0.08] border-white/30 shadow-xl shadow-black/70 ring-2 ring-[#14A3C7]/30"
                      : theme === "white"
                      ? "bg-white border-slate-200 shadow-xs hover:shadow-lg"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/6 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-3">
                    {/* Header: Icon & Step Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center border shadow-xs ${stage.iconBox}`}
                      >
                        {stage.icon}
                      </div>
                      <span
                        className={`text-xs font-mono font-black ${
                          theme === "white" ? "text-slate-700" : "text-slate-300"
                        }`}
                      >
                        {stage.num}
                      </span>
                    </div>

                    {/* Stats & Progress */}
                    <div className="space-y-1.5">
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className={`text-2xl sm:text-3xl font-black font-sans tracking-tight ${stage.color}`}
                        >
                          {stage.share}%
                        </span>
                        <span
                          className={`text-xs font-black uppercase tracking-wider ${
                            theme === "white" ? "text-slate-700" : "text-slate-300"
                          }`}
                        >
                          share
                        </span>
                      </div>

                      {/* Mini Progress Bar */}
                      <div
                        className={`w-full h-1.5 rounded-full overflow-hidden ${
                          theme === "white" ? "bg-slate-200" : "bg-white/15"
                        }`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stage.share}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                          className={`h-full ${stage.barColor} rounded-full`}
                        />
                      </div>

                      <p
                        className={`text-xs sm:text-[13px] font-mono font-black pt-1 ${
                          theme === "white" ? "text-slate-900" : "text-slate-100"
                        }`}
                      >
                        ~{stageCO2} kg CO₂
                      </p>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-1.5 pt-1">
                      <h4
                        className={`text-xs sm:text-[13px] font-black uppercase tracking-tight leading-snug font-sans ${
                          theme === "white" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {stage.title}
                      </h4>
                      <p
                        className={`text-[11px] sm:text-xs leading-relaxed font-semibold ${
                          theme === "white" ? "text-slate-700" : "text-slate-200"
                        }`}
                      >
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
