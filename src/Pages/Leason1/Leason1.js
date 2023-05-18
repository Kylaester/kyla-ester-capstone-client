import "./Leason1.scss";
import { Link } from "react-router-dom";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import bear from "../../Assets/bearwoshadow.svg";
import leaf1 from "../../Assets/Vector.svg";

function Leason1() {
  return (
    <>
      <section className="background-lesson1">
        <section className="lesson__hero">
          <div className="lesson__top">
            <Link className="lesson1__back" to={"/Lessons"}>
              <img className="lesson1__back-img" src={back} />
            </Link>
            <div className="lesson__text-container">
              <h2 className="lesson__text">
                Kingsley needs your help ! He wants to start a blog but doesn’t
                know how, Can you help him?
              </h2>
            </div>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">0</p>
            </div>
          </div>
          <div className="lesson__art">
            <img className="lesson__leaf-2" src={leaf1} />
            <img className="lesson__bear" src={bear} />
            <img className="lesson__leaf-1" src={leaf1} />
            <Link className="lesson__link" to={"/Lesson2"}>
              Next
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export default Leason1;
