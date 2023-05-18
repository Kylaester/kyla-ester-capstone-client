import "./Lesson6.scss";
import { useState } from "react";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import plant from "../../Assets/plant.png";
import { Link } from "react-router-dom";
import WrongAnswer from "../../Components/WrongAnswer/WrongAnswer";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";

function Lesson6() {
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
      <section className="lesson6__container">
        <section className="lesson6">
          <div className="lesson6__top">
            <Link className="lesson__back-6" to={"/Lesson5"}>
              <img className="lesson__back-img-6" src={back} />
            </Link>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">10</p>
            </div>
          </div>
          <div className="lesson6__middle">
            <div className="lesson6__questions">
              <div className="lesson6__question">
                <h1 className="lesson6__heading">
                  Kingsley wrote a post for his blog, Let's add it in !
                </h1>
                <h2 className="lesson6__subheading">
                  Which of these HTML Tags creates a{" "}
                  <span className="green">paragraph</span>?
                </h2>
              </div>
              <div className="lesson6__preview">
                <p className="lesson6__preview--title">Preivew</p>
                <p className="lesson6__preview--1">Green Thumb</p>
                <p className="lesson6__preview--2">
                  Photosynthesis: The Process That Keeps Us Alive
                </p>
                <img src={plant} className="lesson6__preview--3" />
                <p className="lesson6__preview--4">
                  One of the most important functions of plants is their ability
                  to carry out photosynthesis. This is the process by which
                  plants use the energy from the sun to convert carbon dioxide
                  and water into glucose and oxygen. This is the process that
                  produces the oxygen we breathe, making plants an essential
                  component of our planet's ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="lesson6__bottom">
            <h3 className="lesson6__language">HTML</h3>
            <div className="lesson6__answers">
              <Link
                onClick={handleWrongAnswerClick}
                className="lesson6__answer"
              >
                &lt;h1&gt;
              </Link>
              <Link
                onClick={handleWrongAnswerClick}
                className="lesson6__answer"
              >
                &lt;img&gt;
              </Link>
              <Link to={"/Lesson7"} className="lesson6__answer">
                &lt;p&gt;
              </Link>
            </div>
            <Link onClick={handleHelpClick} className="lesson6__help">
              Need Help?
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Lesson6;
