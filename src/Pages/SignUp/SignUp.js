// insert warehouse page details here
import Nav from "../../Components/Nav/Nav.js";
import back from "../../Assets/angle-left.svg";
import "./SignUp.scss";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <section className="background">
        <Nav />
        <section className="login">
          {" "}
          <button className="lesson__back" to={"/"}>
            <img className="lesson__back-img" src={back} />
          </button>
          <div className="login-container">
            <h1 className="login__title">CodeCraft</h1>

            <input className="login__email" placeholder="Email..." />
            <input
              className="login__username-signup"
              placeholder="Username..."
            />
            <input
              className="login__password-signup"
              placeholder="Password..."
            />
            <input className="login__age" placeholder="Age..." />
            <button className="login__button-signup">Sign Up</button>
          </div>
        </section>
      </section>
    </>
  );
}

export default SignUp;

/////////////////////DELETE//////////////////
