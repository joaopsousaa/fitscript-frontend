import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  // const togglePassword = (button) => {
  //   button.classlist.toggle("showing");
  //   const input = document.getElementById("password");

  //   input.type = input.type === "password" ? "text" : "password";
  // };

  function togglePassword() {
    let x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <body>
      <div className="login-card">
        <h2>Login</h2>
        <h3>Enter your credentials</h3>

        <form className={"login-form"} onSubmit={handleLoginSubmit}>
          <label>Email</label>
          <input
            className={"control"}
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="email"
          />

          <br />

          <label>Password</label>
          <input
            className={"control"}
            type="password"
            name="password"
            value={password}
            id="myInput"
            onChange={handlePassword}
            placeholder="password"
          />
          <label>Show Password</label>
          <input type="checkbox" onclick={togglePassword}></input>

          {/* <button
            className={"toggle"}
            placeholder="show"
            type="button"
            onClick={togglePassword}
          ></button> */}

          <br />

          <button className={"control"} type="submit">
            LOGIN
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <h3 style={{ marginTop: "30px" }}>Don't have an account yet?</h3>
        <Link to={"/signup"}> Sign Up</Link>
      </div>
      <div>
      </div>
    </body>
  );
}

export default LoginPage;
