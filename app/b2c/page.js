"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Smartphone, 
  Coins, 
  Recycle, 
  Truck, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  ShoppingBag,
  Leaf
} from "lucide-react";
import Footer from "../components/Footer";
import AppDownloadSection from "../components/AppDownloadSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function B2CPage() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  const b2cSteps = [
    {
      step: "01",
      icon: <Truck size={26} />,
      title: "1. Request Doorstep Pickup",
      desc: "Select unused clothes of any brand or condition in your wardrobe and book a doorstep pickup slot via the BWorth app in under 2 minutes.",
    },
    {
      step: "02",
      icon: <ShieldCheck size={26} />,
      title: "2. Executive Collection",
      desc: "Our verified doorstep pickup agent arrives at your home, weighs your garments accurately, and collects them hassle-free.",
    },
    {
      step: "03",
      icon: <Coins size={26} />,
      title: "3. Instant BWC Coins Credit",
      desc: "Receive instant BWC Coins credited directly to your BWorth wallet as soon as clothes are collected (1 BWC Coin = ₹1 real value).",
    },
  ];

  const coinUseCases = [
    {
      title: "HOW TO EARN BWC COINS",
      badgeColor: "bg-[#14A3C7]/15 text-[#14A3C7] border-[#14A3C7]/30",
      items: [
        "Recycle unused clothes (Earn by weight & brand grade)",
        "Sell pre-loved fashion directly on BWorth marketplace",
        "Society & Community Mega Referral Rewards Drives"
      ]
    },
    {
      title: "HOW TO SPEND BWC COINS",
      badgeColor: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
      items: [
        "Redeem 1:1 on Made-in-India partner brand products",
        "Get instant checkout discounts on new fashion",
        "1 BWC Coin = ₹1 INR real cash value guaranteed"
      ]
    }
  ];

  return (
    <main className={`min-h-screen transition-colors duration-500 ${
      isWhite ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
    }`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#14A3C7]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <Smartphone size={16} />
              <span className="text-xs font-black uppercase tracking-widest">B2C CIRCULAR FASHION SOLUTION</span>
            </div>

            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-[1.05] ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              Doorstep Pickup & <br />
              <span className="text-[#14A3C7] italic">BWC Wallet Rewards</span>
            </h1>

            <p className={`text-lg sm:text-2xl font-serif italic max-w-3xl leading-relaxed ${
              isWhite ? "text-slate-700" : "text-slate-300"
            }`}>
              Clear wardrobe clutter in minutes. Turn your unused clothes into instant BWorth Coins (1 BWC = ₹1 INR) with free doorstep pickup and 100% zero-landfill eco-recycling.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#app-download-section"
                className="px-8 py-4 rounded-full bg-[#14A3C7] text-white font-black text-xs uppercase tracking-widest hover:bg-[#0d84a3] transition-all shadow-xl shadow-[#14A3C7]/20 flex items-center gap-2 group"
              >
                <span>BOOK DOORSTEP PICKUP</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.BworthGo"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-full border font-black text-xs uppercase tracking-widest transition-all ${
                  isWhite
                    ? "bg-white border-slate-300 text-slate-900 hover:border-[#14A3C7]"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
              >
                DOWNLOAD APP
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3-Step Doorstep Pickup Process Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">HOW B2C WORKS</span>
            <h2 className={`text-3xl sm:text-5xl font-serif font-black uppercase tracking-tight ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              Simple 3-Step Recycling Process
            </h2>
            <p className={`text-base leading-relaxed ${isWhite ? "text-slate-600" : "text-slate-300"}`}>
              Recycling unused clothes with BWorth takes under 2 minutes. Clear wardrobe clutter, protect the planet, and get paid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {b2cSteps.map((stepItem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`p-8 rounded-[2.5rem] border shadow-xl flex flex-col justify-between transition-all hover:scale-[1.02] ${
                  isWhite
                    ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                    : "bg-[#081822] border-white/15 text-white shadow-black/80"
                }`}
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shadow-inner">
                      {stepItem.icon}
                    </div>
                    <span className="text-2xl font-serif font-black text-[#14A3C7]/40">
                      {stepItem.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-black uppercase tracking-tight">
                    {stepItem.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${isWhite ? "text-slate-600" : "text-slate-300"}`}>
                    {stepItem.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BWC Coin Economy Breakdown Cards (1 BWC = ₹1) */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400">
              <Sparkles size={16} />
              <span className="text-xs font-black uppercase tracking-widest">1 BWC = ₹1 REAL CASH VALUE</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-serif font-black uppercase tracking-tight ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              BWC Reward Coin Economy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coinUseCases.map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-8 sm:p-10 rounded-[2.5rem] border shadow-2xl space-y-6 ${
                  isWhite
                    ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/60"
                    : "bg-[#081822] border-white/15 text-white shadow-black/80"
                }`}
              >
                <div className={`inline-flex px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${col.badgeColor}`}>
                  {col.title}
                </div>

                <div className="space-y-4 pt-2">
                  {col.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className={`text-sm sm:text-base font-bold ${isWhite ? "text-slate-800" : "text-slate-200"}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Embed Interactive B2C App Section */}
      <div id="app-download-section">
        <AppDownloadSection />
      </div>

      <Footer />
    </main>
  );
}
