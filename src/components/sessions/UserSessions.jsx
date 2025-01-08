import React from "react";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import './UserSessions.css'
import { Tooltip } from "recharts";


export default function UserSessions({ sessions }) {

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-container">
          {payload[0].value} min
        </div>
      );
    }
    return null;
  };

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
      <h2 className="session-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessions}
          margin={{ top: 65, right: 30, left: 20, bottom: 30 }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false} tickFormatter={formatXAxis} tick={{ fill: "#FFFFFF"}} dy={30} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false}  activeDot={{ r: 4, fill: 'white' }}  dy={10}  />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
