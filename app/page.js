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
import AppDownloadSection from "./components/AppDownloadSection";
import ContactSection from "./components/ContactSection";
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
        <div className="max-w-7xl mx-auto relative z-10">
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
              <span className="text-[#14A3C7] font-bold">We fix that.</span> Turn dormant clothing clutter into instant wallet cash and guaranteed zero-landfill eco recycling.
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
                tag: "Wardrobe Clutter",
                title: t.problem_section?.pain_1 || "Clothes you don't wear",
                description:
                  "Over 70% of clothing sits unworn in closets for months, gathering dust, occupying living space, and depreciating.",
                stat: "70% Unused Garments",
                solution: "Free Doorstep Pickup in 2 Mins",
                img: "/problem_01.png",
              },
              {
                num: "02",
                tag: "Value Depletion",
                title: t.problem_section?.pain_2 || "Low resale value",
                description:
                  "Traditional second-hand thrift platforms charge heavy fees, require lengthy listing chats, and pay pennies on the rupee.",
                stat: "Guaranteed 1:1 Value",
                solution: "1 BWC = ₹1 Instant Wallet Cash",
                img: "/problem_02.png",
              },
              {
                num: "03",
                tag: "Landfill Crisis",
                title: t.problem_section?.pain_3 || "No easy way to recycle",
                description:
                  "Millions of metric tons of wearable fabrics end up in toxic dump yards every year because verified textile recyclers are inaccessible.",
                stat: "100% Zero-Landfill",
                solution: "Traceable Circular Processing",
                img: "/problem_03.png",
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
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25 pointer-events-none" />


                  {/* Bottom Stat Chip */}
                  <div className="absolute bottom-3 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold">
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
                Over 25,000+ KG of clothing already collected & recycled
              </span>
            </div>

            <p
              className={`problem-footer text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed ${
                theme === "white" ? "text-slate-600" : "text-slate-300"
              }`}
            >
              {t.problem_section?.desc ||
                "Join active users who are turning clutter into value while saving the planet."}
            </p>
            <div className="problem-line w-20 h-1 bg-[#14A3C7]/40 rounded-full mx-auto mt-4" />
          </div>
        </div>

        {/* Ambient Subtle Radial Lighting */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#14A3C7]/5 blur-3xl rounded-full -z-0" />
      </section>

      {/* Mid-page CTA - Get Coins */}
      <section className={`pt-6 pb-12 px-6 md:px-12 transition-colors ${theme === "white" ? "bg-[#14A3C7]" : "bg-black"}`}>
        <div className="max-w-7xl mx-auto">
          <div className={`cta-banner p-10 md:p-16 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-10 border ${theme === "white" ? "bg-black text-white border-white/10" : "bg-white text-black border-black/10"}`}>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-sans font-extrabold uppercase tracking-tight leading-tight">
                Get Paid to <br />
                <span className={theme === "white" ? "text-[#14A3C7]" : "text-[#14A3C7]"}>
                  Recycle.
                </span>
              </h2>
              <p className={`text-base md:text-lg font-normal max-w-md ${theme === "white" ? "text-white/70" : "text-black/70"}`}>
                Every coin you earn is ₹1 value. Payouts are based on brand, condition, and market demand.
              </p>
            </div>
            <Link
              href="https://play.google.com/store/apps/details?id=com.BworthGo"
              target="_blank"
              className={`px-10 py-6 rounded-full font-sans font-extrabold uppercase tracking-widest text-base transition-all hover:scale-105 shadow-2xl ${theme === "white" ? "bg-[#14A3C7] text-white" : "bg-black text-white"
                }`}
            >
              GET COINS NOW
            </Link>
          </div>
        </div>
      </section>

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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6 space-y-6">
              <h2 className="mission-title text-3xl sm:text-4xl md:text-5xl font-sans font-black uppercase tracking-tight leading-[1.1]">
                {t.hero.mission_title_our}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                  {t.hero.mission_title_mission}
                </span>
              </h2>

              <div className="mission-desc space-y-4">
                <p
                  className={`text-lg sm:text-xl font-bold font-sans leading-snug ${
                    theme === "white" ? "text-slate-900" : "text-white"
                  }`}
                >
                  {t.hero.mission_heading ||
                    "Creating sustainable fashion through circular buyback & zero-landfill recycling."}
                </p>

                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    theme === "white" ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {t.hero.mission_desc ||
                    "We bridge the gap between wardrobe clutter and environmental sustainability. By turning unused clothing into instant wallet cash and guaranteed eco-recycled fibers, we ensure every garment lives on."}
                </p>
              </div>

              {/* Action Button & Trust Guarantee */}
              <div className="mission-footer pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/our-mission"
                  className="group inline-flex items-center gap-2.5 bg-[#14A3C7] hover:bg-[#1089a8] text-white px-7 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <span>{t.hero.read_story || "READ OUR FULL STORY"}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <div
                  className={`inline-flex items-center gap-2 text-xs font-semibold ${
                    theme === "white" ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>100% Zero-Landfill Guarantee</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 4 Clean, Balanced Impact Stat Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                {
                  value: "25,000+",
                  unit: "KG",
                  label: "Clothes Recycled",
                  desc: "Diverted away from city landfills",
                  icon: <Recycle size={20} className="text-[#14A3C7]" />,
                  accent: "bg-[#14A3C7]/10 text-[#14A3C7] border-[#14A3C7]/20",
                },
                {
                  value: "500+",
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
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {stat.unit}
                    </span>
                  </div>

                  <div>
                    <div
                      className={`text-2xl sm:text-3xl font-sans font-black tracking-tight ${
                        theme === "white" ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {stat.value}
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



      <AppDownloadSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
