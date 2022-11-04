<<<<<<< HEAD
import "./DashboardPage.css";
import Charts from "../../components/Charts/Charts";
import TotalWeightLifted from "../../components/Charts/TotalWeightLifted";
import Loading from "../../components/Loading/Loading";
import { useContext } from "react";
import { UserWorkoutsContext } from "../../context/userWorkouts.context";
import { format } from "date-fns";
import { useState } from "react";

function DashboardPage() {
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

  // function filterDates(){
  //   const workoutDatesFiltered =
  // }

  const userWorkouts = useContext(UserWorkoutsContext);
  console.log("List of user workouts:", userWorkouts);

  const workoutDate = userWorkouts.map((data) => {
    return format(new Date(data.createdAt), "dd/MM/yyyy");
  });

  const workoutTotalTimeWorkingOut = userWorkouts.map((data) => {
    return data.totalTimeWorkingOut;
  });

  const arrayOfWeightLifted = userWorkouts.map((workout) =>
    workout.exercises.flatMap((exercise) =>
      exercise.sets.map((set) => set.numberOfReps * set.weightLifted)
    )
  );

  const totalWeightLiftedPerWorkout = arrayOfWeightLifted.map((workout) =>
    workout.reduce((acc, currentValue) => acc + currentValue, 0)
  );

  console.log("this is totalweight", totalWeightLiftedPerWorkout);

  const chartData = {
    labels: workoutDate,

    datasets: [
      {
        label: "Time Working Out",
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: workoutTotalTimeWorkingOut,
      },
    ],
  };

  const totalWeightLiftedChartData = {
    labels: workoutDate,

    datasets: [
      {
        label: "Total Weight Lifted Per Workout (kg)",
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: totalWeightLiftedPerWorkout,
      },
    ],
  };

  console.log(chartData);

  return (
    <div>
      <h2>Welcome to your dashboard!</h2>
      {userWorkouts.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Charts chartData={chartData} />
          <TotalWeightLifted chartData={totalWeightLiftedChartData} />
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
        </>
      )}
=======
import { Axios } from "axios";
import React, { useEffect, useState } from "react";

function DashboardPage() {
  return (
    <div>
      <h1> Dashboard </h1>
>>>>>>> main
    </div>
  );
}

export default DashboardPage;
