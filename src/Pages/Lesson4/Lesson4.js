import "./Lesson4.scss";
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
// import plant from "../../Assets/plant.png";
import { Link } from "react-router-dom";

function Lesson4() {
  return (
    <section className="background">
      <section className="lesson4__container">
        <section className="lesson4">
          <div className="lesson4__top">
            <Link className="lesson__back-4" to={"/Lesson3"}>
              <img className="lesson__back-img-4" src={back} />
            </Link>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">9999</p>
            </div>
          </div>
          <div className="lesson4__middle">
            <div className="lesson4__questions">
              <div className="lesson4__question">
                <h1 className="lesson4__heading">
                  We need the Subheader, Kingsley said he wants to write about
                  Photosynthesis !
                </h1>
                <h2 className="lesson4__subheading">
                  Which of these HTML Tags creates the{" "}
                  <span className="green">Second </span>Heading ?
                </h2>
              </div>
              <div className="lesson4__preview">
                <p className="lesson4__preview--title">Preivew</p>
                <p className="lesson4__preview--1">Green Thumb</p>
                <p className="lesson4__preview--2">
                  Photosynthesis: The Process That Keeps Us Alive
                </p>
              </div>
            </div>
          </div>
          <div className="lesson4__bottom">
            <h3 className="lesson4__language">HTML</h3>
            <div className="lesson4__answers">
              <Link className="lesson4__answer">&lt;h1&gt;</Link>
              <Link className="lesson4__answer">&lt;p&gt;</Link>
              <Link to={"/Lesson5"} className="lesson4__answer">
                &lt;h2&gt;
              </Link>
            </div>
            <Link className="lesson4__help">Need Help?</Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Lesson4;
