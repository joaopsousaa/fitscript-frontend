import "./BmiPage.css";
import React, { useState } from "react";
import bmiService from "../../services/bmi.service";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

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

  return (
    <div>
      <h1> Calculate your BMI </h1>
      <form onSubmit={handleSubmit} className={"bmi-form"}>
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

        <button className={"button-bmi button1"} type="submit">
          Calculate
        </button>
      </form>
      {bmiData.bmi !== "" && (
        <>
          <div className={"bmi-result"}>
            <h2>Your BMI: {bmiData.bmi}</h2>
            <h2>Health: {bmiData.health}</h2>
            <h2>Healthy BMI Range: {bmiData.healthy_bmi_range}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default BmiPage;
