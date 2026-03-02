"use client";
import { motion } from "framer-motion";
import { Recycle, Zap, ShieldCheck, TrendingUp, Heart, Users, Cloud, Building2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function FeatureSection() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const t = translations[language];

    const features = [
        {
            icon: <TrendingUp size={32} />,
            title: t.features.marketplace_title,
            desc: t.features.marketplace_desc
        },
        {
            icon: <Recycle size={32} />,
            title: t.features.buyback_title,
            desc: t.features.buyback_desc
        },
        {
            icon: <ShieldCheck size={32} />,
            title: t.features.events_title,
            desc: t.features.events_desc
        },
        {
            icon: <Heart size={32} />,
            title: t.features.social_cause_title,
            desc: t.features.social_cause_desc
        },
        {
            icon: <Users size={32} />,
            title: t.features.referral_title,
            desc: t.features.referral_desc
        },
        {
            icon: <Cloud size={32} />,
            title: t.features.carbon_credits_title,
            desc: t.features.carbon_credits_desc
        }
    ];

    return (
        <section
            className={`py-24 px-6 md:px-12 backdrop-blur-sm border-y transition-colors ${theme === "white"
                ? "bg-black/[0.02] border-black/[0.05]"
                : "bg-white/[0.01] border-white/[0.05]"
                }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
                    <div className="max-w-2xl">
                        <span
                            className={`text-sm font-bold tracking-widest block mb-4 uppercase ${theme === "white"
                                ? "text-black/40"
                                : "text-white/60"
                                }`}
                        >
                            {t.features.tech_fashion}
                        </span>
                        <h2
                            className={`text-2xl sm:text-4xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-none ${theme === "white" ? "text-black" : "text-white"
                                }`}
                        >
                            {language === 'en' ? (
                                <>
                                    The infrastructure <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>for circularity.</span>
                                </>
                            ) : t.features.infrastructure}
                        </h2>
                    </div>
                    <p
                        className={`font-medium max-w-sm leading-relaxed ${theme === "white" ? "text-black/50" : "text-white/60"
                            }`}
                    >
                        {t.features.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`p-10 border transition-all duration-500 group ${theme === "white"
                                ? "border-black/[0.05] hover:bg-black/[0.05]"
                                : "border-white/[0.05] hover:bg-white"
                                } ${i === 0
                                    ? "md:rounded-l-3xl"
                                    : i === features.length - 1
                                        ? "md:rounded-r-3xl"
                                        : ""
                                }`}
                        >
                            <motion.div
                                className={`mb-8 p-3 w-fit rounded-lg transition-all ${theme === "white"
                                    ? "bg-black/[0.05] text-black group-hover:bg-black group-hover:text-white"
                                    : "bg-white/[0.05] text-white group-hover:bg-white group-hover:text-black"
                                    }`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                {f.icon}
                            </motion.div>
                            <h3
                                className={`text-2xl font-serif font-bold uppercase mb-4 transition-colors ${theme === "white"
                                    ? "text-[#14A3C7] group-hover:text-blue-500"
                                    : "text-white group-hover:text-black"
                                    }`}
                            >
                                {f.title}
                            </h3>
                            <p
                                className={`text-sm font-medium leading-relaxed transition-colors ${theme === "white"
                                    ? "text-black/50 group-hover:text-black/70"
                                    : "text-white/60 group-hover:text-black"
                                    }`}
                            >
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
