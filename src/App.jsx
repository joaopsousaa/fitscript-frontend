import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import BmiPage from "./pages/BmiPage/BmiPage";
import WorkoutPage from "./pages/WorkoutPage/WorkoutPage";
import Goal from "./components/Goal/Goal";

import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import NavbarComp from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/dashboard"
          element={
            <IsPrivate>
              <DashboardPage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/bmi"
          element={
            <IsPrivate>
              <BmiPage />
            </IsPrivate>
          }
        />
        <Route
          path="/workout"
          element={
            <IsPrivate>
              <WorkoutPage />
            </IsPrivate>
          }
        />

        <Route
          path="/goal"
          element={
            <IsPrivate>
              <Goal />
            </IsPrivate>
          }
        />
      </Routes>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
    </div>
  );
}

export default App;
