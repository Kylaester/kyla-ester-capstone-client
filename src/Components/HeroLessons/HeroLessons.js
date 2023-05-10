import "./HeroLessons.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import html from "../../Assets/html (2).png";
import arrow from "../../Assets/down-arrow.png";
import back from "../../Assets/angle-left.svg";
import { Link } from "react-router-dom";
function HeroLessons() {
  return (
    <>
      <section className="lessons">
        <Link className="lessons__back" to={"/"}>
          <img className="lessons__back-img" src={back} />
        </Link>
        <section className="lessons__hero">
          <div className="lessons__cards">
            <img className="lessons__img-arrow-left" src={arrow} />
            <Link className="lessons__card" to={"/Leason1"}>
              <div className="lessons__card-top">
                <img className="lessons__img" src={html} />
              </div>
              <div className="lessons__card-bottom">
                {" "}
                <h3 className="lessons__card-text">Lesson 1</h3>
              </div>
            </Link>
            <div className="lessons__card">
              <div className="lessons__card-top">
                <img className="lessons__img" src={html} />
              </div>
              <div className="lessons__card-bottom">
                {" "}
                <h3 className="lessons__card-text">Lesson 1</h3>
              </div>
            </div>
            <div className="lessons__card">
              <div className="lessons__card-top">
                <img className="lessons__img" src={html} />
              </div>
              <div className="lessons__card-bottom">
                {" "}
                <h3 className="lessons__card-text">Lesson 1</h3>
              </div>
            </div>
            <img className="lessons__img-arrow-right" src={arrow} />
          </div>
          <div className="lessons__bottom">
            <h2 className="lessons__bottom-text">HTML Basics</h2>
          </div>
        </section>
      </section>
    </>
  );
}

export default HeroLessons;
