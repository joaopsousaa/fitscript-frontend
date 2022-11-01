import React, { useState, useEffect } from "react";
import dashboardService from "../services/dashboard.service.js";

const UserWorkoutsContext = React.createContext();

function UserWorkoutsProviderWrapper(props) {
  const [userWorkouts, setUserWorkouts] = useState([]);

  useEffect(() => {
    dashboardService
      .getAllUserWorkouts()
      .then((response) => {
        if (response) {
          setUserWorkouts(response.data);
        }
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);
  // console.log("List of user workouts:", userWorkouts);

  return (
    <UserWorkoutsContext.Provider value={userWorkouts}>
      {props.children}
    </UserWorkoutsContext.Provider>
  );
}

export { UserWorkoutsProviderWrapper, UserWorkoutsContext };
