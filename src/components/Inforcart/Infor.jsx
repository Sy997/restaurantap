import React from 'react'
import './infocart.css'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from '../../constants/data';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';

const Info = (props) => {

  const [payment, setpayment] = useState('')

  return (
    <div className='success app__bgr'>
      <div className='infopay'>
        <div className='headpay flex__center'>
          <h3>Đặt bàn thành công</h3>
          <strong>Chúng tôi sẽ liên lạc với bạn để xác minh thông tin nhé</strong>
          <a href='/'>Quay về trang chủ</a>
        </div>
          <div className='paymethod'>
              <strong className='latepay'>Bạn có thể thanh toán sau hoặc</strong>
              <Box id='loaitiec' sx={{ minWidth: 250 }} className="boxtiec" style={{background: 'white', borderRadius: '0px'}}>
                  <InputLabel id="demo-simple-select-label">Chọn Phương Thức Thanh Toán</InputLabel>
                  <FormControl style={{border: 'none'}} fullWidth>                
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={(e) => setpayment(e.target.value)}
                      label="Chọn Phương Thức Thanh Toán"
                      >
                      {data.payment.map((pay, index) => (
                          <MenuItem value={pay.id}>
                              <a href={pay.payment}>{pay.phuongthuc}
                              <img style={{width: '30px', height: '30px', marginLeft: '0.5rem'}} src={pay.url} alt="" /></a>
                          </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
              </Box>
          </div>
        </div>         
    </div>
  )
}

export default Info