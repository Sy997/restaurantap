import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.hs} alt="hoang sy" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='Lời khuyên của đầu bếp hàng đầu' />
      <h1 className="headtext__cormorant">Những gì bạn tin tưởng vào nhà hàng</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_qoute'>
          <img src={images.quote} alt="qoute" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae quisquam aspernatur cumque iste beatae, repellendus illo laborum necessitatibus debitis rem ipsa et aperiam neque sit quod magni ullam vitae.</p>
        </div>
        <p className='p__opensans'>nothing is nothing, everything is everything</p>
      </div>
      <div className='app__chef-sign'>
        <p>Sy</p>
        <p style={{color: 'white'}}>Đầu bếp & Nhà đầu tư</p>
        <img src={images.signme} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
