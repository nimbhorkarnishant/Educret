import React from 'react';
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    ResponsiveContainer
  } from "recharts";

export default function bar_graph(){
    const data = [
        { name: "Algebra", Courses: 60 },
        { name: "Physics", Courses:80 },
        { name: "Geometry", Courses: 70 },
        { name: "Chemestry", Courses: 50 },
      ];
    return(
      <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right:30,
              left: 30,
              bottom: 5,
              
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"

            />
            <YAxis 
            />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Courses" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
    )
}