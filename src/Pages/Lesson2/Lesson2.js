import "./Lesson2.scss";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
import plant from "../../Assets/plant.png";
import { Link } from "react-router-dom";

function Lesson2() {
  return (
    <section className="background">
      <section className="background-lesson">
        <Link className="lesson2" to={"/Lesson3"}>
          <div className="lesson2__top">
            <Link className="lesson__back-2" to={"/Leason1"}>
              <img className="lesson__back-img-2" src={back} />
            </Link>

            <h2 className="lesson2__header">
              Lets Create a Blog Post for Kingsley using HTML !
            </h2>
            <div className="points">
              <img className="points__img" src={points} />
              <p className="points__text">2</p>
            </div>
          </div>
          <div className="example">
            <div className="example__top">
              <div className="example__text-top">
                {" "}
                <p className="example__title">Green Thumb</p>
                <p className="example__subheading">
                  Photosynthesis: The Process That Keeps Us Alive
                </p>{" "}
                <p className="example__text">
                  One of the most important functions of plants is their ability
                  to carry out photosynthesis. This is the process by which
                  plants use the energy from the sun to convert carbon dioxide
                  and water into glucose and oxygen. This is the process that
                  produces the oxygen we breathe, making plants an essential
                  component of our plant's ecosystem
                </p>
              </div>

              <img className="example__img" src={plant} />
            </div>

            <Link to={"/Lesson3"} className="example__button">
              Read More
            </Link>
          </div>
        </Link>
      </section>
    </section>
  );
}

export default Lesson2;
