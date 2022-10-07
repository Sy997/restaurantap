import React, { useRef } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs' 
import './Gallery.css';

const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300
    }
  }
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Món ăn của nhà hàng" />
        <h1 className='headtext_cormorant'>Các món ăn nổi bật của chúng tôi</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Exercitationem Molestiae Quisquam Aspernatur Cumque Iste Beatae, Repellendus Illo Laborum Necessitatibus Debitis Rem Ipsa Et Aperiam Neque Sit Quod Magni Ullam Vitae.</p>
        <button style={{marginTop: '2rem' }} type="button" className='custom__button'>Xem Thêm</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {image.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
              <img src={image} alt="mon an" />
              <BsInstagram className='gellary__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('Right')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
