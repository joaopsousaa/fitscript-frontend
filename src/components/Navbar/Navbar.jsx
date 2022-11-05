import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function NavbarComp() {
  //  Subscribe to the AuthContext to gain access to
  //  the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    // <Navbar bg="dark" variant="dark">
    //   <LinkContainer to="/">
    //     <Navbar.Brand>
    //       <img src="/fitscript-logo.png" alt="logo" />
    //     </Navbar.Brand>
    //   </LinkContainer>{" "}

    //     {isLoggedIn && (
    //     <>
    //       {" "}
    //         <button onClick={logOutUser}>Logout</button>{" "}
    //         <LinkContainer to="/workout">
    //           <Nav.Link>Workout</Nav.Link>{" "}
    //         </LinkContainer>{" "}
    //       <LinkContainer to="/dashboard">
    //         <Nav.Link>Dashboard</Nav.Link>{" "}
    //       </LinkContainer>{" "}
    //       <LinkContainer to="/bmi">
    //         <Nav.Link>BMI</Nav.Link>{" "}
    //       </LinkContainer>{" "}
    //       <LinkContainer to="/profile">
    //         <Nav.Link>Profile</Nav.Link>{" "}
    //       </LinkContainer>{" "}
    //       <LinkContainer to="/goal">
    //         <Nav.Link>Goal</Nav.Link>{" "}
    //       </LinkContainer>
    //       <span>{user && user.name}</span>
    //     </>
    //     )}
    //     {!isLoggedIn && (
    //       <>
    //         {" "}
    //         <LinkContainer to="/signup">
    //           <Nav.Link>Sign Up</Nav.Link>{" "}
    //         </LinkContainer>{" "}
    //         <LinkContainer to="/login">
    //           <Nav.Link>Login</Nav.Link>{" "}
    //         </LinkContainer>{" "}
    //         <LinkContainer to="/bmi">
    //           <Nav.Link>BMI</Nav.Link>{" "}
    //         </LinkContainer>{" "}
    //       </>
    //     )}{" "}
    //   </Nav>
    // </Navbar>
    <nav className={styles.nav}>testing</nav>
  );
}

export default NavbarComp;
