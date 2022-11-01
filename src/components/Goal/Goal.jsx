import { useState } from "react";
import "./Goal.css";

function Goal() {
  const [goal, setGoal] = useState({
    title: "",
    deadline: new Date(),
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setGoal({ ...goal, [name]: value });
  }

  function handleRadioButton(evt) {
    const { selected } = evt.target;
    if (selected) {
      setGoal({ ...goal, title: selected });
      return;
    }
  }

  return (
    <div>
      <h1> My Fitness Goal: </h1>
      <form>
        <label>
          Title
          <input type="radio" name="title" onChange={handleRadioButton}></input>
        </label>

        <br />

        <label>
          Deadline
          <input type="date" name="deadline" onChange={handleChange}></input>
        </label>

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}
export default Goal;
