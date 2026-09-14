"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, Handshake } from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";
import BrandCarousel from "../components/BrandCarousel";
import BrandComingSoon from "../components/BrandComingSoon";
import BrandOfferingsSection from "../components/BrandOfferingsSection";

export default function Brands() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  return (
    <main className={`min-h-screen transition-colors duration-500 ${
      isWhite ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
    }`}>
      {/* Header / Hero */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#14A3C7]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">


          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
                <Handshake size={16} />
                <span className="text-xs font-black uppercase tracking-widest">BRAND PARTNERSHIPS</span>
              </div>

              <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-[1.05] ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {t.brands_page.title_brand} <br />
                <span className="text-[#14A3C7] italic">{t.brands_page.title_partners}</span>
              </h1>
            </motion.div>

            {/* Become a Brand CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="https://brand.bworth.co.in/onBoarding"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-4 p-3 pr-8 rounded-full border shadow-xl transition-all duration-300 hover:scale-105 group ${
                  isWhite
                    ? "bg-white border-slate-300 text-slate-900 hover:border-[#14A3C7]"
                    : "bg-[#081822] border-white/20 text-white hover:border-[#14A3C7]"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#14A3C7] text-white flex items-center justify-center shadow-md group-hover:bg-[#0d84a3] transition-colors">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#14A3C7] block">
                    PARTNERSHIP
                  </span>
                  <span className="font-serif font-black uppercase tracking-wider text-base">
                    Become a Brand
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Partners Section */}
      <section className={`py-12 relative overflow-hidden ${
        isWhite ? "bg-slate-50" : "bg-[#061217]"
      }`}>
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="text-center space-y-3">
            <h2 className={`text-3xl sm:text-5xl font-serif font-black uppercase tracking-tight ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              Meet Our Partners
            </h2>
            <div className="w-20 h-1 bg-[#14A3C7] mx-auto rounded-full" />
          </div>
        </div>

        <BrandCarousel />
      </section>

      {/* Brands Coming Soon Section */}
      <section className={`py-8 relative overflow-hidden ${
        isWhite ? "bg-slate-100" : "bg-[#081720]"
      }`}>
        <BrandComingSoon />
      </section>

      {/* Brand Offerings Section */}
      <BrandOfferingsSection />

      {/* Contact Section */}
      <ContactSection />
      <Footer />
    </main>
  );
}
