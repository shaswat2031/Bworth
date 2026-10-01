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
      <section className="relative pt-28 pb-8 px-6 md:px-12 overflow-hidden">
        {/* Background Ambient Blur */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-[#14A3C7]/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <ShieldCheck size={15} />
              <span className="text-[11px] font-black uppercase tracking-widest">LEGAL DOCUMENTATION</span>
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-black uppercase tracking-tight leading-tight ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              {content.title} <span className="text-[#14A3C7] italic">{content.subtitle}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Sections with Motion Animations */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-7">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-2.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <ShieldCheck size={18} />
              </div>
              <h2 className={`text-base sm:text-lg font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.intro_title}
              </h2>
            </div>

            <div className={`p-5 sm:p-6 rounded-2xl border shadow-sm backdrop-blur-xl text-sm sm:text-[15px] font-normal leading-relaxed ${
              isWhite
                ? "bg-white border-slate-200 text-slate-700 shadow-slate-200/50"
                : "bg-[#081822] border-white/10 text-slate-200 shadow-black/80"
            }`}>
              {content.intro_desc}
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <Database size={18} />
              </div>
              <h2 className={`text-base sm:text-lg font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.info_title}
              </h2>
            </div>

            <p className={`text-sm sm:text-[15px] font-normal leading-relaxed ${
              isWhite ? "text-slate-700" : "text-slate-300"
            }`}>
              {content.info_desc}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: content.info_id, desc: content.info_id_desc, icon: <Lock size={18} /> },
                { title: content.info_contact, desc: content.info_contact_desc, icon: <Phone size={18} /> },
                { title: content.info_trans, desc: content.info_trans_desc, icon: <MessageSquare size={18} /> },
                { title: content.info_tech, desc: content.info_tech_desc, icon: <Terminal size={18} /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 shadow-sm ${
                    isWhite
                      ? "bg-white border-slate-200 text-slate-900 hover:border-slate-300"
                      : "bg-[#081822] border-white/10 text-white hover:border-white/20"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center mb-2.5">
                    {item.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider mb-1.5">{item.title}</h3>
                  <p className={`text-xs sm:text-[13px] font-normal leading-relaxed ${
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <Eye size={18} />
              </div>
              <h2 className={`text-base sm:text-lg font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.use_title}
              </h2>
            </div>

            <p className={`text-sm sm:text-[15px] font-normal leading-relaxed ${
              isWhite ? "text-slate-700" : "text-slate-300"
            }`}>
              {content.use_desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[content.use_1, content.use_2, content.use_3].map((use, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`p-4 sm:p-5 rounded-2xl border relative overflow-hidden shadow-sm ${
                    isWhite
                      ? "bg-white border-slate-200 text-slate-900 hover:border-slate-300"
                      : "bg-[#081822] border-white/10 text-white hover:border-white/20"
                  }`}
                >
                  <div className="absolute top-1.5 right-3 text-3xl font-serif font-black italic text-[#14A3C7]/15 pointer-events-none">
                    0{i+1}
                  </div>
                  <p className={`text-xs sm:text-[13px] font-normal leading-relaxed relative z-10 ${
                    isWhite ? "text-slate-700" : "text-slate-300"
                  }`}>
                    {use}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Communication & Contact Authorization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-2.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <MessageSquare size={18} />
              </div>
              <h2 className={`text-base sm:text-lg font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.comm_title}
              </h2>
            </div>

            <div className={`p-5 sm:p-6 rounded-2xl border shadow-sm backdrop-blur-xl text-sm sm:text-[15px] font-normal leading-relaxed ${
              isWhite
                ? "bg-white border-[#14A3C7]/30 text-slate-700 shadow-[#14A3C7]/5"
                : "bg-[#081822] border-[#14A3C7]/30 text-slate-200 shadow-black/80"
            }`}>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#14A3C7]/10 text-[#14A3C7] text-[11px] font-black uppercase tracking-wider mb-2.5">
                <span>Explicit Consent & Outreach Terms</span>
              </div>
              <p className="font-medium leading-relaxed italic border-l-2 border-[#14A3C7] pl-3.5 my-2">
                &ldquo;{content.comm_desc}&rdquo;
              </p>
              <p className={`text-xs sm:text-[13px] mt-3 leading-relaxed ${
                isWhite ? "text-slate-600" : "text-slate-400"
              }`}>
                By submitting your contact information anywhere across our platform (including inquiry forms, newsletter subscriptions, or service requests), you grant voluntary and informed consent to BWorth and its representatives to contact you across the channels designated above. You may withdraw or update your communication preferences at any time.
              </p>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-2.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <Lock size={18} />
              </div>
              <h2 className={`text-base sm:text-lg font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.security_title}
              </h2>
            </div>

            <div className={`p-5 sm:p-6 rounded-2xl border text-sm sm:text-[15px] font-normal leading-relaxed shadow-sm ${
              isWhite
                ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                : "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
            }`}>
              {content.security_desc}
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-2.5 pt-6 border-t border-slate-300 dark:border-white/10"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#14A3C7]/15 flex items-center justify-center text-[#14A3C7] shrink-0">
                <Phone size={18} />
              </div>
              <h2 className={`text-base sm:text-lg font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.contact_title}
              </h2>
            </div>
            
            <div className={`p-5 sm:p-6 rounded-2xl border space-y-3 shadow-sm ${
              isWhite
                ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                : "bg-[#081822] border-white/10 text-white shadow-black/80"
            }`}>
              <p className={`text-sm sm:text-[15px] font-normal leading-relaxed ${
                isWhite ? "text-slate-700" : "text-slate-300"
              }`}>
                {content.contact_desc}
              </p>

              <div className="pt-1">
                <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                  isWhite ? "text-slate-500" : "text-slate-400"
                }`}>
                  Privacy Support
                </p>
                <a 
                  href="mailto:info@bworth.co.in"
                  className="text-lg sm:text-2xl font-serif font-black text-[#14A3C7] hover:underline underline-offset-4 transition-all inline-block"
                >
                  info@bworth.co.in
                </a>
              </div>
            </div>
          </motion.div>

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
                  Policy Update
                </p>
                <p className="text-base sm:text-lg font-serif font-bold text-[#14A3C7]">{content.last_updated}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                  <HelpCircle size={22} />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm">Data Access Request</p>
                  <p className={`text-[11px] sm:text-xs ${isWhite ? "text-slate-500" : "text-slate-400"}`}>
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
