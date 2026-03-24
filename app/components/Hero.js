"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

import GsapTextReveal from "./GsapTextReveal";

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const { theme } = useTheme();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useGSAP(() => {
        // Image card entrance
        gsap.from(".hero-image-card", {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5
        });

        // Content entrance
        gsap.from(".hero-desc-content", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.8,
            ease: "power2.out"
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pb-24 pt-32 lg:pt-36 overflow-x-hidden">
            {/* Interactive Mouse Glow */}
            <div
                className="pointer-events-none fixed inset-0 z-10 opacity-30 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(20, 163, 199, 0.15), transparent 40%)`,
                }}
            />

            {/* Background Decorative Element - Subtler Neutral Glow */}
            <div
                className={`absolute top-1/4 right-0 w-1/2 h-1/2 rounded-full blur-[120px] -z-10 animate-pulse ${theme === "white" ? "bg-black/[0.02]" : "bg-white/[0.02]"
                    }`}
            ></div>
            <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-[#14A3C7]/[0.03] rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center relative z-20">
                <div className="lg:col-span-7">
                    <div>
                        <div
                            className={`text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 block ${theme === "white"
                                ? "text-black/40"
                                : "text-white/40"
                                }`}
                        >
                            <GsapTextReveal
                                text={t.hero_component.subheading}
                                delay={0.2}
                            />
                        </div>

                        <div
                            className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black uppercase tracking-tighter leading-[0.85] ${theme === "white" ? "text-black" : "text-white"
                                }`}
                        >
                            <GsapTextReveal
                                text={t.hero_component.creating}
                                delay={0.4}
                            />
                            <GsapTextReveal
                                text={t.hero_component.sustainable}
                                delay={0.6}
                            />
                            <div className={`italic ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}>
                                <GsapTextReveal
                                    text={t.hero_component.fashion}
                                    delay={0.8}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="space-y-8">
                        {/* Premium Unsplash Image Card */}
                        <div
                            className={`hero-image-card relative group overflow-hidden rounded-[2.5rem] border shadow-2xl shadow-[#14A3C7]/5 max-w-sm lg:ml-auto ${theme === "white"
                                ? "border-black/10"
                                : "border-white/10"
                                }`}
                        >
                            <div className="aspect-[3/4] relative overflow-hidden">
                                <Image
                                    src="/hero_new.png"
                                    alt="Hero Image"
                                    fill
                                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#14A3C7] animate-pulse"></div>
                                    <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">
                                        {t.hero_component.exclusive}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-tight">
                                    {t.hero_component.lux}
                                </h3>
                            </div>
                        </div>

                        <div className="hero-desc-content space-y-6 max-w-md lg:ml-auto text-left">
                            <p
                                className={`text-lg font-medium leading-relaxed ${theme === "white"
                                    ? "text-black/50"
                                    : "text-white/50"
                                    }`}
                            >
                                {t.hero_component.desc}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-start">
                                <Link
                                    href="#ecosystem"
                                    className={`px-8 py-5 rounded-full font-bold flex items-center gap-2 group hover:bg-[#14A3C7] hover:text-white transition-all active:scale-95 shadow-xl text-sm ${theme === "white"
                                        ? "bg-black text-white shadow-black/5"
                                        : "bg-white text-black shadow-white/5"
                                        }`}
                                >
                                    {t.hero_component.explore}
                                    <ArrowDownRight
                                        size={18}
                                        className="group-hover:rotate-45 transition-transform"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 hidden md:flex"
            >
                <div
                    className={`w-[1px] h-12 ${theme === "white" ? "bg-black" : "bg-white"
                        }`}
                ></div>
                <span
                    className={`text-[10px] font-bold tracking-widest uppercase vertical-text ${theme === "white" ? "text-black" : "text-white"
                        }`}
                >
                    {t.hero_component.scroll}
                </span>
            </div>

            <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
        </section>
    );
}
