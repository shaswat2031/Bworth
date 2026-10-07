"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Truck,
  Recycle,
  FileCheck2,
  Building2,
  Hotel,
  GraduationCap,
  Home,
  Store,
  Factory,
  CalendarCheck,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  BarChart3,
  ShieldCheck,
  Send,
  Archive,
} from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

// 8 Accepted Bulk Textile Streams
const bulkCategories = [
  {
    icon: Building2,
    title: "Employee Uniforms",
    desc: "Used corporate workwear, field uniforms, and branded apparel from offices and enterprises.",
    tag: "CORPORATE",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/30",
    img: "/b2b_brand_growth.jpg",
  },
  {
    icon: Hotel,
    title: "Hotel Linen & Towels",
    desc: "Retired bedsheets, duvets, bath towels, and hospitality textiles from hotels and resorts.",
    tag: "HOSPITALITY",
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/30",
    img: "/bworth_box_clean.jpg",
  },
  {
    icon: GraduationCap,
    title: "School Uniforms",
    desc: "Outgrown and surplus uniforms collected from educational institutions and academies.",
    tag: "EDUCATION",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    img: "/step_buy_sustainable.jpg",
  },
  {
    icon: Home,
    title: "Societies & Offices",
    desc: "Wardrobe cleanout drives and clothing donation collections across gated communities and IT parks.",
    tag: "RESIDENTIAL & IT",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10 border-cyan-500/30",
    img: "/step_doorstep_pickup.jpg",
  },
  {
    icon: Store,
    title: "Retail Deadstock",
    desc: "Unsold inventory, sample stock, minor defect pieces, and seasonal apparel from fashion retailers.",
    tag: "RETAIL & BRANDS",
    color: "text-purple-500",
    bg: "bg-purple-500/10 border-purple-500/30",
    img: "/bworth_logistics_box.jpg",
  },
  {
    icon: Factory,
    title: "Factory Textile Waste",
    desc: "Fabric roll ends, cutting scraps, garment overruns, and industrial textile surplus.",
    tag: "MANUFACTURING",
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/30",
    img: "/b2b_circular_system.jpg",
  },
  {
    icon: CalendarCheck,
    title: "Event & Drive Collections",
    desc: "Apparel from marathons, corporate sustainability weeks, donation drives, and cultural fests.",
    tag: "EVENTS & DRIVES",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/30",
    img: "/offering_01.jpg",
  },
  {
    icon: HeartHandshake,
    title: "NGO Clothing Stock",
    desc: "Bulk clothing received by charitable trusts and NGOs requiring ethical sorting and routing support.",
    tag: "NGOs & TRUSTS",
    color: "text-teal-500",
    bg: "bg-teal-500/10 border-teal-500/30",
    img: "/offering_02.jpg",
  },
];

// 5-Step Process
const processSteps = [
  {
    step: "01",
    title: "Share Your Requirement",
    desc: "Tell BWorth what type of clothing or textile waste you have, approximate quantity/weight, and pickup location.",
    tag: "",
  },
  {
    step: "02",
    title: "Bulk Pickup Scheduled",
    desc: "BWorth arranges dedicated vehicle logistics and doorstep pickup based on your volume, timeline, and city location.",
    tag: "",
  },
  {
    step: "03",
    title: "Sorting & Evaluation",
    desc: "Collected garments are catalogued and graded based on fabric condition, fiber composition, and the optimal next journey.",
    tag: "",
  },
  {
    step: "04",
    title: "Responsible Routing",
    desc: "Items move transparently toward Reuse (second-life wear), Upcycling (artisan utility products), or Fibre Recycling.",
    tag: "",
  },
  {
    step: "05",
    title: "Impact & ESG Report",
    desc: "Receive an official certificate and sustainability summary detailing total weight collected, diverted landfill waste, and CO2 savings.",
    tag: "",
  },
];

export default function B2BPage() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  // Form State
  const [formData, setFormData] = useState({
    orgName: "",
    contactPerson: "",
    phone: "",
    email: "",
    city: "",
    textileType: "Employee Uniforms",
    approxQuantity: "500 kg",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleCategoryClick = (catName) => {
    setFormData((prev) => ({ ...prev, textileType: catName }));
    const formElem = document.getElementById("request-pickup");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/b2b-pickup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Pickup submission error:", err);
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 font-sans ${isWhite ? "bg-[#f8fdff] text-slate-900" : "bg-[#061217] text-white"
        }`}
    >
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1: HERO & VALUE PROPOSITION
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#14A3C7]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
                <Truck size={16} className="shrink-0" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                  B2B BULK TEXTILE RECOVERY & PICKUP
                </span>
              </div>

              <h1
                className={`text-3xl sm:text-5xl md:text-6xl font-sans font-black uppercase tracking-tight leading-[1.08] break-words ${isWhite ? "text-slate-950" : "text-white"
                  }`}
              >
                Bulk Clothes Pickup for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0092B3] via-[#14A3C7] to-[#0284c7] block sm:inline">
                  Businesses & Institutions
                </span>
              </h1>

              <p
                className={`text-base sm:text-lg font-medium leading-relaxed ${isWhite ? "text-slate-700" : "text-slate-300"
                  }`}
              >
                From uniforms and surplus garments to textile waste, BWorth helps organisations collect, sort, and responsibly route clothing at scale.
              </p>

              {/* Highlight Box */}
              <div
                className={`p-5 sm:p-6 rounded-2xl border ${isWhite
                  ? "bg-slate-100/90 border-slate-200 text-slate-800"
                  : "bg-white/5 border-white/10 text-slate-200"
                  }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#14A3C7]/20 text-[#14A3C7] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#14A3C7] uppercase tracking-wide">
                      Have clothes or textile waste in bulk?
                    </h4>
                    <p className="text-sm sm:text-base text-inherit font-medium mt-1 leading-relaxed">
                      We collect it from your location and manage the next step through certified reuse, upcycling, and zero-landfill recycling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <a
                  href="#request-pickup"
                  className="px-8 py-4 rounded-full bg-[#14A3C7] hover:bg-[#0f8ea5] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-[#14A3C7]/25 flex items-center gap-2 group transition-all cursor-pointer"
                >
                  <span>Request Bulk Pickup</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#how-it-works"
                  className={`px-7 py-4 rounded-full border font-black text-sm uppercase tracking-wider transition-all ${isWhite
                    ? "bg-white text-slate-800 border-slate-300 hover:bg-slate-100 shadow-sm"
                    : "bg-white/5 text-slate-200 border-white/15 hover:bg-white/10"
                    }`}
                >
                  How It Works
                </a>
              </div>
            </motion.div>

            {/* Right Card: 3 Core Benefits Showcase with Live Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 w-full"
            >
              <div
                className={`p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden space-y-6 ${isWhite
                  ? "bg-white border-slate-200 shadow-slate-200/60"
                  : "bg-[#091b26] border-white/15 shadow-black/80"
                  }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-current/10">
                  <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#14A3C7]">
                    THE BWORTH B2B ADVANTAGE
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-bold">
                    PAN-INDIA
                  </span>
                </div>

                {/* 3 Pillars */}
                <div className="space-y-4">
                  {[
                    {
                      icon: Truck,
                      title: "Easy Bulk Collection",
                      desc: "One pickup solution for large clothing volumes with scheduled doorstep logistics.",
                      color: "text-blue-500",
                      bg: "bg-blue-500/10",
                    },
                    {
                      icon: Recycle,
                      title: "Responsible Textile Recovery",
                      desc: "Systematic sorting and routing based on garment condition, fabric, and material.",
                      color: "text-emerald-500",
                      bg: "bg-emerald-500/10",
                    },
                    {
                      icon: FileCheck2,
                      title: "Trackable Impact",
                      desc: "Auditable collection records, recovery certificates, and environmental impact reporting.",
                      color: "text-amber-500",
                      bg: "bg-amber-500/10",
                    },
                  ].map((b, idx) => {
                    const Icon = b.icon;
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-all ${isWhite
                          ? "bg-slate-50 border-slate-200/80 hover:bg-slate-100/80"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                          }`}
                      >
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${b.bg} ${b.color}`}
                        >
                          <Icon size={20} />
                        </div>
                        <div className="space-y-1">
                          <h3
                            className={`text-sm sm:text-base font-bold uppercase tracking-tight ${isWhite ? "text-slate-900" : "text-white"
                              }`}
                          >
                            {b.title}
                          </h3>
                          <p
                            className={`text-xs sm:text-sm leading-relaxed font-normal ${isWhite ? "text-slate-600" : "text-slate-300"
                              }`}
                          >
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-3 border-t border-current/10 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-[#14A3C7]" />
                    <span>Zero Landfill Commitment</span>
                  </div>
                  <span className="text-[#14A3C7]">No Volume Upper Cap</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: WHAT BWORTH COLLECTS IN BULK (8 CARDS)
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="streams"
        className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-y ${isWhite ? "bg-slate-50/70 border-slate-200" : "bg-[#07151e] border-white/10"
          }`}
      >
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              ACCEPTED TEXTILE STREAMS
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${isWhite ? "text-slate-950" : "text-white"
                }`}
            >
              What BWorth Collects in Bulk
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed ${isWhite ? "text-slate-600" : "text-slate-300"
                }`}
            >
              We manage bulk textile surplus across diverse business sectors, institutions, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {bulkCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleCategoryClick(item.title)}
                  className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 transition-all shadow-xs hover:shadow-lg hover:-translate-y-1 cursor-pointer group ${isWhite
                    ? "bg-white border-slate-200/90 hover:border-[#14A3C7]/50 hover:bg-slate-50/50"
                    : "bg-[#091a24] border-white/10 hover:border-[#14A3C7]/40 hover:bg-[#0c2230]"
                    }`}
                >
                  <div className="space-y-3">
                    {/* Header: Icon & Category Tag */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border ${item.bg} ${item.color}`}
                      >
                        <Icon size={20} />
                      </div>
                      <span
                        className={`text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${isWhite
                          ? "bg-slate-100 border-slate-200 text-slate-700"
                          : "bg-white/5 border-white/10 text-slate-300"
                          }`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3
                      className={`text-lg sm:text-xl font-black uppercase tracking-tight ${isWhite ? "text-slate-900 group-hover:text-[#14A3C7]" : "text-white group-hover:text-[#14A3C7]"
                        } transition-colors`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${isWhite ? "text-slate-600" : "text-slate-300"
                        }`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-current/10 flex items-center justify-between text-xs sm:text-sm font-bold text-[#14A3C7]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="shrink-0" />
                      <span>Eligible for Bulk Pickup</span>
                    </div>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3: HOW IT WORKS (5-STEP SIMPLE JOURNEY)
      ══════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-12 sm:space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              STREAMLINED WORKFLOW
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${isWhite ? "text-slate-950" : "text-white"
                }`}
            >
              How Bulk Pickup Works
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed ${isWhite ? "text-slate-600" : "text-slate-300"
                }`}
            >
              From initial dispatch to impact reporting — a clean 5-step operational flow designed for organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((s, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 ${isWhite
                  ? "bg-white border-slate-200/90 shadow-xs"
                  : "bg-[#091a24] border-white/10"
                  }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#14A3C7] font-mono">
                      {s.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${isWhite ? "bg-[#14A3C7]/10 text-[#14A3C7]" : "bg-[#14A3C7]/20 text-[#14A3C7]"
                        }`}
                    >
                      <Layers size={18} />
                    </div>
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-black uppercase tracking-tight ${isWhite ? "text-slate-900" : "text-white"
                      }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${isWhite ? "text-slate-600" : "text-slate-300"
                      }`}
                  >
                    {s.desc}
                  </p>
                </div>

                <span
                  className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg uppercase tracking-wide inline-block w-fit ${isWhite ? "bg-slate-100 text-slate-800" : "bg-white/10 text-slate-200"
                    }`}
                >
                  {s.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Responsible Routing Callout Bar */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border text-center space-y-4 ${isWhite
              ? "bg-gradient-to-r from-cyan-50 via-slate-50 to-emerald-50 border-slate-200"
              : "bg-gradient-to-r from-[#0a2230] via-[#091b26] to-[#0a2920] border-white/10"
              }`}
          >
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              CIRCULAR DESTINATIONS
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg font-black uppercase">
              <span className="px-4 py-2 rounded-xl bg-blue-500/15 text-blue-500 border border-blue-500/30">
                01. Reuse & Second-Life
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-4 py-2 rounded-xl bg-purple-500/15 text-purple-500 border border-purple-500/30">
                02. Artisan Upcycling
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-4 py-2 rounded-xl bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                03. Fiber-to-Fiber Recycling
              </span>
            </div>
            <p
              className={`text-sm sm:text-base font-medium max-w-2xl mx-auto ${isWhite ? "text-slate-600" : "text-slate-300"
                }`}
            >
              Every kilogram of textile collected is digitally audited so zero fabric ends up in landfills.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5: QUICK BULK PICKUP REQUEST FORM
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="request-pickup"
        className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t ${isWhite ? "bg-slate-50 border-slate-200" : "bg-[#06141c] border-white/10"
          }`}
      >
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#14A3C7]">
              SCHEDULE YOUR DISPATCH
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-sans font-black uppercase tracking-tight ${isWhite ? "text-slate-950" : "text-white"
                }`}
            >
              Request Bulk Clothes Pickup
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed ${isWhite ? "text-slate-600" : "text-slate-300"
                }`}
            >
              Share your details below. Our B2B logistics team will connect within 24 hours with a pickup timeline and plan.
            </p>
          </div>

          <div
            className={`p-6 sm:p-10 rounded-3xl border shadow-xl ${isWhite ? "bg-white border-slate-200" : "bg-[#091b26] border-white/15"
              }`}
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-black uppercase ${isWhite ? "text-slate-900" : "text-white"
                    }`}
                >
                  Pickup Request Received!
                </h3>
                <p
                  className={`text-base sm:text-lg max-w-md mx-auto ${isWhite ? "text-slate-600" : "text-slate-300"
                    }`}
                >
                  Thank you, <strong>{formData.contactPerson || "Partner"}</strong>. Our B2B team has received your requirement for <strong>{formData.textileType}</strong> and will reach out at <strong>{formData.phone || formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-[#14A3C7] text-white font-bold text-sm uppercase tracking-wider cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Organization Name */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-bold uppercase tracking-wider ${isWhite ? "text-slate-700" : "text-slate-300"
                        }`}
                    >
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Corp / Grand Hotel"
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border text-base font-medium outline-none transition-all ${isWhite
                        ? "bg-slate-50 border-slate-300 focus:border-[#14A3C7] focus:bg-white text-slate-900"
                        : "bg-white/5 border-white/15 focus:border-[#14A3C7] text-white"
                        }`}
                    />
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-bold uppercase tracking-wider ${isWhite ? "text-slate-700" : "text-slate-300"
                        }`}
                    >
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.contactPerson}
                      onChange={(e) =>
                        setFormData({ ...formData, contactPerson: e.target.value })
                      }
                      className={`w-full px-4 py-3.5 rounded-xl border text-base font-medium outline-none transition-all ${isWhite
                        ? "bg-slate-50 border-slate-300 focus:border-[#14A3C7] focus:bg-white text-slate-900"
                        : "bg-white/5 border-white/15 focus:border-[#14A3C7] text-white"
                        }`}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-bold uppercase tracking-wider ${isWhite ? "text-slate-700" : "text-slate-300"
                        }`}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border text-base font-medium outline-none transition-all ${isWhite
                        ? "bg-slate-50 border-slate-300 focus:border-[#14A3C7] focus:bg-white text-slate-900"
                        : "bg-white/5 border-white/15 focus:border-[#14A3C7] text-white"
                        }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-bold uppercase tracking-wider ${isWhite ? "text-slate-700" : "text-slate-300"
                        }`}
                    >
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border text-base font-medium outline-none transition-all ${isWhite
                        ? "bg-slate-50 border-slate-300 focus:border-[#14A3C7] focus:bg-white text-slate-900"
                        : "bg-white/5 border-white/15 focus:border-[#14A3C7] text-white"
                        }`}
                    />
                  </div>

                  {/* City / Location */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-bold uppercase tracking-wider ${isWhite ? "text-slate-700" : "text-slate-300"
                        }`}
                    >
                      Pickup City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai / Delhi NCR / Bengaluru"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border text-base font-medium outline-none transition-all ${isWhite
                        ? "bg-slate-50 border-slate-300 focus:border-[#14A3C7] focus:bg-white text-slate-900"
                        : "bg-white/5 border-white/15 focus:border-[#14A3C7] text-white"
                        }`}
                    />
                  </div>

                  {/* Type of Textile */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-bold uppercase tracking-wider ${isWhite ? "text-slate-700" : "text-slate-300"
                        }`}
                    >
                      Type of Clothing / Textile *
                    </label>
                    <select
                      value={formData.textileType}
                      onChange={(e) =>
                        setFormData({ ...formData, textileType: e.target.value })
                      }
                      className={`w-full px-4 py-3.5 rounded-xl border text-base font-medium outline-none transition-all ${isWhite
                        ? "bg-slate-50 border-slate-300 focus:border-[#14A3C7] focus:bg-white text-slate-900"
                        : "bg-[#091b26] border-white/15 focus:border-[#14A3C7] text-white"
                        }`}
                    >
                      <option value="Employee Uniforms">Used Employee Uniforms</option>
                      <option value="Hotel Linen & Towels">Hotel Linen & Towels</option>
                      <option value="School Uniforms">School Uniforms</option>
                      <option value="Societies & Offices">Old Garments from Societies/Offices</option>
                      <option value="Retail Deadstock">Retail Deadstock / Damaged Stock</option>
                      <option value="Factory Textile Waste">Factory Textile Waste / Scraps</option>
                      <option value="Event & Drive Collections">Event or Donation-Drive Collections</option>
                      <option value="NGO Clothing Stock">NGO or Institutional Stock</option>
                      <option value="Other Bulk Textiles">Other Bulk Textiles</option>
                    </select>
                  </div>
                </div>

                {/* Approx Quantity */}
                <div className="space-y-2">
                  <label
                    className={`text-sm font-bold uppercase tracking-wider ${isWhite ? "text-slate-700" : "text-slate-300"
                      }`}
                  >
                    Approximate Quantity / Weight (e.g. 100 kg, 500 pcs, 2 tonnes)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ~250 kg or ~600 garments"
                    value={formData.approxQuantity}
                    onChange={(e) =>
                      setFormData({ ...formData, approxQuantity: e.target.value })
                    }
                    className={`w-full px-4 py-3.5 rounded-xl border text-base font-medium outline-none transition-all ${isWhite
                      ? "bg-slate-50 border-slate-300 focus:border-[#14A3C7] focus:bg-white text-slate-900"
                      : "bg-white/5 border-white/15 focus:border-[#14A3C7] text-white"
                      }`}
                  />
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <label
                    className={`text-sm font-bold uppercase tracking-wider ${isWhite ? "text-slate-700" : "text-slate-300"
                      }`}
                  >
                    Additional Details / Specific Pickup Timeline
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention any specific pickup dates, packaging state, or impact reporting requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl border text-base font-medium outline-none transition-all resize-none ${isWhite
                      ? "bg-slate-50 border-slate-300 focus:border-[#14A3C7] focus:bg-white text-slate-900"
                      : "bg-white/5 border-white/15 focus:border-[#14A3C7] text-white"
                      }`}
                  />
                </div>

                {/* Error Banner */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold flex items-center gap-2">
                    <span>⚠️ {submitError}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 rounded-2xl bg-[#14A3C7] hover:bg-[#0f8ea5] text-white font-black text-base uppercase tracking-wider shadow-lg shadow-[#14A3C7]/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send size={18} />
                  <span>{isSubmitting ? "Submitting Request..." : "Submit Bulk Pickup Request"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
