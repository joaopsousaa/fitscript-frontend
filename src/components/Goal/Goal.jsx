import { useState } from "react";
import "./Goal.css";

function Goal({ title, deadline }) {
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

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(evt);
  }

  return (
    <div>
      <h1> My Fitness Goal: </h1>
      <form>
        <label>Title</label>
        <label>
          Lose weight
          <input
            type="radio"
            name="title"
            onChange={handleRadioButton}
            selected={goal.title}
          ></input>
        </label>
        <label>
          Muscle gain
          <input
            type="radio"
            name="title"
            onChange={handleRadioButton}
            selected={goal.title}
          ></input>
        </label>

        <br />

        <label>
          Deadline
          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            value={goal.deadline}
          ></input>
        </label>

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}
export default Goal;
