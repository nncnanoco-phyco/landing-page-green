import congNgheBanner from '@/assets/banner/new_banner_cong_nghe.png';
import radioLogo from '@/assets/Logo_Radio_Shopping.png';
import greenLogo from '@/assets/logo-green100.png';
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
          />
          <img
            src={radioLogo}
            alt='Radio Shopping Logo'
            className='tech-logo-left'
          />
          <img src={greenLogo} alt='Green Logo' className='tech-logo-right' />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
