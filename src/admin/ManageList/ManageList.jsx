import React from 'react'
import './manage.css'
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';


const ManageList = () => {
  return (
    <div className='list'>
        <ul className='manage'>
            <div className='folder'>
                <FolderSpecialIcon style={{color: 'white', marginBottom: '-10rem', position: 'relative'}} />
                <h4>Quản lý</h4>
            </div>
            <li>
                <a href='dashboardadmin/account'>Thông tin tài khoản</a>
            </li>
            <li>
<<<<<<< HEAD
                <a href='dashboard/datban'>Thông tin đặt bàn</a>
=======
                <a href='dash/datban'>Thông tin đặt bàn</a>
>>>>>>> 3c10f61 (first commit)
            </li>
            <li>
                <a href='dashboardadmin/doanhthu'>Thông tin doanh số</a>
            </li>
            <div className='folder'>
                <FolderSpecialIcon style={{color: 'white'}} />
                <h4>Về nhà hàng</h4>
            </div>
            <li>
                <a href='about'>Về chúng tôi</a>
            </li>
            <li>
                <a href='awards'>Các thành tựu</a>
            </li>
            <li>
                <a href='contact'>Liên hệ</a>
            </li>
            <div className='folder'>
                <FolderSpecialIcon style={{color: 'white'}}/>
                <h4>Menu</h4>
            </div>
            <li>
                <a href='breadfood'>Món ăn điểm tâm</a>
            </li>
            <li>
                <a href='mainfood'>Món ăn chính</a>
            </li>
            <li>
                <a href='wines'>Rượu & Bia</a>
            </li>
            <div className='folder'>
                <FolderSpecialIcon style={{color: 'white'}}/>
                <h4>Địa chỉ nhà hàng</h4>
            </div>
            <li>
                <a href='branch'>Các chi nhánh</a>
            </li>
        </ul>
    </div>
  )
}

export default ManageList
