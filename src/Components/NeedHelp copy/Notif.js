import "./Notif.scss";
import bear from "../../Assets/IMG_2471.png";

function Notif({ setShow }) {
  const handleNotifClick = () => {
    setShow(false);
  };
  return (
    <>
      <div className="notification">
        <div className="notification__container">
          <img className="notification__img" src={bear} />
          <div className="notification__text">
            <h2 className="notification__header">
              "Hey there, study buddy! Remember, just like tending to a garden,
              nurturing your knowledge takes time and dedication. So dig deep,
              reach for the stars, and let your brilliance bloom. You've got
              this!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notif;
