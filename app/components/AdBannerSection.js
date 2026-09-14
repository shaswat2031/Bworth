"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Download, Leaf, ShieldCheck, Truck, Coins, ArrowRight, Zap, Star, ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function AdBannerSection() {
  const { theme } = useTheme();
  const [appStats, setAppStats] = React.useState({
    appDownloads: "25,000+",
    clothesRecycled: "25,000+ kg",
    rating: "4.8",
    trustFactor: "4.8/5"
  });

  React.useEffect(() => {
    async function fetchLiveStats() {
      try {
        const res = await fetch('/api/app-stats');
        if (res.ok) {
          const data = await res.json();
          setAppStats({
            appDownloads: data.appDownloads || "25,000+",
            clothesRecycled: data.clothesRecycled || "25,000+ kg",
            rating: data.rating || "4.8",
            trustFactor: data.trustFactor || "4.8/5"
          });
        }
      } catch (e) {}
    }
    fetchLiveStats();
  }, []);

  const isWhite = theme === "white";

  return (
    <section className={`py-16 px-6 md:px-12 relative overflow-hidden transition-colors ${
      isWhite ? "bg-slate-100" : "bg-[#061217]"
    }`}>
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-gradient-to-r from-[#14A3C7]/15 via-emerald-500/10 to-[#14A3C7]/15 rounded-3xl blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`rounded-3xl p-8 sm:p-12 lg:p-16 border shadow-2xl relative overflow-hidden backdrop-blur-xl ${
          isWhite
            ? "bg-white border-[#14A3C7]/30 text-slate-900 shadow-xl shadow-[#14A3C7]/10"
            : "bg-gradient-to-br from-[#0b1d26] via-[#09222c] to-[#041016] border-[#14A3C7]/30 text-white shadow-black/80"
        }`}>
          {/* Subtle Ambient Light Orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#14A3C7]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md ${
                isWhite ? "bg-[#14A3C7]/10 border-[#14A3C7]/30 text-[#14A3C7]" : "bg-[#14A3C7]/15 border-[#14A3C7]/30 text-[#14A3C7]"
              }`}>
                <Sparkles size={16} className="text-[#14A3C7] animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
                  OFFICIAL BWORTH APP PROMO
                </span>
              </div>

              {/* Main Headline */}
              <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-serif font-black uppercase tracking-tight leading-[1.05] ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                Turn Unused Clothes <br />
                <span className="text-[#14A3C7] italic">Into Instant Payback.</span>
              </h2>

              <p className={`text-base sm:text-lg max-w-xl font-normal leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-200"
              }`}>
                Download the premier circular fashion marketplace app. Clear closet clutter in minutes, request doorstep pickup, and earn <span className="font-black text-[#14A3C7]">BWorth Coins (1 BWC = ₹1)</span> that spend like cash!
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div className={`flex items-center gap-3 p-3.5 rounded-2xl border shadow-sm ${
                  isWhite ? "bg-slate-50 border-slate-200 text-slate-900" : "bg-white/5 border-white/10 text-white"
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-500 flex items-center justify-center shrink-0">
                    <Coins size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Earn BWC Coins</p>
                    <p className="text-sm font-black">1 BWC = ₹1 Real Value</p>
                  </div>
                </div>

                <div className={`flex items-center gap-3 p-3.5 rounded-2xl border shadow-sm ${
                  isWhite ? "bg-slate-50 border-slate-200 text-slate-900" : "bg-white/5 border-white/10 text-white"
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-[#14A3C7]/20 text-[#14A3C7] flex items-center justify-center shrink-0">
                    <Truck size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Doorstep Pickup</p>
                    <p className="text-sm font-black">Book Slot in App</p>
                  </div>
                </div>

                <div className={`flex items-center gap-3 p-3.5 rounded-2xl border shadow-sm ${
                  isWhite ? "bg-slate-50 border-slate-200 text-slate-900" : "bg-white/5 border-white/10 text-white"
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Eco Impact</p>
                    <p className="text-sm font-black">500+ Tons CO₂ Saved</p>
                  </div>
                </div>

                <div className={`flex items-center gap-3 p-3.5 rounded-2xl border shadow-sm ${
                  isWhite ? "bg-slate-50 border-slate-200 text-slate-900" : "bg-white/5 border-white/10 text-white"
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Zero-Landfill</p>
                    <p className="text-sm font-black">100% Eco Recycling</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://play.google.com/store/apps/details?id=com.BworthGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 px-8 py-4.5 rounded-full overflow-hidden bg-slate-950 text-white shadow-2xl border border-white/20 hover:border-[#14A3C7] transition-all duration-300 shrink-0"
                >
                  {/* Uiverse Expanding Circle Fill on Hover */}
                  <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#14A3C7] via-cyan-500 to-emerald-500 rounded-full group-hover:w-[450px] group-hover:h-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                  {/* Background Decorative Mesh Overlay Left */}
                  <span className="absolute bottom-0 left-0 h-full -ml-2 pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity duration-500">
                    <svg className="w-auto h-full" viewBox="0 0 487 487">
                      <path fillOpacity=".2" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
                    </svg>
                  </span>

                  {/* Background Decorative Mesh Overlay Right */}
                  <span className="absolute top-0 right-0 w-16 h-full -mr-3 pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity duration-500">
                    <svg className="object-cover w-full h-full" viewBox="0 0 487 487">
                      <path fillOpacity=".2" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
                    </svg>
                  </span>

                  {/* Glass Shimmer Sweep Overlay */}
                  <div className="absolute -inset-full top-0 block w-1/2 h-full z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:translate-x-[450%] transition-transform duration-700 ease-in-out pointer-events-none" />

                  {/* Google Play Badge Icon Container with 360 Spin & Scale SVG */}
                  <div className="relative z-20 w-10 h-10 rounded-full bg-slate-900 border border-white/20 p-[2px] flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-slate-950 group-hover:border-white/40 transition-all duration-300 shrink-0">
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center overflow-hidden">
                      <motion.svg 
                        whileHover={{ rotate: 360, scale: 1.25 }}
                        transition={{ duration: 0.6 }}
                        className="w-4 h-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 drop-shadow-[0_0_8px_rgba(20,163,199,0.9)]" 
                        viewBox="0 0 512 512"
                      >
                        <path fill="#00D2FF" d="M380.93 234.66L95.84 71.49C82.88 64.08 67 73.43 67 88.33v335.34c0 14.9 15.88 24.25 28.84 16.84l285.09-163.17c12.1-6.92 12.1-25.76 0-32.68z" />
                        <path fill="#00F076" d="M95.84 71.49l182.25 184.51L95.84 440.51C82.88 447.92 67 438.57 67 423.67V88.33c0-14.9 15.88-24.25 28.84-16.84z" />
                        <path fill="#FFC700" d="M380.93 234.66l-102.84 21.34L95.84 71.49l285.09 163.17c12.1 6.92 12.1 25.76 0 32.68z" />
                        <path fill="#FF3B30" d="M380.93 277.34l-285.09 163.17L278.09 256l102.84 21.34z" />
                      </motion.svg>
                    </div>
                  </div>

                  {/* Text Stack - Single Line Horizontal Layout with Golden Sparkle Accent */}
                  <div className="relative z-20 flex flex-col items-start text-left whitespace-nowrap">
                    <span className="text-[10px] uppercase font-black tracking-[0.22em] text-[#14A3C7] group-hover:text-amber-300 transition-colors flex items-center gap-1">
                      <Sparkles size={11} className="text-[#14A3C7] group-hover:text-amber-300 animate-bounce" />
                      GET IT ON
                    </span>
                    <span className="text-base font-black tracking-tight text-white flex items-center gap-1.5 whitespace-nowrap">
                      Google Play
                      <ArrowUpRight size={16} className="text-[#14A3C7] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:text-white transition-all duration-300" />
                    </span>
                  </div>
                </motion.a>

                <div className={`flex items-center gap-3 px-5 py-3 rounded-full border backdrop-blur-md transition-all shadow-md ${
                  isWhite ? "bg-white border-slate-200 text-slate-900 shadow-slate-200" : "bg-white/5 border-white/15 text-white"
                }`}>
                  <div className="flex -space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider">4.9/5 Trust Factor</span>
                </div>
              </div>
            </div>

            {/* Right Visual Side - Impact Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className={`relative w-full max-w-sm rounded-3xl p-6 border shadow-2xl backdrop-blur-xl text-center space-y-6 ${
                isWhite
                  ? "bg-slate-900 text-white border-slate-800 shadow-2xl"
                  : "bg-gradient-to-b from-[#14A3C7]/20 to-emerald-500/10 border-[#14A3C7]/30 text-white"
              }`}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#14A3C7] to-amber-400 p-1 shadow-xl flex items-center justify-center">
                  <div className="w-full h-full bg-[#0b1d26] rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-[#14A3C7]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">LIVE PLAYSTORE & IMPACT STATS</span>
                  <h3 className="text-4xl font-black text-[#14A3C7]">{appStats.appDownloads}</h3>
                  <p className="text-sm font-semibold text-slate-300">App Downloads ({appStats.clothesRecycled} Recycled)</p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3 text-left">
                  <div className="flex items-center justify-between text-xs font-bold px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-300">CO₂ Emissions Prevented:</span>
                    <span className="text-emerald-400 font-extrabold">500+ Tons</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-300">Recycling Guarantee:</span>
                    <span className="text-[#14A3C7] font-extrabold">100% Zero-Landfill</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-300">Reward Value:</span>
                    <span className="text-amber-400 font-extrabold">1 BWC = ₹1</span>
                  </div>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.BworthGo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-[#14A3C7] text-white font-black text-xs uppercase tracking-wider hover:bg-white hover:text-[#0b1d26] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Install App & Start Recycling</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
