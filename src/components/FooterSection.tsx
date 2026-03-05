import { Phone, Mail, MapPin, Leaf } from 'lucide-react';
import { agentInfo } from '@/data/products';
import './css/FooterSection.css';

const FooterSection = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-container'>
        <p className='footer-tagline'>Đại lý phân phối chính hãng</p>
        <img
          src='/Logo_Radio_Shopping.png'
          alt='Radio Shopping'
          className='footer-radio-logo'
        />
        <h3 className='footer-brand'>Radio Shopping</h3>
        <h4 className='footer-contact-header'>THÔNG TIN LIÊN HỆ</h4>

        <div className='footer-contact-info'>
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

          <div className='footer-links-row'>
            <a href={`tel:${agentInfo.phone}`} className='footer-link'>
              <Phone className='footer-icon-small' /> {agentInfo.phone}
            </a>
            <span className='footer-divider'>|</span>
            <a href={`mailto:${agentInfo.email}`} className='footer-link'>
              <Mail className='footer-icon-small' /> {agentInfo.email}
            </a>
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
