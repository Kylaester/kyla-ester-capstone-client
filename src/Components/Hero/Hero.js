import React, { useState, useEffect } from "react";
import "./Hero.scss";
import back from "../../Assets/angle-left.svg";
import lock from "../../Assets/lock.svg";
import { Link } from "react-router-dom";

function Hero() {
  const [commentsData, setCommentsData] = useState([]);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://us-central1-codecraft-miami.cloudfunctions.net/api/displayComments"
        );
        const data = await response.json();
        setCommentsData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchComments();

    // Run the fetch every 10 seconds
    const interval = setInterval(() => {
      setCurrentCommentIndex(
        (prevIndex) => (prevIndex + 1) % commentsData.length
      );
    }, 100000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const currentComment = commentsData[currentCommentIndex];

  return (
    <section className="hero">
      <section className="hero__nav">
        <div className="hero__back">
          <img className="hero__back-img" src={back} alt="Back" />
        </div>
        <div className="hero__help">
          <p>Need Help?</p>
        </div>
      </section>
      <section className="hero__cards">
        <Link className="link" to={"/Lessons"}>
          <div className="hero__card">
            <div className="hero__card-top">
              <div className="hero__language-yellow">
                <p className="hero__language-text">HTML</p>
              </div>
            </div>
            <div className="hero__card-middle">
              <h3 className="hero__card-text">Basics</h3>
            </div>
            <div className="hero__card-bottom"></div>
          </div>
        </Link>
        <div className="hero__card">
          <div className="hero__card-top">
            <div className="hero__language-blue">
              <p className="hero__language-text">JavaScript</p>
            </div>
          </div>
          <div className="hero__card-middle">
            <h3 className="hero__card-text">Intermediate</h3>
          </div>
          <div className="hero__card-bottom"></div>
        </div>
        <div className="hero__card">
          <div className="lock">
            <img className="lock-img" src={lock} alt="Lock" />
          </div>
          <div className="hero__card-top">
            <div className="hero__language-pink">
              <p className="hero__language-text">JavaScript</p>
            </div>
          </div>
          <div className="hero__card-middle">
            <h3 className="hero__card-text">Advanced</h3>
          </div>
          <div className="hero__card-bottom"></div>
        </div>
      </section>
      <section className="hero__social">
        <div className="hero__feed">
          <div className="hero__feed-container">
            <div className="hero__feed-top">
              <h3 className="hero__feed-name">{currentComment?.username}</h3>
              <h3 className="hero__feed-time">{currentComment?.time}</h3>
            </div>
            <div>
              <p className="hero__feed-p">{currentComment?.comment}</p>
            </div>
          </div>
          <div className="hero__feed-bottom">
            <h2>My Feed</h2>
          </div>
        </div>
        <div className="hero__friends">
          <div className="hero__friends-name">
            <p className="hero__friend">BreadWWater</p>
            <p className="hero__friend">xiAnthony</p>
            <p className="hero__friend">OogaBooga</p>
            <p className="hero__friend">BestGamer</p>
          </div>
          <div className="hero__friends-bottom">
            <h2>My Friends</h2>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
