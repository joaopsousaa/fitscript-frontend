import React, { useState } from "react";
import profileService from "../../services/profile.service";
import "./ProfilePage.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {
  const { logOutUser } = useContext(AuthContext);
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
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={userData.name}
          className={"control"}
        />
        <br />
        <label className="form-control-label">Email </label> <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          className={"control"}
        />
        <br />
        <label className="form-control-label">Password </label>
        <br />
        <input
          className={"control"}
          type="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <label className="form-control-label">Confirm Password </label>
        <br />
        <input
          className={"control"}
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <br />
        <label className="form-control-label">Gender </label>
        <br />
        <label className="form-control-label">Male</label>
        <input
          className={"control-gender"}
          type="radio"
          name="gender"
          onChange={handleRadioButton}
          selected="male"
        />
        <label className="form-control-label">Female</label>
        <input
          className={"control-gender"}
          type="radio"
          name="gender"
          onChange={handleRadioButton}
          selected="female"
        />
        <br />
        <label className="form-control-label">Birthdate </label>
        <br />
        <input
          className={"control"}
          type="date"
          name="birthdate"
          onChange={handleChange}
        />
        <br />
        <button className={"control"} type="submit">
          {" "}
          Update{" "}
        </button>
        <br />
      </form>
      <form onSubmit={handleDelete}>
        <button className={"control"} type="submit">
          {" "}
          Delete{" "}
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;
