"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  Calculator,
  Leaf,
  Droplets,
  Trash2,
  ArrowRight,
  RefreshCw,
  TrendingDown,
  Car,
  Trees,
  ShowerHead,
  Smartphone,
  Sparkles,
  ShieldCheck
} from "lucide-react";

// Custom High-Quality Vector Icons for Apparel Categories
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

// Standardized Peer-Reviewed Garment LCA Benchmarks (ThredUp / Green Story & UNEP LCA Market Research)
const GARMENT_TYPES = [
  {
    id: "tshirt",
    name: "T-Shirts & Tops",
    icon: TShirtIcon,
    avgWeightKg: 0.25,
    co2ePerItem: 3.0, // 3.0 kg CO2e per item (Cotton/Polyester blend LCA benchmark)
    waterPerItem: 2500, // 2,500 Liters per item (UNEP standard)
    landfillPerKg: 1.0,
    bwcCoinsPerItem: 35,
    description: "T-shirts, tops & polo shirts"
  },
  {
    id: "jeans",
    name: "Denim Jeans & Trousers",
    icon: PantsIcon,
    avgWeightKg: 0.65,
    co2ePerItem: 13.0, // 13.0 kg CO2e per item (Denim manufacturing LCA)
    waterPerItem: 7500, // 7,500 Liters per item (Ellen MacArthur Foundation standard)
    landfillPerKg: 1.0,
    bwcCoinsPerItem: 120,
    description: "Jeans, pants & denim bottoms"
  },
  {
    id: "jackets",
    name: "Jackets & Outerwear",
    icon: JacketIcon,
    avgWeightKg: 1.20,
    co2ePerItem: 20.0, // 20.0 kg CO2e per item (Heavy outerwear LCA benchmark)
    waterPerItem: 4500, // 4,500 Liters per item (Dyeing & processing LCA)
    landfillPerKg: 1.0,
    bwcCoinsPerItem: 250,
    description: "Jackets, coats & winterwear"
  },
  {
    id: "ethnic",
    name: "Dresses & Ethnic Wear",
    icon: DressIcon,
    avgWeightKg: 0.55,
    co2ePerItem: 8.5, // 8.5 kg CO2e per item (Ethnic/Dress fabric LCA)
    waterPerItem: 3800, // 3,800 Liters per item (Textile washing LCA)
    landfillPerKg: 1.0,
    bwcCoinsPerItem: 95,
    description: "Dresses, sarees & ethnic wear"
  }
];

export default function CarbonCalculatorPage() {
  const { theme } = useTheme();

  // Quantities per garment ID
  const [quantities, setQuantities] = useState({
    tshirt: 4,
    jeans: 2,
    jackets: 1,
    ethnic: 2
  });

  // Compute Totals
  const computeImpact = () => {
    let totalWeightKg = 0;
    let totalVirginCO2eKg = 0;
    let totalWaterLiters = 0;
    let totalBwcCoins = 0;
    let totalGarmentCount = 0;

    GARMENT_TYPES.forEach((item) => {
      const count = quantities[item.id] || 0;
      if (count > 0) {
        totalGarmentCount += count;
        const weightKg = count * item.avgWeightKg;
        totalWeightKg += weightKg;
        totalVirginCO2eKg += count * item.co2ePerItem;
        totalWaterLiters += count * item.waterPerItem;
        totalBwcCoins += count * item.bwcCoinsPerItem;
      }
    });

    const efficiencyFactor = 0.88; // 88% net avoided virgin footprint factor (accounting for 12% transport/sorting logistics)
    const avoidedCO2eKg = totalVirginCO2eKg * efficiencyFactor;
    const avoidedWaterLiters = totalWaterLiters * efficiencyFactor;
    const divertedLandfillKg = totalWeightKg;
    const avoidedEutrophicationGrams = avoidedCO2eKg * 14.2; // PO4-eq metric

    // Real world equivalencies (US EPA & EU Environment Agency Benchmarks)
    const kmCarDriven = Math.round(avoidedCO2eKg * 8.0); // 1 kg CO2e = ~8.0 km driven by avg passenger car (125g CO2/km)
    const treeYears = (avoidedCO2eKg / 22.0).toFixed(1); // 1 mature tree absorbs ~22 kg CO2e annually
    const showerDays = Math.round(avoidedWaterLiters / 65.0); // 65 L water per standard shower
    const smartphoneCharges = Math.round(avoidedCO2eKg / 0.0082); // 1 smartphone charge = ~8.2g CO2e

    return {
      totalGarmentCount,
      totalWeightKg: totalWeightKg.toFixed(1),
      avoidedCO2eKg: avoidedCO2eKg.toFixed(1),
      avoidedCO2eMetricTons: (avoidedCO2eKg / 1000.0).toFixed(3),
      avoidedWaterLiters: Math.round(avoidedWaterLiters).toLocaleString(),
      divertedLandfillKg: divertedLandfillKg.toFixed(1),
      avoidedEutrophicationGrams: avoidedEutrophicationGrams.toFixed(0),
      totalBwcCoins: Math.round(totalBwcCoins),
      kmCarDriven,
      treeYears,
      showerDays,
      smartphoneCharges
    };
  };

  const impact = computeImpact();

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const handleSliderChange = (id, val) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, parseInt(val) || 0)
    }));
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#14A3C7] selection:text-white transition-colors duration-300 ${
        theme === "white" ? "bg-[#F8FAFC] text-slate-900" : "bg-[#071319] text-white"
      }`}
    >
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {/* HERO SECTION & METHODOLOGY BANNER */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-widest bg-[#14A3C7]/10 text-[#14A3C7] border-[#14A3C7]/20 shadow-sm"
          >
            <ShieldCheck size={16} />
            <span>Eco Savings Calculator</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-tight"
          >
            Clothing Environmental <br />
            <span className="bg-gradient-to-r from-[#14A3C7] via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Impact Calculator
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
              theme === "white" ? "text-slate-600" : "text-slate-300"
            }`}
          >
            See how much carbon emissions, clean water, and trash waste you save by recycling and giving your unused clothes a second life with BWorth.
          </motion.p>

          {/* LCA Standards Badges Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 pt-2 text-[11px] font-bold"
          >
            {[
              "Carbon Saved",
              "Clean Water Saved",
              "Zero Dump Waste",
              "Instant Eco Savings"
            ].map((badge, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-md border ${
                  theme === "white"
                    ? "bg-white border-slate-200 text-slate-600"
                    : "bg-white/5 border-white/10 text-slate-300"
                }`}
              >
                ✓ {badge}
              </span>
            ))}
          </motion.div>
        </section>

        {/* MAIN CALCULATOR INTERACTIVE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: Garment Input & Recovery Pathway (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Garment Quantities */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl transition-all ${
                theme === "white"
                  ? "bg-white border-slate-200 shadow-slate-200/50"
                  : "bg-[#0b1d26] border-white/10 shadow-black/40"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 text-[#14A3C7] text-xs font-black uppercase tracking-widest">
                    <span>YOUR CLOTHES</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-black mt-1">
                    Choose Your Clothes
                  </h2>
                </div>
                <button
                  onClick={() =>
                    setQuantities({
                      tshirt: 0,
                      jeans: 0,
                      jackets: 0,
                      ethnic: 0
                    })
                  }
                  className="text-xs font-bold text-slate-400 hover:text-[#14A3C7] flex items-center gap-1 transition-colors"
                >
                  <RefreshCw size={12} /> Reset
                </button>
              </div>

              <div className="space-y-6">
                {GARMENT_TYPES.map((item) => {
                  const count = quantities[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                        count > 0
                          ? theme === "white"
                            ? "bg-sky-50/50 border-[#14A3C7]/40"
                            : "bg-[#14A3C7]/10 border-[#14A3C7]/40"
                          : theme === "white"
                          ? "bg-slate-50/70 border-slate-200/80 hover:border-slate-300"
                          : "bg-white/5 border-white/5 hover:border-white/15"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0 shadow-sm border border-[#14A3C7]/20">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold text-base flex items-center gap-2">
                              {item.name}
                            </h3>
                            <p
                              className={`text-xs ${
                                theme === "white" ? "text-slate-500" : "text-slate-400"
                              }`}
                            >
                              {item.description} • ~{item.avgWeightKg} kg each
                            </p>
                          </div>
                        </div>

                        {/* Increment / Decrement Counter Controls */}
                        <div className="flex items-center justify-between sm:justify-end gap-3">
                          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/10 p-1 rounded-full border border-black/10 dark:border-white/10">
                            <button
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="w-8 h-8 rounded-full bg-white dark:bg-white/20 flex items-center justify-center font-bold text-sm shadow-sm hover:scale-105 active:scale-95 transition-transform"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-black text-sm">
                              {count}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="w-8 h-8 rounded-full bg-[#14A3C7] text-white flex items-center justify-center font-bold text-sm shadow-sm hover:scale-105 active:scale-95 transition-transform"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Slider Input */}
                      <div className="mt-3 pt-3 border-t border-black/5 dark:border-white/5 flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="50"
                          value={count}
                          onChange={(e) => handleSliderChange(item.id, e.target.value)}
                          className="w-full accent-[#14A3C7] cursor-pointer h-1.5 bg-slate-200 dark:bg-white/20 rounded-lg"
                        />
                        <span className="text-[11px] font-bold text-[#14A3C7] shrink-0">
                          {(count * item.avgWeightKg).toFixed(1)} kg total weight
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Real-Time Dynamic Impact Results Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden transition-all ${
                theme === "white"
                  ? "bg-slate-900 text-white border-slate-800 shadow-slate-900/30"
                  : "bg-[#0c2430] text-white border-white/20 shadow-black/70"
              }`}
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#14A3C7]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-[#14A3C7]" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
                    YOUR SAVINGS RESULT
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                  {impact.totalGarmentCount} Items ({impact.totalWeightKg} kg)
                </span>
              </div>

              {/* PRIMARY KPI: Avoided CO2e */}
              <div className="space-y-2 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <TrendingDown size={14} className="text-emerald-400" />
                  Total Carbon Emissions Saved (CO₂)
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-emerald-400">
                    {impact.avoidedCO2eKg}
                  </span>
                  <span className="text-lg font-bold text-slate-300">
                    kg CO₂
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Equal to <span className="text-white font-bold">{impact.avoidedCO2eMetricTons} Metric Tons</span> of carbon stopped from dirtying our air.
                </p>
              </div>

              {/* SECONDARY METRICS GRID */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-8">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-bold mb-1">
                    <Droplets size={16} /> Clean Water Saved
                  </div>
                  <p className="text-xl sm:text-2xl font-serif font-black text-white">
                    {impact.avoidedWaterLiters}
                  </p>
                  <p className="text-[11px] text-slate-400">Liters of water saved</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                    <Trash2 size={16} /> Dump Waste Prevented
                  </div>
                  <p className="text-xl sm:text-2xl font-serif font-black text-white">
                    {impact.divertedLandfillKg}
                  </p>
                  <p className="text-[11px] text-slate-400">kg of clothes kept out of trash</p>
                </div>
              </div>

              {/* REAL WORLD EQUIVALENCY BENCHMARKS */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  What This Savings Means
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5">
                    <Car size={16} className="text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white">{impact.kmCarDriven} km</p>
                      <p className="text-[10px] text-slate-400">Car driving saved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5">
                    <Trees size={16} className="text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white">{impact.treeYears} Trees</p>
                      <p className="text-[10px] text-slate-400">Trees needed for 1 year</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5">
                    <ShowerHead size={16} className="text-sky-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white">{impact.showerDays} Days</p>
                      <p className="text-[10px] text-slate-400">Home showers saved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5">
                    <Smartphone size={16} className="text-purple-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white">{impact.smartphoneCharges.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-400">Full phone charges</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="space-y-3">
                <Link
                  href="/#how-it-works"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#14A3C7] to-teal-500 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#14A3C7]/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                >
                  <span>Book Doorstep Pickup Now</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* LCA STAGE BREAKDOWN BAR CHART */}
        <section
          className={`p-8 rounded-3xl border shadow-xl transition-all ${
            theme === "white"
              ? "bg-white border-slate-200"
              : "bg-[#0b1d26] border-white/10"
          }`}
        >
          <div className="max-w-3xl mb-8">
            <span className="text-[#14A3C7] text-xs font-black uppercase tracking-widest">
              HOW IT HELPS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black mt-1">
              How Recycling Clothes Saves Our Earth
            </h2>
            <p
              className={`text-xs sm:text-sm mt-2 ${
                theme === "white" ? "text-slate-600" : "text-slate-400"
              }`}
            >
              When you recycle clothes instead of throwing them away, you save energy and raw materials needed to make brand new clothes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { stage: "1. Saving raw cotton & farming materials", share: 38, co2: (impact.avoidedCO2eKg * 0.38).toFixed(1), color: "bg-emerald-500" },
              { stage: "2. Stopping toxic fabric dyeing & chemical washing", share: 29, co2: (impact.avoidedCO2eKg * 0.29).toFixed(1), color: "bg-[#14A3C7]" },
              { stage: "3. Saving machine electricity from spinning thread", share: 18, co2: (impact.avoidedCO2eKg * 0.18).toFixed(1), color: "bg-cyan-500" },
              { stage: "4. Cutting factory stitching & transport pollution", share: 9, co2: (impact.avoidedCO2eKg * 0.09).toFixed(1), color: "bg-blue-500" },
              { stage: "5. Stopping trash dump pollution & dirty gases", share: 6, co2: (impact.avoidedCO2eKg * 0.06).toFixed(1), color: "bg-teal-400" }
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span>{item.stage}</span>
                  <span className="text-[#14A3C7]">
                    {item.share}% ({item.co2} kg CO₂)
                  </span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.share}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
