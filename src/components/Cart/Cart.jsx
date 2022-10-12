import React from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';
import data from '../../constants/data';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import { FindUs, Footer } from '../../container';

import "./cart.css"

// const method = document.getElementById('metho')

// method.addEventListener('click', function() {
//   const contact = document.createAttribute('p')
//   contact.innerHTML = "Chuyển khoản nhé"
// })

const Cart = (props) => {

const [payment, setpayment] = useState('')



const handle = (e) => {
    if (payment.length === 0) {
        const paymen = document.getElementById('paymen')
        paymen.innerHTML = "Chưa nhập phương thức thanh toán"
        paymen.style.color = "black"
    }
}

  return (
    <div style={{background: 'white', textColor: 'white', width: '100%', overflow: 'hidden'}}>
        <table>
            <tr>
                <th colspan="6" style={{width: '200px', paddingLeft:'10px'}}>
                    Thông tin đặt bàn
                </th>
            </tr>
            <tr>
                <th style={{paddingLeft:'10px'}}>Địa Chỉ</th>
                <th style={{paddingLeft:'10px'}}>Loại Tiệc</th>
                <th style={{paddingLeft:'10px'}}>Thời gian</th>
                <th style={{paddingLeft:'10px'}}>Số lượng</th>
                <th style={{paddingLeft:'10px'}}>Họ và Tên</th>
                <th style={{paddingLeft:'10px'}}>Số Điện Thoại</th>
            </tr>
            
            <tr>
                <td><input style={{background: 'white', width: '350px', height: '50px', border: 'none'}} value={props.brand} /></td>

                <td><input style={{background: 'white', width: '200px', height: '50px', border: 'none'}} value={props.kindpart} /></td>
                <td><input style={{background: 'white', width: '150px', height: '50px', border: 'none'}} value={props.time} /></td>
                <td><input style={{background: 'white', width: '150px', height: '50px', border: 'none'}} value={props.cata} /></td>
                <td><input style={{background: 'white', width: '200px', height: '50px', border: 'none'}} value={props.fulname} /></td>
                <td><input style={{background: 'white', width: '150px', height: '50px', border: 'none'}} value={props.phone} /></td>
            </tr>
        </table>          
    </div>
)}

export default Cart