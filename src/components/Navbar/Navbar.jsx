import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <div>
        <Link to="/">
          <img src="/fitscript-logo.png" alt="logo" height="100px"></img>
        </Link>

        {!isLoggedIn && (
          <>
            <Link to="/signup">
              {" "}
              <button>Sign Up</button>{" "}
            </Link>
            <Link to="/login">
              {" "}
              <button>Login</button>{" "}
            </Link>
            <Link to="/workout">
              {" "}
              <button>Workout</button>{" "}
            </Link>
            <Link to="/dashboard">
              {" "}
              <button>Dashboard</button>{" "}
            </Link>
            <Link to="/bmi">
              {" "}
              <button>BMI</button>{" "}
            </Link>
            <Link to="/profile">
              {" "}
              <button>Profile</button>{" "}
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
