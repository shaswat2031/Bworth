"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Flag, MapPin, Award, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

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
        className={`relative pt-40 pb-24 px-6 md:px-12 transition-colors ${theme === "white" ? "bg-black/[0.02]" : "bg-white/[0.02]"
          }`}
      >
        <div className="max-w-7xl mx-auto relative">
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
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
              {t.brands_page.title_brand} <br /> <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.brands_page.title_partners}</span>
            </h1>
          </motion.div>

          <motion.a
            href="https://brand.bworth.co.in/onBoarding"
            target="_blank"
            rel="noopener noreferrer"
            style={{ y }}
            className={`absolute right-4 md:right-12 xl:right-0 top-[20%] md:top-1/2 w-32 h-32 md:w-44 md:h-44 rounded-full hidden sm:flex items-center justify-center group cursor-pointer z-10 ${
              theme === "white" 
                ? "text-black hover:text-[#14A3C7]" 
                : "text-white hover:text-blue-400"
            }`}
          >
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 w-full h-full origin-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path
                  id="circlePath"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  fill="transparent"
                />
                <text className="text-[10px] font-bold uppercase tracking-[0.22em]" fill="currentColor">
                  <textPath href="#circlePath" startOffset="0%">
                    BECOME A BRAND • BECOME A BRAND • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
            
            <div className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 ${
              theme === "white" ? "bg-black text-white group-hover:bg-[#14A3C7]" : "bg-[#14A3C7] text-white group-hover:bg-blue-400"
            }`}>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>
      </section>

      {/* Brand Association Content */}
      <section
        className={`py-24 px-6 md:px-12 border-t transition-colors ${theme === "white" ? "border-black/5" : "border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white shadow-xl shadow-black">
                  <Flag size={32} />
                </div>
                <div>
                  <h2 className={`text-3xl font-serif font-bold uppercase leading-none ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}>
                    {t.brands_page.make_in_india}
                  </h2>
                  <p className={`text-xs font-bold tracking-[0.3em] uppercase mt-2 ${theme === "white" ? "text-[#14A3C7]" : "text-blue-400"}`}>
                    {t.brands_page.collab}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div
                  className={`flex items-center gap-4 ${theme === "white" ? "text-black" : "text-white"
                    }`}
                >
                  <MapPin size={18} className="text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {t.brands_page.across_india}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-4 ${theme === "white" ? "text-black" : "text-white"
                    }`}
                >
                  <Award size={18} className="text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {t.brands_page.certified}
                  </span>
                </div>
              </div>

              <p
                className={`text-sm font-bold leading-relaxed ${theme === "white" ? "text-black" : "text-white"
                  }`}
              >
                {t.brands_page.supporting_local}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h3 className={`text-4xl md:text-5xl font-serif font-black uppercase tracking-tighter italic leading-tight ${theme === "white" ? "text-black" : "text-black"}`}>
                    {t.brands_page.supporting_exc}
                  </h3>
                  <p
                    className={`text-xl font-light leading-relaxed ${theme === "white" ? "text-black/60" : "text-white"
                      }`}
                  >
                    {t.brands_page.collab_announce}
                  </p>
                </div>
                <div
                  className={`relative rounded-[2rem] overflow-hidden aspect-[4/5] border group ${theme === "white" ? "border-black/10" : "border-white/10"
                    }`}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
                    alt={t.brands_page.indian_craft}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 ${theme === "white" ? "from-[#F8FAFC]" : "from-[#14A3C7]"
                      }`}
                  ></div>
                </div>
              </div>

              <div className="space-y-8">
                <div
                  className={`text-xl md:text-2xl font-light leading-relaxed ${theme === "white" ? "text-black/60" : "text-white/60"
                    }`}
                >
                  {/* Indian Craftsmanship */}
                  <div className="md:hidden">
                    <p className={`text-xl md:text-2xl font-light leading-relaxed mb-8 ${theme === "white" ? "text-black/60" : "text-white"}`}>
                      {t.brands_page.partnership_commit}
                    </p>
                  </div>
                  {/* Desktop view for Indian Craftsmanship/Partnership commitment */}
                  <div className="hidden md:block">
                    <p
                      className={`text-xl md:text-2xl font-light leading-relaxed ${theme === "white" ? "text-black/60" : "text-white"
                        }`}
                    >
                      {t.brands_page.partnership_commit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className={`p-8 border rounded-3xl hover:border-blue-500/30 transition-colors group ${theme === "white"
                    ? "bg-black/5 border-black/5"
                    : "bg-white/5 border-white/5"
                    }`}
                >
                  <h4
                    className={`text-xl font-serif font-bold uppercase mb-4 group-hover:text-blue-400 transition-colors ${theme === "white" ? "text-[#14A3C7]" : "text-black"
                      }`}
                  >
                    {t.brands_page.indian_spirit}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed uppercase tracking-widest font-bold ${theme === "white" ? "text-[#14A3C7]" : "text-black"
                      }`}
                  >
                    {t.brands_page.spirit_desc}
                  </p>
                </div>
                <div
                  className={`p-8 border rounded-3xl hover:border-blue-500/30 transition-colors group ${theme === "white"
                    ? "bg-black/5 border-black/5"
                    : "bg-white/5 border-white/5"
                    }`}
                >
                  <h4
                    className={`text-xl font-serif font-bold uppercase mb-4 group-hover:text-blue-400 transition-colors ${theme === "white" ? "text-[#14A3C7]" : "text-black"
                      }`}
                  >
                    {t.brands_page.indigenous}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed uppercase tracking-widest font-bold ${theme === "white" ? "text-[#14A3C7]" : "text-black"
                      }`}
                  >
                    {t.brands_page.indigenous_desc}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <p
                  className={`text-lg leading-relaxed ${theme === "white" ? "text-black/50" : "text-white"
                    }`}
                >
                  {t.brands_page.legacy_desc}
                </p>
                <p
                  className={`text-lg leading-relaxed ${theme === "white" ? "text-black/50" : "text-white"
                    }`}
                >
                  {t.brands_page.stay_tuned}
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-12 flex"
              >
                <a
                  href="https://brand.bworth.co.in/onBoarding"
                  className={`group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold uppercase tracking-[0.15em] text-sm overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                    theme === "white"
                      ? "bg-black text-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                      : "bg-[#14A3C7] text-white hover:shadow-[0_8px_30px_rgba(20,163,199,0.25)]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Onboard Your Brand <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
