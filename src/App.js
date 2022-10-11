import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './Main/Main';
import Login from './Login/Login';
import './App.css';
import Register from './Login/register';
import Booking from './components/booking/booking';
import Adminlogin from './admin/Adminlogin';
import Dashboard from './admin/dashboard';
import Bookinginfo from './admin/booking/Bookinginfo';
import DataTable from './admin/Account/Account';
import Details from './components/Details/Details';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path='/details' element={<Details />}/>

        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path='/dashboardadmin' element={<Dashboard />} />

        <Route path='dashboardadmin/account' element={<DataTable />} />
        <Route path='dashboard/datban' element={<Bookinginfo />} />
      
      </Routes>
    </div>
)};

export default App;
