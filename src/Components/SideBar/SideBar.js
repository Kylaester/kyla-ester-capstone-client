import "./SideBar.scss";

function SideBar() {
  return (
    <section className="side">
      <div className="side__notif">
        <h3 className="side__message">Rex Has Sent You A Message</h3>
        <p className="side__click">Click Me !</p>
      </div>
    </section>
  );
}

export default SideBar;
