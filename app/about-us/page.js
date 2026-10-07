"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Leaf,
  Recycle,
  Award,
  ArrowRight,
  ExternalLink,
  ShoppingBag,
  Building2,
  Store,
  Workflow,
  Compass,
  Repeat,
  HeartHandshake
} from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

export default function AboutUs() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  return (
    <main
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isWhite ? "bg-[#F8FAFC] text-slate-900" : "bg-[#061217] text-white"
      }`}
    >
      {/* ── SECTION 1: HERO & PURPOSE ── */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#14A3C7]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Mission Narrative (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Sparkles size={16} className="text-[#14A3C7]" />
                <span>ABOUT BWORTH • CIRCULAR FASHION</span>
              </div>

              <h1
                className={`text-4xl sm:text-6xl lg:text-[64px] font-sans font-black uppercase tracking-tight leading-[1.04] ${
                  isWhite ? "text-slate-950" : "text-white"
                }`}
              >
                Giving Clothes a <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                  Better Next Journey.
                </span>
              </h1>

              <p
                className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal ${
                  isWhite ? "text-slate-600" : "text-slate-300"
                }`}
              >
                BWorth is a circular fashion platform connecting unused clothing with certified reuse, upcycling, and zero-landfill recycling. We make it easy for consumers, businesses, and fashion brands to move clothes back into circulation instead of waste.
              </p>

              {/* Goal Highlight Pill */}
              <div
                className={`p-4.5 sm:p-5 rounded-2xl border-l-4 border-[#14A3C7] shadow-sm ${
                  isWhite
                    ? "bg-white border-slate-200/90 shadow-slate-200/40"
                    : "bg-[#091a24] border-white/10"
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#14A3C7] font-bold block mb-0.5">
                  OUR GOAL IS SIMPLE
                </span>
                <p
                  className={`text-base sm:text-xl font-sans font-black tracking-tight ${
                    isWhite ? "text-slate-900" : "text-white"
                  }`}
                >
                  "Make it easier to give clothes another life."
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
                <Link
                  href="/b2c"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#14A3C7] hover:bg-[#0fa0c3] text-white font-sans font-black text-sm uppercase tracking-wider shadow-lg shadow-[#14A3C7]/25 transition-transform hover:scale-105 active:scale-95 text-center group cursor-pointer"
                >
                  <span>Explore BWorth</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <Link
                  href="/brands"
                  className={`inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border text-sm font-sans font-black uppercase tracking-wider transition-all ${
                    isWhite
                      ? "border-slate-300 text-slate-800 hover:border-[#14A3C7] hover:bg-slate-50"
                      : "border-white/20 text-white hover:border-[#14A3C7] hover:bg-white/5"
                  }`}
                >
                  <HeartHandshake size={18} className="text-[#14A3C7]" />
                  <span>Partner With Us</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Visual Showcase (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div
                className={`relative rounded-3xl overflow-hidden border shadow-2xl group aspect-[4/3] sm:aspect-[4/3.2] ${
                  isWhite ? "border-slate-200/90 shadow-slate-200/60" : "border-white/15"
                }`}
              >
                <img
                  src="/about_circular_hero.jpg"
                  alt="Sustainable Circular Fashion Ecosystem"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#14A3C7] block">
                      CIRCULAR RECIRCULATION
                    </span>
                    <p className="text-xs sm:text-sm font-black">Collection • Reuse • Recovery</p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#14A3C7] text-white flex items-center justify-center font-black">
                    <Recycle size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT WE DO (3 PILLARS) ── */}
      <section className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t ${
        isWhite ? "bg-white border-slate-200/80" : "bg-[#081822] border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              PLATFORM CAPABILITIES
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              What We Do
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Bringing the clothing lifecycle together through one unified circular platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                badge: "FOR CONSUMERS",
                title: "Wardrobe Recovery & Rewards",
                desc: "Give unused clothes from home via doorstep pickup and earn eligible BWorth reward coins.",
                icon: ShoppingBag,
                color: "text-[#14A3C7]",
                link: "/b2c",
                cta: "Book Consumer Pickup"
              },
              {
                badge: "FOR BUSINESSES",
                title: "Bulk Textile Management",
                desc: "Scheduled bulk pickup for corporate workwear, hotel linen, and factory deadstock with ESG audit reports.",
                icon: Building2,
                color: "text-emerald-500",
                link: "/b2b",
                cta: "Request Bulk Pickup"
              },
              {
                badge: "FOR FASHION BRANDS",
                title: "Circular Brand Partnerships",
                desc: "Monetize surplus inventory, power customer take-back programs, and reach conscious buyers.",
                icon: Store,
                color: "text-amber-500",
                link: "/brands",
                cta: "Partner Your Brand"
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between space-y-5 transition-all shadow-md ${
                    isWhite
                      ? "bg-slate-50/80 border-slate-200/90 hover:border-slate-300 hover:bg-white"
                      : "bg-[#091a24] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-white/5 border border-current/10 flex items-center justify-center">
                        <Icon size={22} className={item.color} />
                      </div>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-current/15 ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-sans font-black uppercase tracking-tight">
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isWhite ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#14A3C7] group"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE CIRCULAR ECOSYSTEM (VISUAL ARCHITECTURE) ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7] text-xs font-mono font-bold uppercase tracking-widest">
            <Workflow size={13} />
            <span>INTEGRATED ARCHITECTURE</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-sans font-black uppercase tracking-tight ${
              isWhite ? "text-slate-900" : "text-white"
            }`}
          >
            The BWorth Ecosystem
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isWhite ? "text-slate-600" : "text-slate-300"
            }`}
          >
            A continuous connected loop from initial collection to multi-stream recovery and value creation.
          </p>
        </div>

        {/* Visual Infographic Diagram Card */}
        <div className="max-w-5xl mx-auto">
          <div
            className={`p-4 sm:p-6 rounded-3xl border shadow-2xl relative overflow-hidden transition-all group ${
              isWhite
                ? "bg-white border-slate-200/90 shadow-slate-200/50"
                : "bg-[#091a24] border-white/15 shadow-black/80"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-current/10 aspect-[16/9] bg-slate-950">
              <img
                src="/about_ecosystem_loop.jpg"
                alt="BWorth Integrated Ecosystem Architecture"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
              />
            </div>

            {/* 3 Core Destination Streams Underneath */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-5">
              {[
                { title: "REUSE", tag: "WEARABLE PIECES", desc: "Sanitized & routed to secondary wear markets.", color: "text-[#14A3C7]", icon: Repeat },
                { title: "UPCYCLING", tag: "ARTISAN REDESIGN", desc: "Transformed into bags, quilts & designer lifestyle goods.", color: "text-amber-500", icon: Sparkles },
                { title: "RECYCLING", tag: "ZERO-LANDFILL", desc: "Shredded into circular yarns & industrial insulation.", color: "text-emerald-500", icon: Recycle },
              ].map((st, i) => {
                const Icon = st.icon;
                return (
                  <div
                    key={i}
                    className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
                      isWhite
                        ? "bg-slate-50 border-slate-200/80"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0 ${st.color}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className={`text-xs font-sans font-black uppercase tracking-wider ${st.color}`}>
                          {st.title}
                        </h4>
                        <span className="text-[9px] font-mono text-slate-400">
                          {st.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-tight mt-0.5">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: MISSION & WHY BWORTH (DUAL BENTO) ── */}
      <section className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t ${
        isWhite ? "bg-white border-slate-200/80" : "bg-[#081822] border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission Card */}
          <div
            className={`p-7 sm:p-8 rounded-3xl border space-y-3 shadow-md ${
              isWhite
                ? "bg-gradient-to-br from-cyan-50/50 via-white to-slate-50 border-[#14A3C7]/30"
                : "bg-gradient-to-br from-[#0a2333] via-[#091a24] to-[#061217] border-[#14A3C7]/30"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7] text-xs font-mono font-bold uppercase tracking-wider">
              <Compass size={13} />
              <span>OUR MISSION & VISION</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight">
              Make Circular Fashion <br />
              <span className="text-[#14A3C7]">Simple & Accessible</span>
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed ${
              isWhite ? "text-slate-600" : "text-slate-300"
            }`}>
              We want responsible clothing recovery to become as practical as buying clothes online. Our vision is a future where garments and textile materials stay in useful circulation for longer.
            </p>
          </div>

          {/* Why BWorth Card */}
          <div
            className={`p-7 sm:p-8 rounded-3xl border space-y-3 shadow-md ${
              isWhite
                ? "bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 border-emerald-300/60"
                : "bg-gradient-to-br from-[#07241c] via-[#091a24] to-[#061217] border-emerald-500/30"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold uppercase tracking-wider">
              <Leaf size={13} />
              <span>OUR IDENTITY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight">
              "Clothes can still <br />
              <span className="text-emerald-500">be worth something."</span>
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed ${
              isWhite ? "text-slate-600" : "text-slate-300"
            }`}>
              Because what looks unwanted today may still have value. A garment may no longer be useful to one person, but it can find another purpose, user, or form. That is the idea behind BWorth.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: LEADERSHIP TEAM ── */}
      <section className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t ${
        isWhite ? "bg-slate-100/70 border-slate-200/80" : "bg-[#041016] border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <Award size={14} />
              <span className="text-xs font-black uppercase tracking-widest">LEADERSHIP</span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl font-sans font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              Our Leadership Team
            </h2>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-400"
              }`}
            >
              The dedicated leaders working to make sustainable fashion practical, honest, and easy for everyone.
            </p>
          </div>

          {/* Dual Founders Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
            {/* Dheeraj Anand - Founder */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border shadow-lg flex flex-col sm:flex-row items-center sm:items-stretch gap-5 ${
                isWhite
                  ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/40"
                  : "bg-[#081822] border-white/15 text-white shadow-black/80"
              }`}
            >
              <div className="w-36 h-44 sm:w-40 sm:h-auto min-h-[170px] rounded-2xl overflow-hidden border-2 border-[#14A3C7]/40 shadow-md shrink-0 relative bg-slate-900">
                <img
                  src="/profile.jpeg"
                  alt="Dheeraj Anand"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-3 text-center sm:text-left">
                <div className="space-y-1.5">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-[#14A3C7]/15 text-[#14A3C7] border border-[#14A3C7]/30">
                    FOUNDER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-sans font-black uppercase tracking-tight">
                    Dheeraj Anand
                  </h3>
                  <p className="text-xs font-bold text-[#14A3C7]">
                    18+ Years in Business & Growth
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
                      isWhite ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    With over 18 years of experience building successful companies, Dheeraj leads BWorth to make eco-friendly fashion practical and rewarding for regular households.
                  </p>
                </div>

                <div className="pt-1">
                  <a
                    href="https://www.linkedin.com/in/dheeraj-anand-b6b407100/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14A3C7] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#0c7f9c] transition-all shadow-sm group cursor-pointer"
                  >
                    <span>CONNECT ON LINKEDIN</span>
                    <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Venkatesh Lakhani - Co-Founder */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border shadow-lg flex flex-col sm:flex-row items-center sm:items-stretch gap-5 ${
                isWhite
                  ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/40"
                  : "bg-[#081822] border-white/15 text-white shadow-black/80"
              }`}
            >
              <div className="w-36 h-44 sm:w-40 sm:h-auto min-h-[170px] rounded-2xl overflow-hidden border-2 border-[#14A3C7]/40 shadow-md shrink-0 relative bg-slate-900">
                <img
                  src="/venkatesh.png"
                  alt="Venkatesh Lakhani"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-3 text-center sm:text-left">
                <div className="space-y-1.5">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-[#14A3C7]/15 text-[#14A3C7] border border-[#14A3C7]/30">
                    CO-FOUNDER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-sans font-black uppercase tracking-tight">
                    Venkatesh Lakhani
                  </h3>
                  <p className="text-xs font-bold text-[#14A3C7]">
                    Strategy & Tech Operations
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
                      isWhite ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    Venkatesh leads daily operations, tech systems, and brand partnerships at BWorth, ensuring transparent collections across India.
                  </p>
                </div>

                <div className="pt-1">
                  <a
                    href="https://www.linkedin.com/in/venkateshlakhani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14A3C7] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#0c7f9c] transition-all shadow-sm group cursor-pointer"
                  >
                    <span>CONNECT ON LINKEDIN</span>
                    <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ACTION BANNER ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-[#0a2333] to-[#0d3448] text-white border border-white/20 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              BUILDING THE NEXT CHAPTER OF FASHION
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight text-white leading-tight">
              Buy. Wear. Return. Recover. Repeat.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Fashion should not end at the point of purchase. Join India's circular fashion revolution today.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="/b2c"
              className="px-6 py-3.5 rounded-full bg-[#14A3C7] hover:bg-[#0fa0c3] text-white font-sans font-black text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 active:scale-95 text-center cursor-pointer"
            >
              Explore BWorth
            </Link>
            <Link
              href="/brands"
              className="px-6 py-3.5 rounded-full border border-white/30 hover:border-white text-white font-sans font-black text-xs uppercase tracking-wider transition-all hover:bg-white/10 text-center cursor-pointer"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
