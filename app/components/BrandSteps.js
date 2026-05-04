import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import styles from './BrandSteps.module.css';
import { MapPin, ShieldCheck } from 'lucide-react';

const BrandSteps = ({ partners }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      {partners.map((partner, index) => (
        <BrandCard key={partner.name} partner={partner} theme={theme} />
      ))}
    </div>
  );
};

const BrandCard = ({ partner, theme }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = partner.images || [partner.src]; // Fallback to logo if no images provided

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    // Automatically change image every 1.5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.leftSection}>
        <Image
          src={partner.src}
          alt={`${partner.name} Logo`}
          width={200}
          height={200}
          className={styles.logo}
        />
      </div>

      <div className={styles.middleSection}>
        <h3 className={`${styles.title} text-black`}>{partner.name}</h3>
        <p className={`${styles.description} text-gray-800`}>{partner.description}</p>
      </div>

      <div 
        className={styles.rightSection}
        style={{ backgroundColor: partner.name === 'Gheesa Peeta' ? '#ffffff' : undefined }}
        onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={styles.imageWrapper}
          >
            <img
              src={images[currentImageIndex]}
              alt={`${partner.name} Product ${currentImageIndex + 1}`}
              className={partner.name === 'Gheesa Peeta' ? styles.carouselImageContain : styles.carouselImage}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default BrandSteps;
