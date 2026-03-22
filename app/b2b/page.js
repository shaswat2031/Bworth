"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Building2, School, Globe, Users } from "lucide-react";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function B2BEngagement() {
    const { theme } = useTheme();

    const offerings = [
        {
            icon: <Building2 size={28} />,
            title: t.b2b_page.deadstock_title,
            desc: t.b2b_page.deadstock_desc
        },
        {
            icon: <School size={28} />,
            title: t.b2b_page.recycling_title,
            desc: t.b2b_page.recycling_desc
        },
        {
            icon: <Globe size={28} />,
            title: t.b2b_page.csr_title,
            desc: t.b2b_page.csr_desc
        },
        {
            icon: <Users size={28} />,
            title: t.b2b_page.emp_engagement_title,
            desc: t.b2b_page.emp_engagement_desc
        }
    ];

    return (
        <main
            className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
                }`}
        >
            <section
                className={`relative pt-40 pb-24 px-6 md:px-12 transition-colors ${theme === "white" ? "bg-black/[0.02]" : ""
                    }`}
            >
                <div className="max-w-7xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-12 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        {t.common.back_home}
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={`text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter mb-8 md:mb-12 leading-[0.85]`}>
                            {t.b2b_page.title_b2b} <br />
                            <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.b2b_page.title_engagement}</span>
                        </h1>
                        <p
                            className={`text-xl md:text-3xl font-serif italic max-w-4xl mb-8 ${theme === "white" ? "text-black/80" : "text-white/90"}`}
                        >
                            {t.b2b_page.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section
                className={`py-24 px-6 md:px-12 border-t transition-colors ${theme === "white" ? "border-black/5" : "border-white/5"
                    }`}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    <div className="lg:col-span-7">
                        <div className="space-y-12">
                            <p
                                className={`text-2xl md:text-4xl font-serif font-medium leading-tight ${theme === "white" ? "text-black/90" : "text-white"
                                    }`}
                            >
                                {t.b2b_page.offerings_title}
                            </p>

                            <p
                                className={`text-lg md:text-xl font-light leading-relaxed ${theme === "white" ? "text-black/50" : "text-white"
                                    }`}
                            >
                                {t.b2b_page.desc}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                                {offerings.map((point, i) => (
                                    <div
                                        key={i}
                                        className={`p-8 rounded-3xl border transition-all duration-500 ${theme === "white"
                                            ? "bg-black/5 border-black/5"
                                            : "bg-white/5 border-white/5"
                                            }`}
                                    >
                                        <div className={`mb-6 transition-colors ${theme === "white" ? "text-black" : "text-white"}`}>
                                            {point.icon}
                                        </div>
                                        <h3 className="text-xl font-serif font-bold uppercase mb-3">
                                            {point.title}
                                        </h3>
                                        <p
                                            className={`text-sm transition-colors uppercase tracking-wider font-bold ${theme === "white" ? "text-black/40" : "text-white"
                                                }`}
                                        >
                                            {point.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 hidden lg:block"></div>

                    <div className="lg:col-span-4">
                        <div
                            className={`p-10 border rounded-[3rem] backdrop-blur-xl sticky top-40 ${theme === "white"
                                ? "border-[#14A3C7]/20 bg-[#14A3C7]/5"
                                : "border-[#14A3C7]/30 bg-[#14A3C7]/5"
                                }`}
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-black mb-6 block">
                                {t.b2b_page.cta_title}
                            </span>
                            <p className={`text-2xl font-serif font-black uppercase mb-8 italic ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}>
                                {t.b2b_page.cta_desc}
                            </p>

                            <Link
                                href="/contact-us"
                                className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
                            >
                                {t.b2b_page.contact_btn || "Contact Us"}
                            </Link>

                            <div
                                className={`w-full h-[1px] my-8 ${theme === "white" ? "bg-black/10" : "bg-white/10"
                                    }`}
                            ></div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-black">
                                #CircularEconomy
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}
