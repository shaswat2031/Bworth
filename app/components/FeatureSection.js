"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Coins,
  ArrowRight,
  Sparkles,
  CalendarCheck,
  ShoppingBag,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function FeatureSection() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  // 4 Step Flow: Sell Clothes Easily & Buy New Clothes
  const features = [
    {
      stepNum: "01",
      stepTag: "01 • Book & Gather",
      icon: <CalendarCheck size={19} strokeWidth={2.5} />,
      title: "Book Slot & Gather Old Clothes",
      desc: "Choose a convenient pickup slot on the BWorth app in under 2 minutes and gather your unused clothes in any bag or box.",
      video: "/1.mp4",
      fallbackVideo: "/1.mp4",
      poster: "/step_3d_01_hd.png",
      accent: "#10B981",
      accentDark: "#047857",
      badgeLight: "bg-emerald-50 text-emerald-950 border-emerald-300 font-extrabold",
      badgeDark: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-extrabold",
      stat: "2-Min App Booking",
      actionText: "Book Doorstep Slot",
    },
    {
      stepNum: "02",
      stepTag: "02 • Free Pickup",
      icon: <Truck size={19} strokeWidth={2.5} />,
      title: "Free Partner Pickup",
      desc: "Our friendly verified partner arrives right at your doorstep to collect, weigh, and handle everything 100% hassle-free.",
      video: "/2.mp4",
      fallbackVideo: "/2.mp4",
      poster: "/step_doorstep_pickup.jpg",
      accent: "#0284C7",
      accentDark: "#0369A1",
      badgeLight: "bg-sky-50 text-sky-900 border-sky-300 font-extrabold",
      badgeDark: "bg-sky-500/15 text-sky-300 border-sky-500/30 font-extrabold",
      stat: "Free Doorstep Collection",
      actionText: "Doorstep Collection",
    },
    {
      stepNum: "03",
      stepTag: "03 • Earn BWC",
      icon: <Coins size={19} strokeWidth={2.5} />,
      title: "Earn Instant BWC Coins",
      desc: "Instant BWC coins are credited directly to your BWorth wallet (1 BWC = ₹1 cash value) with zero commission fees.",
      video: "/3.mp4",
      fallbackVideo: "/3.mp4",
      poster: "/step_instant_coins.jpg",
      accent: "#F59E0B",
      accentDark: "#D97706",
      badgeLight: "bg-amber-50 text-amber-950 border-amber-300 font-extrabold",
      badgeDark: "bg-amber-500/15 text-amber-300 border-amber-500/30 font-extrabold",
      stat: "1 BWC = ₹1 Real Value",
      actionText: "Instant Coin Payout",
    },
    {
      stepNum: "04",
      stepTag: "04 • Shop On App",
      icon: <ShoppingBag size={19} strokeWidth={2.5} />,
      title: "Order New Clothes on BWorth App",
      desc: "Use your earned BWC coins directly on the BWorth app to order fresh, stylish fashion collections and complete the circular loop.",
      video: "/4.mp4",
      fallbackVideo: "/4.mp4",
      poster: "/step_buy_sustainable.jpg",
      accent: "#8B5CF6",
      accentDark: "#6D28D9",
      badgeLight: "bg-purple-50 text-purple-950 border-purple-300 font-extrabold",
      badgeDark: "bg-purple-500/15 text-purple-300 border-purple-500/30 font-extrabold",
      stat: "Shop on BWorth App",
      actionText: "Order on BWorth App",
    },
  ];

  // Active card index state
  const [activeStep, setActiveStep] = useState(0);
  const selectCard = (index) => setActiveStep(index);

  // Autoplay videos when user scrolls into the section, pause when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRefs.current.forEach((video) => {
              if (video) {
                video.play().catch(() => {});
              }
            });
          } else {
            videoRefs.current.forEach((video) => {
              if (video) {
                video.pause();
              }
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-18 md:py-24 px-6 md:px-12 relative overflow-hidden transition-colors duration-500 ${
        theme === "white" ? "bg-gradient-to-b from-[#f8fdff] via-slate-50 to-[#f3f9fc]" : "bg-black"
      }`}
    >
      {/* Ambient Radial Background Glows */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-96 h-96 bg-[#14A3C7]/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/10 blur-[130px] rounded-full" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 sm:mb-12">
          <div className="max-w-5xl space-y-3.5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`text-2xl sm:text-4xl lg:text-5xl font-sans font-black uppercase tracking-tight leading-tight ${
                theme === "white" ? "text-slate-900" : "text-white"
              }`}
            >
              <span>Sell Clothes Easily </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
                & Buy New Clothes.
              </span>
            </motion.h2>
            <p
              className={`text-base sm:text-lg font-medium leading-relaxed max-w-3xl ${
                theme === "white" ? "text-slate-600" : "text-slate-300"
              }`}
            >
              Give fashion a second life. Book a slot, hand over old clothes, earn BWorth Coins (1 BWC = ₹1), and use them to buy fresh styles.
            </p>
          </div>
        </div>


        {/* ── THE 4 VISUAL-FIRST STEP CARDS (With Clean 3D Studio Mockups & Connector Line) ─── */}
        <div className="relative">
          {/* Subtle Horizontal Dashed Road Connector Line behind cards */}
          <div className="hidden xl:block absolute top-[110px] inset-x-16 border-t-2 border-dashed border-sky-300/50 dark:border-white/15 pointer-events-none z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
            {features.map((f, i) => {
              const isCurrent = activeStep === i;

              return (
                <div
                  key={i}
                  onClick={() => selectCard(i)}
                  className={`group relative rounded-3xl border-2 flex flex-col justify-between overflow-hidden transition-all duration-500 cursor-pointer ${
                    isCurrent
                      ? theme === "white"
                        ? "bg-white shadow-[0_20px_45px_rgba(20,163,199,0.18)] -translate-y-2"
                        : "bg-[#0c202e] shadow-[0_20px_45px_rgba(20,163,199,0.28)] -translate-y-2"
                      : theme === "white"
                      ? "bg-white/95 border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-slate-300"
                      : "bg-[#0c1f2c] border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:border-white/20"
                  }`}
                  style={{
                    borderColor: isCurrent ? f.accent : undefined,
                  }}
                >
                  {/* Subtle Corner Step Accent Glow on Active */}
                  <div
                    className="absolute -top-16 -right-16 w-36 h-36 rounded-full transition-opacity duration-500 pointer-events-none blur-2xl"
                    style={{
                      backgroundColor: f.accent,
                      opacity: isCurrent ? 0.25 : 0,
                    }}
                  />

                  {/* ── VIDEO VISUAL CONTAINER (Plays automatically when section is in view) ── */}
                  <div className="w-full aspect-[16/11] relative overflow-hidden bg-slate-950 flex items-center justify-center">
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={f.poster}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    >
                      <source src={f.video} type="video/mp4" />
                      <source src={f.fallbackVideo} type="video/mp4" />
                    </video>

                    {/* Subtle top & bottom gradient overlays for readability of chips */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                    {/* Top-Right Glowing Step Icon Pill */}
                    <div
                      className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/20 shadow-xs group-hover:scale-110 transition-transform text-white"
                      style={{ color: f.accent }}
                    >
                      {f.icon}
                    </div>

                    {/* Bottom Stat Chip */}
                    <div className="absolute bottom-3 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-xs">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: f.accent }} />
                      <span>{f.stat}</span>
                    </div>
                  </div>

                  {/* ── CARD BODY (Concise, Clean Text) ── */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4 relative z-10">
                    <div className="space-y-2.5">
                      <h3
                        className={`text-lg sm:text-xl font-sans font-bold tracking-tight transition-colors leading-snug ${
                          theme === "white"
                            ? isCurrent
                              ? "text-slate-900"
                              : "text-slate-900 group-hover:text-[#14A3C7]"
                            : isCurrent
                            ? "text-white"
                            : "text-white group-hover:text-cyan-300"
                        }`}
                      >
                        {f.title}
                      </h3>

                      <p
                        className={`text-xs sm:text-[13px] leading-relaxed font-medium ${
                          theme === "white" ? "text-slate-600" : "text-slate-300"
                        }`}
                      >
                        {f.desc}
                      </p>
                    </div>

                    {/* Bottom Action Ribbon */}
                    <div
                      className={`pt-3.5 border-t flex items-center justify-between text-xs font-bold transition-colors ${
                        theme === "white" ? "border-slate-100" : "border-white/10"
                      }`}
                      style={{
                        color: theme === "white" && f.accentDark ? f.accentDark : f.accent,
                      }}
                    >
                      <span className="uppercase tracking-wider font-extrabold text-[11px] sm:text-xs">
                        {f.actionText}
                      </span>
                      <ArrowRight
                        size={15}
                        strokeWidth={2.5}
                        className="group-hover:translate-x-1.5 transition-transform opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
