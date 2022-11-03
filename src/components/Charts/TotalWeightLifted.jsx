import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
// import { useState } from "react";

function TotalWeightLifted({ chartData }) {
  console.log(Chart);
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
