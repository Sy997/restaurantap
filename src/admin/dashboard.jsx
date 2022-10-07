import React from 'react'
import './dashboard.css'
import ManageList from './ManageList/ManageList'
import NavbarAdmin from './NavbarAdmin/NavbarAdmin'
import Catagory from './catagory/Catagory'
const Dashboard = () => {
  return (
    <div className='app__bgad' >
      <NavbarAdmin />
      <div className='maincore'>
        <ManageList />
        <Catagory className="userad"/>
      </div>
    </div>
  )
}

export default Dashboard
