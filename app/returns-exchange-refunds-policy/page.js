"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Truck, CreditCard, RotateCcw } from "lucide-react";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function ReturnsPolicy() {
    const { theme } = useTheme();
    const content = t.returns_page;

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
                            {content.title} <br /> 
                            <span className={`italic ${theme === "white" ? "text-blue-500" : "text-black"}`}>
                                {content.subtitle}
                            </span>
                        </h1>
                    </motion.div>

                    <div
                        className={`space-y-16 text-lg leading-relaxed font-light ${theme === "white" ? "text-black/70" : "text-white/70"
                            }`}
                    >
                        <p className="text-xl font-medium italic">{content.intro}</p>

                        {/* Returns Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <RotateCcw size={32} className={theme === "white" ? "text-blue-500" : "text-black"} />
                                <h2 className={`text-3xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"}`}>
                                    {content.returns_title}
                                </h2>
                            </div>
                            <div className="space-y-4">
                                <p>{content.returns_desc_1}</p>
                                <p>{content.returns_desc_2}</p>
                                <p>{content.returns_desc_3}</p>
                            </div>
                        </div>

                        {/* Options Section */}
                        <div className="space-y-8 p-8 border rounded-[2rem] bg-black/5 border-black/5">
                            <h3 className={`text-2xl font-serif font-bold uppercase ${theme === "white" ? "text-black" : "text-white"}`}>
                                {content.options_title}
                            </h3>
                            <p>{content.options_desc}</p>
                            
                            <div className="space-y-8 mt-8">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold italic">{content.q_title}</h4>
                                    <p>{content.q_desc}</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {content.all_return_points && content.all_return_points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <p>{content.wrong_return_desc}</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {content.wrong_return_points && content.wrong_return_points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Cost of Return Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Truck size={32} className={theme === "white" ? "text-blue-500" : "text-black"} />
                                <h2 className={`text-3xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"}`}>
                                    {content.cost_title}
                                </h2>
                            </div>
                            <div className="space-y-4">
                                <p>{content.cost_desc_1}</p>
                                <p>{content.cost_desc_2}</p>
                                
                                <div className={`overflow-x-auto rounded-xl border ${theme === "white" ? "border-black/10" : "border-white/10"}`}>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className={theme === "white" ? "bg-black/5" : "bg-white/5"}>
                                                <th className="p-4 border-b border-inherit font-bold uppercase text-xs tracking-widest">Category</th>
                                                <th className="p-4 border-b border-inherit font-bold uppercase text-xs tracking-widest">Reasons</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-black/10">
                                            <tr>
                                                <td className="p-4 font-bold">Wrong Product</td>
                                                <td className="p-4">Wrong Size, Different Colour, Different Product</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold">Defective Product</td>
                                                <td className="p-4">Dirty/Stains, Broken, Torn</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold">Incomplete Product</td>
                                                <td className="p-4">Missing Parts, Less Quantity</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <p className="font-bold">{content.verify_title}</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {content.verify_points && content.verify_points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Exchange Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <RefreshCw size={32} className={theme === "white" ? "text-blue-500" : "text-black"} />
                                <h2 className={`text-3xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"}`}>
                                    {content.exchange_title}
                                </h2>
                            </div>
                            <div className="space-y-6">
                                <p>{content.exchange_desc_1}</p>
                                <p>{content.exchange_desc_2}</p>
                                
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold uppercase tracking-tight">{content.exchange_reason_title}</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {content.exchange_reasons && content.exchange_reasons.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold uppercase tracking-tight">{content.exchange_not_accept_title}</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {content.exchange_not_accept_points && content.exchange_not_accept_points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="italic font-medium underline underline-offset-4">{content.exchange_window}</p>
                                <p>{content.exchange_cost_desc}</p>
                                <p className="font-medium">{content.exchange_limit}</p>
                            </div>
                        </div>

                        {/* How to returns/exchange */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6 p-8 rounded-[2rem] bg-blue-500/5 border border-blue-500/10">
                                <h3 className={`text-2xl font-serif font-bold uppercase ${theme === "white" ? "text-black" : "text-white"}`}>
                                    {content.how_return_title}
                                </h3>
                                <p className="text-sm">{content.how_return_desc}</p>
                                <ol className="list-decimal pl-6 space-y-3 text-sm">
                                    {content.how_return_steps && content.how_return_steps.map((step, i) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                            <div className="space-y-6 p-8 rounded-[2rem] bg-black/5 border border-black/5">
                                <h3 className={`text-2xl font-serif font-bold uppercase ${theme === "white" ? "text-black" : "text-white"}`}>
                                    {content.how_exchange_title}
                                </h3>
                                <p className="text-sm">{content.how_exchange_desc}</p>
                                <ol className="list-decimal pl-6 space-y-3 text-sm">
                                    {content.how_exchange_steps && content.how_exchange_steps.map((step, i) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        {/* Guidelines */}
                        <div className="space-y-8">
                            <h2 className={`text-3xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"}`}>
                                {content.guidelines_title}
                            </h2>
                            <div className="space-y-6">
                                <p>{content.guidelines_intro}</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {content.guidelines_points && content.guidelines_points.map((point, i) => (
                                        <li key={i} className="p-4 rounded-xl border border-black/5 bg-black/[0.02] text-sm">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm italic">{content.guidelines_extra}</p>
                                <ul className="list-disc pl-6 space-y-4 mt-8">
                                    {content.guidelines_footer_points && content.guidelines_footer_points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Refund Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <CreditCard size={32} className={theme === "white" ? "text-blue-500" : "text-black"} />
                                <h2 className={`text-3xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"}`}>
                                    {content.refund_title}
                                </h2>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold italic">{content.refund_q}</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {content.refund_points && content.refund_points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold italic">{content.refund_time_q}</h4>
                                    <p>{content.refund_time_desc}</p>
                                    <div className={`overflow-x-auto rounded-xl border ${theme === "white" ? "border-black/10" : "border-white/10"}`}>
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className={theme === "white" ? "bg-black/5" : "bg-white/5"}>
                                                    <th className="p-4 border-b border-inherit font-bold uppercase text-xs tracking-widest">
                                                        {content.refund_table_header[0]}
                                                    </th>
                                                    <th className="p-4 border-b border-inherit font-bold uppercase text-xs tracking-widest">
                                                        {content.refund_table_header[1]}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-black/10">
                                                {content.refund_table_body && content.refund_table_body.map((row, i) => (
                                                    <tr key={i}>
                                                        <td className="p-4 font-bold">{row[0]}</td>
                                                        <td className="p-4">{row[1]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Miscellaneous */}
                        <div className="pt-16 space-y-8 border-t border-black/10">
                            <h2 className={`text-3xl font-serif font-bold uppercase tracking-tight ${theme === "white" ? "text-black" : "text-white"}`}>
                                {content.misc_title}
                            </h2>
                            <div className="space-y-4">
                                <p>{content.misc_desc_1}</p>
                                <p>{content.misc_desc_2}</p>
                                <p className="text-2xl font-serif font-black italic pt-8">
                                    {content.contact_query}
                                </p>
                            </div>
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
