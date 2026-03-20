import { Phone, Mail, MapPin, Leaf } from 'lucide-react';
import { agentInfo } from '@/data/products';
import './css/FooterSection.css';

const FooterSection = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-container'>
        <div className='footer-grid'>
          <div className='footer-col footer-col-left'>
            <p className='footer-tagline'>Đại lý phân phối chính hãng</p>
            <div className='footer-brand-wrapper'>
              <img
                src='/Logo_Radio_Shopping.png'
                alt='Radio Shopping'
                className='footer-radio-logo'
              />
              {/* <h3 className='footer-brand'>Radio Shopping</h3> */}
            </div>
          </div>

          <div className='footer-col footer-col-middle'>
            <div className='footer-address-block'>
              <p className='footer-contact-label'>Địa chỉ công ty:</p>
              <p className='footer-contact-text'>
                <MapPin className='footer-icon-small inline-icon' />{' '}
                {agentInfo.address}
              </p>
            </div>

            <div className='footer-address-block'>
              <p className='footer-contact-label'>Kho hàng Cần Thơ:</p>
              <p className='footer-contact-text'>
                <MapPin className='footer-icon-small inline-icon' />{' '}
                {agentInfo.warehouse}
              </p>
            </div>
          </div>

          <div className='footer-col footer-col-right'>
            <h4 className='footer-contact-header'>THÔNG TIN LIÊN HỆ</h4>
            <div className='footer-links-row'>
              <a href={`tel:${agentInfo.phone}`} className='footer-link'>
                <Phone className='footer-icon-small' /> {agentInfo.phone}
              </a>
              <a href={`mailto:${agentInfo.email}`} className='footer-link'>
                <Mail className='footer-icon-small' /> {agentInfo.email}
              </a>
            </div>
          </div>
        </div>

        <p className='footer-copyright'>
          © 2026 RADIO SHOPPING - GREEN 100. Tất cả quyền được bảo lưu.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
