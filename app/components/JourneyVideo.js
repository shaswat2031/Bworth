"use client";

import { useEffect, useRef } from "react";

export default function JourneyVideo({ src, poster, label }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;

    const updatePlayback = () => {
      if (inView && !reducedMotion.matches) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        updatePlayback();
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    reducedMotion.addEventListener("change", updatePlayback);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", updatePlayback);
      video.pause();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="bw-journey-video"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
