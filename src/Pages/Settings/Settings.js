import "./Settings.scss";
import back from "../../Assets/angle-left.svg";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
function Settings() {
  return (
    <section className="background">
      <Nav />
      <Link className="settings__back-4" to={"/Home"}>
        <img className="settings__back-img-4" src={back} />
      </Link>
      <section className="settings__container">
        <section className="settings">
          <div className="settings__border">
            <p className="settings__title">Settings</p>
          </div>
          <div className="settings__border">
            <p className="settings__1">Account Settings</p>
          </div>
          <div className="settings__border">
            <p className="settings__1">Themes</p>
          </div>
          <div className="settings__border">
            {" "}
            <p className="settings__2">Notifications</p>
          </div>
          <div className="settings__border">
            {" "}
            <p className="settings__3">About</p>
          </div>
          <div className="settings__logoff">
            {" "}
            <p className="settings__4">See you soon !</p>{" "}
            <Link to={"/"} className="settings__log">
              <p className="settings__5">Log Out</p>
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Settings;
