import "./TwoLesson.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import html from "../../Assets/html (2).png";
import arrow from "../../Assets/down-arrow.png";
import back from "../../Assets/angle-left.svg";
import { Link } from "react-router-dom";
import points from "../../Assets/golde_icon.svg";
import bear from "../../Assets/Group.svg";
import leaf1 from "../../Assets/Vector.svg";

function TwoLesson() {
  return (
    <>
      <Link className="lesson" to={"/Lessons"}>
        <section className="lesson__hero">
          <div className="lesson__top">
            <Link className="hero__back" to={"/"}>
              <img className="hero__back-img" src={back} />
            </Link>
            <div className="lesson__text-container">
              <h2 className="lesson__text">
                Kingsley needs your help ! He wants to start a blog but doesn’t
                know how, Can you help him?
              </h2>
            </div>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">9999</p>
            </div>
          </div>
          <div className="lesson__art">
            <img className="lesson__leaf-2" src={leaf1} />
            <img className="lesson__bear" src={bear} />
            <img className="lesson__leaf-1" src={leaf1} />
          </div>
        </section>
      </Link>
    </>
  );
}

export default TwoLesson;
