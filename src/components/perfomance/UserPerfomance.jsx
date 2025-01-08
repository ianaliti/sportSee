import React from 'react'
import './UserPerfomance.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function UserPerfomance({ data, workoutTypes }) {

  const combineData = data.map(item => ({
    value: item.value,
    kind: workoutTypes[item.kind].charAt(0).toUpperCase() + workoutTypes[item.kind].slice(1).toLowerCase()
  }))

  return (
    <div className='radar'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius='65%'
          data={combineData}
          startAngle={210}
          endAngle={570}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <PolarGrid gridType="polygon" stroke='#FFFFFF' radialLines={false} />
          <PolarAngleAxis dataKey="kind" tick={{ fill: "#FFFFFF", fontSize: 12 }} stroke="#none" dy={3}  />
          <Radar
            name='Performance'
            dataKey="value"
            stroke='transparent'
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div >
  )
}
