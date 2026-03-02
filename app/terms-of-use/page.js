"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, Lock } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function TermsOfUse() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const t = translations[language];

    return (
        <main
            className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
                }`}
        >
            <section className="relative pt-40 pb-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-12 group"
                    >
                        <ArrowLeft
                            size={16}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        {t.common.back_home}
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-[0.9] mb-12">
                            {t.terms_page.title} <br /> <span className="text-blue-500 italic">{t.terms_page.subtitle}</span>
                        </h1>
                    </motion.div>

                    <div
                        className={`space-y-12 text-lg leading-relaxed font-light ${theme === "white" ? "text-black/70" : "text-white/70"
                            }`}
                    >
                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.terms_page.accept_title}
                            </h2>
                            <p>{t.terms_page.accept_desc}</p>
                        </div>

                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.terms_page.use_title}
                            </h2>
                            <p>{t.terms_page.use_desc}</p>
                        </div>

                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.terms_page.user_title}
                            </h2>
                            <p>{t.terms_page.user_desc}</p>
                        </div>

                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.terms_page.ip_title}
                            </h2>
                            <p>{t.terms_page.ip_desc}</p>
                        </div>

                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.terms_page.limit_title}
                            </h2>
                            <p>{t.terms_page.limit_desc}</p>
                        </div>

                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.terms_page.change_title}
                            </h2>
                            <p>{t.terms_page.change_desc}</p>
                        </div>

                        <div
                            className={`pt-12 border-t ${theme === "white"
                                ? "border-black/10"
                                : "border-white/10"
                                }`}
                        >
                            <p
                                className={`text-sm ${theme === "white"
                                    ? "text-black/40"
                                    : "text-white/40"
                                    }`}
                            >
                                {t.terms_page.last_updated}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
