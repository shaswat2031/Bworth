"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
import { Sparkles, ShieldCheck, Coins, Truck, Check, PackageCheck } from "lucide-react";

const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },  
};

const cardItem = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const offerings = [
  {
    number: "01",
    title: "Zero Logistic Charges",
    subtitle: "100% Covered by BWorth",
    description:
      "No shipping cost, no hidden logistics fees, and no extra burden on your brand. We handle everything so you can stay focused on designing and growing your label.",
    points: ["No shipping cost", "No hidden logistics fees", "No extra burden on your brand"],
    image: "/offering_01.jpg",
    brandTag: "BWORTH LOGISTICS",
    brandDetail: "100% Covered Express Delivery",
    icon: Truck,
  },
  {
    number: "02",
    title: "Money Back Guarantee",
    subtitle: "Because we believe in your growth",
    description:
      "We do not just promise visibility. We commit to results. If your products do not sell through our platform, BWorth offers a Money Back Guarantee.",
    points: ["Zero risk for your brand", "Complete confidence in partnering with us", "When you grow, we grow"],
    image: "/offering_02.jpg",
    brandTag: "BWORTH GROWTH PROMISE",
    brandDetail: "100% Money Back Protection",
    icon: Coins,
  },
  {
    number: "03",
    title: "Assurance Guarantee",
    subtitle: "On returned articles",
    description:
      "We solve the biggest returned-product concern with a fully in-house logistics process, strict quality control, and end-to-end accountability.",
    points: ["Fully in-house logistics process", "Strict quality control", "Returned articles stay authentic & unchanged"],
    image: "/offering_03.jpg",
    brandTag: "BWORTH QUALITY ASSURANCE",
    brandDetail: "Authentic Return Guarantee",
    icon: ShieldCheck,
  },
];

export default function BrandOfferingsSection() {
  const { theme } = useTheme();
  const isLight = theme === "white";

  return (
    <section
      className={`relative overflow-hidden transition-colors ${
        isLight ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-14 md:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
            <Sparkles size={16} />
            <span className="text-xs font-black uppercase tracking-widest">FOR FASHION BRANDS</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tight leading-[0.95] ${
            isLight ? "text-slate-900" : "text-white"
          }`}>
            Dear Fashion Brands, what does <span className="text-[#14A3C7] italic">BWorth</span> offer you?
          </h2>
          <div className="w-24 h-1 bg-[#14A3C7] mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {offerings.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.article
                key={item.number}
                variants={cardItem}
                className={`relative rounded-[2.5rem] border overflow-hidden backdrop-blur-xl shadow-xl transition-all duration-500 hover:scale-[1.01] ${
                  isLight
                    ? "bg-white border-slate-200 text-slate-900 shadow-slate-200/60"
                    : "bg-[#081822] border-white/15 text-white shadow-black/80"
                }`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Content */}
                  <div className="p-8 pb-0 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black ${
                        isLight ? "bg-[#14A3C7]/10 text-[#14A3C7]" : "bg-white/10 text-white"
                      }`}>
                        {item.number}
                      </div>

                      <div className={`px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                        isLight ? "bg-slate-100 border-slate-300 text-slate-600" : "bg-white/10 border-white/15 text-slate-300"
                      }`}>
                        OFFERING
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-black uppercase tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-black uppercase tracking-wider text-[#14A3C7]">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* High Quality Photo Banner with Official BWorth Overlay */}
                  <div className="relative w-full h-72 my-4 group/img overflow-hidden border-y border-slate-200 dark:border-white/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                    
                    {/* Dark/Light Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07151d]/85 via-[#07151d]/20 to-[#07151d]/50" />

                    {/* Center Prominent Mandatory BWORTH Branding Stamp Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                      {item.number === "01" && (
                        <div className="px-5 py-2.5 rounded-2xl bg-[#08151c]/90 backdrop-blur-md border-2 border-[#14A3C7] shadow-[0_0_25px_rgba(20,163,199,0.6)] flex items-center gap-3">
                          <Image src="/logo.png" alt="BWorth Logo" width={26} height={26} className="brightness-0 invert object-contain" />
                          <div className="text-left">
                            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#14A3C7] leading-none mb-1">BWORTH LOGISTICS</p>
                            <p className="text-[9px] font-extrabold uppercase tracking-widest text-white/90 leading-none">ZERO CHARGES • 100% COVERED</p>
                          </div>
                        </div>
                      )}
                      {item.number === "02" && (
                        <div className="px-5 py-2.5 rounded-2xl bg-[#08151c]/90 backdrop-blur-md border-2 border-amber-400/90 shadow-[0_0_25px_rgba(251,191,36,0.5)] flex items-center gap-3">
                          <Image src="/logo.png" alt="BWorth Logo" width={26} height={26} className="brightness-0 invert object-contain" />
                          <div className="text-left">
                            <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 leading-none mb-1">BWORTH GROWTH PROMISE</p>
                            <p className="text-[9px] font-extrabold uppercase tracking-widest text-white/90 leading-none">100% MONEY BACK GUARANTEE</p>
                          </div>
                        </div>
                      )}
                      {item.number === "03" && (
                        <div className="px-5 py-2.5 rounded-2xl bg-[#08151c]/90 backdrop-blur-md border-2 border-emerald-400/90 shadow-[0_0_25px_rgba(52,211,153,0.5)] flex items-center gap-3">
                          <Image src="/logo.png" alt="BWorth Logo" width={26} height={26} className="brightness-0 invert object-contain" />
                          <div className="text-left">
                            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-400 leading-none mb-1">BWORTH QUALITY ASSURANCE</p>
                            <p className="text-[9px] font-extrabold uppercase tracking-widest text-white/90 leading-none">AUTHENTIC RETURN GUARANTEE</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Top Right Official BWorth Logo Watermark Badge */}
                    <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-[#07151d]/90 backdrop-blur-md border border-[#14A3C7]/40 text-white flex items-center gap-1.5 shadow-lg">
                      <Image src="/logo.png" alt="BWorth" width={16} height={16} className="brightness-0 invert" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#14A3C7]">BWORTH</span>
                    </div>

                    {/* Bottom Floating BWorth Branded Tag Pill */}
                    <div className="absolute bottom-3 left-3 z-20 px-3.5 py-2 rounded-xl bg-[#07151d]/95 backdrop-blur-md border border-[#14A3C7]/40 text-white flex items-center gap-2.5 shadow-xl">
                      <div className="w-6 h-6 rounded-lg bg-[#14A3C7] text-white flex items-center justify-center shrink-0">
                        <IconComp size={14} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-[#14A3C7] leading-none mb-0.5">
                          {item.brandTag}
                        </p>
                        <p className="text-[11px] font-bold text-white leading-none">
                          {item.brandDetail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="p-8 pt-2 space-y-6 flex-1 flex flex-col justify-between">
                    <p className={`text-sm md:text-base leading-relaxed ${
                      isLight ? "text-slate-700" : "text-slate-300"
                    }`}>
                      {item.description}
                    </p>

                    <div className="space-y-3">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#14A3C7]/20 text-[#14A3C7] flex items-center justify-center shrink-0">
                            <Check size={13} className="stroke-[3]" />
                          </div>
                          <span className={`text-xs sm:text-sm font-bold ${
                            isLight ? "text-slate-800" : "text-slate-200"
                          }`}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mt-16 rounded-3xl border px-8 py-8 text-center shadow-xl ${
            isLight
              ? "bg-slate-900 text-white border-slate-800"
              : "bg-[#081822] text-white border-white/20"
          }`}
        >
          <p className="text-base md:text-xl font-serif font-black leading-relaxed max-w-4xl mx-auto">
            We build a safer, lower-risk partnership model for fashion brands with logistics, resale assurance, and growth support aligned to your store experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}