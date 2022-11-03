import "./DashboardPage.css";
import Charts from "../../components/Charts/Charts";
import TotalWeightLifted from "../../components/Charts/TotalWeightLifted";
import Loading from "../../components/Loading/Loading";
import { useContext } from "react";
import { UserWorkoutsContext } from "../../context/userWorkouts.context";
import { format } from "date-fns";

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
        </>
      )}
    </div>
  );
}

export default DashboardPage;
