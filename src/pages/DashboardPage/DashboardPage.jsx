import "./DashboardPage.css";
import Charts from "../../components/Charts/Charts";
import TotalWeightLifted from "../../components/Charts/TotalWeightLifted";
import Loading from "../../components/Loading/Loading";
import { UserWorkoutsContext } from "../../context/userWorkouts.context";
import { format } from "date-fns";
import { useState, useRef, useContext } from "react";

function DashboardPage() {
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

  const [workoutDates, setWorkoutDates] = useState(workoutDate);
  const [workoutTime, setWorkoutTime] = useState(workoutTotalTimeWorkingOut);
  console.log("THIS IS WORKOUT DATE", workoutDate);
  // function handleInitialDateChange(evt) {
  //   const { value } = evt.target;
  //   setInicialChartDate(value);
  // }

  // function handleEndDateChange(evt) {
  //   const { value } = evt.target;
  //   setEndChartDate(value);
  // }

  const inputRef1 = useRef();
  const inputRef2 = useRef();

  function filterDates() {
    const workoutDatesCopy = [...workoutDate];
    const workoutTimeCopy = [...workoutTotalTimeWorkingOut];

    let startDate = format(new Date(inputRef1.current.value), "dd/MM/yyyy");
    let endDate = format(new Date(inputRef2.current.value), "dd/MM/yyyy");
    console.log("This is Start Date", startDate);
    const indexStartDate = workoutDatesCopy.indexOf(startDate);
    const indexEndDate = workoutDatesCopy.indexOf(endDate);

    console.log(indexEndDate);
    //slice the array
    const filterWorkoutDate = workoutDatesCopy.slice(
      indexStartDate,
      indexEndDate + 1
    );
    const filterWorkoutTime = workoutTimeCopy.slice(
      indexStartDate,
      indexEndDate + 1
    );
    setWorkoutDates(filterWorkoutDate);
    setWorkoutTime(filterWorkoutTime);
  }

  // const chartData = {
  //   labels: workoutDates,

  //   datasets: [
  //     {
  //       label: "Time Working Out",
  //       lineTension: 0.5,
  //       backgroundColor: "rgba(75,192,192,1)",
  //       borderColor: "rgba(0,0,0,1)",
  //       borderWidth: 2,
  //       data: workoutTime,
  //     },
  //   ],
  // };

  // const totalWeightLiftedChartData = {
  //   labels: workoutDates,

  //   datasets: [
  //     {
  //       label: "Total Weight Lifted Per Workout (kg)",
  //       lineTension: 0.5,
  //       backgroundColor: "rgba(75,192,192,1)",
  //       borderColor: "rgba(0,0,0,1)",
  //       borderWidth: 2,
  //       data: totalWeightLiftedPerWorkout,
  //     },
  //   ],
  // };

  // console.log(chartData);

  return (
    <div>
      <h2>Welcome to your dashboard!</h2>
      {userWorkouts.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Charts workoutDates={workoutDates} workoutTime={workoutTime} />
          {/* <TotalWeightLifted dates={workoutDates} weight={workoutTime}/> */}
          Start:{" "}
          <input
            type="date"
            min="2022-01-01"
            // value={initialChartDate}
            // onChange={handleInitialDateChange}
            ref={inputRef1}
          ></input>
          End:{" "}
          <input
            type="date"
            min="2022-01-01"
            // value={endChartDate}
            // onChange={handleEndDateChange}
            ref={inputRef2}
          ></input>
          <button type="button" onClick={filterDates}>
            Filter
          </button>
        </>
      )}
    </div>
  );
}

export default DashboardPage;
