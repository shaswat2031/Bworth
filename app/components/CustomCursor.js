"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function CustomCursor() {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Center the cursor (32px / 2)
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === "a" ||
                e.target.tagName.toLowerCase() === "button" ||
                e.target.closest("a") ||
                e.target.closest("button") ||
                e.target.classList.contains("cursor-pointer")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference`}
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <motion.div
                className={`w-full h-full rounded-full ${isHovered ? "scale-150" : "scale-100"
                    } transition-transform duration-200 ease-out bg-white`}
            />
        </motion.div>
    );
}
