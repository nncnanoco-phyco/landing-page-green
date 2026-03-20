import coCheBanner from '@/assets/banner/co_che_hoat_dong.png';
import radioLogo from '@/assets/Logo_Radio_Shopping.png';
import greenLogo from '@/assets/logo-green100.png';
import './css/MechanismSection.css';

const MechanismSection = () => {
  return (
    <section className='mechanism-section'>
      <div className='mechanism-container'>
        <div className='mechanism-banner-wrapper'>
          <img
            src={coCheBanner}
            alt='Cơ chế hoạt động'
            className='mechanism-banner'
            loading='lazy'
          />
          <img
            src={radioLogo}
            alt='Radio Shopping Logo'
            className='mechanism-logo-left'
          />
          <img
            src={greenLogo}
            alt='Green Logo'
            className='mechanism-logo-right'
          />
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
