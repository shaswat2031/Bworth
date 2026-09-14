"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Shield, User, Scale, AlertTriangle, Eye, HelpCircle, FileText } from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function TermsOfUse() {
  const { theme } = useTheme();
  const content = t.terms_page;
  const isWhite = theme === "white";

  const termsSections = [
    { title: content.accept_title, desc: content.accept_desc, icon: CheckCircle2 },
    { title: content.use_title, desc: content.use_desc, icon: Eye },
    { title: content.user_title, desc: content.user_desc, icon: User },
    { title: content.ip_title, desc: content.ip_desc, icon: Shield },
    { title: content.limit_title, desc: content.limit_desc, icon: Scale },
    { title: content.change_title, desc: content.change_desc, icon: AlertTriangle, highlight: true },
  ];

  return (
    <main className={`min-h-screen transition-colors duration-500 ${
      isWhite ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
    }`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-full max-w-5xl h-96 bg-[#14A3C7]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <FileText size={16} />
              <span className="text-xs font-black uppercase tracking-widest">LEGAL TERMS</span>
            </div>

            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-[1.05] ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              {content.title} <br />
              <span className="text-[#14A3C7] italic">{content.subtitle}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {termsSections.map((section, idx) => {
            const IconComp = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-4 flex items-center gap-3 lg:pt-4">
                  <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                    <IconComp size={22} />
                  </div>
                  <h2 className={`text-xl sm:text-2xl font-serif font-black uppercase tracking-wider ${
                    isWhite ? "text-slate-900" : "text-white"
                  }`}>
                    {section.title}
                  </h2>
                </div>

                <div className="lg:col-span-8">
                  <div className={`p-8 sm:p-10 rounded-3xl border shadow-lg backdrop-blur-xl text-base sm:text-lg font-normal leading-relaxed ${
                    section.highlight
                      ? isWhite
                        ? "bg-amber-50 border-amber-200 text-amber-950"
                        : "bg-amber-950/20 border-amber-500/30 text-amber-200"
                      : isWhite
                      ? "bg-white border-slate-200 text-slate-700 shadow-slate-200/50"
                      : "bg-[#081822] border-white/15 text-slate-200 shadow-black/80"
                  }`}>
                    {section.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Footer Card Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pt-12 border-t border-slate-300 dark:border-white/10"
          >
            <div className={`p-8 sm:p-10 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg ${
              isWhite
                ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                : "bg-[#081822] border-white/15 text-white shadow-black/80"
            }`}>
              <div className="space-y-1 text-center sm:text-left">
                <p className={`text-xs font-black uppercase tracking-widest ${
                  isWhite ? "text-slate-500" : "text-slate-400"
                }`}>
                  Documentation Info
                </p>
                <p className="text-xl font-serif font-bold text-[#14A3C7]">{content.last_updated}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                  <HelpCircle size={26} />
                </div>
                <div>
                  <p className="font-bold text-sm">Need clarification?</p>
                  <p className={`text-xs ${isWhite ? "text-slate-500" : "text-slate-400"}`}>
                    Reach out to our legal team.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
