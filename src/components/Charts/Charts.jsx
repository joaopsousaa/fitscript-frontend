import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";

function Charts({ chartData }) {
  console.log(Chart);
  return (
    <div>
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Total Time Working Out",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default Charts;
