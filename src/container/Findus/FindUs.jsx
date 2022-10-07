import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className='app__wrapper_info'>
      <SubHeading title="Tìm kiếm chúng tôi" />
      <h1 className='headtext__cormorant' style={{marginTop: '3rem'}}>Tìm đến với chúng tôi để thưởng thức</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>69 Phan Văn Trị, Quận Gò Vấp, Thành Phố Hồ Chí Minh</p>
        <p className='p__opensans' style={{ color: '#DCCA87', margin: '2rem 0' }}>Giờ mở cửa: </p>
        <p className='p__opensans'>Thứ 2 - Thứ 6: 6h:00 A.M - 23h:00 P.M</p>
        <p className='p__opensans'>Thứ 7, Chủ Nhật: 24/24</p>
      </div>
      
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Google Map ngay bạn nhé!!!</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="lien lac" />
    </div>
  </div>
);

export default FindUs;
