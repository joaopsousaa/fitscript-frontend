import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  border: none;
`;

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
      color: "white",
    };
  };

  const ButtonComponent = () => {
    return <Button onClick={logOutUser}>Logout</Button>;
  };

  return (
    <nav>
      <div className="logo-container">
        <NavLink to="/">
          <img src="/fitscript-logo1.png" alt="logo" className="logo" />
        </NavLink>
      </div>
      {isLoggedIn && (
        <>
          <ul>
            <span className="greet-user">Welcome {user.name}</span>
            <li>
              <ButtonComponent />
            </li>
            <li>
              <NavLink style={navLinkStyle} to="/workout">
                {" "}
                Workout
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink style={navLinkStyle} to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink style={navLinkStyle} to="/bmi">
                BMI
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink style={navLinkStyle} to="/profile">
                Profile
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink style={navLinkStyle} to="/goal">
                Goal
              </NavLink>
            </li>
          </ul>
        </>
      )}

      {!isLoggedIn && (
        <>
          <ul>
            <li>
              <NavLink style={navLinkStyle} to="/signup">
                Sign Up
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink style={navLinkStyle} to="/login">
                Login
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink style={navLinkStyle} to="/workout">
                Workout
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink style={navLinkStyle} to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to="/bmi">
                {" "}
                BMI{" "}
              </NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}

export default Navbar;
