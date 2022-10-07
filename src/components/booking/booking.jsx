import React, { useState } from 'react'
import './booking.css'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import data from '../../constants/data';
const Booking = () => {

  const [chinh, setChinh] = useState('')
  const [loait, setLoait] = useState('')
  const [time, setTime] = useState('')
  const [sol, setSol] = useState('')
  const [hoten, setHot] = useState('')
  const [sdt, setSdt] = useState('')

  const handleClick = (e) => {
    e.preventDefault()

    alert('Đặt bàn thành công' + " " + 'Địa chỉ bạn đặt là: ' + chinh + ' hình thức tiệc là: ' + loait + ' Thời gian bạn đã đặt: ' + time + ' Số lượng bạn muốn đặt là: ' + sol + ' Họ Tên của bạn là: ' + hoten + ' Số điện thoại: ' + sdt)
  }

  return (
    <div className='booking app__bgr flex__center section__padding'>
      <h1 className='headtext__cormorant' style={{color: 'black'}}>Hãy giành cho mình một chỗ</h1>
      <form className='formBooking'>
        <div className='left'>
          <div className='diadiem'>
            <label htmlFor='Box' className='p__opensans' style={{color: 'black'}}>Chọn chi nhánh</label>
            <Box id='Box' sx={{ minWidth: 350 }} className="box" style={{background: 'white', borderRadius: '10px'}}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => setChinh(e.target.value)}
                >
                {data.chinhanhs.map((chinhanh, index) => (
                  <MenuItem value={chinhanh.diachi}>{chinhanh.diachi}</MenuItem>
                ))}            
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className='loaitiec p__opensans' style={{color: 'black'}}>
            <label htmlFor='loaitiec'>Loại tiệc</label>
            <Box id='loaitiec' sx={{ minWidth: 350 }} className="boxtiec" style={{background: 'white', borderRadius: '10px'}}>
              <FormControl fullWidth>                
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //value={age}
                  label="Age"
                  onChange={(e) => setLoait(e.target.value)}
                >
                  {data.loaitiecs.map((loaitiec, index) => (
                    <MenuItem value={loaitiec.loaitiec}>{loaitiec.loaitiec}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div class="thoigian form-group pmd-textfield pmd-textfield-floating-label">
            <label class="control-label p__opensans" for="timepicker" style={{color: 'black'}}>Chọn Thời Gian Bạn Muốn</label>
            <input type="time" class="form-control" onChange={(e) => setTime(e.target.value)} style={{height: '60px', color: 'black', paddingLeft: '10px'}} id="timepicker" />
          </div>
        </div>
        <div className='right'>
          <div className='soluong'>
            <label className='p__opensans' style={{color: 'black'}} htmlFor='Soluong'>Nhập số lượng người có thể</label>
            <input id='Soluong' type="number" onChange={(e) => setSol(e.target.value)} style={{color: 'black', paddingLeft: '10px'}} required className='p__opensans'/>
          </div>
          <div className='hoten'>
            <label className='p__opensans' style={{color: 'black'}} htmlFor='Soluong'>Nhập họ tên của bạn</label>
            <input id='Soluong' type="text" onChange={(e) => setHot(e.target.value)} style={{color: 'black', paddingLeft: '10px'}} required className='p__opensans'/>
          </div>
          <div className='sodienthoai'>
            <label className='p__opensans' style={{color: 'black'}} htmlFor='sdt'>Nhập số điện thoại của bạn</label>
            <input id='sdt' onChange={(e) => setSdt(e.target.value)} style={{color: 'black', paddingLeft: '10px'}} type="number" required className='p__opensans'/>
          </div>
        </div>
      </form>

      <Button className='custom__button' onClick={handleClick} style={{background: 'white', width: '250px', border: 'none'}}>Đặt chỗ</Button>
    </div>
  )
}

export default Booking
