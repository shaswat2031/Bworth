"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Shield, User, Scale, AlertTriangle, Eye, HelpCircle, FileText, MessageSquare } from "lucide-react";
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
    { title: content.comm_title, desc: content.comm_desc, icon: MessageSquare },
    { title: content.ip_title, desc: content.ip_desc, icon: Shield },
    { title: content.limit_title, desc: content.limit_desc, icon: Scale },
    { title: content.change_title, desc: content.change_desc, icon: AlertTriangle, highlight: true },
  ];

  return (
    <main className={`min-h-screen transition-colors duration-500 ${
      isWhite ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
    }`}>
      {/* Hero Section */}
      <section className="relative pt-28 pb-8 px-6 md:px-12 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-full max-w-4xl h-56 bg-[#14A3C7]/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <FileText size={15} />
              <span className="text-[11px] font-black uppercase tracking-widest">LEGAL TERMS</span>
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-black uppercase tracking-tight leading-tight ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              {content.title} <span className="text-[#14A3C7] italic">{content.subtitle}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-4">
          {termsSections.map((section, idx) => {
            const IconComp = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 shadow-sm ${
                  section.highlight
                    ? isWhite
                      ? "bg-amber-50/70 border-amber-200 text-amber-950"
                      : "bg-amber-950/20 border-amber-500/30 text-amber-200"
                    : isWhite
                    ? "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
                    : "bg-[#081822] border-white/10 text-slate-200 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                    <IconComp size={18} />
                  </div>
                  <h2 className={`text-base sm:text-lg font-serif font-black uppercase tracking-wider ${
                    isWhite ? "text-slate-900" : "text-white"
                  }`}>
                    {section.title}
                  </h2>
                </div>

                <p className={`text-sm sm:text-[15px] font-normal leading-relaxed sm:pl-11 ${
                  section.highlight
                    ? isWhite ? "text-amber-900" : "text-amber-200/90"
                    : isWhite ? "text-slate-600" : "text-slate-300"
                }`}>
                  {section.desc}
                </p>
              </motion.div>
            );
          })}

          {/* Footer Card Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="pt-6 border-t border-slate-300 dark:border-white/10"
          >
            <div className={`p-5 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm ${
              isWhite
                ? "bg-white border-slate-200 text-slate-900"
                : "bg-[#081822] border-white/10 text-white"
            }`}>
              <div className="space-y-0.5 text-center sm:text-left">
                <p className={`text-[10px] font-black uppercase tracking-widest ${
                  isWhite ? "text-slate-500" : "text-slate-400"
                }`}>
                  Documentation Info
                </p>
                <p className="text-base sm:text-lg font-serif font-bold text-[#14A3C7]">{content.last_updated}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                  <HelpCircle size={22} />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm">Need clarification?</p>
                  <p className={`text-[11px] sm:text-xs ${isWhite ? "text-slate-500" : "text-slate-400"}`}>
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
