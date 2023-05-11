import "./Lesson7.scss";
// import Nav from "../../Components/Nav/Nav";
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import html from "../../Assets/html (2).png";
// // import arrow from "../../Assets/down-arrow.png";
// // import back from "../../Assets/angle-left.svg";
// import TwoLesson from "../../Components/TwoLesson/TwoLesson";
// import { Link } from "react-router-dom";
// import Background from "../../Components/Background/Background";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
// import bear from "../../Assets/Group.svg";
// import leaf1 from "../../Assets/Vector.svg";
import plant from "../../Assets/plant.png";
import { Link } from "react-router-dom";

function Lesson7() {
  return (
    <section className="background">
      <section className="lesson7__container">
        <section className="lesson7">
          <div className="lesson7__top">
            <Link className="lesson__back-7" to={"/Lesson5"}>
              <img className="lesson__back-img-7" src={back} />
            </Link>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">9999</p>
            </div>
          </div>
          <div className="lesson7__middle">
            <div className="lesson7__questions">
              <div className="lesson7__question">
                <h1 className="lesson7__heading">
                  Wow that was great, Now let's add a button so that people can
                  read more about his plants !
                </h1>
                <h2 className="lesson7__subheading">
                  Which of these HTML Tags creates a{" "}
                  <span className="green">button</span>?
                </h2>
              </div>
              <div className="lesson7__preview">
                <p className="lesson7__preview--title">Preivew</p>
                <p className="lesson7__preview--1">Green Thumb</p>
                <p className="lesson7__preview--2">
                  Photosynthesis: The Process That Keeps Us Alive
                </p>
                <img src={plant} className="lesson7__preview--3" />
                <p className="lesson7__preview--4">
                  One of the most important functions of plants is their ability
                  to carry out photosynthesis. This is the process by which
                  plants use the energy from the sun to convert carbon dioxide
                  and water into glucose and oxygen. This is the process that
                  produces the oxygen we breathe, making plants an essential
                  component of our planet's ecosystem.
                </p>
                <button className="lesson7__preview--5">Read More</button>
              </div>
            </div>
          </div>
          <div className="lesson7__bottom">
            <h3 className="lesson7__language">HTML</h3>
            <div className="lesson7__answers">
              <Link to={"/Basic1Complete"} className="lesson7__answer">
                &lt;button&gt;
              </Link>
              <Link className="lesson7__answer">&lt;img&gt;</Link>
              <Link className="lesson7__answer">&lt;p&gt;</Link>
            </div>
            <Link className="lesson7__help">Need Help?</Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Lesson7;
