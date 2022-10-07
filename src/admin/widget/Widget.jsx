import './widget.css'
import React from "react"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({ type }) => {
    let data;

    const amount = 100;
    const diff = 20;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "Xem tất cả người dùng",
                icon: (<PersonOutlineIcon
                        className='icon'
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)"
                        }} 
                    />
                )
            };
            break;
        case "order":
            data = {
                title: "SỐ LƯỢNG ĐẶT",
                isMoney: true,
                link: "Xem tất số lượng đặt",
                icon: (<ShoppingCartIcon className='icon' 
                    style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218, 165, 32, 0.2)"
                        }} 
                    />
                )
            };
            break;
        case "earning":
            data = {
                title: "Số tiền kiếm được",
                isMoney: true,
                link: "Xem tất cả số liệu",
                icon: <MonetizationOnIcon className='icon' />
            };
            break;
        case "balance":
            data = {
                title: "Số tiền dư còn lại",
                isMoney: true,
                link: "Xem chi tiết",
                icon: <AccountBalanceWalletIcon className='icon' />
            };
            break;
        default:
            break;

    }

    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className="counter">
                    {data.isMoney && "Vnđ"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;