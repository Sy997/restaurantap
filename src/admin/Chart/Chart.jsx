import React from "react"
import "./chart.css"
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ aspect, title }) => {
    const data = [
        { name: "Tháng 1", Total: 1200 },
        { name: "Tháng 2", Total: 2100 },
        { name: "Tháng 3", Total: 800 },
        { name: "Tháng 4", Total: 1600 },
        { name: "Tháng 5", Total: 900 },
        { name: "Tháng 6", Total: 1700 },
        { name: "Tháng 7", Total: 2300 },
        { name: "Tháng 8", Total: 1700 },
        { name: "Tháng 9", Total: 1100 },
        { name: "Tháng 10", Total: 1700 },
        { name: "Tháng 11", Total: 1900 },
        { name: "Tháng 12", Total: 1700 },
      ];
      
    return (
        <div className="chart">
        <div className="title"><h2>Doanh thu trong 12 tháng</h2></div>
        <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <XAxis dataKey="name" color="gray" />
        <CartesianGrid className="chartGrid" strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    )
}

export default Chart