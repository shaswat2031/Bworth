"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

gsap.registerPlugin(useGSAP);

export default function ScrollBanner() {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const text = t.scroll_banner.text;

  // Create enough items to fill widely and loop seamlessly
  const items = Array(3).fill(text);

  useGSAP(
    () => {
      const totalWidth = containerRef.current.scrollWidth / 2; // Half because we duplicate the content

      gsap.to(".marquee-content", {
        x: -totalWidth,
        duration: 100,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      className={`py-8 md:py-12 overflow-hidden transform md:-rotate-1 relative z-10 my-24 border-y shadow-2xl transition-colors ${theme === "white"
        ? "bg-white text-black border-black/10"
        : "bg-black text-white border-white/10"
        }`}
    >
      <div className="flex relative items-center overflow-hidden" ref={containerRef}>
        <div className="marquee-content flex whitespace-nowrap will-change-transform py-2">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span className="text-3xl md:text-6xl font-serif font-black tracking-tighter mx-4 md:mx-12">
                {item}
              </span>
              <div className="w-4 h-4 md:w-6 md:h-6 bg-[#14A3C7] rotate-45 mx-4 shadow-[0_0_15px_rgba(20,163,199,0.5)]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

