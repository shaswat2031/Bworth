"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Eye, Lock, Database, Phone, MessageSquare, Terminal, HelpCircle } from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const content = t.privacy_page;
  const isWhite = theme === "white";

  return (
    <main className={`min-h-screen transition-colors duration-500 ${
      isWhite ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
    }`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Background Ambient Blur */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#14A3C7]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <ShieldCheck size={16} />
              <span className="text-xs font-black uppercase tracking-widest">LEGAL DOCUMENTATION</span>
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

      {/* Content Sections with Motion Animations */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <ShieldCheck size={22} />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.intro_title}
              </h2>
            </div>

            <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl backdrop-blur-xl text-base sm:text-lg font-normal leading-relaxed ${
              isWhite
                ? "bg-white border-slate-200 text-slate-700 shadow-slate-200/50"
                : "bg-[#081822] border-white/15 text-slate-200 shadow-black/80"
            }`}>
              {content.intro_desc}
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <Database size={22} />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.info_title}
              </h2>
            </div>

            <p className={`text-base sm:text-lg font-normal leading-relaxed ${
              isWhite ? "text-slate-700" : "text-slate-300"
            }`}>
              {content.info_desc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: content.info_id, desc: content.info_id_desc, icon: <Lock size={22} /> },
                { title: content.info_contact, desc: content.info_contact_desc, icon: <Phone size={22} /> },
                { title: content.info_trans, desc: content.info_trans_desc, icon: <MessageSquare size={22} /> },
                { title: content.info_tech, desc: content.info_tech_desc, icon: <Terminal size={22} /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] shadow-lg ${
                    isWhite
                      ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                      : "bg-[#081822] border-white/15 text-white shadow-black/80"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-wider mb-3">{item.title}</h3>
                  <p className={`text-sm sm:text-base font-normal leading-relaxed ${
                    isWhite ? "text-slate-600" : "text-slate-300"
                  }`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How We Use Your Data */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <Eye size={22} />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.use_title}
              </h2>
            </div>

            <p className={`text-base sm:text-lg font-normal leading-relaxed ${
              isWhite ? "text-slate-700" : "text-slate-300"
            }`}>
              {content.use_desc}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[content.use_1, content.use_2, content.use_3].map((use, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-8 rounded-3xl border relative overflow-hidden shadow-lg ${
                    isWhite
                      ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                      : "bg-[#081822] border-white/15 text-white shadow-black/80"
                  }`}
                >
                  <div className="absolute top-2 right-4 text-6xl font-serif font-black italic text-[#14A3C7]/15 pointer-events-none">
                    0{i+1}
                  </div>
                  <p className={`text-sm sm:text-base font-normal leading-relaxed relative z-10 ${
                    isWhite ? "text-slate-700" : "text-slate-300"
                  }`}>
                    {use}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <Lock size={22} />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.security_title}
              </h2>
            </div>

            <div className={`p-8 sm:p-10 rounded-3xl border text-base sm:text-lg font-normal leading-relaxed shadow-lg ${
              isWhite
                ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                : "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
            }`}>
              {content.security_desc}
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 pt-12 border-t border-slate-300 dark:border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <Phone size={22} />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.contact_title}
              </h2>
            </div>
            
            <div className={`p-8 sm:p-12 rounded-3xl border space-y-6 shadow-xl ${
              isWhite
                ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                : "bg-[#081822] border-white/15 text-white shadow-black/80"
            }`}>
              <p className={`text-base sm:text-lg font-normal leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}>
                {content.contact_desc}
              </p>

              <div className="pt-4">
                <p className={`text-xs font-black uppercase tracking-widest mb-2 ${
                  isWhite ? "text-slate-500" : "text-slate-400"
                }`}>
                  Privacy Support
                </p>
                <a 
                  href="mailto:info@bworth.co.in"
                  className="text-2xl sm:text-4xl font-serif font-black text-[#14A3C7] hover:underline underline-offset-8 transition-all inline-block"
                >
                  info@bworth.co.in
                </a>
              </div>
            </div>
          </motion.div>

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
                  Policy Update
                </p>
                <p className="text-xl font-serif font-bold text-[#14A3C7]">{content.last_updated}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                  <HelpCircle size={26} />
                </div>
                <div>
                  <p className="font-bold text-sm">Data Access Request</p>
                  <p className={`text-xs ${isWhite ? "text-slate-500" : "text-slate-400"}`}>
                    Download your data records.
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
