import "./DashboardPage.css";
import Charts from "../../components/Charts/Charts";
import Loading from "../../components/Loading/Loading";
import { useContext } from "react";
import { UserWorkoutsContext } from "../../context/userWorkouts.context";

function DashboardPage() {
  const userWorkouts = useContext(UserWorkoutsContext);
  console.log("List of user workouts:", userWorkouts);

  const workoutDate = userWorkouts.map((data) => {
    return data.createdAt;
  });

  const workoutTotalTimeWorkingOut = userWorkouts.map((data) => {
    return data.totalTimeWorkingOut;
  });

  // const sumWeightLifted = userWorkouts.reduce((acc, currentValue) => {
  //   currentValue.exercises.map((exercise) => {
  //     return exercise.sets.map((set) => {
  //       console.log(acc);
  //       return set.numberOfReps * set.weightLifted;
  //     });
  //   });
  //   return acc + currentValue;
  // }, 0);

  const arrayOfWeightLifted = userWorkouts.map((element) =>
    element.exercises.map((exercise) =>
      exercise.sets.map((set) => set.numberOfReps * set.weightLifted)
    )
  );

  const sumOfWeightLifted = arrayOfWeightLifted
    .flat(Infinity)
    .reduce((acc, currentValue) => acc + currentValue, 0);

  console.log("this is totalweight", sumOfWeightLifted);

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

  // const totalWeightLifted = {
  //   labels: workoutDate,

  //   datasets: [
  //     {
  //       label: "Time Working Out",
  //       lineTension: 0.5,
  //       backgroundColor: "rgba(75,192,192,1)",
  //       borderColor: "rgba(0,0,0,1)",
  //       borderWidth: 2,
  //       data: workoutTotalTimeWorkingOut,
  //     },
  //   ],
  // };

  console.log(chartData);

  return (
    <div>
      <h2>Welcome to your dashboard!</h2>
      {userWorkouts.length === 0 ? (
        <Loading />
      ) : (
        <Charts chartData={chartData} />
      )}
    </div>
  );
}

export default DashboardPage;
