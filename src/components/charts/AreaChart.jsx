import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './AreaChart.css'

export default function AreaChartComponent({ activity }) {

    return (
        <div className="area-container">
            <ResponsiveContainer width={"100%"} height={"100%"}> 
                <BarChart
                    data={activity}
                    margin={{
                        top: 0,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={5}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <XAxis />
                    <YAxis orientation="right" />
                    <Tooltip />
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                    />
                    <Bar
                        dataKey="calories"
                        fill="#e60000"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
}
