import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Những hương vị mới bạn muốn"/>
      <h1 className='app__header-h1'>Tìm kiếm bữa tối của bạn</h1>
      <p className='p_opensans' style={{ margin: '2rem 0' }}></p>
      <button type='button' className='custom__button'>tìm thêm</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
