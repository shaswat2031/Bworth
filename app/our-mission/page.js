"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Target, Recycle, Users, Cloud, Gift, Building2 } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function OurMission() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  const missionPoints = [
    {
      icon: <Recycle size={28} />,
      title: t.mission_page.circular_title,
      desc: t.mission_page.circular_desc
    },
    {
      icon: <Users size={28} />,
      title: t.mission_page.community_title,
      desc: (
        <>
          {t.mission_page.community_desc}
        </>
      )
    },
    {
      icon: <Target size={28} />,
      title: t.mission_page.deadstock_title,
      desc: t.mission_page.deadstock_desc
    },
    {
      icon: <Gift size={28} />,
      title: t.mission_page.referral_title,
      desc: t.mission_page.referral_desc
    },
    {
      icon: <Cloud size={28} />,
      title: t.mission_page.carbon_title,
      desc: t.mission_page.carbon_desc
    },
    {
      icon: <Building2 size={28} />,
      title: t.mission_page.b2b_title,
      desc: t.mission_page.b2b_desc
    }
  ];

  return (
    <main
      className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
        }`}
    >
      <section
        className={`relative pt-40 pb-24 px-6 md:px-12 transition-colors ${theme === "white" ? "bg-black/[0.02]" : ""
          }`}
      >
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
            <h1 className={`text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter mb-8 md:mb-12 ${language === "hi" ? "leading-tight" : "leading-[0.85]"}`}>
              {t.mission_page.title_our} <br />
              <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.mission_page.title_mission}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        className={`py-24 px-6 md:px-12 border-t transition-colors ${theme === "white" ? "border-black/5" : "border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <div className="space-y-12">
              <p
                className={`text-2xl md:text-4xl font-serif font-medium leading-tight ${theme === "white" ? "text-black/90" : "text-white"
                  }`}
              >
                {t.mission_page.rev_title_start} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.mission_page.buyback_program}</span> {t.mission_page.rev_title_end}
              </p>

              <p
                className={`text-lg md:text-xl font-light leading-relaxed ${theme === "white" ? "text-black/50" : "text-white"
                  }`}
              >
                {t.mission_page.rev_desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                {missionPoints.map((point, i) => (
                  <div
                    key={i}
                    className={`p-8 rounded-3xl border transition-all duration-500 ${theme === "white"
                      ? "bg-black/5 border-black/5"
                      : "bg-white/5 border-white/5"
                      }`}
                  >
                    <div className={`mb-6 transition-colors ${theme === "white" ? "text-black" : "text-white"}`}>
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold uppercase mb-3">
                      {point.title}
                    </h3>
                    <p
                      className={`text-sm transition-colors uppercase tracking-wider font-bold ${theme === "white" ? "text-black/40" : "text-white"
                        }`}
                    >
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className={`text-lg leading-relaxed pt-8 border-t ${theme === "white"
                  ? "text-black/50 border-black/5"
                  : "text-white border-white/5"
                  }`}
              >
                {t.mission_page.events_desc_start} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.mission_page.events_highlight}</span> {t.mission_page.events_desc_end}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block"></div>

          <div className="lg:col-span-4">
            <div
              className={`p-10 border rounded-[3rem] backdrop-blur-xl sticky top-40 ${theme === "white"
                ? "border-[#14A3C7]/20 bg-[#14A3C7]/5"
                : "border-[#14A3C7]/30 bg-[#14A3C7]/5"
                }`}
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-black mb-6 block">
                {t.mission_page.core_goal}
              </span>
              <p className={`text-2xl font-serif font-black uppercase mb-8 italic ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}>
                {t.mission_page.sustainability_thread}
              </p>
              <p
                className={`text-sm font-medium leading-relaxed mb-8 ${theme === "white" ? "text-black/40" : "text-white"
                  }`}
              >
                {t.mission_page.commitment}
              </p>
              <div
                className={`w-full h-[1px] mb-8 ${theme === "white" ? "bg-black/10" : "bg-white/10"
                  }`}
              ></div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-black">
                #CircularCulture
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
