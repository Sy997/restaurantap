import React from 'react'
import './dashboard.css'
import ManageList from './ManageList/ManageList'
import NavbarAdmin from './NavbarAdmin/NavbarAdmin'
const Dashboard = () => {
  return (
    <div className='app__bgad' >
      <NavbarAdmin />
      <div className='maincore'>
        <ManageList />
      </div>
    </div>
  )
}

export default Dashboard
