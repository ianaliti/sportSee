import React from 'react'
import { PieChart, Pie, Cell } from "recharts";
import './UserKPI.css'


export default function UserKPI({ score }) {

  console.log(score) 

  const data = [
    { value: score },
    { value: 1 - score } 
  ];

  const backgroundData = [{ value: 1 }];

  return (
    <div className='userKPI-background'>
      <PieChart width={258} height={258}>
        <Pie
          data={backgroundData}
          dataKey='value'
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={-180}
          innerRadius={80}
          outerRadius={90}
          fill="transparent"
        />
        <Pie
          data={data}
          dataKey='value'
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={-180}
          innerRadius={80}
          outerRadius={90}
          cornerRadius={5}
          fill=""
        >
          <Cell fill="#ef4444" />
          <Cell fill="transparent" />
        </Pie>
      </PieChart>

      <div className='text'>
        <p>Score</p>
        <p>{score}%</p>
        <p>de votre objectif</p>
      </div>

    </div>
  )
}
