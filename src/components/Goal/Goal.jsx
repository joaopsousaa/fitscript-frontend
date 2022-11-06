import { useState } from "react";
import "./Goal.css";
import goalService from "../../services/goal.service";

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
    //console.log(evt);

    const requestBody = { ...goal };
    goalService
      .createOne(requestBody)
      .then((response) => {
        console.log("THIS IS DATA GOAL", response.data);
        const { data } = response.data;
        setGoal({ ...data });
        console.log("This is GOLADATA", goal);
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  return (
    <div>
      <h1> My Fitness Goal: </h1>
      <form onSubmit={handleSubmit} className={"goal-form"}>
        {/* <label>Title</label> */}
        <br />
        <div className={"goal-form-card"}>
          <div>
            <img
              src="images/morgan-petroski-rx6wXNsXUOE-unsplash.jpg"
              style={{ height: "425px", width: "400px" }}
            ></img>
            <p>Lose weight</p>
            <input
              type="radio"
              name="title"
              onChange={handleRadioButton}
              selected="lose weight"
            ></input>
          </div>

          <div>
            <img
              src="images/anastase-maragos-9dzWZQWZMdE-unsplash.jpg"
              style={{ height: "425px", width: "400px" }}
            ></img>
            <p>Gain muscle</p>
            <input
              type="radio"
              name="title"
              onChange={handleRadioButton}
              selected="muscle gain"
            ></input>
          </div>
        </div>

        <br />

        <input
          type="date"
          name="deadline"
          onChange={handleChange}
          value={goal.deadline}
        ></input>
        <p>Deadline</p>

        <br />

        <button className={"button-goal button1"} type="submit">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}
export default Goal;
