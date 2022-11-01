import React from "react";
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

function Charts({ chartData }) {
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
