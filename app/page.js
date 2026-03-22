"use client";
import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ArrowRightCircle } from "lucide-react";
import Hero from "./components/Hero";
import GsapTextReveal from "./components/GsapTextReveal";
import ScrollBanner from "./components/ScrollBanner";
import FeatureSection from "./components/FeatureSection";
import AppDownloadSection from "./components/AppDownloadSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import { translations as t } from "./utils/translations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const sectionRef = useRef(null);



  useGSAP(
    () => {
      // Problem Section Animations
      const problemTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#problem-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      problemTl
        .from(".problem-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(".problem-subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.4")
        .from(".problem-footer, .problem-line", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.2");

      ScrollTrigger.refresh();

      // Mission Section Animations
      const missionTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#mission-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      missionTl
        .from(".mission-title", {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".mission-desc",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".mission-stat-card",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )

        .from(
          ".mission-footer",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );


    },
    { scope: containerRef }
  );

  return (
    <main className="min-h-screen overflow-x-hidden" ref={containerRef}>
      <Hero />
      <ScrollBanner />

      <section
        id="problem-section"
        className={`py-16 px-6 md:px-12 transition-colors relative overflow-hidden ${theme === "white" ? "bg-white" : "bg-[#14A3C7]"}`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className={`problem-title text-4xl md:text-7xl font-serif font-black uppercase tracking-tighter mb-6 ${theme === "white" ? "text-black" : "text-white"}`}>
              {t.problem_section.title}
            </h2>
            <p className={`problem-subtitle text-2xl md:text-3xl font-serif italic ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}>
              {t.problem_section.subtitle}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-20"
          >
            {[
              { text: (t.problem_section?.pain_1 || "Clothes you don't wear"), img: "/problem_01.png" },
              { text: (t.problem_section?.pain_2 || "Low resale value"), img: "/problem_02.png" },
              { text: (t.problem_section?.pain_3 || "No easy way to recycle"), img: "/problem_03.png" }
            ].map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`flex flex-col rounded-[3rem] border group shadow-sm transition-all duration-300 overflow-hidden ${theme === "white"
                    ? "border-black/10 bg-black/5 hover:bg-white hover:shadow-2xl hover:shadow-black/10 hover:border-transparent"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 shadow-white/5"
                  }`}
              >
                {/* Visual Representation */}
                <div className="w-full aspect-video relative overflow-hidden">
                    <Image 
                        src={entry.img} 
                        alt={entry.text} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-10">
                    <p className={`text-2xl md:text-3xl font-serif font-black leading-tight ${theme === "white" ? "text-black" : "text-white"}`}>
                        {entry.text}
                    </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-20 relative z-20">
            <p className={`problem-footer text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed ${theme === "white" ? "text-black/60" : "text-white/80"}`}>
              {t.problem_section?.desc}
            </p>
            <div className={`problem-line w-24 h-[1px] mx-auto mt-8 ${theme === "white" ? "bg-black/10" : "bg-white/10"}`}></div>
          </div>
        </div>

        {/* Decorative background element */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none -z-0 ${theme === "white" ? "bg-gradient-radial from-[#14A3C7]/5 to-transparent" : "bg-gradient-radial from-white/5 to-transparent"
          }`}></div>
      </section>

      {/* Mid-page CTA - Get Coins */}
      <section className={`py-12 px-6 md:px-12 transition-colors ${theme === "white" ? "bg-[#14A3C7]" : "bg-black"}`}>
        <div className="max-w-7xl mx-auto">
          <div className={`cta-banner p-12 md:p-20 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 border ${theme === "white" ? "bg-black text-white border-white/10" : "bg-white text-black border-black/10"}`}>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-none">
                Get Paid to <br />
                <span className={theme === "white" ? "text-[#14A3C7]" : "text-[#14A3C7]"}>
                  Recycle.
                </span>
              </h2>
              <p className={`text-xl font-light max-w-md ${theme === "white" ? "text-white/60" : "text-black/60"}`}>
                Every coin you earn is ₹1 value. Payouts are based on brand, condition, and market demand.
              </p>
            </div>
            <Link
              href="https://play.google.com/store/apps/details?id=com.BworthGo"
              target="_blank"
              className={`px-12 py-8 rounded-full font-black uppercase tracking-widest text-lg transition-all hover:scale-105 shadow-2xl ${theme === "white" ? "bg-[#14A3C7] text-white" : "bg-black text-white"
                }`}
            >
              GET COINS NOW
            </Link>
          </div>
        </div>
      </section>

      <div id="ecosystem">
        <FeatureSection />
      </div>

      <section
        ref={sectionRef}
        id="mission-section"
        className={`py-16 px-6 md:px-12 overflow-hidden relative border-t transition-colors ${theme === "white"
          ? "bg-[#F8FAFC] text-black border-black/[0.05]"
          : "bg-[#14A3C7] text-white border-white/[0.05]"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start mb-12">
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <h2 className={`mission-title text-6xl md:text-9xl font-serif font-black uppercase tracking-tighter leading-none`}>
                  {t.hero.mission_title_our} <br />{" "}
                  <span className={`text-6xl md:text-9xl font-serif font-black uppercase tracking-tighter ${theme === "white" ? "text-[#14A3C7]" : "text-black"} leading-none`}>
                    {t.hero.mission_title_mission}
                  </span>
                </h2>
                
                {/* Impact Statistics - High Contrast */}
                <div className="flex flex-wrap gap-12 md:gap-16">
                  <div className="mission-stat-card group">
                    <p className={`text-5xl md:text-7xl font-serif font-black tracking-tighter mb-2 transition-transform group-hover:scale-110 duration-500 ${theme === "white" ? "text-black" : "text-white"}`}>
                      {t.hero.items_recycled.split(' ')[0]}
                    </p>
                    <p className={`text-[10px] md:text-xs tracking-[0.4em] uppercase font-black transition-colors ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}>
                      {t.hero.items_recycled.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                  <div className="mission-stat-card group">
                    <p className={`text-5xl md:text-7xl font-serif font-black tracking-tighter mb-2 transition-transform group-hover:scale-110 duration-500 ${theme === "white" ? "text-black" : "text-white"}`}>
                      {t.hero.brand_partners.split(' ')[0]}
                    </p>
                    <p className={`text-[10px] md:text-xs tracking-[0.4em] uppercase font-black transition-colors ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}>
                      {t.hero.brand_partners.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                <div className="mission-desc space-y-8">
                  <div className="flex items-center gap-4">
                    <span className={`w-12 h-[2px] rounded-full ${theme === "white" ? "bg-[#14A3C7]" : "bg-black"}`}></span>
                    <h3 className={`text-xl md:text-2xl font-black uppercase tracking-[0.2em] ${theme === "white" ? "text-black" : "text-white"}`}>
                      {t.hero.mission_heading}
                    </h3>
                  </div>

                  <p className={`text-2xl md:text-3xl font-serif italic leading-snug ${theme === "white" ? "text-black/80" : "text-white"}`}>
                    {t.hero.mission_desc}
                  </p>
                </div>

                <div className="mission-footer space-y-8">
                  <p className={`text-xl md:text-2xl font-light leading-relaxed ${theme === "white" ? "text-black/60" : "text-white/70"}`}>
                    {t.hero.mission_footer_desc}
                  </p>
                  
                  <Link
                    href="/our-mission"
                    className={`inline-flex items-center gap-6 group py-4 px-8 rounded-full border transition-all duration-300 font-black uppercase tracking-[0.2em] text-sm ${
                      theme === "white" 
                        ? "border-black text-black hover:bg-[#14A3C7] hover:text-white hover:border-transparent" 
                        : "border-black text-black hover:bg-white hover:text-black hover:border-transparent"
                    }`}
                  >
                    {t.hero.read_story}
                    <div className="w-10 h-10 rounded-full bg-current/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <ArrowRightCircle size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>


          </div>


        </div>
      </section>



      <AppDownloadSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
