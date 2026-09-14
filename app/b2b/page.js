"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Building2, School, Globe, Users, ArrowRight, Sparkles, Handshake } from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function B2BEngagement() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  const offerings = [
    {
      icon: <Building2 size={26} />,
      title: t.b2b_page.deadstock_title,
      desc: t.b2b_page.deadstock_desc,
    },
    {
      icon: <School size={26} />,
      title: t.b2b_page.recycling_title,
      desc: t.b2b_page.recycling_desc,
    },
    {
      icon: <Globe size={26} />,
      title: t.b2b_page.csr_title,
      desc: t.b2b_page.csr_desc,
    },
    {
      icon: <Users size={26} />,
      title: t.b2b_page.emp_engagement_title,
      desc: t.b2b_page.emp_engagement_desc,
    },
  ];

  return (
    <main className={`min-h-screen transition-colors duration-500 ${
      isWhite ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
    }`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#14A3C7]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <Handshake size={16} />
              <span className="text-xs font-black uppercase tracking-widest">ENTERPRISE & BRAND PARTNERSHIPS</span>
            </div>

            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-[1.05] ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              {t.b2b_page.title_b2b} <br />
              <span className="text-[#14A3C7] italic">{t.b2b_page.title_engagement}</span>
            </h1>

            <p className={`text-lg sm:text-2xl font-serif italic max-w-3xl leading-relaxed ${
              isWhite ? "text-slate-700" : "text-slate-300"
            }`}>
              {t.b2b_page.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main B2B Content & Offerings Grid */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Offerings List */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className={`text-2xl sm:text-4xl font-serif font-black uppercase tracking-tight ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {t.b2b_page.offerings_title}
              </h2>

              <p className={`text-base sm:text-lg font-normal leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}>
                {t.b2b_page.desc}
              </p>
            </motion.div>

            {/* Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {offerings.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] shadow-xl ${
                    isWhite
                      ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                      : "bg-[#081822] border-white/15 text-white shadow-black/80"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center mb-6 shadow-sm">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-wider mb-3">
                    {point.title}
                  </h3>
                  <p className={`text-sm font-normal leading-relaxed ${
                    isWhite ? "text-slate-600" : "text-slate-300"
                  }`}>
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky CTA Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-8 sm:p-10 rounded-[2.5rem] border shadow-2xl backdrop-blur-xl sticky top-32 space-y-6 ${
                isWhite
                  ? "bg-white border-[#14A3C7]/30 text-slate-900 shadow-xl shadow-[#14A3C7]/10"
                  : "bg-[#081822] border-[#14A3C7]/40 text-white shadow-2xl shadow-black/80"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
                <Sparkles size={14} />
                <span className="text-[11px] font-black uppercase tracking-widest">
                  {t.b2b_page.cta_title}
                </span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-tight leading-snug ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {t.b2b_page.cta_desc}
              </h3>

              <p className={`text-sm font-normal leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-300"
              }`}>
                Partner with BWorth to handle deadstock liquidation, corporate sustainability CSR drives, and institutional garments recycling.
              </p>

              <Link
                href="/contact-us"
                className="w-full py-4 rounded-2xl bg-[#14A3C7] text-white font-black text-xs uppercase tracking-widest hover:bg-[#0d84a3] transition-all shadow-xl shadow-[#14A3C7]/20 flex items-center justify-center gap-2 group"
              >
                <span>{t.b2b_page.contact_btn || "CONNECT WITH US"}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className={`w-full h-[1px] ${isWhite ? "bg-slate-200" : "bg-white/10"}`} />

              <p className="text-xs font-black uppercase tracking-widest text-[#14A3C7] text-center">
                #CircularEconomy
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Integrated High-Contrast Contact Form */}
      <ContactSection />
      <Footer />
    </main>
  );
}
