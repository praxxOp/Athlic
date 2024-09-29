import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Amount.css";

export default function AmountChart() {
  const data = [
    { date: "2024-01-01", amount: 2000 },
    { date: "2024-01-02", amount: 2100 },
    { date: "2024-01-03", amount: 2200 },
    { date: "2024-01-04", amount: 1300 },
    { date: "2024-01-05", amount: 1400 },
    { date: "2024-01-06", amount: 2500 },
    { date: "2024-01-07", amount: 1600 },
  ];

  const totalAmount = data.reduce((sum, day) => sum + day.amount, 0);

  return (
    <div className="amount-chart">
      <div className="amount-chart__header">
        <p className="amount-chart__description">Total Amount Received</p>
        <h2 className="amount-chart__title">
          ${totalAmount.toLocaleString()}{" "}
          <span className="amount-chart__subtitle">in 7 days</span>
        </h2>
      </div>
      <div className="amount-chart__chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="date"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                })
              }
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis
              tickFormatter={(value) => `$${value}`}
              tickLine={true}
              axisLine={true}
              width={80}
              minTickGap={20}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="amount-chart__tooltip">
                      <p className="amount-chart__tooltip-date">
                        {new Date(label).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <p className="amount-chart__tooltip-amount">
                        ${payload[0].value.toLocaleString()}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="amount"
              className="amount-chart__bar"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="amount-chart__footer">
        <p className="amount-chart__summary">
          Over the past 7 days, you have received a total of{" "}
          <span className="amount-chart__summary-highlight">
            ${totalAmount.toLocaleString()}
          </span>
          .
        </p>
        <p className="amount-chart__summary">
          Your daily average is{" "}
          <span className="amount-chart__summary-highlight">
            $
            {(totalAmount / 7).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </span>
          .
        </p>
      </div>
    </div>
  );
}
