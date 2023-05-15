import "./WrongAnswer.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import html from "../../Assets/html (2).png";
// import arrow from "../../Assets/down-arrow.png";
// import back from "../../Assets/angle-left.svg";
import TwoLesson from "../TwoLesson/TwoLesson";
import { Link } from "react-router-dom";
import Background from "../Background/Background";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import bear from "../../Assets/bearwoshadow.svg";
import leaf1 from "../../Assets/Vector.svg";

function WrongAnswer({ setShow }) {
  const handleWrongAnswerClick = () => {
    setShow(false);
  };
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <h1 className="modal__heading">Wrong Answer</h1>
          <h2 className="modal__header" onClick={handleWrongAnswerClick}>
            Try Again ?{" "}
          </h2>
        </div>
      </div>
    </>
  );
}

export default WrongAnswer;
