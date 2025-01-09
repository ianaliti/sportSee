import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './AreaChart.css'

export default function AreaChartComponent({ activity }) {

    const data = activity.map((name) => ({
        'Poids (kg)': name.kilogram,
        'Calories brûlées (kCal)': name.calories
    }))

    const CustomTooltipChart = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltip-chart" >
                    <p>{payload[0].value}kg</p>
                    <p>{payload[1].value}kCal</p>
                </div>
            );
        }
        return null;
    };

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
                    barSize={7}

                >
                    <Legend 
                        verticalAlign="top" 
                        height={36} 
                        align="right" 
                        iconType="circle" 
                        iconSize="7" 
                    />
                    <CartesianGrid vertical={false} />
                    <XAxis
                        tickLine={false}
                        axisLine={false}
                        opacity={0.7}
                        padding={{left: 10, right: 10 }}
                        tickMargin={10}
                    />
                    <YAxis 
                        orientation="right" 
                        opacity={0.7} 
                        type="number" 
                        axisLine={false} 
                        tickLine={false} 
                        tickCount={3} 
                    />
                    <Tooltip content={<CustomTooltipChart />} />
                    <Bar
                        dataKey="Poids (kg)"
                        fill="#282D30"
                        radius={[3, 3, 0, 0]}
                    />
                    <Bar
                        dataKey="Calories brûlées (kCal)"
                        fill="#e60000"
                        radius={[3, 3, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
}
