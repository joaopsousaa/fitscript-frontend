import "./WorkoutPage.css";
import { useState } from "react";
import workoutService from "../../../services/workout.service";

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

  //   console.log("form:", form);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setForm({ ...form, [name]: value });
  }

  function handleSetChange(evt) {
    const { name, value } = evt.target;
    setArrayOfSets({ ...arrayOfSets, [name]: value });
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
        console.log("WE DID IT:", response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  function handleRadioButton(evt) {
    const { selected } = evt.target;
    if (selected) {
      setForm({ ...form, workoutType: selected });
      return;
    }
  }

  return (
    <div>
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
          <input
            type="text"
            name="exerciseName"
            onChange={handleChange}
            value={form.exerciseName}
          ></input>
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
          <button type="submit" onClick={addSet}>
            Add Set
          </button>
        </div>

        <button type="submit">Add Exercise</button>
      </form>
    </div>
  );
}

export default WorkoutPage;
