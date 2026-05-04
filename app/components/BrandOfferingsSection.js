"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

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
    image: "/offering_01.png",
  },
  {
    number: "02",
    title: "Money Back Guarantee",
    subtitle: "Because we believe in your growth",
    description:
      "We do not just promise visibility. We commit to results. If your products do not sell through our platform, BWorth offers a Money Back Guarantee.",
    points: ["Zero risk for your brand", "Complete confidence in partnering with us", "When you grow, we grow"],
    image: "/offering_02.png",
  },
  {
    number: "03",
    title: "Assurance Guarantee",
    subtitle: "On returned articles",
    description:
      "We solve the biggest returned-product concern with a fully in-house logistics process, strict quality control, and end-to-end accountability.",
    points: ["Fully in-house logistics process", "Strict quality control", "Returned articles stay authentic & unchanged"],
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BrandOfferingsSection() {
  const { theme } = useTheme();
  const isLight = theme === "white";

  return (
    <section
      className={`relative overflow-hidden transition-colors ${
        isLight ? "bg-[#F8FAFC] text-black" : "bg-[#0b7fa6] text-white"
      }`}
    >
      <motion.div
        aria-hidden="true"
        className={`absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl ${isLight ? "bg-[#14A3C7]/10" : "bg-white/10"}`}
        animate={{ y: [0, 18, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className={`absolute bottom-0 -right-20 h-80 w-80 rounded-full blur-3xl ${isLight ? "bg-black/5" : "bg-black/15"}`}
        animate={{ y: [0, -16, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-14 md:mb-20"
        >
          <p className={`text-xs md:text-sm uppercase tracking-[0.4em] mb-5 ${isLight ? "text-[#14A3C7]" : "text-black/70"}`}>
            For Fashion Brands
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-[0.95]">
            Dear Fashion Brands, what does BWorth offer you?
          </h2>
          <motion.div
            aria-hidden="true"
            className="w-28 h-1 mx-auto mt-8 rounded-full bg-linear-to-r from-transparent via-[#14A3C7] to-transparent shadow-[0_0_18px_rgba(20,163,199,0.9)] relative overflow-hidden"
            animate={{ opacity: [0.82, 1, 0.82], scaleX: [0.97, 1, 0.97], filter: ['drop-shadow(0 0 6px rgba(20,163,199,0.35))','drop-shadow(0 0 20px rgba(20,163,199,0.55))','drop-shadow(0 0 6px rgba(20,163,199,0.35))'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scaleX: 1.04, filter: 'drop-shadow(0 0 30px rgba(20,163,199,0.75))' }}
          >
            {/* moving shine */}
            <motion.div
              aria-hidden="true"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 100%)' }}
              className="absolute left-[-40%] top-0 h-full w-1/3 rounded-full opacity-90"
              animate={{ x: ['-140%', '140%'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {offerings.map((item, index) => (
            <motion.article
              key={item.number}
              variants={cardItem}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -0.5 : 0.5, scale: 1.015 }}
              className={`relative rounded-[3rem] border overflow-hidden backdrop-blur-xl shadow-[0_40px_100px_-40px_rgba(0,0,0,0.3)] transition-all duration-700 ${
                isLight
                  ? "bg-white border-[#14A3C7]/10 hover:border-[#14A3C7]/30 hover:shadow-[0_40px_80px_-20px_rgba(20,163,199,0.15)]"
                  : "bg-[#075975]/40 border-white/10 hover:bg-[#075975]/60 hover:border-white/20 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.5)]"
              }`}
            >
              {/* Glossy Shining Sweep Effect */}
              <motion.div 
                className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div 
                  className="w-1/2 h-full skew-x-[-25deg] bg-linear-to-r from-transparent via-white/20 to-transparent blur-xl"
                />
              </motion.div>

              {/* Stylized Background Number with Animation */}
              <motion.div 
                className={`absolute top-12 right-0 text-[10rem] font-serif font-black leading-none pointer-events-none select-none ${isLight ? "text-black" : "text-white"}`}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.03, 0.06, 0.03],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {item.number}
              </motion.div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Top Content */}
                <div className="p-8 md:p-10 pb-0">
                  <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center border text-xl font-black ${isLight ? "border-[#14A3C7]/20 bg-[#14A3C7]/5 text-[#14A3C7]" : "border-white/10 bg-white/5 text-white"}`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: isLight ? "rgba(20, 163, 199, 0.15)" : "rgba(255, 255, 255, 0.15)" 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {item.number}
                  </motion.div>
                    <motion.div 
                      className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${isLight ? "border-black/5 bg-black/5 text-black/60" : "border-white/10 bg-white/5 text-white/60"}`}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      Offering
                    </motion.div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-tight leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className={`text-sm md:text-base font-bold uppercase tracking-wider mb-4 ${isLight ? "text-[#14A3C7]" : "text-[#14A3C7]/80"}`}>
                    {item.subtitle}
                  </p>
                </div>

                {/* Bleed Image */}
                {item.image && (
                  <div className="relative w-full h-80 mt-2 mb-2 group/img shadow-inner overflow-hidden border-y border-black/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/10 opacity-60" />
                  </div>
                )}

                {/* Bottom Content */}
                <div className="p-8 md:p-10 pt-2">
                  <p className={`text-base md:text-lg leading-relaxed mb-6 ${isLight ? "text-black/70" : "text-white/70"}`}>
                    {item.description}
                  </p>

                  <div className="space-y-4">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-4 group/point">
                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] transition-colors ${isLight ? "bg-[#14A3C7]/10 text-[#14A3C7] group-hover/point:bg-[#14A3C7] group-hover/point:text-white" : "bg-white/10 text-white group-hover/point:bg-white group-hover/point:text-black"}`}>
                          ✔
                        </div>
                        <span className={`text-sm md:text-base font-medium leading-relaxed ${isLight ? "text-black/80" : "text-white/80"}`}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-linear-to-r from-transparent via-[#14A3C7] to-transparent opacity-40" />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`mt-14 md:mt-20 rounded-[2.5rem] border px-6 md:px-10 py-8 md:py-10 text-center ${
            isLight ? "bg-black text-white border-black/10" : "bg-white text-black border-black/10"
          }`}
        >
          <p className="text-lg md:text-2xl font-serif font-bold leading-relaxed max-w-4xl mx-auto">
            We build a safer, lower-risk partnership model for fashion brands with logistics, resale assurance, and growth support aligned to your store experience.
          </p>
        </motion.div>
      </div>

      <div className={`absolute inset-0 pointer-events-none ${isLight ? "bg-[radial-gradient(circle_at_top,rgba(20,163,199,0.09),transparent_50%)]" : "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_50%)]"}`} />
    </section>
  );
}