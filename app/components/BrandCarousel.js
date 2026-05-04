"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from '../context/ThemeContext';
import styles from "./BrandCarousel.module.css";

const brandLogos = [
  { name: "Cossential", src: "/Cossential.png" },
  { name: "Dhawan", src: "/Dawan.png" },
  { name: "Gheesa Peeta", src: "/GP.png" },
  { name: "HomeSolution", src: "/HomeSolution.png" },
  { name: "JRCY", src: "/JRCY.png" },
  { name: "Nandrani", src: "/Nand.png" },
  { name: "Neel & Ned", src: "/Neel & Ned.png" },
  { name: "The Plain Edition", src: "/Plain.png" },
  { name: "Sasha-The Label", src: "/Sasa.png" },
  { name: "SEEME", src: "/SEEME.png" },
  { name: "Seere", src: "/Seere.png" },
  { name: "tIM RAFT", src: "/tim.png" },
  { name: "TRENZIC", src: "/Trenzc.png" }
];

// Double the array for seamless continuous scrolling
const duplicatedLogos = [...brandLogos, ...brandLogos];

const BrandCarousel = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`${styles.container} ${theme === 'white' ? styles.themeLight : styles.themeDark}`}>

      <div className={styles.carouselWrapper}>
        {/* Top Row - Large logos */}
        <div className={styles.scrollRow}>
          <div className={styles.scrollContentRight}>
            {duplicatedLogos.map((brand, index) => (
              <React.Fragment key={`top-${index}`}>
                <div className={styles.logoWrapper}>
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={190}
                    height={108}
                    className={styles.brandLogoLarge}
                    unoptimized
                    quality={100}
                    sizes="(max-width: 768px) 160px, 190px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className={styles.separatorLarge}>◆</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Row - Smaller logos */}
        <div className={styles.scrollRow}>
          <div className={styles.scrollContentLeft}>
            {duplicatedLogos.map((brand, index) => (
              <React.Fragment key={`bottom-${index}`}>
                <div className={styles.logoWrapper}>
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={100}
                    height={56}
                    className={styles.brandLogoSmall}
                    quality={100}
                    sizes="(max-width: 768px) 84px, 100px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className={styles.separatorSmall}>◆</span>
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

export default BrandCarousel;
