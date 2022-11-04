import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";

function TotalWeightLifted({ workoutDates, weight }) {
  console.log(Chart);
  return (
    <div>
      <Line
        data={{
          labels: workoutDates,

          datasets: [
            {
              label: "Total Weight Lifted Per Workout (kg)",
              lineTension: 0.5,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: weight,
            },
          ],
        }}
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
