import "./NeedHelp.scss";
import React, { useEffect, useRef, useState } from "react";

function NeedHelp({ setShowPopup, lesson }) {
  const popupContainerRef = useRef();
  const [popupData, setPopupData] = useState([]);

  useEffect(() => {
    fetch(
      "https://us-central1-codecraft-miami.cloudfunctions.net/api/displayArray"
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.lesson === lesson);
        setPopupData(filteredData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [lesson]);

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
          <div className="popup__textbox">
            {popupData.map((item) => (
              <div key={item.name}>
                <h2 className="popup__name">{item.name}</h2>
                <p className="popup__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NeedHelp;
