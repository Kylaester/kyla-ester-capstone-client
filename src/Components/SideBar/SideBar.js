import "./SideBar.scss";

import { useState } from "react";
import { Link } from "react-router-dom";
import settings from "../../Assets/settings 1.svg";
import Notif from "../NeedHelp copy/Notif";
function SideBar() {
  const [show, setShow] = useState(false);
  const handleNotifClick = () => {
    {
      setShow(true);
    }
  };
  return (
    <section className="side">
      {show && <Notif setShow={setShow} />}
      <Link className="side__settings" to={"/settings"}>
        <img className="side__settings-img" src={settings} />
      </Link>
      <Link onClick={handleNotifClick} className="side__notif">
        <div className="notif">
          <p className="notif__important">!</p>
        </div>
        <h3 className="side__message">Rex Has Sent You A Message</h3>
        <p className="side__click">Click Me !</p>
      </Link>
    </section>
  );
}

export default SideBar;
