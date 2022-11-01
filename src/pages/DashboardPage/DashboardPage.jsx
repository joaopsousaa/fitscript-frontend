import "./DashboardPage.css";
import Charts from "../../components/Charts/Charts";
import Loading from "../../components/Loading/Loading";
import { useState, useContext } from "react";
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

  const [chartData, setChartData] = useState({});

  if (userWorkouts.length) {
    setChartData({
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
    });
  }
  console.log(chartData);

  // console.log("THIS IS DATA CHART", chartData.datasets[0].data);
  // console.log("THIS IS LABELS CHART", chartData.labels);

  return (
    <div>
      <h2>Welcome to your dashboard!</h2>
      {!userWorkouts.length ? <Loading /> : <Charts chartData={chartData} />}
    </div>
  );
}

export default DashboardPage;
