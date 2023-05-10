// insert warehouse page details here
import Nav from "../../Components/Nav/Nav.js";
import back from "../../Assets/angle-left.svg";
import "./LogIn.scss";
import { Link } from "react-router-dom";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

function LogIn() {
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

            <input className="login__username" placeholder="Username..." />

            <input className="login__password" placeholder="Password..." />
            <button className="login__button">Log In</button>
            <h2 className="login__text">Don't have an account?</h2>
            <Link to={"/SignUp"} className="login__link">
              Click here to Sign Up
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export default LogIn;

/////////////////////DELETE//////////////////
