import { useState, useEffect } from "react";

function Chronometer({ status }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (status === "started") {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (status === "finished") {
      console.log(status);
      clearInterval(interval);
      interval = null;
      setTime(0);
    }
    return () => clearInterval(interval);
  }, [status]);
  return (
    <div>
      <span>{("0" + Math.floor((time / 3600) % 3600)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor(time % 60)).slice(-2)}</span>
    </div>
  );
}

export default Chronometer;
