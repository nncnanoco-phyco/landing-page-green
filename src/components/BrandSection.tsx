import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { brandInfo } from '@/data/products';
import logoGreen from '@/assets/logo-green100.png';
import logoRadio from '@/assets/Logo_Radio_Shopping.png';
import './css/HeroSection.css'; // Reuse existing styles for now

const BrandSection = () => {
  return (
    <section
      className='brand-info-section'
      style={{ backgroundColor: '#cdffcd', paddingBottom: '2rem' }}
    >
      <div className='hero-content-wrapper'>
        {/* Logos in top right */}
        <div className='hero-logos'>
          <img
            src={logoGreen}
            alt='Green Logo'
            className='hero-logo logo-green'
          />
          <div className='hero-logo-divider'></div>
          <img
            src={logoRadio}
            alt='Radio Shopping Logo'
            className='hero-logo logo-radio'
          />
        </div>

        <div className='hero-inner-container'>
          <div className='hero-content-box'>
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className='hero-brand-header'>
                <Leaf className='hero-icon-leaf' />
                <span className='hero-brand-name'>Green Corporation</span>
              </div>
              <h1 className='hero-title'>
                GREEN
                <span className='hero-title-highlight'>100</span>
              </h1>
              <p className='hero-tagline'>{brandInfo.tagline}</p>
              <p className='hero-subtitle'>{brandInfo.subtitle}</p>

              <ul className='hero-highlights'>
                {brandInfo.highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    className='hero-highlight-item'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <span className='hero-highlight-number'>{i + 1}</span>
                    <span className='hero-highlight-text'>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href='#products'
                className='hero-cta-button'
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(250, 204, 21, 0.7)',
                    '0 0 0 10px rgba(250, 204, 21, 0)',
                    '0 0 0 0 rgba(250, 204, 21, 0)',
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              >
                TÌM HIỂU NGAY
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
