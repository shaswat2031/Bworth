"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Target, Recycle, Users, Cloud, Gift, Building2, ArrowRightCircle } from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function OurMission() {
  const { theme } = useTheme();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.play().catch((error) => {
            console.warn("Video autoplay blocked:", error);
        });
    }
  }, []);

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

  const brandLogos = [
    { name: "Brand 1", src: "/logo.png" }, // Using existing logo as placeholder
    { name: "Brand 2", src: "/logo.png" },
    { name: "Brand 3", src: "/logo.png" },
    { name: "Brand 4", src: "/logo.png" },
  ];

  return (
    <main className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#0A192F] text-white"}`}>
      {/* Hero Section */}
      <section className="relative pt-40 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 font-black tracking-[0.4em] text-[10px] uppercase mb-12 group transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {t.common.back_home}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black uppercase tracking-tighter leading-[0.8] mb-6">
                  {t.mission_page.title_our} <br />
                  <span className="text-[#14A3C7]">{t.mission_page.title_mission}</span>
                </h1>
              </motion.div>
            </div>
          </div>

          {/* High Impact Video Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className={`relative w-full aspect-video md:min-h-[650px] rounded-[3rem] md:rounded-[4rem] overflow-hidden border shadow-2xl mb-24 group ${theme === "white" ? "border-black/5" : "border-white/5"}`}
          >
            <video
              ref={videoRef}
              src="/video.mp4"
              muted
              loop
              playsInline
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            
            <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-between">
                <div>
                   <motion.p 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="text-white text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight"
                   >
                       My wardrobe is full... <br />
                       <span className="text-[#14A3C7] italic">but I have nothing to wear.</span>
                   </motion.p>
                   <div className="mt-8 flex gap-6 text-white/40 font-black uppercase tracking-widest text-[10px]">
                       <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#14A3C7]"></div> Too Many Clothes</span>
                       <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#14A3C7]"></div> Zero Satisfaction</span>
                   </div>
                </div>

                <div className="flex items-center gap-6 group/btn cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover/btn:bg-[#14A3C7] group-hover/btn:text-white transition-all duration-500 shadow-xl">
                        <ArrowRightCircle size={32} />
                    </div>
                    <div>
                        <p className="text-white text-sm font-black uppercase tracking-[0.2em] leading-tight">
                            Swipe Check How Bworth <br />
                            <span className="opacity-60">gonna change her lifestyle.</span>
                        </p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-24 px-6 md:px-12 border-t border-current/5">
        <div className="max-w-7xl mx-auto">
           <div className="mb-20">
               <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-tighter mb-8 max-w-4xl">
                   {t.mission_page.rev_title_start} <span className="text-[#14A3C7]">{t.mission_page.buyback_program}</span> {t.mission_page.rev_title_end}
               </h2>
               <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-5xl ${theme === "white" ? "text-black/60" : "text-white/60"}`}>
                   {t.mission_page.rev_desc}
               </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {missionPoints.map((point, i) => (
                   <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className={`p-10 rounded-[3rem] border transition-all duration-500 hover:shadow-2xl ${
                           theme === "white" ? "bg-white border-black/5 hover:border-[#14A3C7]/20" : "bg-white/5 border-white/5 hover:border-[#14A3C7]/20"
                       }`}
                   >
                       <div className="w-14 h-14 rounded-2xl bg-[#14A3C7]/10 text-[#14A3C7] flex items-center justify-center mb-8">
                           {point.icon}
                       </div>
                       <h3 className="text-2xl font-serif font-black uppercase tracking-tight mb-4">{point.title}</h3>
                       <p className={`text-sm font-medium leading-relaxed ${theme === "white" ? "text-black/50" : "text-white/50"}`}>
                           {point.desc}
                       </p>
                   </motion.div>
               ))}
           </div>
        </div>
      </section>

      {/* Brands & Community */}
      <section className="py-24 px-6 md:px-12 bg-black/[0.02] border-t border-current/5">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                   <h2 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter mb-8 leading-none">BRANDS</h2>
                   <div className="grid grid-cols-2 gap-4">
                       {[1,2,3,4].map(i => (
                           <div key={i} className={`aspect-[3/2] rounded-3xl border flex items-center justify-center p-8 bg-white grayscale hover:grayscale-0 transition-all duration-500 shadow-sm hover:shadow-xl ${theme === "white" ? "border-black/5" : "border-white/5"}`}>
                               <img src="/logo.png" alt={`Brand ${i}`} className="w-full h-full object-contain opacity-40 hover:opacity-100 transition-opacity" />
                           </div>
                       ))}
                   </div>
                </div>
                <div className="space-y-10">
                    <p className="text-2xl md:text-3xl font-serif font-black italic leading-tight">
                        "{t.mission_page.events_desc_start} <span className="text-[#14A3C7]">{t.mission_page.events_highlight}</span> {t.mission_page.events_desc_end}"
                    </p>
                    <div className={`p-10 rounded-[3rem] border ${theme === "white" ? "bg-[#14A3C7]/5 border-[#14A3C7]/10" : "bg-[#14A3C7]/10 border-[#14A3C7]/20"}`}>
                         <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#14A3C7] mb-4 block">Core Goal</span>
                         <p className="text-2xl font-serif font-black uppercase mb-6">{t.mission_page.sustainability_thread}</p>
                         <p className={`text-lg font-medium ${theme === "white" ? "text-black/60" : "text-white/60"}`}>{t.mission_page.commitment}</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
