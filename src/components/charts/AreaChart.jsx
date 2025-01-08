import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './AreaChart.css'

export default function AreaChartComponent({ activity }) {

    const data = activity.map((name) => ({
        'Poids (kg)': name.kilogram,
        'Calories brûlées (kCal)': name.calories
    }))

    return (
        <div className="area-container">
            <div className="area-p">Activité quotidienne</div>
            <ResponsiveContainer width={"100%"} height={"100%"}> 
                <BarChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={5}
                    
                >
                    <Legend verticalAlign="top" height={36} align="right" iconType="circle" iconSize="7" />
                    <CartesianGrid vertical={false} />
                    <Tooltip />
                    <XAxis />
                    <YAxis orientation="right" />
                    <Tooltip />
                    <Bar
                        dataKey="Poids (kg)"
                        fill="#282D30"
                    />
                    <Bar
                        dataKey="Calories brûlées (kCal)"
                        fill="#e60000"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
}
