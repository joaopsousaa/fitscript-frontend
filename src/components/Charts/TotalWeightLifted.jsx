import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function TotalWeightLifted({ chartData }) {
  return (
    <div>
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Total Weight Lifted per Workout",
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

export default TotalWeightLifted;
