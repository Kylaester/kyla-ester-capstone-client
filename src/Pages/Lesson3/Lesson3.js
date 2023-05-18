import "./Lesson3.scss";
import { useState } from "react";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import { Link } from "react-router-dom";
import WrongAnswer from "../../Components/WrongAnswer/WrongAnswer";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";

function Lesson3() {
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

      <section className="lesson3__container">
        <section className="lesson3">
          <div className="lesson3__top">
            <Link className="lesson__back-3" to={"/Lesson2"}>
              <img className="lesson__back-img-3" src={back} />
            </Link>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">4</p>
            </div>
          </div>
          <div className="lesson3__middle">
            <div className="lesson3__questions">
              <div className="lesson3__question">
                <h1 className="lesson3__heading">
                  We need the Title, Kingsley said he wants his blog to be
                  called Green Thumb
                </h1>
                <h2 className="lesson3__subheading">
                  Which of these HTML Tags creates the{" "}
                  <span className="green">First </span>Heading ?
                </h2>
              </div>
              <div className="lesson3__preview">
                <p className="lesson3__preview--title">Preivew</p>
                <p className="lesson3__preview--1">Green Thumb</p>
              </div>
            </div>
          </div>
          <div className="lesson3__bottom">
            <h3 className="lesson3__language">HTML</h3>
            <div className="lesson3__answers">
              <Link
                onClick={handleWrongAnswerClick}
                className="lesson3__answer"
              >
                &lt;button&gt;
              </Link>
              <Link to={"/lesson4"} className="lesson3__answer">
                &lt;h1&gt;
              </Link>
              <Link
                onClick={handleWrongAnswerClick}
                className="lesson3__answer"
              >
                &lt;p&gt;
              </Link>
            </div>
            <button onClick={handleHelpClick} className="lesson3__help">
              Need Help?
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Lesson3;
