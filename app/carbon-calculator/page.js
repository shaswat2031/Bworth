"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  Globe,
  Droplets,
  Recycle,
  Clock,
  Leaf,
  Zap,
  Scissors,
  Trash2,
  CheckCircle2,
  Info,
} from "lucide-react";

// Clean vector icons for apparel categories
const TShirtIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z" />
  </svg>
);

const PantsIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 3h16v4l-2 14h-4.5L12 11l-1.5 10H6L4 7V3z" />
    <path d="M4 7h16" />
    <path d="M12 3v8" />
  </svg>
);

const JacketIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 3h14l-2 5v13H7V8L5 3z" />
    <path d="M12 3v18" />
    <path d="M8 3l4 6 4-6" />
  </svg>
);

const DressIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 3h6l1.5 5L18 21H6l1.5-13L9 3z" />
    <path d="M9 3c.5 2 1.5 3 3 3s2.5-1 3-3" />
  </svg>
);

// Standard Garment Specifications (LCA Benchmarks)
const GARMENT_TYPES = [
  {
    id: "tshirt",
    name: "T-Shirts & Tops",
    icon: TShirtIcon,
    avgWeightKg: 0.25,
    co2ePerItem: 3.2,
    waterPerItem: 2600,
    tag: "Cotton / Poly Blends",
  },
  {
    id: "jeans",
    name: "Jeans & Trousers",
    icon: PantsIcon,
    avgWeightKg: 0.65,
    co2ePerItem: 12.8,
    waterPerItem: 7600,
    tag: "Denim & Twill",
  },
  {
    id: "jackets",
    name: "Jackets & Outerwear",
    icon: JacketIcon,
    avgWeightKg: 1.20,
    co2ePerItem: 19.5,
    waterPerItem: 4800,
    tag: "Coats & Winterwear",
  },
  {
    id: "ethnic",
    name: "Dresses & Ethnic Wear",
    icon: DressIcon,
    avgWeightKg: 0.55,
    co2ePerItem: 8.6,
    waterPerItem: 3900,
    tag: "Kurtas, Sarees & Sets",
  },
];

// Presets requested by user
const PRESETS = [
  {
    name: "Small Bag",
    items: { tshirt: 3, jeans: 1, jackets: 0, ethnic: 1 },
  },
  {
    name: "Medium Bag",
    items: { tshirt: 6, jeans: 3, jackets: 1, ethnic: 2 },
  },
  {
    name: "Wardrobe Clear-Out",
    items: { tshirt: 12, jeans: 6, jackets: 3, ethnic: 5 },
  },
];

// 5 Reasons How Giving Old Clothes Helps
const HELP_STEPS = [
  {
    num: "01",
    title: "Keep Clothes in Use Longer",
    desc: "Clothes suitable for reuse may continue their journey instead of being discarded immediately.",
    icon: Clock,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    num: "02",
    title: "Reduce the Need for New Materials",
    desc: "Reusing and recycling textiles can help reduce demand for some virgin raw materials.",
    icon: Leaf,
    color: "text-sky-500",
    bg: "bg-sky-500/10 border-sky-500/30",
  },
  {
    num: "03",
    title: "Save Valuable Resources",
    desc: "Producing clothing can require significant amounts of water and energy. Extending the life of garments helps make better use of resources already used to create them.",
    icon: Droplets,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    num: "04",
    title: "Recover Useful Materials",
    desc: "Clothes that cannot be reused may be suitable for upcycling or textile recycling, depending on their material and condition.",
    icon: Scissors,
    color: "text-purple-500",
    bg: "bg-purple-500/10 border-purple-500/30",
  },
  {
    num: "05",
    title: "Reduce Clothing Waste",
    desc: "Giving unwanted clothes through an organised collection system can help keep more textiles away from unmanaged disposal.",
    icon: Trash2,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
];

export default function CarbonCalculatorPage() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  // Initial quantities matching user spec: 4 T-Shirts, 2 Jeans, 1 Jacket, 2 Dresses = 9 Clothes (4.6 kg)
  const [quantities, setQuantities] = useState({
    tshirt: 4,
    jeans: 2,
    jackets: 1,
    ethnic: 2,
  });

  const [activePreset, setActivePreset] = useState(null);

  // Dynamic LCA calculations
  const impact = useMemo(() => {
    let totalWeightKg = 0;
    let totalCO2eKg = 0;
    let totalWaterLiters = 0;
    let totalGarmentCount = 0;

    GARMENT_TYPES.forEach((item) => {
      const count = quantities[item.id] || 0;
      if (count > 0) {
        totalGarmentCount += count;
        totalWeightKg += count * item.avgWeightKg;
        totalCO2eKg += count * item.co2ePerItem;
        totalWaterLiters += count * item.waterPerItem;
      }
    });

    // 88% net avoided virgin footprint factor (accounting for sorting and logistics)
    const factor = 0.88;
    const finalCO2e = totalCO2eKg * factor;
    const finalWater = totalWaterLiters * factor;
    const trees = Math.max(1, Math.round(finalCO2e / 21.8));
    const phoneCharges = Math.round(totalWeightKg * 750);

    return {
      totalGarmentCount,
      totalWeightKg: totalWeightKg.toFixed(1),
      co2eKg: Math.round(finalCO2e),
      waterLiters: Math.round(finalWater).toLocaleString(),
      treesEquivalent: trees,
      smartphoneCharges: phoneCharges.toLocaleString(),
      coinsEarned: Math.round(totalWeightKg * 25),
    };
  }, [quantities]);

  const handleQuantityChange = (id, delta) => {
    setActivePreset(null);
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.min(50, Math.max(0, (prev[id] || 0) + delta)),
    }));
  };

  const handleApplyPreset = (preset) => {
    setActivePreset(preset.name);
    setQuantities(preset.items);
  };

  const handleReset = () => {
    setActivePreset(null);
    setQuantities({ tshirt: 0, jeans: 0, jackets: 0, ethnic: 0 });
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#14A3C7] selection:text-white transition-colors duration-500 ${
        isWhite ? "bg-[#f8fdff] text-slate-900" : "bg-[#061217] text-white"
      }`}
    >
      <main className="pt-28 sm:pt-32 lg:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {/* ══════════════════════════════════════════════════════════════
            HEADER: SEE THE IMPACT OF YOUR OLD CLOTHES
        ══════════════════════════════════════════════════════════════ */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7] text-xs font-black uppercase tracking-widest">
              <Sparkles size={14} />
              <span>YOUR WARDROBE IMPACT CALCULATOR</span>
            </div>

            <h1
              className={`text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-[1.04] uppercase ${
                isWhite ? "text-slate-950" : "text-white"
              }`}
            >
              See the Impact of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                Your Clothes
              </span>
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}
            >
              Wondering what difference your unused clothes could make? Select the clothes you want to give and see an{" "}
              <strong className={isWhite ? "text-slate-900" : "text-white"}>
                estimated environmental impact
              </strong>{" "}
              when they are kept in circulation through reuse, upcycling, or recycling.
            </p>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            INTERACTIVE CALCULATOR: BALANCED BENTO GRID (6 + 6 COLS)
        ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ── LEFT: SELECT YOUR CLOTHES (6 Cols) ────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-5"
          >
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                isWhite
                  ? "bg-white border-slate-200 shadow-lg"
                  : "bg-[#091a24] border-white/10 shadow-xl"
              }`}
            >
              {/* Header & Prominent High-Contrast Reset Button */}
              <div className="flex items-center justify-between pb-4 border-b border-current/10 gap-3">
                <div>
                  <h2
                    className={`text-lg sm:text-xl font-sans font-black uppercase tracking-tight ${
                      isWhite ? "text-slate-950" : "text-white"
                    }`}
                  >
                    Select Your Clothes
                  </h2>
                  <p
                    className={`text-xs sm:text-sm font-medium ${
                      isWhite ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    Add the items sitting unused in your wardrobe.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 shadow-sm active:scale-95 ${
                    isWhite
                      ? "bg-slate-900 hover:bg-rose-600 text-white border border-slate-900 hover:border-rose-600"
                      : "bg-white hover:bg-rose-500 text-slate-950 hover:text-white border border-white hover:border-rose-500"
                  }`}
                  title="Reset all quantities"
                >
                  <RotateCcw size={13} className="shrink-0" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Quick Select Presets */}
              <div className="pt-4 pb-3 flex flex-wrap items-center gap-2">
                <span
                  className={`text-[11px] font-black uppercase tracking-wider mr-1 ${
                    isWhite ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  Quick Select:
                </span>
                {PRESETS.map((p) => {
                  const isActive = activePreset === p.name;
                  return (
                    <button
                      key={p.name}
                      onClick={() => handleApplyPreset(p)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#14A3C7] text-white border-[#14A3C7] shadow-sm"
                          : isWhite
                          ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                          : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                      }`}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>

              {/* Clothes Categories Stepper Cards */}
              <div className="space-y-3 pt-2">
                {GARMENT_TYPES.map((item) => {
                  const count = quantities[item.id] || 0;
                  const itemWeight = (count * item.avgWeightKg).toFixed(2);
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                        count > 0
                          ? isWhite
                            ? "bg-cyan-50/50 border-[#14A3C7]/40 shadow-xs"
                            : "bg-[#14A3C7]/10 border-[#14A3C7]/40"
                          : isWhite
                          ? "bg-slate-50/60 border-slate-200 hover:border-slate-300"
                          : "bg-white/[0.03] border-white/10 hover:border-white/20"
                      }`}
                    >
                      {/* Left: Icon & Category Label */}
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                            count > 0
                              ? "bg-[#14A3C7] text-white border-[#14A3C7]"
                              : isWhite
                              ? "bg-white border-slate-200 text-slate-700"
                              : "bg-white/5 border-white/10 text-slate-300"
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        <div className="min-w-0 space-y-0.5">
                          <h3
                            className={`text-sm font-bold tracking-tight truncate ${
                              isWhite ? "text-slate-900" : "text-white"
                            }`}
                          >
                            {item.name}
                          </h3>
                          <p className="text-xs text-slate-400">
                            Approx. {item.avgWeightKg} kg each
                          </p>
                        </div>
                      </div>

                      {/* Right: Stepper Controls */}
                      <div className="flex items-center gap-3 shrink-0">
                        {count > 0 && (
                          <span className="hidden sm:inline-block text-xs font-mono font-bold text-[#14A3C7]">
                            {itemWeight} kg
                          </span>
                        )}

                        <div className="flex items-center gap-1.5 p-1 rounded-full border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={count <= 0}
                            aria-label={`Decrease ${item.name}`}
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
                            aria-label={`Increase ${item.name}`}
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                              count >= 50
                                ? "opacity-30 cursor-not-allowed"
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
            </div>
          </motion.div>

          {/* ── RIGHT: YOUR ESTIMATED IMPACT (6 Cols Bento Dashboard) ──── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 space-y-4"
          >
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all relative overflow-hidden space-y-5 ${
                isWhite
                  ? "bg-white text-slate-900 border-slate-200 shadow-lg"
                  : "bg-[#091a24] text-white border-white/15 shadow-xl"
              }`}
            >
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#14A3C7]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header & Item Summary */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-current/10">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-sans font-black uppercase tracking-widest text-[#14A3C7]">
                    SUMMARY RESULTS
                  </span>
                  <h3
                    className={`text-xl sm:text-2xl font-sans font-black uppercase tracking-tight ${
                      isWhite ? "text-slate-900" : "text-white"
                    }`}
                  >
                    Your Estimated Impact
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-black">
                  {impact.totalGarmentCount} Clothes • {impact.totalWeightKg} kg
                </div>
              </div>

              {/* ── BENTO GRID (2x2 Grid + Full-Width Diverted Card) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Carbon Impact Bento Box */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-2 ${
                    isWhite
                      ? "bg-emerald-50/70 border-emerald-300/80 text-slate-900"
                      : "bg-emerald-950/25 border-emerald-500/30 text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">🌍</span>
                    <span
                      className={`text-[10px] font-sans font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isWhite ? "bg-emerald-100 text-emerald-800" : "bg-emerald-500/20 text-emerald-300"
                      }`}
                    >
                      CO₂ Saved
                    </span>
                  </div>
                  <div>
                    <div
                      className={`text-2xl sm:text-3xl font-sans font-black tracking-tight ${
                        isWhite ? "text-emerald-800" : "text-emerald-400"
                      }`}
                    >
                      {impact.co2eKg} <span className="text-sm font-black font-sans">kg CO₂e</span>
                    </div>
                    <p
                      className={`text-xs font-bold ${
                        isWhite ? "text-slate-700" : "text-slate-200"
                      }`}
                    >
                      Estimated carbon avoided
                    </p>
                  </div>
                </div>

                {/* 2. Water Impact Bento Box */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-2 ${
                    isWhite
                      ? "bg-sky-50/70 border-sky-300/80 text-slate-900"
                      : "bg-sky-950/25 border-sky-500/30 text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">💧</span>
                    <span
                      className={`text-[10px] font-sans font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isWhite ? "bg-sky-100 text-sky-800" : "bg-sky-500/20 text-sky-300"
                      }`}
                    >
                      H₂O Saved
                    </span>
                  </div>
                  <div>
                    <div
                      className={`text-2xl sm:text-3xl font-sans font-black tracking-tight ${
                        isWhite ? "text-[#0284c7]" : "text-[#14A3C7]"
                      }`}
                    >
                      {impact.waterLiters} <span className="text-sm font-black font-sans">litres</span>
                    </div>
                    <p
                      className={`text-xs font-bold ${
                        isWhite ? "text-slate-700" : "text-slate-200"
                      }`}
                    >
                      Of valuable water preserved
                    </p>
                  </div>
                </div>

                {/* 3. Trees Equivalent Bento Box */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-2 ${
                    isWhite
                      ? "bg-green-50/70 border-green-300/80 text-slate-900"
                      : "bg-green-950/25 border-green-500/30 text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">🌲</span>
                    <span
                      className={`text-[10px] font-sans font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isWhite ? "bg-green-100 text-green-800" : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      Annual Offset
                    </span>
                  </div>
                  <div>
                    <div
                      className={`text-2xl sm:text-3xl font-sans font-black tracking-tight ${
                        isWhite ? "text-green-800" : "text-green-400"
                      }`}
                    >
                      ~{impact.treesEquivalent} <span className="text-sm font-black font-sans">Trees</span>
                    </div>
                    <p
                      className={`text-xs font-bold ${
                        isWhite ? "text-slate-700" : "text-slate-200"
                      }`}
                    >
                      Absorbing CO₂ for an entire year
                    </p>
                  </div>
                </div>

                {/* 4. Smartphone Charges Bento Box */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-2 ${
                    isWhite
                      ? "bg-violet-50/70 border-violet-300/80 text-slate-900"
                      : "bg-violet-950/25 border-violet-500/30 text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">⚡</span>
                    <span
                      className={`text-[10px] font-sans font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isWhite ? "bg-violet-100 text-violet-800" : "bg-violet-500/20 text-violet-300"
                      }`}
                    >
                      Clean Energy
                    </span>
                  </div>
                  <div>
                    <div
                      className={`text-2xl sm:text-3xl font-sans font-black tracking-tight ${
                        isWhite ? "text-violet-800" : "text-violet-400"
                      }`}
                    >
                      {impact.smartphoneCharges} <span className="text-sm font-black font-sans">Charges</span>
                    </div>
                    <p
                      className={`text-xs font-bold ${
                        isWhite ? "text-slate-700" : "text-slate-200"
                      }`}
                    >
                      Smartphone energy powered
                    </p>
                  </div>
                </div>

                {/* 5. Clothes Diverted (Span 2 Full Width Bento Card) */}
                <div
                  className={`sm:col-span-2 p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                    isWhite
                      ? "bg-amber-50/80 border-amber-300/80 text-slate-900"
                      : "bg-amber-950/25 border-amber-500/30 text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-xl shrink-0">
                      ♻️
                    </div>
                    <div>
                      <h4
                        className={`text-xs font-sans font-black uppercase tracking-wider ${
                          isWhite ? "text-amber-900" : "text-amber-300"
                        }`}
                      >
                        Clothes Diverted
                      </h4>
                      <p
                        className={`text-xs font-bold ${
                          isWhite ? "text-slate-800" : "text-slate-100"
                        }`}
                      >
                        Kept out of landfills via certified reuse & upcycling
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div
                      className={`text-2xl sm:text-3xl font-sans font-black ${
                        isWhite ? "text-amber-900" : "text-amber-300"
                      }`}
                    >
                      {impact.totalWeightKg} kg
                    </div>
                    <span
                      className={`text-xs font-mono font-bold ${
                        isWhite ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      {impact.totalGarmentCount} items
                    </span>
                  </div>
                </div>
              </div>

              {/* Give These Clothes CTA Button */}
              <div className="pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.BworthGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-[#14A3C7] hover:bg-[#0ea0bf] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#14A3C7]/25 transition-all group active:scale-[0.99]"
                >
                  <span>Give These Clothes</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Footnote citation */}
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed text-center pt-2">
                *Impact figures are estimates based on garment type, weight, material and the final reuse or recycling route.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION: SO, HOW DOES GIVING OLD CLOTHES HELP?
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-12 border-t border-current/10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
              CIRCULAR VALUE CREATION
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              So, How Does Giving Old Clothes Help?
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}
            >
              Making a new garment requires raw materials, water, energy, manufacturing and transportation. Keeping existing clothes in use for longer can help reduce the need for some of those resources.
            </p>
          </div>

          {/* 5 Numbered Informative Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HELP_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`p-7 rounded-3xl border flex flex-col justify-between space-y-4 transition-all shadow-md ${
                    isWhite
                      ? "bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xl"
                      : "bg-[#091a24] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.bg} ${step.color}`}
                      >
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono font-black text-slate-400">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight">
                      {step.num} — {step.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isWhite ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-current/10 flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>Resource Benefit</span>
                  </div>
                </motion.div>
              );
            })}

            {/* 6th Card: Summary Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-7 rounded-3xl border flex flex-col justify-between space-y-4 text-white bg-gradient-to-br from-[#14A3C7] to-[#0284c7] shadow-xl"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full inline-block">
                  ZERO-LANDFILL MISSION
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  Every Single Thread Counts
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Join thousands of households across Delhi NCR turning closet clutter into environmental preservation.
                </p>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.BworthGo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group"
              >
                <span>Download BWorth App</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FINAL CTA: YOUR CLOTHES HAVE ALREADY USED RESOURCES TO BE MADE
        ══════════════════════════════════════════════════════════════ */}
        <section
          className={`p-8 sm:p-14 rounded-[2.5rem] border text-center space-y-6 relative overflow-hidden shadow-2xl ${
            isWhite
              ? "bg-gradient-to-br from-white via-cyan-50/50 to-white border-[#14A3C7]/40"
              : "bg-gradient-to-br from-[#091a24] via-[#0b2432] to-[#091a24] border-[#14A3C7]/30"
          }`}
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#14A3C7]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
              MAXIMIZE RESOURCE LIFESPAN
            </span>

            <h2
              className={`text-2xl sm:text-4xl lg:text-5xl font-sans font-black uppercase tracking-tight leading-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              Your Clothes Have Already Used Resources to Be Made.
            </h2>

            <p
              className={`text-lg sm:text-xl font-bold ${
                isWhite ? "text-[#14A3C7]" : "text-cyan-300"
              }`}
            >
              Help make those resources count for longer.
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed max-w-xl mx-auto ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}
            >
              Clear your wardrobe, see your estimated impact, and earn eligible BWorth rewards at the same time.
            </p>

            <div className="pt-4 flex justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.BworthGo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-full bg-[#14A3C7] hover:bg-[#0fa0c3] text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-[#14A3C7]/30 flex items-center gap-2 group transition-all"
              >
                <span>Book Free Doorstep Pickup</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
