import "./Complete1.scss";

import { Link } from "react-router-dom";

import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
function Complete1() {
  return (
    <section className="background">
      <section className="complete__container">
        <section className="complete">
          <section className="complete__top">
            <Link className="complete__back" to={"/Lessons"}>
              <img className="complete__back-img" src={back} />
            </Link>
            <div className="complete__points">
              <img className="complete__points--img" src={points} />
              <p className="complete__points--text">9999</p>
            </div>
          </section>
          <div className="middle">
            <div className="achievement">
              <h1 className="achievement__title">Achievement Unlocked !</h1>
              <h2 className="achievement__subheader">20 Points - Newbie</h2>
              <Link to={"/Progress"} className="achievement__progress">
                Progress
              </Link>
            </div>
            <Link to={"/Lessons"} className="achievement__finish">
              Finish
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Complete1;
