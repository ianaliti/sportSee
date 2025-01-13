import React from 'react'
import './UserPerfomance.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function UserPerfomance({ performance }) {

  return (
    <div className='radar'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius='65%'
          data={performance}
          startAngle={150}
          endAngle={510}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <PolarGrid 
            gridType="polygon" 
            stroke='#FFFFFF' 
            radialLines={false} 
            />
          <PolarAngleAxis 
            dataKey="kind" 
            tick={{ fill: "#FFFFFF", fontSize: 12 }} 
            stroke="#none" 
            dy={3}  
            />
          <Radar
            name='Performance'
            dataKey="value"
            stroke='transparent'
            fill="#FF0101B2"
            fillOpacity={0.9}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div >
  )
}
