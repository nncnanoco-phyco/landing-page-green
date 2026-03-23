import coCheBanner from '@/assets/banner/Banner_updated/co_che_hoat_dong.png';
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
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
