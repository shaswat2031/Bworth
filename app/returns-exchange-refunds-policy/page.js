"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Truck, RotateCcw, AlertCircle, CheckCircle2, Package, HelpCircle, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function ReturnsPolicy() {
  const { theme } = useTheme();
  const content = t.returns_page;
  const isWhite = theme === "white";

  return (
    <main className={`min-h-screen transition-colors duration-500 ${
      isWhite ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
    }`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <RotateCcw size={16} />
              <span className="text-xs font-black uppercase tracking-widest">RETURNS & EXCHANGES</span>
            </div>

            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-[1.05] ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              {content.title} <br />
              <span className="text-[#14A3C7] italic">{content.subtitle}</span>
            </h1>

            <p className={`text-base sm:text-lg font-normal leading-relaxed max-w-3xl border-l-4 border-[#14A3C7] pl-5 py-2 ${
              isWhite ? "text-slate-700" : "text-slate-300"
            }`}>
              {content.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Document Flow Content */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Returns Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                <RotateCcw size={22} />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.returns_title}
              </h2>
            </div>

            <div className={`p-8 sm:p-10 rounded-3xl border space-y-4 text-base sm:text-lg font-normal leading-relaxed shadow-lg ${
              isWhite
                ? "bg-white border-slate-200 text-slate-700 shadow-slate-200/50"
                : "bg-[#081822] border-white/15 text-slate-200 shadow-black/80"
            }`}>
              <p>{content.returns_desc_1}</p>
              <p>{content.returns_desc_2}</p>
              <div className={`p-5 rounded-2xl border italic text-sm sm:text-base ${
                isWhite ? "bg-amber-50 border-amber-200 text-amber-950" : "bg-amber-950/20 border-amber-500/30 text-amber-200"
              }`}>
                {content.returns_desc_3}
              </div>
            </div>
          </motion.div>

          {/* Return Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                <AlertCircle size={22} />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.options_title}
              </h2>
            </div>
            
            <p className={`text-base font-normal ${isWhite ? "text-slate-700" : "text-slate-300"}`}>
              {content.options_desc}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-8 rounded-3xl border shadow-lg ${
                isWhite
                  ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                  : "bg-[#081822] border-white/15 text-white shadow-black/80"
              }`}>
                <h3 className="text-lg font-black uppercase tracking-wider mb-4 flex items-center gap-2 text-emerald-500">
                  <CheckCircle2 size={20} />
                  <span>All Issue Easy Return</span>
                </h3>
                <ul className="space-y-3 text-sm font-medium">
                  {content.all_return_points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-slate-600 dark:text-slate-300">
                      <span className="text-[#14A3C7] font-bold">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-8 rounded-3xl border shadow-lg ${
                isWhite
                  ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/50"
                  : "bg-[#081822] border-white/15 text-white shadow-black/80"
              }`}>
                <h3 className="text-lg font-black uppercase tracking-wider mb-4 flex items-center gap-2 text-amber-500">
                  <AlertCircle size={20} />
                  <span>Wrong/Defect Item Return</span>
                </h3>
                <ul className="space-y-3 text-sm font-medium">
                  {content.wrong_return_points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-slate-600 dark:text-slate-300">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Cost of Return Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                <Truck size={22} />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.cost_title}
              </h2>
            </div>

            <div className={`space-y-3 text-base font-normal ${isWhite ? "text-slate-700" : "text-slate-300"}`}>
              <p>{content.cost_desc_1}</p>
              <p>{content.cost_desc_2}</p>
            </div>
            
            <div className={`overflow-hidden rounded-3xl border shadow-xl ${
              isWhite ? "border-slate-200 bg-white" : "border-white/15 bg-[#081822]"
            }`}>
              <table className="w-full text-left border-collapse text-sm">
                <thead className={isWhite ? "bg-slate-100 text-slate-900" : "bg-white/10 text-white"}>
                  <tr>
                    <th className="p-4 font-black uppercase tracking-widest text-xs">{content.cost_table_header[0]}</th>
                    <th className="p-4 font-black uppercase tracking-widest text-xs">{content.cost_table_header[1]}</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isWhite ? "divide-slate-200 text-slate-800" : "divide-white/10 text-slate-200"}`}>
                  {content.cost_table_body.map((row, i) => (
                    <tr key={i}>
                      <td className="p-4 font-black text-[#14A3C7] align-top">{row.category}</td>
                      <td className="p-4 font-medium">
                        <ul className="list-disc list-inside space-y-1">
                          {row.reasons.map((r, j) => <li key={j}>{r}</li>)}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Exchange Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#14A3C7]/15 text-[#14A3C7] flex items-center justify-center shrink-0">
                <RefreshCw size={22} />
              </div>
              <h2 className={`text-2xl sm:text-3xl font-serif font-black uppercase tracking-wider ${
                isWhite ? "text-slate-900" : "text-white"
              }`}>
                {content.exchange_title}
              </h2>
            </div>

            <div className={`p-8 sm:p-10 rounded-3xl border space-y-6 text-base font-normal leading-relaxed shadow-lg ${
              isWhite
                ? "bg-white border-slate-200 text-slate-700 shadow-slate-200/50"
                : "bg-[#081822] border-white/15 text-slate-200 shadow-black/80"
            }`}>
              <p>{content.exchange_desc_1}</p>
              <p>{content.exchange_desc_2}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className={`p-5 rounded-2xl border ${isWhite ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/10"}`}>
                  <p className="font-black text-xs uppercase tracking-widest mb-3 text-[#14A3C7]">
                    {content.exchange_reason_title}
                  </p>
                  <ul className="space-y-2 text-sm font-medium">
                    {content.exchange_reasons.map((r, i) => (
                      <li key={i} className="flex gap-2 text-rose-500">
                        <span>•</span>
                        <span className={isWhite ? "text-slate-800" : "text-slate-200"}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`p-5 rounded-2xl border ${isWhite ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/10"}`}>
                  <p className="font-black text-xs uppercase tracking-widest mb-3 text-amber-500">
                    {content.exchange_not_accept_title}
                  </p>
                  <ul className="space-y-2 text-sm font-medium">
                    {content.exchange_not_accept_points.map((r, i) => (
                      <li key={i} className="flex gap-2 text-amber-500">
                        <span>•</span>
                        <span className={isWhite ? "text-slate-800" : "text-slate-200"}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="italic font-serif border-l-4 border-[#14A3C7] pl-4 font-bold text-[#14A3C7]">
                {content.exchange_window}
              </p>
              <p>{content.exchange_cost_desc}</p>
              <p className="font-black uppercase tracking-wider text-xs text-[#14A3C7]">
                {content.exchange_limit}
              </p>
            </div>
          </motion.div>

          {/* How to Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6"
          >
            <div className={`p-8 rounded-3xl border shadow-lg ${
              isWhite ? "bg-white border-slate-200 text-slate-900" : "bg-[#081822] border-white/15 text-white"
            }`}>
              <h3 className="text-lg font-serif font-black uppercase flex items-center gap-2 mb-6">
                <Package size={22} className="text-[#14A3C7]" />
                <span>{content.how_return_title}</span>
              </h3>
              <div className="space-y-4">
                {content.how_return_steps.map((s, i) => (
                  <div key={i} className="flex gap-4 text-sm font-medium">
                    <span className="font-black text-[#14A3C7]">0{i+1}.</span>
                    <p className={`leading-relaxed ${isWhite ? "text-slate-700" : "text-slate-300"}`}>{s}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-3xl border shadow-lg ${
              isWhite ? "bg-white border-slate-200 text-slate-900" : "bg-[#081822] border-white/15 text-white"
            }`}>
              <h3 className="text-lg font-serif font-black uppercase flex items-center gap-2 mb-6">
                <RefreshCw size={22} className="text-[#14A3C7]" />
                <span>{content.how_exchange_title}</span>
              </h3>
              <div className="space-y-4">
                {content.how_exchange_steps.map((s, i) => (
                  <div key={i} className="flex gap-4 text-sm font-medium">
                    <span className="font-black text-[#14A3C7]">0{i+1}.</span>
                    <p className={`leading-relaxed ${isWhite ? "text-slate-700" : "text-slate-300"}`}>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
