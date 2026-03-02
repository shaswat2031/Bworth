"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, [pathname]);

    const letterVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            y: -100,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: "easeIn",
            },
        },
    };

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#14A3C7]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex items-center justify-center gap-2 sm:gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {["B", "W", "O", "R", "T", "H"].map((letter, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    className="text-6xl sm:text-8xl md:text-9xl font-serif font-black text-white mix-blend-overlay"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    <div className="mt-12 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ duration: 2.2, ease: "easeInOut" }}
                            className="h-[2px] bg-white/50 rounded-full"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute bottom-12 text-white/60 text-xs font-bold tracking-[0.3em] uppercase"
                    >
                        Redefining Fashion
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
