import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { productCategories } from '@/data/products';
import emotionalLogo from '@/assets/logo_phyco.jpg';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<string>('');

  const product = productCategories
    .flatMap((c) => c.products)
    .find((p) => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts or product changes
    if (product) {
      setActiveImage(
        product.images && product.images.length > 0
          ? product.images[0]
          : product.image
      );
    }
  }, [product]);

  if (!product) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-background'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-foreground mb-4'>
            Không tìm thấy sản phẩm
          </h1>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className='px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold'
          >
            Quay về danh sách sản phẩm
          </button>
        </div>
      </div>
    );
  }

  // const infoItems = [
  //   { label: 'Thương hiệu', value: product.brand },
  //   { label: 'Xuất xứ', value: product.origin },
  //   { label: 'Quy cách', value: product.packaging },
  //   { label: 'Bảo quản', value: product.storage },
  //   { label: 'Hạn sử dụng', value: product.expiry },
  // ].filter((item) => item.value);

  return (
    <div className='product-detail-container'>
      {/* Top Bar: Back button & Logo */}
      <div className='back-button-container'>
        <button
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const element = document.getElementById('products');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className='back-button'
        >
          <ArrowLeft className='back-button-icon' />
          <span className='back-button-text'>Quay lại danh sách</span>
        </button>

        <img
          src={emotionalLogo}
          alt='Mỗi tiếng ho của con là một lần mẹ xót xa'
          className='emotional-logo-header'
        />
      </div>

      <main className='main-content'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 1. Header Section: Title */}
          <div className='product-header-section'>
            <h3 className='product-title-center'>{product.name}</h3>
          </div>

          <div className='product-layout-split'>
            {/* 2. Image Gallery */}
            <div className='image-column'>
              <div className='image-gallery-flex'>
                {[product.image, ...(product.images || [])]
                  .filter((value, index, self) => self.indexOf(value) === index) // Unique filter
                  .map((img, idx) => (
                    <div key={idx} className='gallery-item'>
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className='gallery-image'
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* 3. Description & Initial Text */}
          <div className='intro-text-column'>
            <h2 className='section-title'>Mô tả sản phẩm</h2>
            <p className='product-description-text'>{product.description}</p>

            {/* Target Audience moved here */}
            {product.target && (
              <div className='target-section'>
                <h3 className='sub-section-title'>Đối tượng sử dụng</h3>
                <ul className='target-list-bullets'>
                  {product.target.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 4. Full Width Ingredients Table */}
          {(product.ingredientsText ||
            (product.ingredients && product.ingredients.length > 0)) && (
            <div className='full-width-section ingredients-section'>
              <h2 className='section-title-bar'>Thành phần</h2>
              {product.ingredientsText ? (
                <p className='text-content'>{product.ingredientsText}</p>
              ) : (
                <div className='table-responsive'>
                  <table className='document-table'>
                    <thead>
                      <tr>
                        <th style={{ width: '40%' }}>Thành phần</th>
                        <th>Hàm lượng / Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.ingredients!.map((ing, i) => (
                        <tr key={i}>
                          <td className='font-medium'>{ing.name}</td>
                          <td>{ing.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* 5. Detailed Info Blocks (Usage, Dosage) */}
          <div className=' detailed-info-blocks'>
            {/* Usage (Công dụng) */}
            {product.usage && (
              <div className='info-block'>
                <h2 className='section-title-simple'>Cách dùng</h2>
                <ul className='document-list'>
                  {product.usage.map((u, i) => (
                    <li key={i}>{u}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Dosage (Cách dùng) */}
            {product.dosage && (
              <div className='info-block'>
                <h2 className='section-title-simple'>Cách dùng</h2>
                <div className='dosage-text'>
                  {product.dosage.map((step, i) => (
                    <p key={i} className='dosage-line'>
                      - {step}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Storage & Expiry */}
            <div className='info-block'>
              <h2 className='section-title-simple'>Thông tin thêm</h2>
              <p>
                <strong>Bảo quản:</strong>{' '}
                {product.storage || 'Nơi khô ráo, thoáng mát'}
              </p>
              {product.expiry && (
                <p>
                  <strong>Hạn sử dụng:</strong> {product.expiry}
                </p>
              )}
              {product.packaging && (
                <p>
                  <strong>Quy cách:</strong> {product.packaging}
                </p>
              )}
            </div>
          </div>

          {/* 6. Banners Section */}
          {product.banners && product.banners.length > 0 && (
            <div className='banners-section'>
              {product.banners.map((banner, idx) => (
                <div key={idx} className='banner-item'>
                  <img
                    src={banner}
                    alt={`Banner ${idx + 1}`}
                    className='banner-image'
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default ProductDetail;
