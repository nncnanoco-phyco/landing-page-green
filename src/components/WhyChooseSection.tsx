import lyDoBanner from '@/assets/banner/Banner_updated/ly_do_chon.png';
import './css/WhyChooseSection.css';

const WhyChooseSection = () => {
  return (
    <section className='why-choose-section'>
      <div className='why-choose-container'>
        <img
          src={lyDoBanner}
          alt='Lý do chọn sản phẩm'
          className='why-choose-banner'
          loading='lazy'
        />
      </div>
    </section>
  );
};

export default WhyChooseSection;
