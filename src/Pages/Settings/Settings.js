import "./Settings.scss";
// import Nav from "../../Components/Nav/Nav";
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import html from "../../Assets/html (2).png";
// // import arrow from "../../Assets/down-arrow.png";
// // import back from "../../Assets/angle-left.svg";
// import TwoLesson from "../../Components/TwoLesson/TwoLesson";
// import { Link } from "react-router-dom";
// import Background from "../../Components/Background/Background";
import back from "../../Assets/angle-left.svg";
import points from "../../Assets/golde_icon.svg";
// import bear from "../../Assets/Group.svg";
// import leaf1 from "../../Assets/Vector.svg";
import plant from "../../Assets/plant.png";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
function Settings() {
  return (
    <section className="background">
      <Nav />
      <Link className="settings__back-4" to={"/"}>
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
            <div className="settings__log">
              <p className="settings__5">Log Out</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Settings;
