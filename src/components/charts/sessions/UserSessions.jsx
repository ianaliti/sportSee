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

  const CustomCursor = ({ points }) => {
    if (points && points.length > 0) {
      return (
        <rect
          x={points[0].x}
          y={0}
          width="100%"
          height="100%"
          className="custom-cursor"
        />
      );
    }
    return null;
  };

  return (
    <div className="averageTraining">
      <h2 className="session-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessions}
          margin={{ top: 65, right: 30, left: 20, bottom: 30 }}
        >
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#FFFFFF"}} 
            dy={30} 
            opacity={0.7} 
          />
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={<CustomCursor />} 
              />
          <Line 
            type="natural" 
            dataKey="length" 
            stroke="#FFFFFF" 
            strokeWidth={2} 
            dot={false}  
            activeDot={{ r: 4, fill: 'white' }}  
            dy={10} 
            opacity={0.7} 
            />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
