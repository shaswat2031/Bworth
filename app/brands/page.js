"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";
import BrandCarousel from "../components/BrandCarousel";
import BrandComingSoon from "../components/BrandComingSoon";
import BrandOfferingsSection from "../components/BrandOfferingsSection";

export default function Brands() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 200]);
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <main
      className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
        }`}
    >
      {/* Header */}
      <section
        className={`relative pt-32 pb-12 px-6 md:px-12 transition-colors ${theme === "white" ? "bg-black/5" : "bg-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-6 group"
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
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter leading-[0.85] mb-4 md:mb-6">
              {t.brands_page.title_brand} <br /> <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.brands_page.title_partners}</span>
            </h1>
          </motion.div>

          <motion.a
            href="https://brand.bworth.co.in/onBoarding"
            target="_blank"
            rel="noopener noreferrer"
            style={{ y }}
            className={`absolute right-4 md:right-12 xl:-right-4 top-[15%] md:top-[30%] hidden sm:flex items-center p-2 pr-8 gap-5 rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.25)] hover:-translate-y-1 group z-20 border ${
              theme === "white" 
                ? "bg-white/80 backdrop-blur-xl text-black border-black/5 hover:bg-white" 
                : "bg-black/50 backdrop-blur-xl text-white border-white/10 hover:bg-black/70"
            }`}
          >
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-colors duration-500 ${
              theme === "white" ? "bg-black text-white group-hover:bg-[#14A3C7]" : "bg-[#14A3C7] text-white group-hover:bg-blue-400"
            }`}>
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </div>
            <div className="flex flex-col items-start py-2">
              <span className={`text-[9px] font-bold uppercase tracking-[0.3em] mb-1.5 ${theme === "white" ? "text-black/50" : "text-white/60"}`}>
                Partnership
              </span>
              <span className="font-serif font-bold uppercase tracking-wider text-base md:text-lg leading-none">
                Become a Brand
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Meet Our Partners Section */}
      <section
        className={`relative py-4 md:py-6 transition-colors ${
          theme === "white" ? "bg-white" : "bg-[#14A3C7]"
        }`}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={`text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter mb-4 ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}>
              Meet Our Partners
            </h2>
            <div className={`w-20 h-0.5 mx-auto ${theme === "white" ? "bg-[#14A3C7]" : "bg-black"}`}></div>
          </motion.div>
        </div>
        <BrandCarousel />
      </section>

      {/* Brands Coming Soon Section */}
      <section
        className={`relative py-0 transition-colors ${
          theme === "white" ? "bg-[#f8fafc]" : "bg-[#0B7FA6]"
        }`}
      >
        <BrandComingSoon />
      </section>

      <BrandOfferingsSection />

      <ContactSection />
      <Footer />
    </main>
  );
}
