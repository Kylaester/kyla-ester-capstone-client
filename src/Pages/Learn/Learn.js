import "./Learn.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import html from "../../Assets/html (2).png";
// import arrow from "../../Assets/down-arrow.png";
// import back from "../../Assets/angle-left.svg";
import OneLesson from "../../Components/OneLesson/OneLesson";
import TwoLesson from "../../Components/TwoLesson/TwoLesson";
import { Link } from "react-router-dom";

function Learn() {
  return (
    <>
      <section className="Background">
        <OneLesson />
      </section>
    </>
  );
}

export default Learn;
