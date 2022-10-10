import React from 'react'
import { useState } from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import {FormControlLabel, Checkbox} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Login = () => {

    const [username, setUsername] = useState("")
    const [passw, setPassw] = useState('')
    const [show, setShow] = useState('password')

    const handleClick = (e) => {
        e.preventDefault()

        if(username.length === 0) {
            alert('Tài khoản không được để trống')
        }
        else if(passw.length === 0) {
            alert('Mật khẩu không được để trông')
        }
        else
            alert('Tài khoản và mật khẩu là: ' + username + ' ' + passw)
    }
  return (
    <div className='forms app__bg flex__center'>
        <form className='formlogin'>
            <h1>ĐĂNG NHẬP</h1>
            <div className="inpEm">
                <label htmlFor='email'>Email hoặc số điện thoại</label>
                <TextField onChange={(e) => setUsername(e.target.value)} style={{width: '400px'}} id="email" type='text' placeholder="Email hoặc số điện thoại" variant="outlined" />
            </div>
            <div className='inpPu'>
                <label htmlFor='password'>Email hoặc số điện thoại</label>
                <TextField onChange={(e) => setPassw(e.target.value)} style={{width: '400px'}} id="password" type={show} placeholder="Mật khẩu" variant="outlined" />
                <RemoveRedEyeIcon onClick={() => setShow(show === 'text' ? 'password' : 'text')} style={{position: 'relative', left: '361px', bottom: '47px', cursor: 'pointer'}} className='eye' />
            </div>
            <div className='checklogin'>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Ghi nhớ" />
                <Link style={{position: 'relative', bottom: '5px'}} to='./forget'>Quên mật khẩu?</Link>
            </div>
            <div className='buttoncheck'>
                <Button onClick={handleClick} style={{width: '300px', height: '40px'}} variant="contained">Đăng nhập</Button>
            </div>
            <div className='bandacotk'>
                <p style={{padding: '0px 35px'}}>Bạn đã có tài khoản?</p>
                <Link style={{padding: '0px 35px',position: 'relative', bottom: '10px'}} to='/register'>Đăng kí</Link>
            </div>
        </form>
    </div>
  )
}

export default Login
