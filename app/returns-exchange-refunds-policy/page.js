"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Truck, CreditCard, RotateCcw, AlertCircle, CheckCircle2, Package, HelpCircle, FileText } from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function ReturnsPolicy() {
    const { theme } = useTheme();
    const content = t.returns_page;

    return (
        <main className={`min-h-screen transition-colors duration-500 ${theme === "white" ? "bg-white text-black" : "bg-[#0A192F] text-white"}`}>
            {/* Minimal Hero */}
            <section className="pt-24 pb-8 px-6 md:px-12 border-b border-black/5">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/policies"
                        className="inline-flex items-center gap-2 font-bold tracking-widest text-[10px] uppercase mb-8 opacity-40 hover:opacity-100 transition-all group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Policies
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-tight mb-6">
                        {content.title} <br />
                        <span className="text-[#14A3C7]">{content.subtitle}</span>
                    </h1>
                    <p className="text-lg font-light leading-relaxed opacity-70 border-l-4 border-[#14A3C7] pl-6 py-2">
                        {content.intro}
                    </p>
                </div>
            </section>

            {/* Document Flow Content */}
            <section className="py-12 px-6 md:px-12">
                <div className="max-w-4xl mx-auto space-y-16">
                    
                    {/* Returns Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-[#14A3C7]">
                            <RotateCcw size={20} />
                            <h2 className="text-2xl font-serif font-black uppercase tracking-tight">{content.returns_title}</h2>
                        </div>
                        <div className="space-y-4 text-base font-light leading-relaxed opacity-80">
                            <p>{content.returns_desc_1}</p>
                            <p>{content.returns_desc_2}</p>
                            <div className={`p-6 rounded-2xl border italic ${theme === "white" ? "bg-blue-50/50 border-blue-100" : "bg-blue-900/10 border-blue-500/20"}`}>
                                {content.returns_desc_3}
                            </div>
                        </div>
                    </div>

                    {/* Return Options */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 text-[#14A3C7]">
                            <AlertCircle size={20} />
                            <h2 className="text-2xl font-serif font-black uppercase tracking-tight">{content.options_title}</h2>
                        </div>
                        <p className="opacity-80">{content.options_desc}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={`p-8 rounded-3xl border ${theme === "white" ? "bg-black/5 border-black/5" : "bg-white/5 border-white/5"}`}>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                    All Issue Easy Return
                                </h3>
                                <ul className="space-y-3 text-sm opacity-70">
                                    {content.all_return_points.map((p, i) => (
                                        <li key={i} className="flex gap-2">• <span>{p}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`p-8 rounded-3xl border ${theme === "white" ? "bg-black/5 border-black/5" : "bg-white/5 border-white/5"}`}>
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <AlertCircle size={18} className="text-orange-500" />
                                    Wrong/Defect Item Return
                                </h3>
                                <ul className="space-y-3 text-sm opacity-70">
                                    {content.wrong_return_points.map((p, i) => (
                                        <li key={i} className="flex gap-2">• <span>{p}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Cost of Return Table */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 text-[#14A3C7]">
                            <Truck size={20} />
                            <h2 className="text-2xl font-serif font-black uppercase tracking-tight">{content.cost_title}</h2>
                        </div>
                        <div className="space-y-6 opacity-80 text-sm">
                            <p>{content.cost_desc_1}</p>
                            <p>{content.cost_desc_2}</p>
                        </div>
                        
                        <div className={`overflow-hidden rounded-2xl border ${theme === "white" ? "border-black/10 bg-white" : "border-white/10 bg-[#0A192F]"}`}>
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className={theme === "white" ? "bg-black/5" : "bg-white/5"}>
                                    <tr>
                                        <th className="p-4 font-black uppercase tracking-widest opacity-40">{content.cost_table_header[0]}</th>
                                        <th className="p-4 font-black uppercase tracking-widest opacity-40">{content.cost_table_header[1]}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    {content.cost_table_body.map((row, i) => (
                                        <tr key={i}>
                                            <td className="p-4 font-bold text-[#14A3C7] align-top">{row.category}</td>
                                            <td className="p-4">
                                                <ul className="list-disc list-inside opacity-70">
                                                    {row.reasons.map((r, j) => <li key={j}>{r}</li>)}
                                                </ul>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Exchange Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-[#14A3C7]">
                            <RefreshCw size={20} />
                            <h2 className="text-2xl font-serif font-black uppercase tracking-tight">{content.exchange_title}</h2>
                        </div>
                        <div className="space-y-4 opacity-80 text-base">
                            <p>{content.exchange_desc_1}</p>
                            <p>{content.exchange_desc_2}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div>
                                    <p className="font-black text-[10px] uppercase tracking-widest mb-3 opacity-40">{content.exchange_reason_title}</p>
                                    <ul className="space-y-2 text-sm">
                                        {content.exchange_reasons.map((r, i) => <li key={i} className="flex gap-2 text-red-500">• <span className="text-current opacity-80">{r}</span></li>)}
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-black text-[10px] uppercase tracking-widest mb-3 opacity-40">{content.exchange_not_accept_title}</p>
                                    <ul className="space-y-2 text-sm">
                                        {content.exchange_not_accept_points.map((r, i) => <li key={i} className="flex gap-2 text-red-500">• <span className="text-current opacity-80">{r}</span></li>)}
                                    </ul>
                                </div>
                            </div>
                            <p className="italic font-serif border-l-2 border-[#14A3C7] pl-4">{content.exchange_window}</p>
                            <p>{content.exchange_cost_desc}</p>
                            <p className="font-black uppercase tracking-widest text-[10px] text-[#14A3C7]">{content.exchange_limit}</p>
                        </div>
                    </div>

                    {/* How to Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-black/5">
                        <div className="space-y-6">
                            <h3 className="text-xl font-serif font-black uppercase flex items-center gap-2">
                                <Package size={20} className="text-[#14A3C7]" />
                                {content.how_return_title}
                            </h3>
                            <div className="space-y-4">
                                {content.how_return_steps.map((s, i) => (
                                    <div key={i} className="flex gap-4 text-xs">
                                        <span className="font-black opacity-20">{i+1}.</span>
                                        <p className="opacity-70 leading-relaxed">{s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-serif font-black uppercase flex items-center gap-2">
                                <RefreshCw size={20} className="text-[#14A3C7]" />
                                {content.how_exchange_title}
                            </h3>
                            <div className="space-y-4">
                                {content.how_exchange_steps.map((s, i) => (
                                    <div key={i} className="flex gap-4 text-xs">
                                        <span className="font-black opacity-20">{i+1}.</span>
                                        <p className="opacity-70 leading-relaxed">{s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Guidelines */}
                    <div className="space-y-8 pt-8 border-t border-black/5">
                        <h2 className="text-2xl font-serif font-black uppercase">{content.guidelines_title}</h2>
                        <ul className="space-y-4">
                            {content.guidelines_points.map((p, i) => (
                                <li key={i} className="flex gap-4 text-sm opacity-80">
                                    <CheckCircle2 size={16} className="text-[#14A3C7] flex-shrink-0" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="p-6 rounded-xl bg-black/5 text-sm opacity-70 italic">
                            {content.guidelines_extra}
                        </div>
                        <div className="space-y-4">
                            {content.guidelines_footer_points.map((p, i) => (
                                <div key={i} className="flex gap-4 text-sm font-medium opacity-60">
                                    <span>•</span>
                                    <p>{p}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Refund Table */}
                    <div className="space-y-8 pt-8 border-t border-black/5">
                        <h2 className="text-2xl font-serif font-black uppercase flex items-center gap-2">
                            <CreditCard size={20} className="text-[#14A3C7]" />
                            {content.refund_title}
                        </h2>
                        <h4 className="font-serif italic text-lg">{content.refund_q}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {content.refund_points.map((p, i) => (
                                <div key={i} className="p-4 text-xs opacity-70 border rounded-lg">{p}</div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-serif italic text-lg">{content.refund_time_q}</h4>
                            <p className="text-sm opacity-60">{content.refund_time_desc}</p>
                            <div className={`overflow-hidden rounded-xl border ${theme === "white" ? "border-black/10" : "border-white/10"}`}>
                                <table className="w-full text-left text-xs">
                                    <thead className="bg-black/5 opacity-40">
                                        <tr>
                                            <th className="p-4">{content.refund_table_header[0]}</th>
                                            <th className="p-4">{content.refund_table_header[1]}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/5">
                                        {content.refund_table_body.map((row, i) => (
                                            <tr key={i}>
                                                <td className="p-4 font-bold">{row[0]}</td>
                                                <td className="p-4 text-[#14A3C7] font-black">{row[1]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Contact */}
                    <div className={`p-10 rounded-[3rem] border ${theme === "white" ? "bg-black text-white" : "bg-white text-black"}`}>
                        <h2 className="text-xl font-black uppercase mb-4">{content.misc_title}</h2>
                        <div className="space-y-4 text-sm opacity-80 mb-8">
                            <p>{content.misc_desc_1}</p>
                            <p>{content.misc_desc_2}</p>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Customer Support</p>
                        <a href={`mailto:info@bworth.co.in`} className="text-2xl md:text-3xl font-serif italic hover:text-[#14A3C7] transition-all">
                            info@bworth.co.in
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
