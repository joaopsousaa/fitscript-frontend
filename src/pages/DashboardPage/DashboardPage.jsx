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
  const [workoutWeightLiftedPerWorkout, setworkoutWeightLiftedPerWorkout] =
    useState(totalWeightLiftedPerWorkout);
  console.log("THIS IS WORKOUT DATE", workoutDate[0]);

  const inputRef1 = useRef();
  const inputRef2 = useRef();

  function filterDates() {
    const workoutDatesCopy = [...workoutDate];
    const workoutTimeCopy = [...workoutTotalTimeWorkingOut];
    const workoutWeightLiftedCopy = [...totalWeightLiftedPerWorkout];

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
    const filterWorkoutWeightLifted = workoutWeightLiftedCopy.slice(
      indexStartDate,
      indexEndDate + 1
    );

    setWorkoutDates(filterWorkoutDate);
    setWorkoutTime(filterWorkoutTime);
    setworkoutWeightLiftedPerWorkout(filterWorkoutWeightLifted);
  }

  return (
    <div>
      <h2>Welcome to your dashboard!</h2>
      {userWorkouts.length === 0 ? (
        <Loading />
      ) : (
        <>
          <TotalWeightLifted
            workoutDates={workoutDates}
            weight={workoutWeightLiftedPerWorkout}
          />
          <Charts workoutDates={workoutDates} workoutTime={workoutTime} />
          Start:{" "}
          <input
            type="date"
            // min={workoutDates[0]}
            // max={workoutDates[workoutDates.length - 1]}
            ref={inputRef1}
          ></input>
          End:{" "}
          <input
            type="date"
            // min="2022-10-30"
            // max={workoutDates[workoutDates.length - 1]}
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
