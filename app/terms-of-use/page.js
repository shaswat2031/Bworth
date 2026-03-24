"use client";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, User, Scale, AlertTriangle, Eye, HelpCircle } from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function TermsOfUse() {
    const { theme } = useTheme();
    const content = t.terms_page;

    return (
        <main className={`min-h-screen transition-colors duration-500 ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#0A192F] text-white"}`}>
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 px-6 md:px-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#14A3C7] rounded-full blur-[120px]" />
                </div>
                
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-bold tracking-widest text-[10px] uppercase mb-16 px-4 py-2 rounded-full border border-current opacity-60 hover:opacity-100 transition-all group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        {t.common.back_home}
                    </Link>

                    <div>
                        <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-serif font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            {content.title} <br />
                            <span className="italic">{content.subtitle}</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Sections - 100% Static */}
            <section className="pb-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Acceptance Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <div className="sticky top-40 flex items-center gap-4 lg:flex-col lg:items-start">
                                <div className="w-12 h-12 rounded-xl bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h2 className="text-2xl font-serif font-black uppercase tracking-tight leading-none">
                                    {content.accept_title}
                                </h2>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className={`p-8 md:p-12 rounded-[2.5rem] border text-lg font-light leading-relaxed opacity-80 ${theme === "white" ? "bg-white border-black/5 shadow-xl shadow-black/[0.01]" : "bg-white/5 border-white/5"}`}>
                                {content.accept_desc}
                            </div>
                        </div>
                    </div>

                    {/* Use of Site */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <div className="sticky top-40 flex items-center gap-4 lg:flex-col lg:items-start">
                                <div className="w-12 h-12 rounded-xl bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                    <Eye size={24} />
                                </div>
                                <h2 className="text-2xl font-serif font-black uppercase tracking-tight leading-none">
                                    {content.use_title}
                                </h2>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className={`p-8 md:p-12 rounded-[2.5rem] border text-lg font-light leading-relaxed opacity-80 ${theme === "white" ? "bg-white border-black/5 shadow-xl shadow-black/[0.01]" : "bg-white/5 border-white/5"}`}>
                                {content.use_desc}
                            </div>
                        </div>
                    </div>

                    {/* User Account */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <div className="sticky top-40 flex items-center gap-4 lg:flex-col lg:items-start">
                                <div className="w-12 h-12 rounded-xl bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                    <User size={24} />
                                </div>
                                <h2 className="text-2xl font-serif font-black uppercase tracking-tight leading-none">
                                    {content.user_title}
                                </h2>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className={`p-8 md:p-12 rounded-[2.5rem] border text-lg font-light leading-relaxed opacity-80 ${theme === "white" ? "bg-white border-black/5 shadow-xl shadow-black/[0.01]" : "bg-white/5 border-white/5"}`}>
                                {content.user_desc}
                            </div>
                        </div>
                    </div>

                    {/* Intellectual Property */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <div className="sticky top-40 flex items-center gap-4 lg:flex-col lg:items-start">
                                <div className="w-12 h-12 rounded-xl bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                    <Shield size={24} />
                                </div>
                                <h2 className="text-2xl font-serif font-black uppercase tracking-tight leading-none">
                                    {content.ip_title}
                                </h2>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className={`p-8 md:p-12 rounded-[2.5rem] border text-lg font-light leading-relaxed opacity-80 ${theme === "white" ? "bg-white border-black/5 shadow-xl shadow-black/[0.01]" : "bg-white/5 border-white/5"}`}>
                                {content.ip_desc}
                            </div>
                        </div>
                    </div>

                    {/* Limitation of Liability */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <div className="sticky top-40 flex items-center gap-4 lg:flex-col lg:items-start">
                                <div className="w-12 h-12 rounded-xl bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                    <Scale size={24} />
                                </div>
                                <h2 className="text-2xl font-serif font-black uppercase tracking-tight leading-none">
                                    {content.limit_title}
                                </h2>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className={`p-8 md:p-12 rounded-[2.5rem] border text-lg font-light leading-relaxed opacity-80 ${theme === "white" ? "bg-white border-black/5 shadow-xl shadow-black/[0.01]" : "bg-white/5 border-white/5"}`}>
                                {content.limit_desc}
                            </div>
                        </div>
                    </div>

                    {/* Changes to Terms */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <div className="sticky top-40 flex items-center gap-4 lg:flex-col lg:items-start">
                                <div className="w-12 h-12 rounded-xl bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                    <AlertTriangle size={24} />
                                </div>
                                <h2 className="text-2xl font-serif font-black uppercase tracking-tight leading-none">
                                    {content.change_title}
                                </h2>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className={`p-8 md:p-12 rounded-[2.5rem] border text-lg font-light leading-relaxed opacity-80 ${theme === "white" ? "bg-blue-50/50 border-blue-100 italic" : "bg-blue-900/10 border-blue-500/20 italic"}`}>
                                {content.change_desc}
                            </div>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="pt-12 border-t border-current/10">
                        <div className={`p-12 md:p-16 rounded-[4rem] border flex flex-col md:flex-row items-center justify-between gap-12 ${theme === "white" ? "bg-white border-black/5" : "bg-white/5 border-white/10"}`}>
                            <div className="space-y-4 text-center md:text-left">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Documentation Info</p>
                                <p className="text-xl font-serif italic text-[#14A3C7]">{content.last_updated}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-full bg-[#14A3C7]/10 text-[#14A3C7]">
                                    <HelpCircle size={32} />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold opacity-80">Need clarification?</p>
                                    <p className="text-sm opacity-50 italic">Reach out to our legal team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
