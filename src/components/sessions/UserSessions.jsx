import React from "react";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import './UserSessions.css'


export default function UserSessions({ sessions }) {

  const formatXAxis = (value) => {
    const days = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D"
    };
    return days[value];
  };

  return (
    <div className="averageTraining">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessions}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} tickFormatter={formatXAxis} tick={{ fill: "#FFFFFF"}} />
          <Line type="natural" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
