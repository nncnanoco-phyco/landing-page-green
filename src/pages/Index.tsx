import HeroSection from '@/components/HeroSection';
import BrandSection from '@/components/BrandSection';
import TechnologySection from '@/components/TechnologySection';
import MechanismSection from '@/components/MechanismSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProductCategoriesSection from '@/components/ProductCategoriesSection';
import FooterSection from '@/components/FooterSection';
import FloatingSocial from '@/components/FloatingSocial';
import './css/Index.css';

const Index = () => {
  return (
    <div className='index-page'>
      <HeroSection />
      <BrandSection />
      <TechnologySection />
      <MechanismSection />
      <WhyChooseSection />
      <ProductCategoriesSection />
      <FooterSection />
      <FloatingSocial />
    </div>
  );
};

export default Index;
