import React from 'react'
import images from '../../constants/images'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import './navbaradmin.css'

const NavbarAdmin = () => {
  return (
    <div className='nav__admin'>
        <img style={{height: '50px'}} className='logona' src={images.gericht} alt="logo" />
        <div className='signandalert'>
          <AddAlertIcon label="Thông báo" style={{color: 'white', marginRight: '5rem'}} />
          <ManageAccountsIcon label="Thông báo" style={{color: 'white', marginRight: '-9rem'}} />
        </div>
    </div>
  )
}

export default NavbarAdmin