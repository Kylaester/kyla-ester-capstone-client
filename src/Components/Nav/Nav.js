import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section className="nav">
      <section className="nav__links">
        <Link className="nav__title" to={"/Home"}>
          <h1 className="nav__title">CodeCraft</h1>
        </Link>
        <Link className=" nav__link nav__selected" to={"/Home"}>
          <h2 className="nav__header">Home</h2>
        </Link>
        <Link className="nav__link" to={"/Lessons"}>
          <h2 className="nav__header">Lessons</h2>
        </Link>
        <div className="nav__link">
          <Link className="nav__link" to={"/Progress"}>
            <h2 className="nav__header">Progress</h2>
          </Link>
        </div>
        <div className="nav__link">
          <h2 className="nav__header">Check In</h2>
        </div>
      </section>
      <Link className="nav__link nav__link-login" to={"/LogIn"}>
        <h2 className="nav__header">Log In</h2>
      </Link>
    </section>
  );
}

export default Nav;
