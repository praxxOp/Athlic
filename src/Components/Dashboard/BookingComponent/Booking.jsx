import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import "./Booking.css";

const MAX_BOOKINGS = 1000;
const currentBookings = 900; 
const chartData = [{ bookings: currentBookings, fill: "white" }];

const bookingPercentage = (currentBookings / MAX_BOOKINGS) * 100;
const endAngle = (bookingPercentage / 100) * 360;

export default function Booking() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Total Number of Bookings</h2>
        <p className="card-description">Today's Statistics</p>
      </div>
      <div className="card-content">
        <div className="chart-container">
          <RadialBarChart
            width={250}
            height={250}
            data={chartData}
            startAngle={90}
            endAngle={90 + endAngle} 
            innerRadius={70}
            outerRadius={100}
          >
            <RadialBar dataKey="bookings" cornerRadius={5} />
            <PolarRadiusAxis
              tick={false}
              tickLine={false}
              axisLine={false}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && viewBox.cx && viewBox.cy) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontFamily: "robert",
                        }}
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          style={{
                            fill: "white",
                            fontSize: "1.9rem",
                            fontWeight: "bold",
                          }}
                        >
                          {currentBookings.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy + 24}
                          style={{ fill: "white", fontSize: ".9rem" }}
                        >
                          Bookings
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </div>
      </div>
      <div className="card-footer">
        <div className="trending">
          Trending up by 5.2% yesterday <TrendingUp size={16} />
        </div>
        <div className="muted">Showing total bookings for today</div>
      </div>
    </div>
  );
}
