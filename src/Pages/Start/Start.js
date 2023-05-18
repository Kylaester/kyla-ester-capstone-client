// insert warehouse page details here
import "./Start.scss";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../Assets/3d-casual-life-boy-and-girl-in-box-looking-into-a-paper-tube 1.svg";
import image2 from "../../Assets/3d-casual-life-girl-and-boy-sitting-on-floor-and-watching-tablet.png";
import image3 from "../../Assets/3d-casual-life-graduate-girl-with-laptop-holding-diploma.png";
import image4 from "../../Assets/3d-casual-life-solleagues-discussing-team-project.png";
import image5 from "../../Assets/3d-casual-life-woman-in-online-meetings.png";
import image6 from "../../Assets/3d-casual-life-young-woman-reading-book-and-holding-pen.png";
import image7 from "../../Assets/3d-casual-life-young-woman-sitting-in-front-of-laptop-and-having-an-idea-1.png";
import settings from "../../Assets/settings 1.svg";
function Start() {
  var imageArray = [image1, image2, image3, image4, image5, image6, image7];

  var imageIndex = 1; // Start with the second image

  function changeImage() {
    var imageElement = document.getElementById("image");
    imageElement.src = imageArray[imageIndex];
    imageIndex = (imageIndex + 1) % imageArray.length;
  }

  useEffect(() => {
    // Preload the first image
    var firstImage = new Image();
    firstImage.src = imageArray[0];

    var timer = setInterval(changeImage, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <section className="start-background">
        {" "}
        <section className="start">
          <div className="start__middle">
            <h1 className="start__title">CodeCraft</h1>
            <img className="start__img" src={image1} id="image" />
            <Link to="/LogIn" className="start__button">
              Log In
            </Link>
            <h2 className="start__text">Don't have an account</h2>
            <Link to={"/SignUp"} className="start__signup">
              Click here to sign up{" "}
            </Link>
          </div>
          <Link className="side__settings-start" to={"/settings"}>
            <img className="side__settings-img-start" src={settings} />
          </Link>
        </section>
      </section>
    </>
  );
}

export default Start;
