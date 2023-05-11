import "./Lesson5.scss";
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

function Lesson5() {
  return (
    <section className="background">
      <section className="lesson5__container">
        <section className="lesson5">
          <div className="lesson5__top">
            <Link className="lesson__back-5" to={"/Lesson4"}>
              <img className="lesson__back-img-5" src={back} />
            </Link>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">9999</p>
            </div>
          </div>
          <div className="lesson5__middle">
            <div className="lesson5__questions">
              <div className="lesson5__question">
                <h1 className="lesson5__heading">
                  Kingsley said he has a picture of a plant he'd like to display
                  on his blog !
                </h1>
                <h2 className="lesson5__subheading">
                  Which of these HTML Tags creates a{" "}
                  <span className="green">Image </span>?
                </h2>
              </div>
              <div className="lesson5__preview">
                <p className="lesson5__preview--title">Preivew</p>
                <p className="lesson5__preview--1">Green Thumb</p>
                <p className="lesson5__preview--2">
                  Photosynthesis: The Process That Keeps Us Alive
                </p>
                <img src={plant} className="lesson5__preview--3" />
              </div>
            </div>
          </div>
          <div className="lesson5__bottom">
            <h3 className="lesson5__language">HTML</h3>
            <div className="lesson5__answers">
              <Link className="lesson5__answer">&lt;h1&gt;</Link>
              <Link to={"/Lesson6"} className="lesson5__answer">
                &lt;img&gt;
              </Link>
              <Link className="lesson5__answer">&lt;p&gt;</Link>
            </div>
            <Link className="lesson5__help">Need Help?</Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Lesson5;
