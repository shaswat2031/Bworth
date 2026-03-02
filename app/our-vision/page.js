"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye, Sparkles, Globe } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function OurVision() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  return (
    <main
      className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
        }`}
    >
      {/* Header */}
      <section className="relative pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            {t.common.back_home}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter mb-8 md:mb-12 ${language === "hi" ? "leading-tight" : "leading-[0.85]"}`}>
              {t.vision_page.title_our} <br /> <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.title_vision}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Vision Blocks */}
      <section
        className={`py-24 px-6 md:px-12 border-t transition-colors ${theme === "white"
          ? "border-black/5 bg-black/[0.02]"
          : "border-white/5 bg-white/[0.01]"
          }`}
      >
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">

              <h2 className={`text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter ${language === "hi" ? "leading-tight" : "leading-none"}`}>
                {t.vision_page.global_win} <br /> <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.win_scenario}</span>
              </h2>
              <p
                className={`text-xl md:text-2xl font-light leading-relaxed ${theme === "white" ? "text-black/50" : "text-white"
                  }`}
              >
                {t.vision_page.vision_desc_1} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.vision_desc_highlight_1}</span> {t.vision_page.vision_desc_2} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.vision_desc_highlight_2}</span>{t.vision_page.vision_desc_3} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.vision_desc_highlight_3}</span> {t.vision_page.vision_desc_4} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.vision_desc_highlight_4}</span>{t.vision_page.vision_desc_5 || ""}
              </p>
            </div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden group shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D"
                alt={t.vision_page.transformation}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              <p className="absolute bottom-12 left-12 right-12 text-5xl font-serif font-black uppercase tracking-tighter italic text-white opacity-40">
                {t.vision_page.transformation}
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-[4rem] overflow-hidden group shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop"
                alt={t.vision_page.responsibility}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              <p className="absolute bottom-12 left-12 right-12 text-5xl font-serif font-black uppercase tracking-tighter italic text-white opacity-40">
                {t.vision_page.responsibility}
              </p>
            </div>
            <div className="order-1 lg:order-2 space-y-8">

              <h2 className={`text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter ${language === "hi" ? "leading-tight" : "leading-none"}`}>
                {t.vision_page.resp_consumption} <br />{" "}
                <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.consumption}</span>
              </h2>
              <p
                className={`text-xl md:text-2xl font-light leading-relaxed ${theme === "white" ? "text-black/50" : "text-white"
                  }`}
              >
                {t.vision_page.resp_desc_1} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.resp_desc_highlight_1}</span> {t.vision_page.resp_desc_2} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.resp_desc_highlight_2}</span>{t.vision_page.resp_desc_3} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.resp_desc_highlight_3}</span> {t.vision_page.resp_desc_4} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.vision_page.resp_desc_highlight_4}</span> {t.vision_page.resp_desc_5}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #3b82f6;
          color: transparent;
        }
      `}</style>
    </main>
  );
}
