import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import './UserKPI.css'


export default function UserKPI({ score }) {

  console.log(score)

  const data = [
    { value: score },
    { value: 1 - score }
  ];

  const backgroundData = [{ value: 1 }];

  return (
    <div className='score-container'>
      <div className='score-label'>Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
         margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
         >
          <Pie
            data={backgroundData}
            dataKey='value'
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={-180}
            innerRadius="80%"
            outerRadius="90%"
            fill="#f3f4f6"
          />
          <Pie
            data={data}
            dataKey='value'
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={-180}
            innerRadius="80%"
            outerRadius="90%"
            cornerRadius="5%"
          >
            <Cell fill="#ef4444" />
            <Cell fill="transparent" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className='score-text-container'>
        <div className='score-percentage'>{score}%</div>
        <div className='score-subtitle'>de votre</div>
        <div className='score-subtitle'>objectif</div>
      </div>

    </div>
  )
}
