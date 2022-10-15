import React from 'react'
import './momo.css'
import images from '../../../constants/images'

const Momo = () => {
  return (
    <div className='Momo'>
      <div>
        <h2>Bạn có thể thanh toán qua số điện thoại</h2>
        <p>0988539062</p>
      </div>
      <div>
        <img src={images.qrmomo} alt="momo" />
      </div>
    </div>
  )
}

export default Momo
