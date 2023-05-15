import "./SideBar.scss";
import back from "../../Assets/angle-left.svg";
import { Link } from "react-router-dom";
import settings from "../../Assets/settings 1.svg";
function SideBar() {
  return (
    <section className="side">
      <Link className="side__settings" to={"/settings"}>
        <img className="side__settings-img" src={settings} />
      </Link>
      <div className="side__notif">
        <div className="notif">
          <p className="notif__important">!</p>
        </div>
        <h3 className="side__message">Rex Has Sent You A Message</h3>
        <p className="side__click">Click Me !</p>
      </div>
    </section>
  );
}

export default SideBar;
