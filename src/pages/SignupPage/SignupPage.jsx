import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
// import { AuthContext } from "../../context/auth.context";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        console.log(response.data);
        // If the POST request is successful redirect to the login page
        navigate("/goal");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <body>
      <div className="signup-card">
        <h2>Sign Up</h2>

        <form className={"signup-form"} onSubmit={handleSignupSubmit}>
          <label>Email</label>
          <input
            className={"control"}
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleEmail}
          />

          <label>Password</label>
          <input
            className={"control"}
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />

          <label>Name</label>
          <input
            className={"control"}
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleName}
          />

          <button className={"control"} type="submit">
            Sign Up
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <h3 style={{ marginTop: "30px" }}>Already have account?</h3>
        <Link to={"/login"}> Login</Link>
      </div>
    </body>
  );
}

export default SignupPage;
