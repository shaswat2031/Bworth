"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Zap, Recycle, Coins, Leaf, Smartphone, ChevronRight, Home, Search, ShoppingBag, User } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function AppDownloadSection() {
    const { theme } = useTheme();

    const [appStats, setAppStats] = useState({
        downloads: "25,000+",
        rating: "4.9",
        totalReviews: "4.9/5"
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/app-stats');
                if (response.ok) {
                    const data = await response.json();
                    setAppStats({
                        downloads: data.downloads,
                        rating: data.rating,
                        totalReviews: data.totalReviews
                    });
                }
            } catch (error) {
                console.error("Failed to fetch app stats:", error);
            }
        };

        // fetchStats();
    }, []);

    const features = [
        { icon: <Zap className="text-yellow-400" size={20} />, title: t.app_download.shop_smart, desc: t.app_download.shop_smart_desc },
        { icon: <Coins className="text-[#14A3C7]" size={20} />, title: t.app_download.sell_earn, desc: t.app_download.sell_earn_desc },
        { icon: <Recycle className="text-green-400" size={20} />, title: t.app_download.recycle, desc: t.app_download.recycle_desc },
        { icon: <Leaf className="text-emerald-400" size={20} />, title: t.app_download.carbon_savings, desc: t.app_download.carbon_savings_desc },
    ];

    return (
        <section
            className={`py-16 px-6 md:px-12 relative overflow-hidden transition-colors ${theme === "white" ? "bg-white" : "bg-[#14A3C7]"}`}
        >
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className={`absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${theme === "white" ? "bg-blue-200" : "bg-blue-900"}`}></div>
                <div className={`absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full blur-[100px] opacity-20 ${theme === "white" ? "bg-emerald-100" : "bg-emerald-900"}`}></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* Left Content Side */}
                <div className="flex-1 space-y-10">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2"
                        >
                            <span className="w-8 h-[2px] bg-[#14A3C7]"></span>
                            <span className={`text-xs font-normal tracking-[0.4em] uppercase ${theme === "white" ? "text-[#14A3C7]" : "text-white"}`}>
                                {t.app_download.mobile_app}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={`text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-[0.9] ${theme === "white" ? "text-black" : "text-white"}`}
                        >
                            {t.app_download.pocket_title_bworth}<br />
                            <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.app_download.pocket_title_pocket}</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className={`text-lg md:text-xl leading-relaxed max-w-xl ${theme === "white" ? "font-medium text-black/60" : "font-normal text-white"}`}
                        >
                            {t.app_download.desc}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className={`flex gap-5 p-6 rounded-[2rem] border transition-all duration-300 hover:scale-[1.02] ${theme === "white"
                                    ? "bg-black/[0.02] border-black/[0.05] hover:bg-white hover:shadow-xl hover:shadow-black/5"
                                    : "bg-white/[0.03] border-white/[0.05] hover:bg-white/[0.07]"}`}
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${theme === "white" ? "bg-white shadow-sm" : "bg-black/40 shadow-inner"}`}>
                                    {feature.icon}
                                </div>
                                <div className="space-y-1">
                                    <h4 className={`font-serif uppercase tracking-tight text-base ${theme === "white" ? "font-bold text-black" : "font-normal text-white"}`}>
                                        {feature.title}
                                    </h4>
                                    <p className={`text-sm leading-snug ${theme === "white" ? "font-medium text-black/40" : "font-normal text-white"}`}>
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-6 space-y-8">
                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://play.google.com/store/apps/details?id=com.BworthGo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-8 py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-4 transition-all shadow-2xl group ${theme === "white"
                                    ? "bg-black text-white shadow-black/10 hover:bg-zinc-800"
                                    : "bg-white text-black shadow-white/5 hover:bg-zinc-100"
                                    }`}
                            >
                                <div className="w-10 h-10 flex items-center justify-center bg-[#14A3C7] rounded-xl">
                                    <Download size={20} className="text-white group-hover:animate-bounce" />
                                </div>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] opacity-60 font-sans mb-1">{t.app_download.get_it_on}</span>
                                    <span className="text-base tracking-tight font-black">{t.app_download.google_play}</span>
                                </div>
                            </motion.a>

                            <div className="flex gap-10 pl-4 border-l border-zinc-200/50">
                                <div className="space-y-1">
                                    <span className={`block text-2xl font-serif font-black ${theme === "white" ? "text-black" : "text-white"}`}>{appStats.downloads}</span>
                                    <span className={`text-[10px] uppercase font-bold tracking-widest ${theme === "white" ? "text-black/40" : "text-white/40"}`}>{t.app_download.downloads}</span>
                                </div>
                                <div className="space-y-1">
                                    <span className={`block text-2xl font-serif font-black ${theme === "white" ? "text-black" : "text-white"}`}>{appStats.totalReviews}</span>
                                    <span className={`text-[10px] uppercase font-bold tracking-widest ${theme === "white" ? "text-black/40" : "text-white/40"}`}>{t.app_download.rated}</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Right Mockup Side */}
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[340px]">
                        {/* Shadow base */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/20 blur-[40px] rounded-full"></div>

                        {/* Device Frame */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative aspect-[9/19] bg-[#0A0F1E] rounded-[3.5rem] border-[10px] border-[#1a1f2e] p-[6px] shadow-3xl overflow-hidden ring-1 ring-white/10"
                        >
                            {/* Inner Shine */}
                            <div className="absolute top-0 left-[-50%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-pulse"></div>

                            {/* Screen Background */}
                            <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative flex flex-col text-black font-sans">

                                {/* Status Area */}
                                <div className="h-10 w-full flex justify-between px-8 items-end pb-1">
                                    <span className="text-[10px] font-bold">9:41</span>
                                    <div className="flex gap-1.5 items-center">
                                        <div className="w-3 h-3 border border-black/20 rounded-[2px]"></div>
                                        <div className="w-4 h-2.5 bg-black/10 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Notch Mock */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1f2e] rounded-b-2xl z-50"></div>

                                {/* App UI Content */}
                                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5 scrollbar-hide">

                                    {/* Header */}
                                    <div className="flex justify-between items-center bg-black/5 p-3 rounded-2xl">
                                        <div className="h-6 w-auto">
                                            <Image src="/logo.png" alt="Bworth" width={80} height={20} className="h-full w-auto object-contain grayscale" />
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-[#14A3C7] flex items-center justify-center text-white">
                                            <Smartphone size={16} />
                                        </div>
                                    </div>

                                    {/* Balance Card */}
                                    <div className="p-5 bg-black rounded-[2rem] text-white shadow-lg relative overflow-hidden group">
                                        <div className="absolute top-[-20%] right-[-10%] w-24 h-24 bg-[#14A3C7]/20 rounded-full blur-2xl"></div>
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{t.app_download.your_balance}</span>
                                        <div className="flex items-baseline gap-2 mt-1">
                                            <span className="text-4xl font-serif font-black tracking-tighter">2,450</span>
                                            <span className="text-[10px] font-bold uppercase text-[#14A3C7]">BWorth Coins</span>
                                        </div>
                                        <div className="mt-4 flex gap-2">
                                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full w-[70%] bg-[#14A3C7]"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sustainability Stats */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-black/40">{t.app_download.stats}</span>
                                            <ChevronRight size={14} className="text-black/20" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="p-4 bg-emerald-50 rounded-3xl border border-emerald-100 flex flex-col gap-1">
                                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mb-1">
                                                    <Leaf size={14} className="text-emerald-600" />
                                                </div>
                                                <span className="text-lg font-serif font-black text-emerald-900 leading-none">12.4kg</span>
                                                <span className="text-[8px] uppercase font-bold text-emerald-600/60 tracking-wider font-sans">{t.app_download.co2_saved}</span>
                                            </div>
                                            <div className="p-4 bg-[#14A3C7]/5 rounded-3xl border border-[#14A3C7]/10 flex flex-col gap-1">
                                                <div className="w-8 h-8 rounded-full bg-[#14A3C7]/10 flex items-center justify-center mb-1">
                                                    <Recycle size={14} className="text-[#14A3C7]" />
                                                </div>
                                                <span className="text-lg font-serif font-black text-[#14A3C7] leading-none">8 Items</span>
                                                <span className="text-[8px] uppercase font-bold text-[#14A3C7]/60 tracking-wider font-sans">{t.app_download.recycled}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sustainable Picks */}
                                    <div className="space-y-3 bg-zinc-50 p-4 rounded-3xl border border-zinc-100">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-black/40">{t.app_download.picks}</span>
                                            <span className="text-[9px] font-bold text-[#14A3C7] uppercase tracking-tight">View All</span>
                                        </div>
                                        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                                            {[
                                                { img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300", label: "Organic Cotton Shirt", price: "₹2,499" },
                                                { img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300", label: "Recycled Wool Jacket", price: "₹4,999" }
                                            ].map((item, idx) => (
                                                <div key={idx} className="shrink-0 space-y-2 group/item">
                                                    <div className="w-28 h-36 bg-white rounded-2xl border border-zinc-200 overflow-hidden relative shadow-sm transition-transform duration-500 group-hover/item:scale-[1.02]">
                                                        <Image src={item.img} fill sizes="100px" className="object-cover" alt={item.label} />
                                                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[8px] font-black shadow-sm">
                                                            {item.price}
                                                        </div>
                                                    </div>
                                                    <div className="px-1">
                                                        <span className="text-[9px] font-black truncate block w-28 uppercase tracking-tighter text-black/80">{item.label}</span>
                                                        <div className="flex items-center gap-1 mt-0.5">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                            <span className="text-[7px] font-bold text-emerald-600 uppercase tracking-widest">ECO-FRIENDLY</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* App Bottom Bar */}
                                <div className="mt-auto border-t border-zinc-100 bg-white/90 backdrop-blur-md pb-2">
                                    <div className="h-16 w-full flex items-center justify-around px-4">
                                        <motion.div whileHover={{ scale: 1.2 }} className="p-2 cursor-pointer">
                                            <Home size={18} className="text-[#14A3C7]" />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.2 }} className="p-2 cursor-pointer opacity-40">
                                            <Search size={18} />
                                        </motion.div>
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-[#14A3C7]/20 blur-xl rounded-full"></div>
                                            <motion.div
                                                whileHover={{ scale: 1.1, y: -22 }}
                                                className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-xl transform -translate-y-5 ring-4 ring-white relative z-10"
                                            >
                                                <Download size={20} className="text-white" />
                                            </motion.div>
                                        </div>
                                        <motion.div whileHover={{ scale: 1.2 }} className="p-2 cursor-pointer opacity-40">
                                            <ShoppingBag size={18} />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.2 }} className="p-2 cursor-pointer opacity-40">
                                            <User size={18} />
                                        </motion.div>
                                    </div>
                                    <div className="flex justify-center items-center pb-2">
                                        <div className="w-16 h-1 bg-black/10 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
