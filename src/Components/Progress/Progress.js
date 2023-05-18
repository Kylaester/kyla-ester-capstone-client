import "./Progress.scss";
import complete from "../../Assets/badge-reward-svgrepo-com.svg";
import back from "../../Assets/angle-left.svg";
import first from "../../Assets/success.png";
import second from "../../Assets/excellence.png";
import third from "../../Assets/experience.png";
import fourth from "../../Assets/team (1).png";
import fifth from "../../Assets/list.png";
import { Link } from "react-router-dom";
function Progress() {
  return (
    <>
      <section className="progress">
        <Link className="progress__back" to={"/Home"}>
          <img className="progress__back-img" src={back} />
        </Link>
        <section className="progress__hero">
          <div className="progress__cards">
            <div className="progress__top">
              <Link className="progress__card" to={"/Leason1"}>
                <div className="progress__card-top">
                  <img className="progress__img" src={complete} />
                </div>
                <div className="progress__card-bottom"> </div>
              </Link>
              <Link className="progress__card" to={"/Leason1"}>
                <div className="progress__card-top">
                  <img className="progress__img" src={first} />
                </div>
                <div className="progress__card-bottom">
                  {" "}
                  <h3 className="progress__card-text">Beginner Code Crafter</h3>
                  <h3 className="progress__card-text">
                    {" "}
                    - Complete the beginner level
                  </h3>
                </div>
              </Link>
              <Link className="progress__card" to={"/Leason1"}>
                <div className="progress__card-top">
                  <img className="progress__img" src={second} />
                </div>
                <div className="progress__card-bottom">
                  {" "}
                  <h3 className="progress__card-text">
                    Intermediate Code Crafter
                  </h3>
                  <h3 className="progress__card-text">
                    - Complete the Intermediate level
                  </h3>
                </div>
              </Link>
            </div>
            <div className="progress__middle">
              <div className="progress__card">
                <div className="progress__card-top">
                  <img className="progress__img" src={third} />
                </div>
                <div className="progress__card-bottom">
                  {" "}
                  <h3 className="progress__card-text">Expert Code Crafter</h3>
                  <h3 className="progress__card-text">
                    {" "}
                    - Complete the Intermediate level
                  </h3>
                </div>
              </div>
              <div className="progress__card">
                <div className="progress__card-top">
                  <img className="progress__img" src={fourth} />
                </div>
                <div className="progress__card-bottom">
                  {" "}
                  <h3 className="progress__card-text">Entrepreneur</h3>
                  <h3 className="progress__card-text">
                    - Completed 10 lessons
                  </h3>
                </div>
              </div>
              <div className="progress__card">
                <div className="progress__card-top">
                  <img className="progress__img" src={fifth} />
                </div>
                <div className="progress__card-bottom">
                  {" "}
                  <h3 className="progress__card-text">You’re a Star</h3>
                  <h3 className="progress__card-text"> - Made 5 Friends</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Progress;
