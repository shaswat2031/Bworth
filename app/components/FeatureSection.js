"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Coins,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function FeatureSection() {
  const { theme } = useTheme();

  // The 3 Step Cards with truck stop positions at the START of each card (next to the logo)
  const features = [
    {
      stepTag: "Step 01 • Doorstep Pickup",
      icon: <Truck size={26} strokeWidth={2} />,
      title: t.features.buyback_title || "Book Doorstep Pickup",
      desc:
        t.features.buyback_desc ||
        "Book a doorstep pickup slot on the BWorth app to list and sell your unused clothes easily.",
      accent: "#14A3C7",
      accentDark: "#0284C7",
      badgeLight: "bg-sky-50 text-sky-900 border-sky-300 font-extrabold",
      badgeDark: "bg-sky-500/15 text-sky-300 border-sky-500/30 font-extrabold",
      perks: ["2-Minute App Booking", "Free Doorstep Collection", "Any Brand / Condition"],
      actionText: "Instant Pickup Dispatch",
    },
    {
      stepTag: "Step 02 • Instant Payback",
      icon: <Coins size={26} strokeWidth={2} />,
      title: t.features.events_title || "Earn Instant BWC Coins",
      desc:
        t.features.events_desc ||
        "Receive instant payback directly in your BWorth wallet as soon as clothes are collected (1 BWC Coin = ₹1 real value).",
      accent: "#F59E0B",
      accentDark: "#D97706",
      badgeLight: "bg-amber-50 text-amber-950 border-amber-300 font-extrabold",
      badgeDark: "bg-amber-500/15 text-amber-300 border-amber-500/30 font-extrabold",
      perks: ["1 BWC = ₹1 Guaranteed Value", "Direct Wallet Credit", "Zero Commission Fees"],
      actionText: "Instant Liquid Rewards",
    },
    {
      stepTag: "Step 03 • Redeem & Buy",
      icon: <ShoppingBag size={26} strokeWidth={2} />,
      title: t.features.marketplace_title || "Buy",
      desc:
        t.features.marketplace_desc ||
        "Use your earned BWC coins to buy new clothes directly on the BWorth platform, for a better planet.",
      accent: "#10B981",
      accentDark: "#047857",
      badgeLight: "bg-emerald-50 text-emerald-950 border-emerald-300 font-extrabold",
      badgeDark: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 font-extrabold",
      perks: ["Top Fashion Brand Partners", "100% Zero-Landfill Guarantee", "Traceable Carbon Credits"],
      actionText: "Circular Fashion Ecosystem",
    },
  ];

  // Starting positions at each card (next to the emoji/logo)
  const TRUCK_POSITIONS = [10.5, 44.0, 77.5];

  // Moving truck position & active step state
  const [activeStep, setActiveStep] = useState(0);
  const [truckPos, setTruckPos] = useState(TRUCK_POSITIONS[0]);
  const [isLooping, setIsLooping] = useState(false);
  const [isDriving, setIsDriving] = useState(false);

  // Auto-drive the truck smoothly from card start to card start
  const driveToNext = useCallback(() => {
    setActiveStep((prev) => {
      if (prev < 2) {
        const next = prev + 1;
        setIsDriving(true);
        setTruckPos(TRUCK_POSITIONS[next]);
        setTimeout(() => setIsDriving(false), 1000);
        return next;
      } else {
        // At Card 3: truck drives off the right edge, then loops smoothly back into Card 1
        setIsDriving(true);
        setIsLooping(true);
        setTruckPos(108); // Exit smoothly off-screen to the right

        setTimeout(() => {
          // Relocate invisibly to the left edge while off-screen
          setTruckPos(-8);
          setTimeout(() => {
            setIsLooping(false);
            setTruckPos(TRUCK_POSITIONS[0]); // Drive into Card 1's starting dock
            setTimeout(() => setIsDriving(false), 1000);
          }, 50);
        }, 900);

        return 0;
      }
    });
  }, [TRUCK_POSITIONS]);

  // Exactly 2 seconds stoppage at each card + 1 second drive duration = 3000ms interval
  useEffect(() => {
    const interval = setInterval(driveToNext, 3000);
    return () => clearInterval(interval);
  }, [driveToNext]);

  const selectCard = (index) => {
    setActiveStep(index);
    setIsDriving(true);
    setTruckPos(TRUCK_POSITIONS[index]);
    setTimeout(() => setIsDriving(false), 1000);
  };

  return (
    <section
      className={`py-18 md:py-24 px-6 md:px-12 relative overflow-hidden transition-colors duration-500 ${
        theme === "white" ? "bg-gradient-to-b from-[#f8fdff] via-slate-50 to-[#f3f9fc]" : "bg-black"
      }`}
    >
      {/* Ambient Radial Background Glows */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-96 h-96 bg-[#14A3C7]/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-96 h-96 bg-[#10B981]/10 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`text-3xl sm:text-4xl lg:text-5xl font-sans font-black uppercase tracking-tight leading-tight ${
                theme === "white" ? "text-slate-900" : "text-white"
              }`}
            >
              Sell Your Clothes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7] italic">
                Easily.
              </span>
            </motion.h2>
            <p
              className={`text-base sm:text-lg font-medium leading-relaxed ${
                theme === "white" ? "text-slate-600" : "text-slate-300"
              }`}
            >
              {t.features.desc ||
                "Give fashion a second life. Schedule a doorstep pickup, earn BWorth Coins, and buy."}
            </p>
          </div>
        </div>

        {/* ── THE 3 CARDS CONTAINER (With ample padding so borders never cut off) ─── */}
        <div className="relative py-4 -my-2">
          {/* Smooth Running Delivery Truck (parks at the START of each card next to the logo) */}
          <div
            className="absolute top-[68px] hidden md:block z-30 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${truckPos}%`,
              transition: isLooping
                ? truckPos < 0
                  ? "none"
                  : "left 900ms cubic-bezier(0.25, 0.1, 0.25, 1)"
                : "left 1000ms cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            <div className="relative flex flex-col items-center">
              {/* Realistic Driving Suspension Bounce (active while driving) */}
              <div className={isDriving ? "animate-[truckBounce_0.35s_infinite_alternate_ease-in-out]" : ""}>
                <svg viewBox="0 0 56 30" className="w-13 h-7 sm:w-14 sm:h-8 drop-shadow-md">
                  {/* Truck Cargo Box */}
                  <rect
                    x="2"
                    y="3"
                    width="34"
                    height="19"
                    rx="3"
                    className={theme === "white" ? "fill-slate-900" : "fill-white"}
                  />
                  {/* Eco Leaf Emblem on Cargo */}
                  <path
                    d="M17 11 C21 11 23 15 23 15 C23 15 19 17 16 15 C14.5 13.8 15 11 17 11 Z"
                    className="fill-[#14A3C7]"
                  />
                  {/* Cab Body */}
                  <path
                    d="M36 8 L47 8 L52 15 L52 22 L36 22 Z"
                    className={theme === "white" ? "fill-slate-900" : "fill-white"}
                  />
                  {/* Windshield */}
                  <path
                    d="M39 10 L45 10 L49 15 L39 15 Z"
                    className={theme === "white" ? "fill-sky-100" : "fill-slate-900"}
                  />
                  {/* Headlight */}
                  <rect x="51" y="17" width="2" height="3" rx="1" fill="#F59E0B" />

                  {/* Front Wheel with Spinning Spokes (active while driving) */}
                  <circle
                    cx="44"
                    cy="23.5"
                    r="4.2"
                    className={theme === "white" ? "fill-slate-950" : "fill-white"}
                  />
                  <g className={`origin-[44px_23.5px] ${isDriving ? "animate-[spin_0.5s_linear_infinite]" : ""}`}>
                    <circle cx="44" cy="23.5" r="2.2" className="fill-slate-400" />
                    <line x1="44" y1="21.3" x2="44" y2="25.7" stroke="white" strokeWidth="0.8" />
                    <line x1="41.8" y1="23.5" x2="46.2" y2="23.5" stroke="white" strokeWidth="0.8" />
                  </g>

                  {/* Rear Wheel with Spinning Spokes (active while driving) */}
                  <circle
                    cx="12"
                    cy="23.5"
                    r="4.2"
                    className={theme === "white" ? "fill-slate-950" : "fill-white"}
                  />
                  <g className={`origin-[12px_23.5px] ${isDriving ? "animate-[spin_0.5s_linear_infinite]" : ""}`}>
                    <circle cx="12" cy="23.5" r="2.2" className="fill-slate-400" />
                    <line x1="12" y1="21.3" x2="12" y2="25.7" stroke="white" strokeWidth="0.8" />
                    <line x1="9.8" y1="23.5" x2="14.2" y2="23.5" stroke="white" strokeWidth="0.8" />
                  </g>
                </svg>
              </div>

              {/* Driving Motion Shadow */}
              <div className="w-12 h-1.5 bg-black/20 dark:bg-black/40 rounded-full blur-[2px] mt-0.5" />
            </div>
          </div>

          {/* The 3 Cards in Clean 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-0">
            {features.map((f, i) => {
              const isCurrent = activeStep === i;

              return (
                <div
                  key={i}
                  onClick={() => selectCard(i)}
                  className={`group relative p-7 sm:p-8 rounded-3xl border-2 flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                    isCurrent
                      ? theme === "white"
                        ? "bg-white shadow-[0_20px_45px_rgba(20,163,199,0.18)] -translate-y-1"
                        : "bg-[#0c202e] shadow-[0_20px_45px_rgba(20,163,199,0.28)] -translate-y-1"
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

                  <div className="space-y-6 relative z-10">
                    {/* Top Row: Icon Container on Left + Truck Parking Dock at the Starting */}
                    <div className="flex items-center min-h-[52px]">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-13 h-13 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs shrink-0"
                          style={{
                            backgroundColor: `${f.accent}15`,
                            color: theme === "white" && f.accentDark ? f.accentDark : f.accent,
                            border: `1px solid ${f.accent}30`,
                          }}
                        >
                          {f.icon}
                        </div>

                        {/* Dedicated space for truck parking right by the icon/logo */}
                        <div className="w-14 h-8 shrink-0 hidden md:block" />
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="space-y-2.5">
                      <div
                        className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                          theme === "white" ? f.badgeLight : f.badgeDark
                        }`}
                      >
                        {f.stepTag}
                      </div>

                      <h3
                        className={`text-xl sm:text-2xl font-sans font-bold tracking-tight transition-colors ${
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
                        className={`text-xs sm:text-sm leading-relaxed font-medium ${
                          theme === "white" ? "text-slate-700" : "text-slate-200"
                        }`}
                      >
                        {f.desc}
                      </p>
                    </div>

                    {/* Perks Checklist */}
                    <div
                      className={`space-y-2.5 pt-3 border-t ${
                        theme === "white" ? "border-slate-200" : "border-white/10"
                      }`}
                    >
                      {f.perks.map((perk, pIdx) => (
                        <div
                          key={pIdx}
                          className={`flex items-center gap-2.5 text-xs sm:text-[13px] font-bold ${
                            theme === "white" ? "text-slate-900" : "text-white"
                          }`}
                        >
                          <CheckCircle2
                            size={16}
                            strokeWidth={2.5}
                            style={{
                              color: theme === "white" && f.accentDark ? f.accentDark : f.accent,
                            }}
                            className="shrink-0"
                          />
                          <span className="font-bold tracking-tight">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Ribbon */}
                  <div
                    className={`mt-6 pt-3.5 border-t flex items-center justify-between text-xs font-bold ${
                      theme === "white" ? "border-slate-200" : "border-white/10"
                    }`}
                    style={{
                      color: theme === "white" && f.accentDark ? f.accentDark : f.accent,
                    }}
                  >
                    <span className="uppercase tracking-wider font-black text-[11px] sm:text-xs">
                      {f.actionText}
                    </span>
                    <ArrowRight
                      size={15}
                      strokeWidth={2.5}
                      className="group-hover:translate-x-1.5 transition-transform opacity-90 group-hover:opacity-100"
                    />
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
