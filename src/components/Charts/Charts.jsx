import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./Charts.css";

function Charts({ workoutDates, workoutTime }) {
  console.log(Chart);

  return (
    <div>
      <Line
        data={{
          labels: workoutDates,

          datasets: [
            {
              label: "Time Working Out",
              lineTension: 0.5,
              fill: true,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: workoutTime,
            },
          ],
        }}
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
          scales: {
            y: {
              title: {
                display: true,
                text: "Time in Seconds",
                fontSize: 20,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Charts;
