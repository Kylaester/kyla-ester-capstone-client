import "./HeroLessons.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import html from "../../Assets/html (2).png";
import arrow from "../../Assets/down-arrow.png";
import back from "../../Assets/angle-left.svg";
import { Link } from "react-router-dom";
import lesson1 from "../../Assets/Lesson1.png";
import lesson2 from "../../Assets/Lesson2.png";
import lesson3 from "../../Assets/Lesson3.png";
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
                <img className="lessons__img" src={lesson1} />
              </div>
              <div className="lessons__card-bottom">
                {" "}
                <h3 className="lessons__card-text">
                  Help Kingsley start a blog{" "}
                </h3>
              </div>
            </Link>
            <div className="lessons__card">
              <div className="lessons__card-top">
                <img className="lessons__img" src={lesson2} />
              </div>
              <div className="lessons__card-bottom">
                {" "}
                <h3 className="lessons__card-text">
                  Help Lucky make a sushi menu
                </h3>
              </div>
            </div>
            <div className="lessons__card">
              <div className="lessons__card-top">
                <img className="lessons__img" src={lesson3} />
              </div>
              <div className="lessons__card-bottom">
                {" "}
                <h3 className="lessons__card-text">
                  Help Lola send a postcard to her family
                </h3>
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
