import "./WorkoutPage.css";
import { useState, useEffect } from "react";
import workoutService from "../../services/workout.service";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import Chronometer from "../../components/Chronometer/Chronometer";

function WorkoutPage() {
  const [form, setForm] = useState({
    // type: "",
    name: "",
    sets: [],
  });

  const [workout, setWorkout] = useState([
    {
      // type: "",
      name: "",
      sets: [],
    },
  ]);

  // console.log("THIS IS WORKOUTTTT", workout);

  const [arrayOfSets, setArrayOfSets] = useState({
    numberOfReps: 0,
    weightLifted: 0,
  });

  const [exerciseList, setExerciseList] = useState([]);

  const [workoutStatus, setWorkoutStatus] = useState(undefined);

  const [time, setTime] = useState(0);

  // console.log("current TIME:", time);

  useEffect(() => {
    workoutService
      .getAllExercises()
      .then((response) => {
        console.log("API LIST:", response.data);
        setExerciseList(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("This is value", value);

    setForm({ ...form, [name]: value });
  }

  function handleSetChange(evt) {
    let { name, value, min, max } = evt.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setArrayOfSets({ ...arrayOfSets, [name]: value });
  }

  function addSet() {
    form.sets.push(arrayOfSets);
    setArrayOfSets({ numberOfReps: 0, weightLifted: 0 });
  }

  function addExercise() {
    setWorkout([...workout, form]);
    // workout.push(form);
    setForm({ name: "", sets: [] });
  }

  function startWorkoutTime() {
    setTime((prevTime) => prevTime + 1);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(evt);
    console.log(workout);
    const requestBody = { workout, time };
    console.log("this is REQUEST BODY", requestBody);

    workoutService
      .createOne(requestBody)
      .then((response) => {
        console.log("THIS IS RESPONSE", response);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  return (
    <div>
      <h1>WorkoutPage</h1>
      <form onSubmit={handleSubmit}>
        {workoutStatus === "started" ? (
          <>
            <button
              type="button"
              onClick={() => {
                setWorkoutStatus("finished");
              }}
            >
              Finish Workout
            </button>
            <Chronometer
              status={workoutStatus}
              startWorkoutTime={startWorkoutTime}
              time={time}
            />
            <label>
              Exercise Name
              <select name="name" onChange={handleChange} defaultValue={"None"}>
                <option disabled value="None">
                  None
                </option>
                {exerciseList.map((el) => {
                  return (
                    <option key={el.id} value={el.name}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
            </label>
            <br />
            <div>
              <label>
                Reps
                <input
                  type="number"
                  min="1"
                  max="1000"
                  name="numberOfReps"
                  value={arrayOfSets.numberOfReps}
                  onChange={handleSetChange}
                ></input>
              </label>
              <br />
              <label>
                Weight Lifted (kg)
                <input
                  type="number"
                  min="1"
                  max="1000"
                  name="weightLifted"
                  value={arrayOfSets.weightLifted}
                  onChange={handleSetChange}
                ></input>
              </label>
              <button type="button" onClick={addSet}>
                Add Set
              </button>
            </div>
            <button type="button" onClick={addExercise}>
              Add Exercise
            </button>{" "}
          </>
        ) : (
          <button
            type="submit"
            onClick={() => {
              setTime(0);
              setWorkoutStatus("started");
            }}
          >
            Start Workout
          </button>
        )}
      </form>

      <ExerciseCard workout={workout} />
    </div>
  );
}

export default WorkoutPage;
