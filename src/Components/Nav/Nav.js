import "./Nav.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import Home from "../../Assets/home (1).svg";
import Lessons from "../../Assets/graduation-cap.svg";
import Progress from "../../Assets/chart-histogram.svg";
import CheckIn from "../../Assets/list-check.svg";
import LogIn from "../../Assets/user.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section className="nav">
      <section className="nav__links">
        <Link className="nav__title" to={"/"}>
          <h1 className="nav__title">CodeCraft</h1>
        </Link>
        <Link className=" nav__link nav__selected" to={"/"}>
          <img className="nav__icon" src={Home} />
          <h2 className="nav__header">Home</h2>
        </Link>
        <Link className="nav__link" to={"/Lessons"}>
          <img className="nav__icon" src={Lessons} />
          <h2 className="nav__header">Lessons</h2>
        </Link>
        <div className="nav__link">
          <img className="nav__icon" src={Progress} />
          <h2 className="nav__header">Progress</h2>
        </div>
        <div className="nav__link">
          <img className="nav__icon" src={CheckIn} />
          <h2 className="nav__header">Check In</h2>
        </div>
      </section>
      <div className="nav__link nav__link-login">
        <img className="nav__icon-login" src={LogIn} />
        <h2 className="nav__header">Log In</h2>
      </div>
    </section>
  );
}

export default Nav;
