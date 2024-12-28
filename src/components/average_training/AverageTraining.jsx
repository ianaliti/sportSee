import React from "react";
import { LineChart, Line, XAxis } from "recharts";
import './AverageTraining.css'


export default function AverageTraining({ sessions }) {

  console.log(sessions)

  return (
    <div className="averageTraining">
      <LineChart
        width={300}
        height={300}
        data={sessions}
      >
        <XAxis dataKey="day" />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2}/>
      </LineChart>
    </div>
  )
}
