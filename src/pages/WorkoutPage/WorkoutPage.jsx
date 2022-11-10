import "./WorkoutPage.css";
import { useState, useEffect } from "react";
import workoutService from "../../services/workout.service";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import Chronometer from "../../components/Chronometer/Chronometer";

function WorkoutPage() {
  const [form, setForm] = useState({
    name: "",
    sets: [],
  });

  const [workout, setWorkout] = useState([
    {
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
    if (form.name !== "") {
      form.sets.push(arrayOfSets);
      setArrayOfSets({ numberOfReps: 0, weightLifted: 0 });
      alert("Set added");
    } else {
      alert("Please choose an exercise");
    }
  }

  function deleteSet(workoutIndex, setIndex) {
    const filteredWorkout = workout.filter((workoutToDelete) => {
      console.log(workout[workoutIndex].sets[setIndex]);
      if (
        workoutToDelete.sets[setIndex] === workout[workoutIndex].sets[setIndex]
      ) {
        workoutToDelete.sets.splice(setIndex, 1);
        if (workoutToDelete.sets.length === 0) {
          delete workoutToDelete.name;
        }
      }
      return workout;
    });

    console.log("THIS IS FILTERED WORKOUT", filteredWorkout);
    setWorkout(filteredWorkout);
  }

  function addExercise() {
    if (form.name !== "" && form.sets.length !== 0) {
      setWorkout([...workout, form]);
      setForm({ name: "", sets: [] });
    }
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
    <div className="workout-page-container">
      <h1>Workout Log</h1>
      <form onSubmit={handleSubmit}>
        {workoutStatus === "started" ? (
          <>
            <div className="btn-workout-container">
              <button
                type="button"
                onClick={() => {
                  setWorkoutStatus("finished");
                }}
                className="btn-finish-workout"
              >
                Finish Workout
              </button>
              <Chronometer
                status={workoutStatus}
                startWorkoutTime={startWorkoutTime}
                time={time}
              />
            </div>
            <div className="form-workout-container">
              <label className="form-workout-labels">
                Exercise Name
                <select
                  name="name"
                  onChange={handleChange}
                  defaultValue={"None"}
                >
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
              <h4 className="set-divider">Set</h4>
              <div className="sets-container">
                <label className="form-workout-labels">
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
                <label className="form-workout-labels">
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
                <button className="btn-add-set" type="button" onClick={addSet}>
                  Add Set
                </button>
              </div>
              <button
                type="button"
                onClick={addExercise}
                className="btn-change-exercise"
              >
                Change Exercise
              </button>{" "}
            </div>
          </>
        ) : (
          <>
            <div className="btn-workout-container">
              <button
                type="submit"
                onClick={() => {
                  setTime(0);
                  setWorkoutStatus("started");
                  setWorkout([]);
                }}
                className="btn-finish-workout"
              >
                Start Workout
              </button>
              <Chronometer
                status={workoutStatus}
                startWorkoutTime={startWorkoutTime}
                time={time}
              />
            </div>
          </>
        )}
      </form>

      <ExerciseCard workout={workout} deleteSet={deleteSet} />
    </div>
  );
}

export default WorkoutPage;
