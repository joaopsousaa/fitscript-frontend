import { useEffect } from "react";
import "./Chronometer.css";

function Chronometer({ status, startWorkoutTime, time }) {
  useEffect(() => {
    let interval;
    if (status === "started") {
      interval = setInterval(() => {
        startWorkoutTime();
      }, 1000);
    } else if (status === "finished") {
      console.log(status);
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [status, startWorkoutTime]);
  return (
    <div className="chronometer-container">
      <span>{("0" + Math.floor((time / 3600) % 3600)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor(time % 60)).slice(-2)}</span>
    </div>
  );
}

export default Chronometer;
