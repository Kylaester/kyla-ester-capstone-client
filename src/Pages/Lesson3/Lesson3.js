import "./Lesson3.scss";
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

function Lesson3() {
  return (
    <section className="background">
      <section className="lesson3__container">
        <section className="lesson3">
          <div className="lesson3__top">
            <Link className="lesson__back-3" to={"/Lesson2"}>
              <img className="lesson__back-img-3" src={back} />
            </Link>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">9999</p>
            </div>
          </div>
          <div className="lesson3__middle">
            <div className="lesson3__questions">
              <div className="lesson3__question">
                <h1 className="lesson3__heading">
                  We need the Title, Kingsley said he wants his blog to be
                  called Green Thumb
                </h1>
                <h2 className="lesson3__subheading">
                  Which of these HTML Tags creates the{" "}
                  <span className="green">First </span>Heading ?
                </h2>
              </div>
              <div className="lesson3__preview">
                <p className="lesson3__preview--title">Preivew</p>
                <p className="lesson3__preview--1">Green Thumb</p>
              </div>
            </div>
          </div>
          <div className="lesson3__bottom">
            <h3 className="lesson3__language">HTML</h3>
            <div className="lesson3__answers">
              <Link className="lesson3__answer">&lt;button&gt;</Link>
              <Link to={"/Lesson4"} className="lesson3__answer">
                &lt;h1&gt;
              </Link>
              <Link className="lesson3__answer">&lt;p&gt;</Link>
            </div>
            <Link className="lesson3__help">Need Help?</Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Lesson3;
