import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { productCategories, agentInfo } from '@/data/products';
import './css/ProductCategoriesSection.css';

const ProductCategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section id='products' className='product-categories-section'>
      {productCategories.map((category) => (
        <div key={category.id} className='category-wrapper'>
          {/* Category Banner */}
          <div className='category-banner-wrapper'>
            <motion.div
              className='category-banner-content'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative background glow */}
              <div className='category-banner-glow'></div>

              <h2 className='category-banner-title'>{category.name}</h2>
            </motion.div>
          </div>

          {/* Products Grid */}
          <div className='products-container'>
            <div className='products-grid'>
              {category.products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className='product-card group'
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Product Image */}
                  <div className='product-image-wrapper'>
                    <div className='product-image-container'>
                      <img
                        src={product.image}
                        alt={product.name}
                        className='product-image'
                        loading='lazy'
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className='product-info-wrapper'>
                    <div className='card-accent'></div>
                    <p className='product-title'>{product.name}</p>

                    <div className='product-actions'>
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className='product-button learn-more'
                      >
                        Tìm Hiểu Thêm
                      </button>
                      <a
                        href={product.purchaseUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='product-button buy-now'
                      >
                        Mua Ngay
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCategoriesSection;
