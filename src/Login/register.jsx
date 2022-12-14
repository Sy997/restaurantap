import React from 'react'
import { useState } from 'react'
import './register.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link, TextField } from '@mui/material';
import { Button } from '@mui/material'
import { useNavigate  } from 'react-router-dom'
const Register = () => {

    const [username, setUsername] = useState("")
    const [passw, setPassw] = useState('')
    const [pass2, setPassw2] = useState('')
    const [show, setShow] = useState('password')
    const Navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        
        if (passw !== pass2) {
            alert('mat khau khong trung khop voi nhau')
        }
        else if(username.length <= 5 && passw.length <= 5) {
            alert('Thông tin tài khoản hoặc mật khẩu quá ngắn')
        }

        else if (passw.length <= 5) {
            alert('mat khẩu quá ngắn')
        }

        else {
            document.getElementById('intu').innerHTML = 'Đăng kí thành công, trình duyệt sẽ tư động chuyển qua đăng nhập trong 5s'
            document.getElementById('formregister').style.display = 'none'
            document.getElementById('intu').style.display = 'block';
            
            setTimeout(() => Navigate('/Login'), 5000)
        }
    }
  return (
    <div className='forms app__bg'>
        <form className='formregister' id='formregister'>
            <h1 className=''>ĐĂNG KÍ</h1>
            <div className='inputs'>
                <div className='inpname'>
                    <label htmlFor='email'>
                        Email hoặc số điện thoại
                    </label>
                    <TextField style={{width: '400px'}} onChange={(e) => setUsername(e.target.value)} className='email' type="email" id='email' placeholder='Email hoặc số điện thoại' variant="outlined" />
                </div>
                <div className='inppass'>
                    <label  htmlFor='pass'>
                        Mật khẩu
                    </label>
                    <TextField style={{width: '400px'}} onChange={(e) => setPassw(e.target.value)} className='pass' type={show} id='pass' placeholder='Mật khẩu' variant="outlined" />
                    <RemoveRedEyeIcon style={{position: 'relative', left: '360px', bottom: '47px', cursor: 'pointer'}} className='eye' onClick={() => setShow(show === 'text' ? 'password' : 'text')} />                  
                </div>
                <div className='inppass2'>
                    <label htmlFor='pass'>
                        Nhập lại mật khẩu
                    </label>
                    <TextField style={{width: '400px'}} onChange={(e) => setPassw2(e.target.value)} className='pass' type="password" id='pass' placeholder='Mật khẩu' variant="outlined" />                   
                </div>
                <div className='button'>
                    <Button style={{width: '300px'}} className='dangnh' type='button' onClick={handleClick} variant="contained">Đăng kí</Button>
                </div>
                <div className='bandaco_tk'>
                    <p style={{padding: '0 25px'}}>Bạn đã có tài khoản?</p>
                    <Link style={{padding: '0 25px', position: 'relative', bottom: '7px', textDecoration: 'none'}} href="/login" variant="body2">
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </form>
        <h3 id='intu'></h3>
    </div>
  )
}

export default Register
