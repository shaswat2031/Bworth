"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye, Sparkles, Globe } from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function OurVision() {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#0A192F] text-white"}`}>
      {/* Header Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 font-black tracking-[0.4em] text-[10px] uppercase mb-12 group transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t.common.back_home}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black uppercase tracking-tighter leading-[0.8] mb-6">
              {t.vision_page.title_our} <br />
              <span className="text-[#14A3C7]">{t.vision_page.title_vision}</span>
            </h1>
            <p className={`text-2xl md:text-4xl font-serif italic max-w-2xl ${theme === "white" ? "text-black/40" : "text-white/40"}`}>
              {t.vision_page.global_win} {t.vision_page.win_scenario}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-24 px-6 md:px-12 border-t border-current/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 xl:col-span-5">
              <p className="text-xl md:text-2xl font-serif font-black leading-relaxed">
                {t.vision_page.vision_desc_1} <span className="text-[#14A3C7]">{t.vision_page.vision_desc_highlight_1}</span> {t.vision_page.vision_desc_2} <span className="text-[#14A3C7]">{t.vision_page.vision_desc_highlight_2}</span>.
              </p>
            </div>
            <div className="lg:col-span-12 xl:col-span-7">
              <p className={`text-lg md:text-xl font-medium leading-relaxed ${theme === "white" ? "text-black/60" : "text-white/60"}`}>
                {t.vision_page.vision_desc_highlight_3} {t.vision_page.vision_desc_highlight_4} {t.vision_page.vision_desc_3} {t.vision_page.vision_desc_4} {t.vision_page.transformation}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="py-24 px-6 md:px-12 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Pillar 1: Transformation */}
          <motion.div 
            whileHover={{ y: -10 }}
            className={`p-12 rounded-[3.5rem] border backdrop-blur-xl ${theme === "white" ? "bg-white/50 border-black/5" : "bg-white/5 border-white/5"}`}
          >
            <div className="w-16 h-16 rounded-3xl bg-[#14A3C7] flex items-center justify-center text-white mb-8">
              <Sparkles size={32} />
            </div>
            <h3 className="text-4xl font-serif font-black uppercase tracking-tighter mb-6">{t.vision_page.transformation}</h3>
            <p className={`text-lg leading-relaxed ${theme === "white" ? "text-black/60" : "text-white/60"}`}>
              {t.vision_page.vision_desc_1} {t.vision_page.vision_desc_highlight_1} {t.vision_page.vision_desc_2} {t.vision_page.vision_desc_highlight_2}. {t.vision_page.vision_desc_3} {t.vision_page.vision_desc_highlight_3} {t.vision_page.vision_desc_4} {t.vision_page.vision_desc_highlight_4}.
            </p>
          </motion.div>

          {/* Pillar 2: Responsibility */}
          <motion.div 
            whileHover={{ y: -10 }}
            className={`p-12 rounded-[3.5rem] border border-[#14A3C7]/20 backdrop-blur-xl ${theme === "white" ? "bg-[#14A3C7]/5" : "bg-[#14A3C7]/10"}`}
          >
            <div className="w-16 h-16 rounded-3xl bg-black flex items-center justify-center text-white mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-4xl font-serif font-black uppercase tracking-tighter mb-6">{t.vision_page.responsibility}</h3>
            <p className={`text-lg leading-relaxed ${theme === "white" ? "text-black/60" : "text-white/60"}`}>
              {t.vision_page.resp_desc_1} {t.vision_page.resp_desc_highlight_1} {t.vision_page.resp_desc_2} {t.vision_page.resp_desc_highlight_2}. {t.vision_page.resp_desc_3} {t.vision_page.resp_desc_highlight_3} {t.vision_page.resp_desc_4} {t.vision_page.resp_desc_highlight_4} {t.vision_page.resp_desc_5}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainable Future Block */}
      <section className="py-24 px-6 md:px-12 border-t border-current/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter mb-10 leading-none">
              {t.vision_page.resp_consumption} <span className="text-[#14A3C7]">{t.vision_page.consumption}</span>
            </h2>
            <p className={`text-xl md:text-2xl font-medium max-w-4xl leading-relaxed ${theme === "white" ? "text-black/80" : "text-white/80"}`}>
                {t.vision_page.resp_desc_1} {t.vision_page.resp_desc_highlight_1} {t.vision_page.resp_desc_2} {t.vision_page.resp_desc_highlight_2}. {t.vision_page.resp_desc_highlight_3} {t.vision_page.resp_desc_4} {t.vision_page.resp_desc_highlight_4} {t.vision_page.resp_desc_5}.
            </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
