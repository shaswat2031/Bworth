"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Download, 
  Zap, 
  Recycle, 
  Coins, 
  Leaf, 
  Smartphone, 
  ChevronRight, 
  Home, 
  Search, 
  ShoppingBag, 
  User, 
  ArrowUpRight, 
  Sparkles
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function AppDownloadSection() {
    const { theme } = useTheme();

    const [timeStr, setTimeStr] = useState("09:41");
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState("Today, 2:00 PM - 5:00 PM");
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const [appStats, setAppStats] = useState({
        appDownloads: "2K+",
        clothesRecycled: "25,000+ kg",
        rating: "4.8",
        trustFactor: "4.8/5"
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
        };
        updateTime();
        const timer = setInterval(updateTime, 10000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        async function fetchLiveStats() {
            try {
                const res = await fetch('/api/app-stats');
                if (res.ok) {
                    const data = await res.json();
                    setAppStats({
                        appDownloads: data.appDownloads || "25,000+",
                        clothesRecycled: data.clothesRecycled || "25,000+ kg",
                        rating: data.rating || "4.8",
                        trustFactor: data.trustFactor || "4.8/5"
                    });
                }
            } catch (e) {
                // Fallback retained
            }
        }
        fetchLiveStats();
    }, []);

    const handleConfirmBooking = () => {
        setBookingSuccess(true);
        setTimeout(() => {
            setBookingSuccess(false);
            setIsBookingOpen(false);
        }, 2500);
    };

    const features = [
        { icon: <Zap className="text-amber-400" size={20} />, title: t.app_download.shop_smart, desc: t.app_download.shop_smart_desc },
        { icon: <Coins className="text-[#14A3C7]" size={20} />, title: t.app_download.sell_earn, desc: t.app_download.sell_earn_desc },
        { icon: <Recycle className="text-emerald-400" size={20} />, title: t.app_download.recycle, desc: t.app_download.recycle_desc },
        { icon: <Leaf className="text-teal-400" size={20} />, title: t.app_download.carbon_savings, desc: t.app_download.carbon_savings_desc },
    ];

    return (
        <section
            className={`py-24 px-6 md:px-12 relative overflow-hidden transition-colors ${theme === "white" ? "bg-[#F8FAFC]" : "bg-[#08151c]"}`}
        >
            {/* Dynamic Animated Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] bg-[#14A3C7]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[130px] bg-emerald-500"
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* Left Content Side */}
                <div className="flex-1 space-y-10">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#14A3C7]/30 bg-[#14A3C7]/10 backdrop-blur-md shadow-sm"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-[#14A3C7] animate-ping" />
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#14A3C7]">
                                {t.app_download.mobile_app}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className={`text-3xl md:text-5xl font-sans font-extrabold uppercase tracking-tight leading-tight ${theme === "white" ? "text-black" : "text-white"}`}
                        >
                            {t.app_download.pocket_title_bworth}<br />
                            <span className="text-[#14A3C7] italic">{t.app_download.pocket_title_pocket}</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className={`text-lg sm:text-xl font-medium leading-relaxed max-w-xl ${theme === "white" ? "text-black/75" : "text-white/80"}`}
                        >
                            {t.app_download.desc}
                        </motion.p>
                    </div>

                    {/* Animated 4 Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`flex gap-5 p-6 rounded-[2rem] border transition-all duration-300 shadow-xl group ${theme === "white"
                                    ? "bg-white border-black/10 hover:border-[#14A3C7]/50 shadow-black/5"
                                    : "bg-[#0d1f2b] border-white/15 hover:border-white/40 shadow-black/40"}`}
                            >
                                <motion.div 
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 ${theme === "white" ? "bg-[#F8FAFC] border-black/10 shadow-inner" : "bg-white/10 border-white/10"}`}
                                >
                                    {feature.icon}
                                </motion.div>
                                <div className="space-y-1">
                                    <h4 className={`font-serif uppercase tracking-tight text-lg font-black transition-colors ${theme === "white" ? "text-black group-hover:text-[#14A3C7]" : "text-white group-hover:text-[#14A3C7]"}`}>
                                        {feature.title}
                                    </h4>
                                    <p className={`text-sm leading-relaxed font-medium ${theme === "white" ? "text-black/70" : "text-white/70"}`}>
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-4 space-y-8">
                        <div className="flex flex-wrap lg:flex-nowrap gap-6 items-center">
                            {/* Ultra-Animated Premium Uiverse Google Play CTA Button */}
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://play.google.com/store/apps/details?id=com.BworthGo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-4 px-8 py-4.5 rounded-full overflow-hidden bg-slate-950 text-white shadow-2xl border border-white/20 hover:border-[#14A3C7] transition-all duration-300 shrink-0"
                            >
                                {/* Uiverse Expanding Circle Fill on Hover */}
                                <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-gradient-to-r from-[#14A3C7] via-cyan-500 to-emerald-500 rounded-full group-hover:w-[450px] group-hover:h-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                                {/* Background Decorative Mesh Overlay Left */}
                                <span className="absolute bottom-0 left-0 h-full -ml-2 pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity duration-500">
                                    <svg className="w-auto h-full" viewBox="0 0 487 487">
                                        <path fillOpacity=".2" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" />
                                    </svg>
                                </span>

                                {/* Background Decorative Mesh Overlay Right */}
                                <span className="absolute top-0 right-0 w-16 h-full -mr-3 pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity duration-500">
                                    <svg className="object-cover w-full h-full" viewBox="0 0 487 487">
                                        <path fillOpacity=".2" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" />
                                    </svg>
                                </span>

                                {/* Glass Shimmer Sweep Overlay */}
                                <div className="absolute -inset-full top-0 block w-1/2 h-full z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:translate-x-[450%] transition-transform duration-700 ease-in-out pointer-events-none" />

                                {/* Google Play Badge Icon Container with 360 Spin & Scale SVG */}
                                <div className="relative z-20 w-11 h-11 rounded-full bg-slate-900 border border-white/20 p-[2px] flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-slate-950 group-hover:border-white/40 transition-all duration-300 shrink-0">
                                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center overflow-hidden">
                                        <motion.svg 
                                            whileHover={{ rotate: 360, scale: 1.25 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-5 h-5 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 drop-shadow-[0_0_8px_rgba(20,163,199,0.9)]" 
                                            viewBox="0 0 512 512"
                                        >
                                            <path fill="#00D2FF" d="M380.93 234.66L95.84 71.49C82.88 64.08 67 73.43 67 88.33v335.34c0 14.9 15.88 24.25 28.84 16.84l285.09-163.17c12.1-6.92 12.1-25.76 0-32.68z" />
                                            <path fill="#00F076" d="M95.84 71.49l182.25 184.51L95.84 440.51C82.88 447.92 67 438.57 67 423.67V88.33c0-14.9 15.88-24.25 28.84-16.84z" />
                                            <path fill="#FFC700" d="M380.93 234.66l-102.84 21.34L95.84 71.49l285.09 163.17c12.1 6.92 12.1 25.76 0 32.68z" />
                                            <path fill="#FF3B30" d="M380.93 277.34l-285.09 163.17L278.09 256l102.84 21.34z" />
                                        </motion.svg>
                                    </div>
                                </div>

                                {/* Text Stack - Single Line Horizontal Layout with Golden Sparkle Accent */}
                                <div className="relative z-20 flex flex-col items-start text-left whitespace-nowrap">
                                    <span className="text-[10px] uppercase font-black tracking-[0.22em] text-[#14A3C7] group-hover:text-amber-300 transition-colors flex items-center gap-1">
                                        <Sparkles size={11} className="text-[#14A3C7] group-hover:text-amber-300 animate-bounce" />
                                        {t.app_download.get_it_on}
                                    </span>
                                    <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5 whitespace-nowrap">
                                        {t.app_download.google_play}
                                        <ArrowUpRight size={17} className="text-[#14A3C7] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:text-white transition-all duration-300" />
                                    </span>
                                </div>
                            </motion.a>

                            {/* Decorative Glowing Separator */}
                            <div className="hidden sm:block h-12 w-[1.5px] bg-gradient-to-b from-transparent via-[#14A3C7]/40 to-transparent mx-1" />

                            {/* Stat Badges Row */}
                            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                                {/* Downloads Badge (1K+) */}
                                <motion.div
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    className={`flex items-center gap-3.5 px-5 py-3 rounded-2xl border backdrop-blur-md transition-all shadow-md ${
                                        theme === "white"
                                            ? "bg-white border-black/10 shadow-black/5 hover:border-[#01875f]/40"
                                            : "bg-white/5 border-white/10 hover:border-[#01875f]/50 shadow-black/40"
                                    }`}
                                >
                                    <div className="w-9 h-9 rounded-xl bg-[#01875f]/15 text-[#01875f] flex items-center justify-center shrink-0 relative">
                                        <Download size={18} />
                                    </div>
                                    <div>
                                        <span className={`block text-xl sm:text-2xl font-serif font-black tracking-tight ${theme === "white" ? "text-slate-900" : "text-white"}`}>
                                            2K+
                                        </span>
                                        <span className={`text-[10px] uppercase font-black tracking-widest block ${theme === "white" ? "text-slate-500" : "text-slate-400"}`}>
                                            Downloads
                                        </span>
                                    </div>
                                </motion.div>



                                {/* Stat 3: Clothes Recycled */}
                                <motion.div
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    className={`flex items-center gap-3.5 px-5 py-3 rounded-2xl border backdrop-blur-md transition-all shadow-md ${
                                        theme === "white"
                                            ? "bg-white border-black/10 shadow-black/5 hover:border-emerald-500/40"
                                            : "bg-white/5 border-white/10 hover:border-emerald-500/50 shadow-black/40"
                                    }`}
                                >
                                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                                        <Recycle size={19} />
                                    </div>
                                    <div>
                                        <span className={`block text-xl sm:text-2xl font-serif font-black tracking-tight ${theme === "white" ? "text-slate-900" : "text-white"}`}>
                                            {appStats.clothesRecycled}
                                        </span>
                                        <span className={`text-[10px] uppercase font-black tracking-widest block ${theme === "white" ? "text-slate-500" : "text-slate-400"}`}>
                                            {t.app_download.downloads}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Interactive Phone Mockup with 3D Float Animation */}
                <div className="flex-1 w-full flex flex-col items-center lg:items-end">

                    <div className="relative w-full max-w-[340px]">
                        {/* Glowing shadow base */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-[#14A3C7]/25 blur-[45px] rounded-full"></div>

                        {/* Device Frame */}
                        <motion.div
                            animate={{ y: [0, -14, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ rotateY: 8, rotateX: -4 }}
                            className="relative aspect-[9/19] bg-[#0A0F1E] rounded-[3.5rem] border-[10px] border-[#1a1f2e] p-[6px] shadow-3xl overflow-hidden ring-1 ring-white/10 transition-transform duration-500"
                        >
                            {/* Inner Reflection Shine */}
                            <div className="absolute top-0 left-[-50%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-pulse pointer-events-none z-40"></div>

                            {/* Screen Background */}
                            <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative flex flex-col text-black font-sans">

                                {/* Real-Time Status Bar */}
                                <div className="h-9 w-full flex justify-between px-6 items-center pt-1.5 relative z-50 bg-slate-50/90 backdrop-blur-sm border-b border-slate-100">
                                    <span className="text-[11px] font-extrabold font-mono tracking-tighter text-slate-900">{timeStr}</span>
                                    <div className="flex gap-1.5 items-center">
                                        <div className="w-2.5 h-2.5 border border-slate-900 rounded-[2px] bg-slate-800" />
                                        <div className="w-3.5 h-2 bg-slate-900 rounded-sm" />
                                    </div>
                                </div>

                                {/* Notch Mock */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1a1f2e] rounded-b-xl z-50 pointer-events-none" />

                                {/* App UI Content */}
                                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 scrollbar-hide relative text-left">

                                    {/* Header with Crisp BWorth Logo */}
                                    <div className="flex justify-between items-center bg-slate-100 border border-slate-200 p-2.5 rounded-2xl shadow-sm">
                                        <div className="h-6 w-auto flex items-center">
                                            <Image src="/logo.png" alt="BWorth Logo" width={80} height={20} className="h-full w-auto object-contain" />
                                        </div>
                                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[8.5px] font-black tracking-wider animate-pulse">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                            LIVE APP
                                        </div>
                                    </div>

                                    {/* Wallet Balance Card */}
                                    <motion.div 
                                        whileHover={{ scale: 1.02 }}
                                        className="p-4 bg-[#08151c] rounded-[1.8rem] text-white shadow-xl relative overflow-hidden group cursor-pointer"
                                    >
                                        <div className="absolute top-[-20%] right-[-10%] w-24 h-24 bg-[#14A3C7]/20 rounded-full blur-2xl"></div>
                                        <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em]">{t.app_download.your_balance}</span>
                                        <div className="flex items-baseline gap-2 mt-0.5">
                                            <span className="text-3xl font-serif font-black tracking-tight text-white">2,450</span>
                                            <span className="text-[9px] font-bold uppercase text-[#14A3C7]">BWorth Coins</span>
                                        </div>
                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                                                <Zap size={10} /> 1 BWC = ₹1 Real Cash
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Interactive Doorstep Pickup Booking Action Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setIsBookingOpen(true)}
                                        className="w-full p-3.5 bg-[#14A3C7] hover:bg-black text-white rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-lg transition-colors group"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 rounded-lg bg-white/20">
                                                <Smartphone size={14} />
                                            </div>
                                            <span>BOOK PICKUP SLOT</span>
                                        </div>
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </motion.button>

                                    {/* Sustainability Stats */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-black/50">{t.app_download.stats}</span>
                                            <ChevronRight size={12} className="text-black/30" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2.5">
                                            <motion.div whileHover={{ scale: 1.04 }} className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col gap-0.5 shadow-sm">
                                                <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center mb-0.5">
                                                    <Leaf size={12} className="text-emerald-600" />
                                                </div>
                                                <span className="text-base font-serif font-black text-emerald-900 leading-none">12.4kg</span>
                                                <span className="text-[8px] uppercase font-bold text-emerald-600/70 tracking-wider">{t.app_download.co2_saved}</span>
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.04 }} className="p-3 bg-[#14A3C7]/5 rounded-2xl border border-[#14A3C7]/10 flex flex-col gap-0.5 shadow-sm">
                                                <div className="w-7 h-7 rounded-full bg-[#14A3C7]/10 flex items-center justify-center mb-0.5">
                                                    <Recycle size={12} className="text-[#14A3C7]" />
                                                </div>
                                                <span className="text-base font-serif font-black text-[#14A3C7] leading-none">8 Garments</span>
                                                <span className="text-[8px] uppercase font-bold text-[#14A3C7]/70 tracking-wider">{t.app_download.recycled}</span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Simulated Booking Modal Overlay Inside Mockup */}
                                {isBookingOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 100 }}
                                        className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col justify-end p-4 text-white text-left"
                                    >
                                        <div className="bg-[#08151c] p-4 rounded-3xl border border-white/20 space-y-3 shadow-2xl">
                                            {bookingSuccess ? (
                                                <div className="text-center py-4 space-y-2">
                                                    <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg animate-bounce">
                                                        ✓
                                                    </div>
                                                    <h4 className="text-sm font-black uppercase text-emerald-400">Pickup Slot Booked!</h4>
                                                    <p className="text-[10px] text-white/70">Executive assigned for {selectedSlot}. Instant BWC coins ready.</p>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-xs font-black uppercase tracking-wider text-[#14A3C7]">Select Doorstep Slot</span>
                                                        <button onClick={() => setIsBookingOpen(false)} className="text-xs text-white/50 hover:text-white">✕</button>
                                                    </div>

                                                    <div className="space-y-1.5">
                                                        {[
                                                            "Today, 2:00 PM - 5:00 PM",
                                                            "Tomorrow, 10:00 AM - 1:00 PM",
                                                            "Tomorrow, 2:00 PM - 5:00 PM"
                                                        ].map((slot, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => setSelectedSlot(slot)}
                                                                className={`w-full p-2.5 rounded-xl text-left text-[10px] font-bold border transition-colors flex justify-between items-center ${
                                                                    selectedSlot === slot 
                                                                        ? "bg-[#14A3C7]/20 border-[#14A3C7] text-white" 
                                                                        : "bg-white/5 border-white/10 text-white/60"
                                                                }`}
                                                            >
                                                                <span>{slot}</span>
                                                                {selectedSlot === slot && <span className="text-[#14A3C7]">✓</span>}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <button
                                                        onClick={handleConfirmBooking}
                                                        className="w-full py-2.5 bg-[#14A3C7] hover:bg-white hover:text-black font-black text-xs uppercase rounded-xl transition-all shadow-lg"
                                                    >
                                                        CONFIRM PICKUP
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {/* App Bottom Navigation Bar for BWorth App Mode */}
                                <div className="mt-auto border-t border-zinc-100 bg-white/90 backdrop-blur-md pb-2">
                                    <div className="h-14 w-full flex items-center justify-around px-4">
                                        <motion.div whileHover={{ scale: 1.15 }} className="p-2 cursor-pointer">
                                            <Home size={18} className="text-[#14A3C7]" />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.15 }} className="p-2 cursor-pointer opacity-40">
                                            <Search size={18} />
                                        </motion.div>
                                        <div className="relative">
                                            <motion.div
                                                whileHover={{ scale: 1.15, y: -4 }}
                                                onClick={() => setIsBookingOpen(true)}
                                                className="w-11 h-11 bg-[#14A3C7] rounded-full flex items-center justify-center shadow-xl transform -translate-y-4 ring-4 ring-white cursor-pointer"
                                            >
                                                <Smartphone size={18} className="text-white" />
                                            </motion.div>
                                        </div>
                                        <motion.div whileHover={{ scale: 1.15 }} className="p-2 cursor-pointer opacity-40">
                                            <ShoppingBag size={18} />
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.15 }} className="p-2 cursor-pointer opacity-40">
                                            <User size={18} />
                                        </motion.div>
                                    </div>
                                    <div className="flex justify-center items-center pb-1">
                                        <div className="w-16 h-1 bg-black/20 rounded-full"></div>
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
