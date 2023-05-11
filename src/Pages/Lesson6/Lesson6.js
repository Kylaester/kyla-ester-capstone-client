import "./Lesson6.scss";
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

function Lesson6() {
  return (
    <section className="background">
      <section className="lesson6__container">
        <section className="lesson6">
          <div className="lesson6__top">
            <Link className="lesson__back-6" to={"/Lesson5"}>
              <img className="lesson__back-img-6" src={back} />
            </Link>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">9999</p>
            </div>
          </div>
          <div className="lesson6__middle">
            <div className="lesson6__questions">
              <div className="lesson6__question">
                <h1 className="lesson6__heading">
                  Kingsley wrote a post for his blog, Let's add it in !
                </h1>
                <h2 className="lesson6__subheading">
                  Which of these HTML Tags creates a{" "}
                  <span className="green">paragraph</span>?
                </h2>
              </div>
              <div className="lesson6__preview">
                <p className="lesson6__preview--title">Preivew</p>
                <p className="lesson6__preview--1">Green Thumb</p>
                <p className="lesson6__preview--2">
                  Photosynthesis: The Process That Keeps Us Alive
                </p>
                <img src={plant} className="lesson6__preview--3" />
                <p className="lesson6__preview--4">
                  One of the most important functions of plants is their ability
                  to carry out photosynthesis. This is the process by which
                  plants use the energy from the sun to convert carbon dioxide
                  and water into glucose and oxygen. This is the process that
                  produces the oxygen we breathe, making plants an essential
                  component of our planet's ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="lesson6__bottom">
            <h3 className="lesson6__language">HTML</h3>
            <div className="lesson6__answers">
              <Link className="lesson6__answer">&lt;h1&gt;</Link>
              <Link className="lesson6__answer">&lt;img&gt;</Link>
              <Link to={"/Lesson7"} className="lesson6__answer">
                &lt;p&gt;
              </Link>
            </div>
            <Link className="lesson6__help">Need Help?</Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Lesson6;
