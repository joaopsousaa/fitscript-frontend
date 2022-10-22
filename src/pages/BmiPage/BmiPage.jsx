import "./BmiPage.css";
import { useState } from "react";

function BmiPage() {
  const [form, setForm] = useState({
    weight: "",
    height: "",
  });

  function handleChange(evt) {}

  return (
    <div>
      <h1> Calculate your BMI </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Weight
          <imput
            type="text"
            name="weight"
            onChange={handleChange}
            value={form.weight}
          ></imput>
        </label>

        <label>
          Height
          <imput
            type="text"
            name="height"
            onChange={handleChange}
            value={form.height}
          ></imput>
        </label>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default BmiPage;
