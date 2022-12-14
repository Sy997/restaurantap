import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  return(
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Trang chủ</a></li>
        <li className='p__opensans'><a href='#about'>Về chúng tôi</a></li>
        <li className='p__opensans'><a href='#menu'>Thực đơn</a></li>
        <li className='p__opensans'><a href='#awards'>Thành tựu</a></li>
        <li className='p__opensans'><a href='#contact'>Liên hệ</a></li>
      </ul>
      <div className='app__navbar-login'>
        <div className='logre'>
          <a className='p__opensans' style={{textDecoration: 'none'}} href='/login'>Login</a>|
          <a className='p__opensans' style={{textDecoration: 'none'}} href='/register'>Register</a>
        </div>
        <a href='/booking' style={{textDecoration: 'none'}} className='p__opensans'>Đặt bàn</a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggle(true)} />

        {toggle && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggle(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li className='p_opensans'><a href='#home'>Trang Chủ</a></li>
            <li className='p_opensans'><a href='#about'>Về Chúng Tôi</a></li>
            <li className='p_opensans'><a href='#menu'>Thực Đơn</a></li>
            <li className='p_opensans'><a href='#awards'>Giải Thưởng</a></li>
            <li className='p_opensans'><a href='#contact'>Liên Hệ</a></li>
          </ul>
          </div>
          )}
      </div>
    </nav>
  )
};

export default Navbar;
