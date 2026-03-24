"use client";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Eye, Lock, Database, Phone, MessageSquare, Terminal, HelpCircle } from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function PrivacyPolicy() {
    const { theme } = useTheme();
    const content = t.privacy_page;

    return (
        <main className={`min-h-screen transition-colors duration-500 ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#0A192F] text-white"}`}>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500 rounded-full blur-[120px]" />
                </div>
                
                <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
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
            <section className="pb-24 px-6 md:px-12">
                <div className="max-w-5xl mx-auto space-y-16">
                    {/* Introduction */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                <ShieldCheck size={20} />
                            </div>
                            <h2 className="text-2xl font-serif font-black uppercase tracking-widest">{content.intro_title}</h2>
                        </div>
                        <div className={`p-10 rounded-[3rem] border text-lg font-light leading-relaxed opacity-80 ${theme === "white" ? "bg-white border-black/5" : "bg-white/5 border-white/5"}`}>
                            {content.intro_desc}
                        </div>
                    </div>

                    {/* Information We Collect */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                <Database size={20} />
                            </div>
                            <h2 className="text-2xl font-serif font-black uppercase tracking-widest">{content.info_title}</h2>
                        </div>
                        <p className="text-xl font-light opacity-60 leading-relaxed max-w-3xl">{content.info_desc}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: content.info_id, desc: content.info_id_desc, icon: <Lock /> },
                                { title: content.info_contact, desc: content.info_contact_desc, icon: <Phone /> },
                                { title: content.info_trans, desc: content.info_trans_desc, icon: <MessageSquare /> },
                                { title: content.info_tech, desc: content.info_tech_desc, icon: <Terminal /> }
                            ].map((item, i) => (
                                <div key={i} className={`p-10 rounded-[2.5rem] border transition-all hover:scale-[1.02] ${theme === "white" ? "bg-white border-black/5 shadow-xl shadow-black/[0.01]" : "bg-white/5 border-white/5"}`}>
                                    <div className="text-[#14A3C7] mb-6">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="opacity-70 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How We Use Your Data */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                <Eye size={20} />
                            </div>
                            <h2 className="text-2xl font-serif font-black uppercase tracking-widest">{content.use_title}</h2>
                        </div>
                        <div className="space-y-8">
                            <p className="text-xl opacity-60 leading-relaxed">{content.use_desc}</p>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {[content.use_1, content.use_2, content.use_3].map((use, i) => (
                                    <div key={i} className={`p-8 rounded-[2rem] border relative overflow-hidden ${theme === "white" ? "bg-black/[0.01] border-black/5" : "bg-white/[0.02] border-white/5 shadow-2xl shadow-black/20"}`}>
                                        <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-8xl italic">0{i+1}</div>
                                        <p className="text-sm md:text-base leading-relaxed opacity-80 z-10 relative">{use}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Data Security */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                <Lock size={20} />
                            </div>
                            <h2 className="text-2xl font-serif font-black uppercase tracking-widest">{content.security_title}</h2>
                        </div>
                        <div className={`p-10 md:p-12 rounded-[3.5rem] border italic text-xl font-light leading-relaxed ${theme === "white" ? "bg-green-50/50 border-green-100 text-green-800" : "bg-green-900/10 border-green-500/20 text-green-400"}`}>
                            {content.security_desc}
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-12 pt-16 border-t border-current/10">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#14A3C7]/10 flex items-center justify-center text-[#14A3C7]">
                                <Phone size={20} />
                            </div>
                            <h2 className="text-2xl font-serif font-black uppercase tracking-widest">{content.contact_title}</h2>
                        </div>
                        
                        <div className={`p-12 md:p-16 rounded-[4rem] border space-y-12 ${theme === "white" ? "bg-white border-black/5 shadow-2xl" : "bg-white/5 border-white/5"}`}>
                            <div className="space-y-8 text-xl font-light opacity-80 leading-relaxed max-w-4xl">
                                <p>{content.contact_desc}</p>
                                <div className="pt-12">
                                    <p className="text-base font-black uppercase tracking-[0.3em] opacity-40 mb-4">Privacy Support</p>
                                    <a 
                                        href="mailto:info@bworth.co.in"
                                        className="text-3xl md:text-5xl font-serif font-black italic hover:text-[#14A3C7] transition-colors underline decoration-[#14A3C7]/30 underline-offset-[12px]"
                                    >
                                        info@bworth.co.in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="pt-24 border-t border-current/10">
                        <div className={`p-12 md:p-16 rounded-[4rem] border flex flex-col md:flex-row items-center justify-between gap-12 ${theme === "white" ? "bg-white border-black/5" : "bg-white/5 border-white/10"}`}>
                            <div className="space-y-4 text-center md:text-left">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Policy Update</p>
                                <p className="text-xl font-serif italic text-[#14A3C7]">{content.last_updated}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-full bg-[#14A3C7]/10 text-[#14A3C7]">
                                    <HelpCircle size={32} />
                                </div>
                                <div className="space-y-1 text-left">
                                    <p className="font-bold opacity-80 underline underline-offset-4 decoration-[#14A3C7]/50">Data Access Request</p>
                                    <p className="text-sm opacity-50 italic">Download your data records.</p>
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
