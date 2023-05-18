import "./Lesson4.scss";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import { Link } from "react-router-dom";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";
import WrongAnswer from "../../Components/WrongAnswer/WrongAnswer";
import { useState } from "react";
function Lesson4() {
  const [show, setShow] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

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
      <section className="lesson4__container">
        <section className="lesson4">
          <div className="lesson4__top">
            <Link className="lesson__back-4" to={"/Lesson3"}>
              <img className="lesson__back-img-4" src={back} />
            </Link>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">6</p>
            </div>
          </div>
          <div className="lesson4__middle">
            <div className="lesson4__questions">
              <div className="lesson4__question">
                <h1 className="lesson4__heading">
                  We need the Subheader, Kingsley said he wants to write about
                  Photosynthesis !
                </h1>
                <h2 className="lesson4__subheading">
                  Which of these HTML Tags creates the{" "}
                  <span className="green">Second </span>Heading ?
                </h2>
              </div>
              <div className="lesson4__preview">
                <p className="lesson4__preview--title">Preivew</p>
                <p className="lesson4__preview--1">Green Thumb</p>
                <p className="lesson4__preview--2">
                  Photosynthesis: The Process That Keeps Us Alive
                </p>
              </div>
            </div>
          </div>
          <div className="lesson4__bottom">
            <h3 className="lesson4__language">HTML</h3>
            <div className="lesson4__answers">
              <Link
                onClick={handleWrongAnswerClick}
                className="lesson4__answer"
              >
                &lt;h1&gt;
              </Link>
              <Link
                onClick={handleWrongAnswerClick}
                className="lesson4__answer"
              >
                &lt;p&gt;
              </Link>
              <Link to={"/Lesson5"} className="lesson4__answer">
                &lt;h2&gt;
              </Link>
            </div>
            <button onClick={handleHelpClick} className="lesson4__help">
              Need Help?
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Lesson4;
