"use client";
import { motion } from "framer-motion";
import { UploadCloud, Coins, ShoppingBag } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function FeatureSection() {
    const { theme } = useTheme();

    const features = [
        {
            icon: <UploadCloud size={40} strokeWidth={1.5} />,
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
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className={`w-8 h-[1px] ${theme === "white" ? "bg-[#14A3C7]" : "bg-white/40"}`}></span>
                            <span
                                className={`text-sm font-black tracking-[0.4em] uppercase ${theme === "white"
                                    ? "text-[#14A3C7]"
                                    : "text-white/60"
                                    }`}
                            >
                                {t.features.tech_fashion}
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className={`text-4xl sm:text-6xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-[0.9] ${theme === "white" ? "text-black" : "text-white"
                                }`}
                        >
                            {t.features.infrastructure.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 !== 0 && theme === "white" ? "text-[#14A3C7] italic block sm:inline" : "block sm:inline mr-4"}>
                                    {word}{" "}
                                </span>
                            ))}
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`text-xl md:text-2xl font-light max-w-sm leading-relaxed ${theme === "white" ? "text-black/60" : "text-white/50"
                            }`}
                    >
                        {t.features.desc}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.2 }}
                            whileHover={{ y: -12 }}
                            className={`group relative p-10 lg:p-14 rounded-[3.5rem] border transition-all duration-500 overflow-hidden ${theme === "white"
                                ? "bg-white border-black/[0.05] hover:border-[#14A3C7]/30 hover:shadow-[0_20px_50px_rgba(20,163,199,0.12)]"
                                : "bg-white/5 border-white/[0.05] hover:bg-white/10 hover:border-white/20"
                                }`}
                        >
                            {/* Large Step Background Number */}
                            <div className={`absolute -top-10 -right-10 text-[12rem] font-serif font-black leading-none opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.08] ${theme === "white" ? "text-black" : "text-white"}`}>
                                0{i + 1}
                            </div>

                            <div className="relative z-10">
                                <motion.div
                                    className={`mb-12 p-5 w-fit rounded-3xl transition-all duration-500 ${theme === "white"
                                        ? "bg-[#F8FAFC] text-black shadow-inner group-hover:bg-[#14A3C7] group-hover:text-white"
                                        : "bg-white/5 text-white group-hover:bg-white group-hover:text-black"
                                        }`}
                                    whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                                >
                                    {f.icon}
                                </motion.div>

                                <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-6 inline-flex items-center gap-2 ${theme === "white" ? "text-[#14A3C7]" : "text-white/40"}`}>
                                    <span className={`w-4 h-[2px] rounded-full ${theme === "white" ? "bg-[#14A3C7]" : "bg-white/40"}`}></span>
                                    Step 0{i + 1}
                                </div>

                                <h3
                                    className={`text-3xl md:text-4xl font-serif font-black uppercase mb-6 leading-tight transition-colors ${theme === "white"
                                        ? "text-black group-hover:text-[#14A3C7]"
                                        : "text-white"
                                        }`}
                                >
                                    {f.title}
                                </h3>

                                <p
                                    className={`text-lg font-medium leading-relaxed mb-8 transition-colors ${theme === "white"
                                        ? "text-black/50"
                                        : "text-white/60"
                                        }`}
                                >
                                    {f.desc}
                                </p>


                            </div>

                            {/* Corner Accent Decor */}
                            <div 
                                className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                                style={{
                                    background: `radial-gradient(circle at bottom right, ${f.accent}, transparent 70%)`
                                }}
                            ></div>
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
