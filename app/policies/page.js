"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Lock, RefreshCw } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function Policies() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  const policyCategories = [
    {
      icon: <ShieldCheck size={24} />,
      title: t.policies_page.privacy_policy,
      desc: t.policies_page.privacy_desc,
      href: "/privacy-policy"
    },
    {
      icon: <RefreshCw size={24} />,
      title: t.policies_page.buyback_terms,
      desc: t.policies_page.buyback_desc,
      href: "#"
    },
    {
      icon: <Lock size={24} />,
      title: t.policies_page.user_agreement,
      desc: t.policies_page.user_desc,
      href: "/terms-of-use"
    },
    {
      icon: <FileText size={24} />,
      title: t.policies_page.shipping,
      desc: t.policies_page.shipping_desc,
      href: "#"
    }
  ];

  return (
    <main
      className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
        }`}
    >
      <section className="relative pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-12 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t.common.back_home}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter leading-[0.85] mb-12">
              {t.hero.mission_title_our} <br /> <span className="text-blue-500 italic">{t.policies_page.title}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        className={`py-24 px-6 md:px-12 border-t transition-colors ${theme === "white"
          ? "border-black/5 bg-black/[0.01]"
          : "border-white/5 bg-white/[0.01]"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {policyCategories.map((cat, i) => (
              <Link
                href={cat.href}
                key={i}
                className={`p-10 border rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 group block ${theme === "white"
                  ? "bg-black/5 border-black/5"
                  : "bg-white/5 border-white/5"
                  }`}
              >
                <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-serif font-bold uppercase mb-4 tracking-tight">
                  {cat.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed font-medium mb-8 ${theme === "white" ? "text-black/40" : "text-white/40"
                    }`}
                >
                  {cat.desc}
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400 group-hover:text-white flex items-center gap-2">
                  {t.policies_page.read_policy}
                  <span className="w-4 h-[1px] bg-blue-400 group-hover:w-8 group-hover:bg-white transition-all"></span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-32 max-w-4xl mx-auto space-y-24">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tighter">
                {t.policies_page.transparency}
              </h2>
              <p
                className={`text-lg md:text-xl font-light leading-relaxed text-justify ${theme === "white" ? "text-black/50" : "text-white/50"
                  }`}
              >
                {t.policies_page.transparency_desc}
              </p>
            </div>

            <div className="p-12 md:p-16 border-l-4 border-blue-600 bg-blue-600/5 rounded-r-[3rem]">
              <h3 className="text-2xl font-serif font-black uppercase mb-6 italic">
                {t.policies_page.commitment_title}
              </h3>
              <p
                className={`text-lg leading-relaxed italic ${theme === "white" ? "text-black/70" : "text-white/70"
                  }`}
              >
                {t.policies_page.commitment_quote}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase">
                {t.policies_page.effective_date}
              </p>
              <p
                className={`text-4xl font-serif font-bold italic transition-colors ${theme === "white" ? "text-black/80" : "text-white/80"
                  }`}
              >
                {t.policies_page.date}
              </p>
              <p
                className={`text-xs font-bold uppercase tracking-widest pt-4 ${theme === "white" ? "text-black/20" : "text-white/20"
                  }`}
              >
                {t.policies_page.copyright}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
