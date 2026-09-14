"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const EDITORIAL_PHASES = [
  { label: "CURATING CIRCULAR ARCHIVES", sub: "Textile Provenance & Lifecycle Trace" },
  { label: "CALIBRATING EMBODIED CARBON", sub: "ISO 14040/44 Verified Impact Intelligence" },
  { label: "SYNCHRONIZING BUYBACK ENGINE", sub: "Real-Time Residual Asset Valuation" },
  { label: "EXPERIENCE REDEFINED", sub: "Welcome to the Future of Sustainable Luxury" },
];

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth progressive increment
        const increment = prev < 60 ? 3 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 28);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [pathname]);

  const activePhase = EDITORIAL_PHASES[Math.min(Math.floor(progress / 26), 3)];

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="luxury-editorial-loader"
          className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-hidden bg-[#06090E] select-none text-white font-sans p-6 sm:p-12 md:p-16"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(8px)",
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#10B981]/10 via-[#C5A059]/10 to-transparent rounded-full blur-[130px] opacity-70" />
            <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#14A3C7]/10 rounded-full blur-[100px] opacity-40" />
          </div>

          {/* Minimalist Editorial Hairline Grid & Corner Registration Accents */}
          <div className="absolute inset-4 sm:inset-8 border border-white/[0.04] pointer-events-none">
            {/* Top-Left Corner Accent */}
            <span className="absolute -top-[5px] -left-[5px] text-[10px] font-mono text-[#C5A059]/40 leading-none">+</span>
            {/* Top-Right Corner Accent */}
            <span className="absolute -top-[5px] -right-[5px] text-[10px] font-mono text-[#C5A059]/40 leading-none">+</span>
            {/* Bottom-Left Corner Accent */}
            <span className="absolute -bottom-[5px] -left-[5px] text-[10px] font-mono text-[#C5A059]/40 leading-none">+</span>
            {/* Bottom-Right Corner Accent */}
            <span className="absolute -bottom-[5px] -right-[5px] text-[10px] font-mono text-[#C5A059]/40 leading-none">+</span>
          </div>

          {/* Top Header Row */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-white/60 uppercase">
                BWORTH // HAUTE CIRCULARITY
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              CIRCULAR PROTOCOL v2.0
            </div>
          </motion.div>

          {/* Centerpiece: Official Logo with Halo Shimmer & Editorial Typography */}
          <div className="relative z-20 flex flex-col items-center justify-center my-auto text-center px-4">
            {/* Logo Ambient Container */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Outer Golden Glow Halo */}
              <motion.div
                className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#C5A059]/20 via-[#10B981]/15 to-transparent blur-2xl pointer-events-none"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Concentric Delicate Hairline Rings */}
              <motion.div
                className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#C5A059]/25 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-white/10 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />

              {/* Official Brand Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src="/logo.png"
                  alt="BWorth Logo"
                  width={72}
                  height={72}
                  priority
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-serif font-medium tracking-[0.2em] sm:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E8ECEF] to-white/70 drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
            >
              BWORTH
            </motion.h1>

            {/* Subtitle / Positioning Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-2.5 font-mono text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.45em] text-[#C5A059] uppercase font-medium"
            >
              Circular Luxury & Sustainable Innovation
            </motion.p>

            {/* Dynamic Editorial Narrative Display */}
            <div className="mt-8 sm:mt-10 h-14 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase.label}
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center"
                >
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/90">
                    {activePhase.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/40 tracking-wider mt-1">
                    {activePhase.sub}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Row: Minimalist Metallic Gold-Emerald Progress Bar & Percentage */}
          <div className="relative z-20 w-full max-w-7xl mx-auto border-t border-white/[0.06] pt-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left: Live Metric Details */}
              <div className="flex items-center gap-6 font-mono text-[10px] sm:text-xs text-white/45">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>ISO 14040/44 COMPLIANT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                  <span>CIRCULAR VALUATION ACTIVE</span>
                </div>
              </div>

              {/* Right: Hairline Progress with Percentage Counter */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64 h-[3px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C5A059] via-[#10B981] to-[#C5A059] rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                  {/* Subtle Shimmer Beam */}
                  <motion.div
                    className="absolute inset-y-0 w-8 bg-white/60 blur-[2px]"
                    animate={{
                      x: ["-100%", "400%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Counter */}
                <div className="font-mono text-xs sm:text-sm text-[#C5A059] font-bold tracking-widest min-w-[50px] text-right">
                  {progress}%
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
