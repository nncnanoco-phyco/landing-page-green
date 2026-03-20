import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroBanner from '@/assets/banner/Banner_updated/green.png';
import './css/HeroSection.css';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section className='hero-section' ref={containerRef}>
      {/* Top Banner Image with Animation and Parallax */}
      <div className='hero-banner-container'>
        <motion.img
          style={{ y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={heroBanner}
          alt='Hero Banner'
          className='hero-banner-image'
        />
        <div className='hero-banner-overlay'></div>
      </div>
    </section>
  );
};

export default HeroSection;
