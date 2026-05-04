"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from '../context/ThemeContext';
import styles from "./BrandComingSoon.module.css";

const comingSoonBrands = [
  { name: "Burberry", src: "/BurBerry.png" },
  { name: "Calvin Klein", src: "/C&K.png" },
  { name: "H&M", src: "/H&M.png" },
  { name: "Jack & Jones", src: "/J&J.png" },
  { name: "Levi's", src: "/Levi.png" },
  { name: "Nalli", src: "/Nalli.png" },
  { name: "Prada", src: "/Parda.png" },
  { name: "Puma", src: "/Puma.png" },
  { name: "Shein", src: "/Shein.png" },
  { name: "Zara", src: "/Zara.png" }
];

// Triple the array to ensure smooth continuous scrolling
const duplicatedBrands = [...comingSoonBrands, ...comingSoonBrands, ...comingSoonBrands];

const BrandComingSoon = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`${styles.container} ${theme === 'white' ? styles.themeLight : styles.themeDark}`}>
      <div className={styles.headerWrapper}>
        <h2 className={`text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter mb-4 ${theme === 'white' ? 'text-[#14A3C7]' : 'text-black'}`}>
          Brand Coming Soon
        </h2>
        <div className={`${styles.titleUnderline} ${theme === 'white' ? styles.titleUnderlineLight : styles.titleUnderlineDark}`}></div>
        <p className="text-2xl md:text-3xl font-serif italic text-black">
          A curated lineup of fashion labels joining BWorth soon
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.scrollRow}>
          <div className={styles.scrollContent}>
            {duplicatedBrands.map((brand, index) => (
              <React.Fragment key={`brand-${index}`}>
                <div className={styles.logoWrapper}>
                  <div className={styles.blurContainer}>
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={140}
                      height={100}
                      className={styles.brandLogoBlur}
                      priority={false}
                      quality={85}
                    />
                  </div>
                </div>
                <span className={styles.separator}>◆</span>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for fade effect at edges */}
        <div className={`${styles.fadeLeft} ${theme === 'white' ? styles.fadeLight : styles.fadeDark}`}></div>
        <div className={`${styles.fadeRight} ${theme === 'white' ? styles.fadeLight : styles.fadeDark}`}></div>
      </div>
    </div>
  );
};

export default BrandComingSoon;
