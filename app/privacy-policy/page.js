"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function PrivacyPolicy() {
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
                            {t.privacy_page.title} <br /> <span className="text-blue-500 italic">{t.privacy_page.subtitle}</span>
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
                                {t.privacy_page.intro_title}
                            </h2>
                            <p>{t.privacy_page.intro_desc}</p>
                        </div>

                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.privacy_page.info_title}
                            </h2>
                            <p>{t.privacy_page.info_desc}</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                                <li>
                                    <strong>{t.privacy_page.info_id}</strong>{" "}
                                    {t.privacy_page.info_id_desc}
                                </li>
                                <li>
                                    <strong>{t.privacy_page.info_contact}</strong>{" "}
                                    {t.privacy_page.info_contact_desc}
                                </li>
                                <li>
                                    <strong>{t.privacy_page.info_trans}</strong>{" "}
                                    {t.privacy_page.info_trans_desc}
                                </li>
                                <li>
                                    <strong>{t.privacy_page.info_tech}</strong>{" "}
                                    {t.privacy_page.info_tech_desc}
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.privacy_page.use_title}
                            </h2>
                            <p>{t.privacy_page.use_desc}</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                                <li>{t.privacy_page.use_1}</li>
                                <li>{t.privacy_page.use_2}</li>
                                <li>{t.privacy_page.use_3}</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.privacy_page.security_title}
                            </h2>
                            <p>{t.privacy_page.security_desc}</p>
                        </div>

                        <div className="space-y-4">
                            <h2
                                className={`text-2xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"
                                    }`}
                            >
                                {t.privacy_page.contact_title}
                            </h2>
                            <p>
                                {t.privacy_page.contact_desc}{" "}
                                <a
                                    href="mailto:info@bworth.co.in"
                                    className="text-blue-500 underline decoration-blue-500/30 underline-offset-4"
                                >
                                    info@bworth.co.in
                                </a>
                                .
                            </p>
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
                                {t.privacy_page.last_updated}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
