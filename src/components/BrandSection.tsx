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
      style={{
        backgroundColor: '#cdffcd',
        paddingBottom: '2rem',
        paddingTop: '2rem',
      }}
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

        <div className='hero-inner-container' style={{ padding: 0 }}>
          <div className='hero-content-box' style={{ maxWidth: '100%' }}>
            {/* Banner sẽ do designer thiết kế thay thế vào đây */}
            <img 
              src="https://placehold.co/1200x500/e2e8f0/475569?text=Banner+Do+Designer+Thiet+Ke" 
              alt="Brand Banner" 
              style={{ width: '100%', height: 'auto', borderRadius: '1rem', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
