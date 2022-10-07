import React from 'react';
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Những sự thay đổi"/>
      <h1 className="headtext__cormorant">
        Gửi email của bạn về cho chúng tôi
      </h1>
      <p className='p__opensans'>Bạn sẽ không bao giờ phải bỏ lỡ những ưu đãi mà cửa hàng mang đến</p>
    </div>

    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder="Nhap vao email cua ban" />
      <button className='custom__button'>Theo dõi</button>
    </div>
  </div>
);

export default Newsletter;
