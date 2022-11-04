import React from "react";
import { Line } from "react-chartjs-2";
<<<<<<< HEAD
import { Chart } from "chart.js";

function Charts({ chartData }) {
=======
import Chart from "chart.js/auto";

function Charts({ workoutDates, workoutTime }) {
>>>>>>> dev
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
        }}
      />
    </div>
  );
}

export default Charts;
