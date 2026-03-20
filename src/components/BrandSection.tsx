import banner from '@/assets/banner/Banner_updated/hero_section.png';

const BrandSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className='brand-info-section w-full'
      style={{
        backgroundColor: '#ffffff',
        padding: '2rem 1rem',
      }}
    >
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '1200px', 
          margin: '0 auto',
        }}
      >
        <img
          src={banner}
          alt='Brand Banner'
          loading='lazy'
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}
        />
        
        {/* Nút tìm hiểu các sản phẩm */}
        <div 
          className="brand-action-container"
          style={{ 
            position: 'absolute', 
            bottom: '5%', 
            right: '25%', 
            transform: 'translateX(50%)',
            zIndex: 10
          }}
        >
          <button
            onClick={scrollToProducts}
            className='bubble-button pulse-animation'
          >
            Tìm Hiểu Các Sản Phẩm
          </button>
        </div>

        <style>{`
          .bubble-button {
            background-color: #16a34a; /* Green color */
            color: #ffffff;
            font-family: inherit;
            font-weight: 700;
            font-size: 1.125rem;
            padding: 0.8rem 1.8rem;
            border-radius: 9999px;
            border: none;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(22, 163, 74, 0.4);
            white-space: nowrap;
          }

          .bubble-button:hover {
            transform: scale(1.05);
            background-color: #15803d;
            box-shadow: 0 6px 20px rgba(22, 163, 74, 0.6);
          }

          /* Bubble effect on hover */
          .bubble-button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.25);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s ease-out, height 0.6s ease-out;
          }

          .bubble-button:hover::before {
            width: 300px;
            height: 300px;
          }

          /* Attention-grabbing pulse animation */
          .pulse-animation {
            animation: pulse-button 2s infinite;
          }

          @keyframes pulse-button {
            0% {
              box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(22, 163, 74, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
            }
          }

          /* Responsive adjustments */
          @media (max-width: 1024px) {
            .brand-action-container {
               bottom: 5% !important;
            }
            .bubble-button {
               font-size: 1rem;
               padding: 0.6rem 1.4rem;
            }
          }

          @media (max-width: 768px) {
            .brand-action-container {
               position: static !important;
               transform: none !important;
               margin-top: 1.5rem;
               width: 100%;
               display: flex;
               justify-content: center;
               right: auto !important;
               bottom: auto !important;
            }
            .bubble-button {
               font-size: 1rem;
               padding: 0.75rem 2rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default BrandSection;
