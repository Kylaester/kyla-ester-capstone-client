import "./Lesson3.scss";
import { useEffect, useState } from "react";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import { Link } from "react-router-dom";
import WrongAnswer from "../../Components/WrongAnswer/WrongAnswer";
import NeedHelp from "../../Components/NeedHelp/NeedHelp";
import PreviewAnswer from "../../Components/Preview/Preview";

function Lesson3() {
  const [show, setShow] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreviewClick = () => {
    setShowPreview(true);
  };

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
  const handleDelayedLinkClick = () => {
    setShowPreview(true);
    alert("Correct!");
    setTimeout(() => {
      window.location.href = "/Lesson4";
    }, 1500);
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
      {showPreview && <PreviewAnswer setPreviewShow={setShowPreview} />}
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
              <Link
                onClick={handleDelayedLinkClick}
                className="lesson3__answer"
              >
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
