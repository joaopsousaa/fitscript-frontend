import React, { useState } from "react";
import profileService from "../../services/profile.service";
// import { AuthContext } from "../../context/auth.context";
//import Goal from "../../components/Goal/Goal";

function ProfilePage() {
  // const { user, authenticate } = AuthProviderWrapper();
  const [userData, setUserData] = useState({
    email: "",
    gender: "",
    // smoking: "",
    // alcohol: "",
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
      // smoking: selectedTwo,
      // alcohol: selectedThree,
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

        // authenticate(response.data);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }

  return (
    <div>
      <h1>Profile page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={userData.name}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Gender:
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            onChange={handleRadioButton}
            selected="male"
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            onChange={handleRadioButton}
            selected="female"
          />
        </label>
        <br />

        <label>
          Birthdate:
          <input type="date" name="birthdate" onChange={handleChange} />
        </label>
        <br />

        {/* <label>
          Smoking:
          <label>Yes</label>
          <input
            type="radio"
            name="smoking"
            onChange={handleRadioButton}
            selected="yes"
          />
          <label>No</label>
          <input
            type="radio"
            name="smoking"
            onChange={handleRadioButton}
            selected="no"
          />
        </label>
        <br />

        <label>
          Alcohol:
          <label>Yes</label>
          <input
            type="radio"
            name="alcohol"
            onChange={handleRadioButton}
            selected="yes"
          />
          <label>No</label>
          <input
            type="radio"
            name="alcohol"
            onChange={handleRadioButton}
            selected="no"
          />
        </label>
        <br /> */}

        <button type="submit"> Update </button>
      </form>
    </div>
  );
}

export default ProfilePage;
