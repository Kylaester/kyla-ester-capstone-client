import "./Leason1.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import html from "../../Assets/html (2).png";
// import arrow from "../../Assets/down-arrow.png";
// import back from "../../Assets/angle-left.svg";
import TwoLesson from "../../Components/TwoLesson/TwoLesson";
import { Link } from "react-router-dom";
import Background from "../../Components/Background/Background";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import bear from "../../Assets/bearwoshadow.svg";
import leaf1 from "../../Assets/Vector.svg";

function Leason1() {
  return (
    <>
      <section className="background">
        <Link className="lesson" to={"/Lesson2"}>
          <section className="lesson__hero">
            <div className="lesson__top">
              <Link className="lesson1__back" to={"/Lessons"}>
                <img className="lesson1__back-img" src={back} />
              </Link>
              <div className="lesson__text-container">
                <h2 className="lesson__text">
                  Kingsley needs your help ! He wants to start a blog but
                  doesn’t know how, Can you help him?
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
      </section>
    </>
  );
}

export default Leason1;
