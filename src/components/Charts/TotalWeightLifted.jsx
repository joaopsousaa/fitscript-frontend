import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";

function TotalWeightLifted({ chartData }) {
  const [initialChartDate, setInicialChartDate] = useState(Date);
  const [endChartDate, setEndChartDate] = useState(Date);

  function handleInitialDateChange(evt) {
    const { value } = evt.target;
    setInicialChartDate(value);
  }

  function handleEndDateChange(evt) {
    const { value } = evt.target;
    setEndChartDate(value);
  }

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
      Start:{" "}
      <input
        type="date"
        min="2022-01-01"
        value={initialChartDate}
        onChange={handleInitialDateChange}
      ></input>
      End:{" "}
      <input
        type="date"
        min="2022-01-01"
        value={endChartDate}
        onChange={handleEndDateChange}
      ></input>
    </div>
  );
}

export default TotalWeightLifted;
