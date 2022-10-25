import "./WorkoutPage.css";
import { useState, useEffect } from "react";
import workoutService from "../../../services/workout.service";
import ExerciseCard from "../../../components/ExerciseCard/ExerciseCard";
import Chronometer from "../../../components/Chronometer/Chronometer";

function WorkoutPage() {
  const [form, setForm] = useState({
    workoutType: "",
    exerciseName: "",
    set: [],
  });

  const [arrayOfSets, setArrayOfSets] = useState({
    numberOfReps: 0,
    weightLifted: 0,
  });

  const [exerciseList, setExerciseList] = useState([]);

  const [workoutStatus, setWorkoutStatus] = useState(undefined);

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
    setForm({ ...form, [name]: value });
  }

  function handleSetChange(evt) {
    const { name, value } = evt.target;
    setArrayOfSets({ ...arrayOfSets, [name]: value });
  }

  function handleRadioButton(evt) {
    const { selected } = evt.target;
    if (selected) {
      setForm({ ...form, workoutType: selected });
      return;
    }
  }

  function addSet() {
    form.set.push(arrayOfSets);
    setArrayOfSets({ numberOfReps: 0, weightLifted: 0 });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const requestBody = { ...form };
    console.log(requestBody);

    workoutService
      .createOne(requestBody)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  return (
    <div>
      {workoutStatus === "started" ? (
        <button
          type="button"
          onClick={() => {
            setWorkoutStatus("finished");
          }}
        >
          Finish Workout
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setWorkoutStatus("started");
          }}
        >
          Start Workout
        </button>
      )}
      <Chronometer status={workoutStatus} />

      <h1>WorkoutPage</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Workout Type <br />
          <label>Strength</label>
          <input
            type="radio"
            name="workoutType"
            onChange={handleRadioButton}
            selected="strength"
          ></input>
          <label>Cardio</label>
          <input
            type="radio"
            name="workoutType"
            onChange={handleRadioButton}
            selected="cardio"
          ></input>
        </label>
        <br />
        <label>
          Exercise Name
          <select name="exerciseName" onChange={handleChange}>
            <option disabled selected>
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
            Number of Reps
            <input
              type="number"
              name="numberOfReps"
              value={arrayOfSets.numberOfReps}
              onChange={handleSetChange}
            ></input>
          </label>
          <br />
          <label>
            Weight Lifted
            <input
              type="number"
              name="weightLifted"
              value={arrayOfSets.weightLifted}
              onChange={handleSetChange}
            ></input>
          </label>
          <button type="button" onClick={addSet}>
            Add Set
          </button>
        </div>
        <button type="submit">Add Exercise</button>
      </form>
      <ExerciseCard form={form} />
    </div>
  );
}

export default WorkoutPage;
