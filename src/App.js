import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './Main/Main';
import Login from './Login/Login';
import './App.css';
import Register from './Login/register';
import Booking from './components/booking/booking';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />

      </Routes>
    </div>
)};

export default App;
