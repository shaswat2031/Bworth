"use client";
import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ArrowRightCircle, Sparkles, CheckCircle2, ArrowRight, Leaf, Recycle, ShieldCheck, Coins } from "lucide-react";
import Hero from "./components/Hero";
import GsapTextReveal from "./components/GsapTextReveal";
import FeatureSection from "./components/FeatureSection";
import ScrollImpactBanner from "./components/ScrollImpactBanner";
import ContactSection from "./components/ContactSection";
import ReviewMarqueeSection from "./components/ReviewMarqueeSection";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import { translations as t } from "./utils/translations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const sectionRef = useRef(null);



  useGSAP(
    () => {
      // Problem Section Animations
      const problemTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#problem-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      problemTl
        .from(".problem-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(".problem-subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.4")
        .from(".problem-footer, .problem-line", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.2");

      ScrollTrigger.refresh();

      // Mission section uses Framer Motion


    },
    { scope: containerRef }
  );

  return (
    <main className="min-h-screen overflow-x-hidden" ref={containerRef}>
      <Hero />

      <section
        id="problem-section"
        className={`pt-8 md:pt-10 pb-6 md:pb-8 px-6 md:px-12 transition-colors relative overflow-hidden ${
          theme === "white" ? "bg-gradient-to-b from-[#f4fafc] via-white to-white" : "bg-[#091720]"
        }`}
      >
        <div className="max-w-[1500px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 space-y-3">
            <h2
              className={`problem-title text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-sans font-black uppercase tracking-tight leading-[1.08] ${
                theme === "white" ? "text-slate-900" : "text-white"
              }`}
            >
              YOUR WARDROBE IS FULL...{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                BUT UNUSED.
              </span>
            </h2>

            <p
              className={`problem-subtitle text-base sm:text-lg md:text-xl font-sans font-medium max-w-2xl mx-auto leading-relaxed ${
                theme === "white" ? "text-slate-600" : "text-slate-300"
              }`}
            >
              <span className="text-[#14A3C7] font-bold">We fix that.</span> Turn your unused clothes into instant cash and keep them out of the garbage.
            </p>
          </div>

          {/* Problem Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative z-20"
          >
            {[
              {
                num: "01",
                tag: "Closet Clutter",
                title: "Clothes You Never Wear",
                description:
                  "Most of us wear only a few favorite clothes. The rest just sits in cupboards for months, taking up space and gathering dust.",
                stat: "70% Unused Clothes",
                solution: "Free Doorstep Pickup in 2 Mins",
                img: "/problem_closet_clutter.jpg",
              },
              {
                num: "02",
                tag: "Hard to Sell",
                title: "Low Resale Prices & Bargaining",
                description:
                  "Other apps make you take lots of photos, chat with strangers, and bargain for days just to earn a few rupees.",
                stat: "₹1 Value for 1 Coin",
                solution: "1 BWC = ₹1 Instant Wallet Cash",
                img: "/problem_resale_value.jpg",
              },
              {
                num: "03",
                tag: "Zero Waste",
                title: "Guilt of Throwing Clothes Away",
                description:
                  "Throwing away good clothes feels terrible, but recycling is hard. We make sure none of your clothes end up in the trash.",
                stat: "100% Zero-Landfill",
                solution: "100% Eco-Friendly Recycling",
                img: "/problem_zero_landfill.jpg",
              },
            ].map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-3xl border flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  theme === "white"
                    ? "bg-white border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(20,163,199,0.12)] hover:border-[#14A3C7]/40"
                    : "bg-[#0c1f2c] border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(20,163,199,0.2)] hover:border-cyan-400/40"
                }`}
              >
                {/* Visual Representation with Badges */}
                <div className="w-full aspect-[16/11] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={entry.img}
                    alt={entry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/25 pointer-events-none" />

                  {/* Top Category Tag */}
                  <div className="absolute top-3 left-3.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 text-[10px] font-black tracking-wider uppercase">
                    <span>{entry.num}</span>
                    <span className="text-white/40">•</span>
                    <span>{entry.tag}</span>
                  </div>

                  {/* Bottom Stat Chip */}
                  <div className="absolute bottom-3 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#14A3C7] animate-pulse" />
                    <span>{entry.stat}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                  <div className="space-y-2.5">
                    <h3
                      className={`text-xl sm:text-2xl font-bold font-sans tracking-tight transition-colors ${
                        theme === "white"
                          ? "text-slate-900 group-hover:text-[#14A3C7]"
                          : "text-white group-hover:text-cyan-300"
                      }`}
                    >
                      {entry.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        theme === "white" ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {entry.description}
                    </p>
                  </div>

                  {/* BWorth Solution Footer Bar */}
                  <div
                    className={`pt-4 border-t flex items-center justify-between text-[11px] sm:text-xs font-bold transition-colors ${
                      theme === "white"
                        ? "border-slate-100 text-[#14A3C7]"
                        : "border-white/10 text-cyan-300"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="shrink-0 text-[#14A3C7]" />
                      <span className="tracking-wide uppercase font-extrabold">{entry.solution}</span>
                    </span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform opacity-75 group-hover:opacity-100 shrink-0"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section Trust Footer */}
          <div className="text-center mt-8 sm:mt-10 relative z-20">
            <div
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border shadow-xs mb-3 ${
                theme === "white"
                  ? "bg-white border-slate-200 text-slate-700"
                  : "bg-white/5 border-white/10 text-slate-200"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span className="text-xs sm:text-sm font-semibold">
                Over 25,000+ KG of clothes already collected & recycled
              </span>
            </div>

            <p
              className={`problem-footer text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed ${
                theme === "white" ? "text-slate-600" : "text-slate-300"
              }`}
            >
              {t.problem_section?.desc ||
                "Join thousands of people who clear their cupboards and get paid real cash while helping the planet."}
            </p>
            <div className="problem-line w-20 h-1 bg-[#14A3C7]/40 rounded-full mx-auto mt-4" />
          </div>
        </div>

        {/* Ambient Subtle Radial Lighting */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#14A3C7]/5 blur-3xl rounded-full -z-0" />
      </section>

      {/* Dynamic Scroll-Driven Impact Banner (Left-to-Right based on Up/Down Scroll) */}
      <ScrollImpactBanner />

      <div id="ecosystem">
        <FeatureSection />
      </div>

      <section
        ref={sectionRef}
        id="mission-section"
        className={`py-18 md:py-24 px-6 md:px-12 overflow-hidden relative border-t transition-colors ${
          theme === "white"
            ? "bg-gradient-to-b from-[#f8fdff] via-slate-50 to-[#f3f9fc] text-slate-900 border-slate-100"
            : "bg-[#09151e] text-white border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Mission Narrative & Manifesto */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6 space-y-7 sm:space-y-8">
              <h2 className="mission-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black uppercase tracking-tight leading-[1.04]">
                {t.hero.mission_title_our}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                  {t.hero.mission_title_mission}
                </span>
              </h2>

              <div className="mission-desc space-y-4">
                <p
                  className={`text-2xl sm:text-3xl lg:text-4xl font-sans font-black tracking-tight leading-tight ${
                    theme === "white" ? "text-slate-900" : "text-white"
                  }`}
                >
                  {t.hero.mission_heading ||
                    "Creating sustainable fashion through circular buyback & zero-landfill recycling."}
                </p>

                <p
                  className={`text-base sm:text-lg lg:text-xl leading-relaxed font-normal ${
                    theme === "white" ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {t.hero.mission_desc ||
                    "We bridge the gap between wardrobe clutter and environmental sustainability. By turning unused clothing into instant wallet cash and guaranteed eco-recycled fibers, we ensure every garment lives on."}
                </p>
              </div>

              {/* Trust Guarantee */}
              <div className="mission-footer pt-2 flex items-center">
                <div
                  className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-sm sm:text-base font-bold transition-all ${
                    theme === "white"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : "bg-emerald-950/30 border-emerald-500/30 text-emerald-300"
                  }`}
                >
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  <span>100% Zero-Landfill Guarantee</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 4 Clean, Balanced Impact Stat Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                {
                  value: "25,000+",
                  suffix: "KG",
                  suffixColor: "text-[#14A3C7]",
                  unit: "KG",
                  label: "Clothes Recycled",
                  desc: "Diverted away from city landfills",
                  icon: <Recycle size={20} className="text-[#14A3C7]" />,
                  accent: "bg-[#14A3C7]/10 text-[#14A3C7] border-[#14A3C7]/20",
                },
                {
                  value: "500+",
                  suffix: "Tons",
                  suffixColor: "text-emerald-500",
                  unit: "TONS",
                  label: "CO₂ Offset",
                  desc: "Certified environmental emissions saved",
                  icon: <Leaf size={20} className="text-emerald-500" />,
                  accent: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
                },
                {
                  value: "100%",
                  unit: "VERIFIED",
                  label: "Zero-Landfill",
                  desc: "Recirculated or fiber-recycled protocol",
                  icon: <ShieldCheck size={20} className="text-sky-500" />,
                  accent: "bg-sky-500/10 text-sky-500 border-sky-500/20",
                },
                {
                  value: "1 : 1",
                  unit: "BWC = ₹1",
                  label: "Instant Payout",
                  desc: "Direct liquid rewards credited to wallet",
                  icon: <Coins size={20} className="text-amber-500" />,
                  accent: "bg-amber-500/10 text-amber-500 border-amber-500/20",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`mission-stat-card p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    theme === "white"
                      ? "bg-white border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#14A3C7]/50 hover:shadow-[0_10px_25px_rgba(20,163,199,0.1)]"
                      : "bg-[#0c1f2c] border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-cyan-400/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center border ${stat.accent}`}>
                      {stat.icon}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        theme === "white"
                          ? "bg-slate-100 text-slate-600 border border-slate-200/70"
                          : "bg-white/10 text-slate-300 border border-white/10"
                      }`}
                    >
                      {stat.unit}
                    </span>
                  </div>

                  <div>
                    <div
                      className={`text-2xl sm:text-3xl font-sans font-black tracking-tight flex items-baseline gap-1.5 ${
                        theme === "white" ? "text-slate-900" : "text-white"
                      }`}
                    >
                      <span>{stat.value}</span>
                      {stat.suffix && (
                        <span className={`text-xl sm:text-2xl font-black ${stat.suffixColor || "text-[#14A3C7]"}`}>
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#14A3C7] mt-1">
                      {stat.label}
                    </div>
                    <div
                      className={`text-[11px] mt-1 leading-snug ${
                        theme === "white" ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      {stat.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Ambient Subtle Glow */}
        <div className="pointer-events-none absolute -bottom-20 right-10 w-80 h-80 bg-[#14A3C7]/5 blur-3xl rounded-full" />
      </section>

      {/* Polished Existing Reviews - Continuous Left-to-Right Reviews Marquee */}
      <ReviewMarqueeSection />

      <ContactSection />
      <Footer />
    </main>
  );
}
