import "./Lesson5.scss";
import { useState } from "react";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import plant from "../../Assets/plant.png";
import { Link } from "react-router-dom";
import WrongAnswer from "../../Components/WrongAnswer/WrongAnswer";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";

function Lesson5() {
  const [show, setShow] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleHelpClick = () => {
    setShowPopup(true);
  };

  const handleWrongAnswerClick = () => {
    setWrongCount(wrongCount + 1);
    if (wrongCount + 1 === 2) {
      setShowPopup(true);
    } else {
      setShow(true);
    }
  };
  return (
    <section className="background">
      {show && <WrongAnswer setShow={setShow} />}
      {showPopup && (
        <NeedHelp
          setShowPopup={setShowPopup}
          lesson={3}
          handleWrongAnswerClick={handleWrongAnswerClick}
        />
      )}

      <section className="lesson5__container">
        <section className="lesson5">
          <div className="lesson5__top">
            <Link className="lesson__back-5" to={"/Lesson4"}>
              <img className="lesson__back-img-5" src={back} />
            </Link>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">8</p>
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
              <Link
                onClick={handleWrongAnswerClick}
                className="lesson5__answer"
              >
                &lt;h1&gt;
              </Link>
              <Link to={"/Lesson6"} className="lesson5__answer">
                &lt;img&gt;
              </Link>
              <Link
                onClick={handleWrongAnswerClick}
                className="lesson5__answer"
              >
                &lt;p&gt;
              </Link>
            </div>
            <button onClick={handleHelpClick} className="lesson5__help">
              Need Help?
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Lesson5;
