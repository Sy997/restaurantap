import React, { useState } from 'react'
import './booking.css'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from '../../constants/data';
import Cart from '../Cart/Cart';
import { Footer } from '../../container';
import {useNavigate} from 'react-router-dom';

const Booking = (props) => {

  const navigate = useNavigate();

  const [chinh, setChinh] = useState('')
  const [loait, setLoait] = useState('')
  const [time, setTime] = useState('')
  const [sol, setSol] = useState('')
  const [hoten, setHot] = useState('')
  const [sdt, setSdt] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    if (chinh.length === 0 || loait.length === 0 || time.length === 0 || sol.length === 0 || hoten.length === 0) {
      alert("Thông Tin Bạn Cấp Chưa Đầy Đủ")
    }
    else if (sdt.length < 8) {
      const sdtif = document.getElementById('sdtif')
      sdtif.innerHTML = "Số điện thoại không đúng"
      sdtif.style.color = 'white'
      sdtif.style.borderColor = 'red'
    }
    else {
      navigate('/info');
    }
  }


  return (
    <div className='bookingg app__bg'>        
      <form className='formss'>
        <h1 className='headtext__cormorant'>Đặt Cho Mình Một Bữa Tiệc</h1>
        <div className='mainbookk'>
          <div className='leftf'>
            <div className='diadiem'>
            <label htmlFor='Box' className='p__opensans'>Chọn chi nhánh</label>
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
          <div className='loaitiec'>
            <label htmlFor='loaitiec'>Loại tiệc</label>
            <Box id='loaitiec' sx={{ minWidth: 350 }} className="boxtiecc" style={{background: 'white', borderRadius: '10px'}}>
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
          <div class="thoigian">
            <label class="control-label p__opensans" for="timepicker" >Chọn Thời Gian Bạn Muốn</label>
            <input type="time" class="form-control" onChange={(e) => setTime(e.target.value)} style={{height: '60px', color: 'black', paddingLeft: '10px'}} id="timepicker" />
            
          </div>
          </div>
          <div className='rightf'>
            <div className='soluong'>
            <label htmlFor='Soluong'>Nhập số lượng người có thể</label>
            <input id='Soluong' type="number" onChange={(e) => setSol(e.target.value)} required className='p__opensans'/>
          </div>
          <div className='hoten'>
            <label htmlFor='Soluong'>Nhập họ tên của bạn</label>
            <input id='Soluong' type="text" onChange={(e) => setHot(e.target.value)} required className='p__opensans'/>
          </div>
          <div className='sodienthoai'>
            <label  htmlFor='sdt'>Nhập số điện thoại của bạn</label>
            <input id='sdt' onChange={(e) => setSdt(e.target.value)}  type="number" required className='p__opensans'/>
            <p id='sdtif'></p>
          </div>
          </div>
        </div>
        <Cart brand={chinh} kindpart={loait} time={time} cata={sol} fulname={hoten} phone={sdt}/>
        <strong onClick={
          () => setChinh({
            chinh: ''
          })
        } className='dele'>
          Hủy đặt bàn
        </strong>
        <button className='but' onClick={handleClick}>Đặt chỗ</button>
      </form>
      <Footer className="app__bgr" />
    </div>
  )
}

export default Booking
