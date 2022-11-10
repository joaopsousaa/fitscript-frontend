import React, { useState } from "react";
import profileService from "../../services/profile.service";
import "./ProfilePage.css";

function ProfilePage() {
  const [userData, setUserData] = useState({
    email: "",
    gender: "",
    birthdate: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  function handleRadioButton(evt) {
    const { selected } = evt.target;
    console.log("SELECTED", selected);

    setUserData({
      ...userData,
      gender: selected,
    });
  }
  console.log("THIS IS USER DATA", userData);

  function handleSubmit(event) {
    event.preventDefault();

    const requestBody = { ...userData };

    profileService
      .createOne(requestBody)
      .then((response) => {
        console.log("RESPONSE:", response);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }

  function handleDelete(event) {
    event.preventDefault();

    const requestBody = { ...userData };

    profileService
      .deleteOne(requestBody)
      .then((response) => {
        console.log("RESPONSE:", response);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }

  return (
    <div className="profile-container">
      <h4>USER INFORMATION</h4>
      <form onSubmit={handleSubmit} className="profile-form">
        <label className="form-control-label">Name </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={userData.name}
          className={"control"}
        />
        <label className="form-control-label">Email </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          className={"control"}
        />
        <label className="form-control-label">Password </label>
        <input
          className={"control"}
          type="password"
          name="password"
          onChange={handleChange}
        />

        <label className="form-control-label">Confirm Password </label>

        <input
          className={"control"}
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <div className="gender-container">
          <label className="form-control-label">Gender </label>

          <label className="form-control-label">
            Male
            <input
              className={"control-gender"}
              type="radio"
              name="gender"
              onChange={handleRadioButton}
              selected="male"
            />
          </label>

          <label className="form-control-label">
            Female
            <input
              className={"control-gender"}
              type="radio"
              name="gender"
              onChange={handleRadioButton}
              selected="female"
            />
          </label>
        </div>
        <label className="form-control-label">Birthdate </label>

        <input
          className={"control"}
          type="date"
          name="birthdate"
          onChange={handleChange}
        />

        <button className={"button6"} type="submit">
          {" "}
          Update{" "}
        </button>
      </form>
      <form className="profile-form-1" onSubmit={handleDelete}>
        <button className={"button7"} type="submit">
          {" "}
          Delete Account{" "}
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;
