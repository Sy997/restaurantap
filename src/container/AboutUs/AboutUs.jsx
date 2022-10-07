import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="ve chung toi" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Về chúng tôi</h1>
        <img src={images.spoon} alt="về chung toi" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem veritatis et odit ducimus delectus quasi. Ipsum nemo soluta recusandae ullam voluptatem, nam dolorem vitae aliquid eos. Incidunt vitae veritatis adipisci!</p>
        <button type='button' className='custom__button'>Tìm hiểu thêm</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="ve dao" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Lich sử chúng tôi</h1>
        <img src={images.spoon} alt="về chung toi" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem veritatis et odit ducimus delectus quasi. Ipsum nemo soluta recusandae ullam voluptatem, nam dolorem vitae aliquid eos. Incidunt vitae veritatis adipisci!</p>
        <button type='button' className='custom__button'>Tìm hiểu thêm</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
