"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function GsapTextReveal({
    text,
    className = "",
    tag = "div",
    delay = 0,
    duration = 1,
    stagger = 0.05,
    y = 50,
}) {
    const containerRef = useRef(null);
    const Tag = tag;

    useGSAP(
        () => {
            const words = containerRef.current.querySelectorAll(".word");

            gsap.fromTo(
                words,
                {
                    y: y,
                    opacity: 0,
                    filter: "blur(10px)"
                },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: duration,
                    stagger: stagger,
                    delay: delay,
                    ease: "power3.out",
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <Tag ref={containerRef} className={`${className}`}>
            {text.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em]">
                    <span className="word inline-block will-change-transform">
                        {word}
                    </span>
                </span>
            ))}
        </Tag>
    );
}
