import congNgheBanner from '@/assets/banner/Banner_updated/cong_nghe.png';
import './css/TechnologySection.css';

const TechnologySection = () => {
  return (
    <section className='technology-section'>
      <div className='tech-container'>
        <div className='tech-banner-wrapper'>
          <img
            src={congNgheBanner}
            alt='Công nghệ sinh học'
            className='tech-banner'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
