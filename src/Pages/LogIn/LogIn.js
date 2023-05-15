// insert warehouse page details here
import Nav from "../../Components/Nav/Nav.js";
import back from "../../Assets/angle-left.svg";
import "./LogIn.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LogIn() {
  const navigate = useNavigate();
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      setUserEmail(auth.currentUser.email);
      navigate("/", { state: { userEmail: auth.currentUser.email } });
    } catch (error) {
      alert("Invaid email or password");
    }
  };
  return (
    <>
      <section className="background">
        <Nav />
        <section className="login">
          {" "}
          <Link className="login__back" to={"/"}>
            <img className="login__back-img" src={back} />
          </Link>
          <form onSubmit={handleSubmit} className="login-container">
            <h1 className="login__title">CodeCraft</h1>
            <input
              className="login__username"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email..."
              onChange={(event) => {
                setUserEmail(event.target.value);
              }}
            />
            <input
              className="login__password"
              placeholder="Password..."
              type="password"
              name="password"
              id="password"
              required
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button className="login__button">Log In</button>
            <h2 className="login__text">Don't have an account?</h2>
            <Link to={"/SignUp"} className="login__link">
              Click here to Sign Up
            </Link>
          </form>
        </section>
      </section>
    </>
  );
}

export default LogIn;

/////////////////////DELETE//////////////////
