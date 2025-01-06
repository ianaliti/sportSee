import React from 'react'
import './UserPerfomance.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export default function UserPerfomance({ data, workoutTypes }) {

  const combineData = data.map(item => ({
    value: item.value,
    kind: workoutTypes[item.kind]
  }))

  return (
    <div className='radar'>
      <RadarChart
        outerRadius={80}
        width={258}
        height={258}
        data={combineData}
      >
        <PolarGrid stroke="#111" />
        <PolarAngleAxis dataKey="kind" fill="#111" stroke="#fff" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  )
}
