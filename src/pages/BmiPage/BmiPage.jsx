import "./BmiPage.css";
import { useState } from "react";
import axios from "axios";

function BmiPage() {
  const [form, setForm] = useState({
    weight: "",
    height: "",
    sex: "",
    age: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const options = {
      method: "POST",
      url: "https://bmi.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.REACT_APP_BMI_API_KEY,
        "X-RapidAPI-Host": "bmi.p.rapidapi.com",
      },
      data: `{"weight":{"value":${form.weight},"unit":"kg"},"height":{"value":${form.height},"unit":"cm"},"sex":${form.sex},"age":${form.age},"waist":"","hip":""}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function handleRadioButton(evt) {
    const { selected } = evt.target;
    if (selected) {
      setForm({ ...form, sex: selected });
      return;
    }
  }

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

        <label>
          Sex:
          <label>
            M
            <input
              type="radio"
              name="sex"
              onChange={handleRadioButton}
              value={form.sex}
            ></input>
          </label>
          <label>
            F
            <input
              type="radio"
              name="sex"
              onChange={handleRadioButton}
              value={form.sex}
            ></input>
          </label>
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

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default BmiPage;
