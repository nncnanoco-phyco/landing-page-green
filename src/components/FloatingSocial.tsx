import { Phone } from 'lucide-react';
import { agentInfo } from '@/data/products';
import './css/FloatingSocial.css';

const FloatingSocial = () => {
  return (
    <div className='floating-social-container'>
      {/* Phone Button - Green Circle */}
      <a
        href={`tel:${agentInfo.phone}`}
        className='social-button phone-button'
        aria-label='Gọi điện'
      >
        <div className='social-icon-wrapper'>
          <Phone className='social-icon' />
        </div>
      </a>

      {/* Facebook Button */}
      <a
        href='https://www.facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        className='social-button facebook-button'
        aria-label='Facebook'
      >
        <img
          src='/Facebook_Logo_Primary.png'
          alt='Facebook'
          className='social-img-icon'
        />
      </a>

      {/* Zalo Button */}
      <a
        href={`https://zalo.me/${agentInfo.phone.replace(/\./g, '')}`}
        target='_blank'
        rel='noopener noreferrer'
        className='social-button zalo-button'
        aria-label='Zalo'
      >
        <img src='/Icon_of_Zalo.svg' alt='Zalo' className='social-img-icon' />
      </a>

      {/* TikTok Button */}
      <a
        href='https://www.tiktok.com'
        target='_blank'
        rel='noopener noreferrer'
        className='social-button tiktok-button'
        aria-label='TikTok'
      >
        <img
          src='/tiktok-logo-3.avif'
          alt='TikTok'
          className='social-img-icon'
        />
      </a>
    </div>
  );
};

export default FloatingSocial;
