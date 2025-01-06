import React from "react";
import { LineChart, Line, XAxis } from "recharts";
import './UserSessions.css'


export default function UserSessions({ sessions }) {

  return (
    <div className="averageTraining">
      <LineChart
        width={258}
        height={258}
        data={sessions}
      >
        <XAxis dataKey="day" />
        <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2}/>
      </LineChart>
    </div>
  )
}
