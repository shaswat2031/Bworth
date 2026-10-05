"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, Quote, Building2, Leaf, Calendar, ShieldCheck, Award, Users, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function AboutUs() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  return (
    <main className={`min-h-screen transition-colors duration-500 ${
      isWhite ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
    }`}>
      {/* Hero Section */}
      <section className="relative pt-28 pb-8 px-6 md:px-12 overflow-hidden">
        {/* Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#14A3C7]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <Sparkles size={16} />
              <span className="text-xs font-black uppercase tracking-widest">ABOUT BWORTH</span>
            </div>

            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-[1.05] ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              {t.hero.mission_title_our} <br />
              <span className="text-[#14A3C7] italic">{t.about_page.genesis}</span>
            </h1>

            <p className={`text-lg sm:text-2xl font-serif italic max-w-3xl leading-relaxed ${
              isWhite ? "text-slate-700" : "text-slate-300"
            }`}>
              {t.about_page.repurposing}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Company Metrics Strip */}
      <section className="px-6 md:px-12 mb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl border shadow-xl backdrop-blur-xl ${
              isWhite
                ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                : "bg-[#081822] border-white/15 text-white shadow-black/80"
            }`}
          >
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-[#14A3C7]">
                <Calendar size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">FOUNDED</span>
              </div>
              <p className="text-xl sm:text-2xl font-black font-sans tracking-tight">April 2024</p>
              <p className={`text-xs ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Gurugram, India</p>
            </div>

            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-emerald-500">
                <Leaf size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">RECYCLED</span>
              </div>
              <p className="text-xl sm:text-2xl font-black font-sans tracking-tight text-emerald-500">25,000+ kg</p>
              <p className={`text-xs ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Clothes Saved from Landfills</p>
            </div>

            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-amber-500">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">CO₂ SAVED</span>
              </div>
              <p className="text-xl sm:text-2xl font-black font-sans tracking-tight text-amber-500">500+ Tons</p>
              <p className={`text-xs ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Carbon Emissions Prevented</p>
            </div>

            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-[#14A3C7]">
                <Award size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">FOUNDER EXP</span>
              </div>
              <p className="text-xl sm:text-2xl font-black font-sans tracking-tight">18+ Years</p>
              <p className={`text-xs ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Experience in Building Businesses</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Narrative & Story Section */}
      <section className="pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Mission Overview */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <span className="text-xs font-black uppercase tracking-widest text-[#14A3C7]">
                THE BWORTH STORY
              </span>

              <h2 className={`text-3xl sm:text-5xl font-serif font-black uppercase tracking-tight leading-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                Making Fashion Clean & <br />
                <span className="text-[#14A3C7] italic">Waste-Free for Everyone.</span>
              </h2>

              <p className={`text-base sm:text-lg font-normal leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}>
                {t.about_page.founding_story}
              </p>
            </motion.div>

            {/* High Impact Quote Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-3xl border shadow-xl relative overflow-hidden ${
                isWhite
                  ? "bg-gradient-to-br from-cyan-50 via-white to-emerald-50 border-[#14A3C7]/30 text-slate-900"
                  : "bg-gradient-to-br from-[#09202b] via-[#081822] to-[#041219] border-[#14A3C7]/40 text-white"
              }`}
            >
              <Quote className="w-8 h-8 text-[#14A3C7]/30 mb-3" />
              <p className="text-base sm:text-lg font-serif italic font-bold leading-relaxed mb-4 text-[#14A3C7]">
                {t.about_page.quote}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#14A3C7] text-white flex items-center justify-center font-black text-xs">
                  DA
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider">Dheeraj Anand</p>
                  <p className={`text-[10px] ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Founder, BWorth</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Detailed Impact & Flagship Buyback */}
          <div className="lg:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl space-y-4 ${
                isWhite
                  ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                  : "bg-[#081822] border-white/15 text-white shadow-black/80"
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center">
                <Leaf size={24} />
              </div>

              <h3 className="text-2xl font-serif font-black uppercase tracking-tight">
                Zero Waste & Safe Recycling
              </h3>

              <p className={`text-base sm:text-lg font-normal leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}>
                {t.about_page.mitigation}
              </p>

              <div className={`p-6 rounded-2xl border space-y-2 ${
                isWhite ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/10"
              }`}>
                <h4 className="text-sm font-black uppercase tracking-wider text-[#14A3C7]">
                  DOORSTEP BUYBACK PROGRAM
                </h4>
                <p className={`text-sm sm:text-base font-normal leading-relaxed ${
                  isWhite ? "text-slate-700" : "text-slate-300"
                }`}>
                  {t.about_page.flagship_start}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Founders & Leadership Section */}
      <section className={`py-12 px-6 md:px-12 border-t transition-colors ${
        isWhite ? "bg-slate-100 border-slate-200" : "bg-[#041016] border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <Award size={16} />
              <span className="text-xs font-black uppercase tracking-widest">{t.about_page.leadership}</span>
            </div>

            <h2 className={`text-3xl sm:text-5xl font-serif font-black uppercase tracking-tight leading-tight ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              {t.about_page.visionary} <span className="text-[#14A3C7] italic">{t.about_page.leader_title}</span>
            </h2>
            <p className={`text-sm sm:text-base ${isWhite ? "text-slate-600" : "text-slate-400"}`}>
              The dedicated leaders working to make sustainable fashion practical, honest, and easy for everyone.
            </p>
          </div>

          {/* Dual Founders Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* Dheeraj Anand - Founder */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 sm:p-7 rounded-3xl border shadow-xl flex flex-col sm:flex-row items-center sm:items-stretch gap-6 ${
                isWhite
                  ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                  : "bg-[#081822] border-white/15 text-white shadow-black/80"
              }`}
            >
              {/* Photo Frame Left */}
              <div className="w-36 h-44 sm:w-44 sm:h-auto min-h-[180px] rounded-2xl overflow-hidden border-2 border-[#14A3C7]/40 shadow-xl shrink-0 relative bg-slate-900">
                <img
                  src="/profile.jpeg"
                  alt="Dheeraj Anand"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Right */}
              <div className="flex-1 flex flex-col justify-between space-y-3 text-center sm:text-left">
                <div className="space-y-2">
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-[#14A3C7]/15 text-[#14A3C7] border border-[#14A3C7]/30">
                    {t.about_page.founder_title}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black uppercase tracking-tight">
                    {t.about_page.founder_name}
                  </h3>
                  <p className={`text-xs font-semibold ${isWhite ? "text-slate-500" : "text-slate-400"}`}>
                    {t.about_page.founder_status}
                  </p>
                  <p className={`text-sm leading-relaxed ${
                    isWhite ? "text-slate-700" : "text-slate-300"
                  }`}>
                    {t.about_page.leader_desc}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/dheeraj-anand-b6b407100/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14A3C7] text-white font-black text-xs uppercase tracking-widest hover:bg-[#0c7f9c] transition-all shadow-md group"
                  >
                    <span>CONNECT ON LINKEDIN</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Venkatesh Lakhani - Co-Founder */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`p-6 sm:p-7 rounded-3xl border shadow-xl flex flex-col sm:flex-row items-center sm:items-stretch gap-6 ${
                isWhite
                  ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                  : "bg-[#081822] border-white/15 text-white shadow-black/80"
              }`}
            >
              {/* Photo Frame Left */}
              <div className="w-36 h-44 sm:w-44 sm:h-auto min-h-[180px] rounded-2xl overflow-hidden border-2 border-[#14A3C7]/40 shadow-xl shrink-0 relative bg-slate-900">
                <img
                  src="/venkatesh.png"
                  alt="Venkatesh Lakhani"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content Right */}
              <div className="flex-1 flex flex-col justify-between space-y-3 text-center sm:text-left">
                <div className="space-y-2">
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-[#14A3C7]/15 text-[#14A3C7] border border-[#14A3C7]/30">
                    {t.about_page.cofounder_title}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black uppercase tracking-tight">
                    {t.about_page.cofounder_name}
                  </h3>
                  <p className={`text-xs font-semibold ${isWhite ? "text-slate-500" : "text-slate-400"}`}>
                    {t.about_page.cofounder_status}
                  </p>
                  <p className={`text-sm leading-relaxed ${
                    isWhite ? "text-slate-700" : "text-slate-300"
                  }`}>
                    {t.about_page.cofounder_desc}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/venkateshlakhani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14A3C7] text-white font-black text-xs uppercase tracking-widest hover:bg-[#0c7f9c] transition-all shadow-md group"
                  >
                    <span>CONNECT ON LINKEDIN</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Integrated Contact Section */}
      <ContactSection />
      <Footer />
    </main>
  );
}
