"use client";
import { motion } from "framer-motion";
import { Truck, Coins, ShoppingBag } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function FeatureSection() {
    const { theme } = useTheme();

    const features = [
        {
            icon: <Truck size={40} strokeWidth={1.5} />,
            title: t.features.buyback_title,
            desc: t.features.buyback_desc,
            accent: "#14A3C7"
        },
        {
            icon: <Coins size={40} strokeWidth={1.5} />,
            title: t.features.events_title,
            desc: t.features.events_desc,
            accent: "#FBBF24" // Golden for coins
        },
        {
            icon: <ShoppingBag size={40} strokeWidth={1.5} />,
            title: t.features.marketplace_title,
            desc: t.features.marketplace_desc,
            accent: "#10B981" // Green for sustainability/recycling
        }
    ];

    return (
        <section
            className={`py-24 px-6 md:px-12 relative overflow-hidden transition-colors duration-700 ${theme === "white"
                ? "bg-[#F8FAFC]"
                : "bg-black"
                }`}
        >
            {/* Ambient Background Glows */}
            <div className={`absolute top-0 left-1/4 w-96 h-96 blur-[120px] rounded-full opacity-20 pointer-events-none ${theme === "white" ? "bg-[#14A3C7]" : "bg-[#14A3C7]/40"}`}></div>
            <div className={`absolute bottom-0 right-1/4 w-96 h-96 blur-[120px] rounded-full opacity-10 pointer-events-none ${theme === "white" ? "bg-blue-200" : "bg-blue-900/40"}`}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                    <div className="max-w-2xl space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#14A3C7]/30 bg-[#14A3C7]/10"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#14A3C7] animate-ping" />
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#14A3C7]">
                                HOW IT WORKS
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className={`text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold uppercase tracking-tight leading-tight ${
                                theme === "white" ? "text-black" : "text-white"
                            }`}
                        >
                            Sell Your Clothes <br />
                            <span className="text-[#14A3C7] italic">Easily.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={`text-base sm:text-lg font-medium max-w-md leading-relaxed ${
                            theme === "white" ? "text-black/70" : "text-white/70"
                        }`}
                    >
                        {t.features.desc}
                    </motion.p>
                </div>

                {/* 3 Step Cards with Interactive Flow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -10 }}
                            className={`group relative p-8 sm:p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between shadow-2xl overflow-hidden ${
                                theme === "white"
                                    ? "bg-white border-black/10 hover:border-[#14A3C7]/40 shadow-black/5"
                                    : "bg-[#0d1f2b] border-white/15 hover:border-white/30 shadow-black/40"
                            }`}
                        >
                            {/* Subtle Ambient Step Accent Glow */}
                            <div 
                                className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none blur-3xl"
                                style={{ backgroundColor: f.accent }}
                            />

                            <div className="space-y-6 relative z-10">
                                {/* Top Row: Colored Icon Box + Large Step Badge */}
                                <div className="flex items-center justify-between">
                                    <div 
                                        className="p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110 shadow-lg"
                                        style={{ backgroundColor: `${f.accent}15`, color: f.accent }}
                                    >
                                        {f.icon}
                                    </div>
                                    <span 
                                        className="text-xl font-mono font-black tracking-widest px-4 py-1.5 rounded-full border shadow-inner"
                                        style={{ borderColor: `${f.accent}40`, color: f.accent, backgroundColor: `${f.accent}10` }}
                                    >
                                        0{i + 1}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 opacity-75">
                                        {i === 0 && "Step 01 • Doorstep Pickup"}
                                        {i === 1 && "Step 02 • Instant Payback"}
                                        {i === 2 && "Step 03 • Redeem & Buy"}
                                    </div>
                                    <h3 className={`text-xl sm:text-2xl font-sans font-bold uppercase tracking-tight ${
                                        theme === "white" ? "text-black" : "text-white"
                                    }`}>
                                        {f.title}
                                    </h3>
                                    <p className={`text-base sm:text-lg leading-relaxed font-medium ${
                                        theme === "white" ? "text-black/75" : "text-white/80"
                                    }`}>
                                        {f.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .feature-card:hover {
                    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.1);
                }
            `}</style>
        </section>
    );
}
