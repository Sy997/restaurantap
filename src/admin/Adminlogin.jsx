import React , {useState} from 'react'
import './adminlogin.css'
import { TextField } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link, Navigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import data from '../constants/data'


const Adminlogin = () => {

    const [username, setUsername] = useState('')
    const [pass, setPassw] = useState('')

    const handleClick = (e) => {
        data.userAdmin.map((user, index) => {
            if (username !== user.user && pass !== user.matkhau && user.stt) {
                const aler = document.getElementById('alert')
                setTimeout(
                    (() => aler.innerHTML = 'Thông tin tài khoản hoặc mật khẩu không đúng'),0)
            } else {
                <Navigate to='./dashboard' />
            }
        })
    }

  return (

    <div className='adminlogin app__bgr_admin flex__center'>
        <form className='formDn__admin flex__center'>
            <h1 className='headtext'>Đăng nhập Admin</h1>
            <div className='inpEm'>
                <label className='p__opensans' htmlFor="outlined-basic">Email hoặc số điện thoại</label>
                <TextField style={{width: '400px'}} className='email' id="outlined-basic" type='email' placeholder='Email hoặc số điện thoại' variant="outlined" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='inpPa'>
                <label className='p__opensans' htmlFor="outlined-basic">Mật khẩu</label>
                <TextField style={{width: '400px'}} className='pass' id="outlined-basic" type="password" placeholder='Mật khẩu' variant="outlined" onChange={(e) => setPassw(e.target.value)} />
            </div>
            <div className='forget'>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Lưu thông tin" />
                <Link to='./verify'>Quên mật khẩu?</Link>
            </div>
            <p id='alert'></p>
            <div className='buttonCl'>
                <Button onClick={handleClick} style={{width: '400px'}} className='button' variant="contained">Đăng nhập</Button>
            </div>
        </form>
    </div>
  )
}

export default Adminlogin