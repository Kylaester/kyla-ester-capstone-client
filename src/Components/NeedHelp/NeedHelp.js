import "./NeedHelp.scss";
import TwoLesson from "../TwoLesson/TwoLesson";
import { Link } from "react-router-dom";
import Background from "../Background/Background";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import bear from "../../Assets/bearwoshadow.svg";
import leaf1 from "../../Assets/Vector.svg";
import popupData from "../../TagsReference.json";
import React, { useEffect, useRef, useState } from "react";

function NeedHelp({ setShowPopup, lesson }) {
  const popupContainerRef = useRef();

  const filteredData = popupData.filter((item) => item.lesson === lesson);
  const items = filteredData.map((item) => (
    <div key={item.name}>
      <h2 className="popup__name">{item.name}</h2>
      <p className="popup__desc">{item.desc}</p>
    </div>
  ));

  const handleWrongAnswerClick = () => {
    setShowPopup(false);
  };

  const handleOutsideClick = (event) => {
    if (
      popupContainerRef.current &&
      !popupContainerRef.current.contains(event.target)
    ) {
      handleWrongAnswerClick();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      handleOutsideClick(event);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="popup">
        <div ref={popupContainerRef} className="popup__container">
          <div className="popup__textbox">{items}</div>
        </div>
      </div>
    </>
  );
}

export default NeedHelp;
