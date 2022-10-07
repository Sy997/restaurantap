import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Liên lạc với chúng tôi</h1>
        <p className='p__opensans'>69 Phan Văn Trị, Quận Gò Vấp, Thành Phố Hồ Chí Minh</p>
        <p className='p__opensans'>0988539062</p>
        <p className='p__opensans'>+84 1345356743</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="Footer lien lac" />
        <p className='p__opensans'>Chúng tôi luôn phục vụ những gì tốt nhất</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: '15px'}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Giờ làm việc</h1>
          <p className='p__opensans'>Thứ 2 - Thứ 6: </p>
          <p className='p__opensans'>7h00 A.M - 17h00 P.M</p>
          <p className='p__opensans'>Thứ 7, Chủ nhật</p>
          <p className='p__opensans'>Off</p>
        </div>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 PHSY, All Right reverse</p>
    </div>
  </div>
);

export default Footer;
