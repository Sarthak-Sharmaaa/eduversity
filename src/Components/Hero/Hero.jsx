import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Welcome to Edu-versity</h1>
        <p>
        At Edu-versity, you’ll get personalized support from start to finish. You’ll cultivate the skills you need for success. And you’ll develop the confidence 
        that will get you ready to thrive as a person and a professional.
        </p>
        <button className="btn">
          explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
