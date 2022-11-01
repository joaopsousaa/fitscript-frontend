import "./BmiPage.css";
import { useState } from "react";
import bmiService from "../../services/bmi.service";

function BmiPage() {
  const [form, setForm] = useState({
    weight: "",
    height: "",
    age: "",
  });

  const [bmiData, setBmiData] = useState({
    bmi: "",
    health: "",
    healthy_bmi_range: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const requestBody = { ...form };
    console.log(requestBody);

    bmiService
      .createOne(requestBody)
      .then((response) => {
        // console.log(response.data);
        const { data } = response.data;
        console.log("this is data", data);
        setBmiData({
          ...data,
        });
        console.log("THIS IS BMIDATA", bmiData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function handleRadioButton(evt) {
  //   const { selected } = evt.target;
  //   if (selected) {
  //     setForm({ ...form, sex: selected });
  //     return;
  //   }
  // }

  return (
    <div>
      <h1> Calculate your BMI </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            onChange={handleChange}
            value={form.weight}
          ></input>
        </label>

        <br />

        <label>
          Height:
          <input
            type="number"
            name="height"
            onChange={handleChange}
            value={form.height}
          ></input>
        </label>

        <br />

        {/* <label>
          Sex:
          <label>
            M
            <input
              type="radio"
              name="sex"
              onChange={handleRadioButton}
              selected="m"
            ></input>
          </label>
          <label>
            F
            <input
              type="radio"
              name="sex"
              onChange={handleRadioButton}
              selected="f"
            ></input>
          </label>
        </label> */}

        <br />

        <label>
          Age:
          <input
            type=""
            name="age"
            onChange={handleChange}
            value={form.age}
          ></input>
        </label>

        <br />

        <button type="submit">Calculate</button>
      </form>
      {bmiData.bmi !== "" && (
        <>
          <h2>Your BMI: {bmiData.bmi}</h2>
          <h2>Health: {bmiData.health}</h2>
          <h2>Healthy BMI Range: {bmiData.healthy_bmi_range}</h2>
        </>
      )}
    </div>
  );
}

export default BmiPage;
