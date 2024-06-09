import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>

      <div className="about-right">
      <h3>About University</h3>
      <h2>Tommorow Leader Today</h2>
      <p>
      We provide students with much more than just a single letter grade.
       Our feedback identifies strengths and targets areas for growth.
        Our learning approach is centered around the 8 Abilities –
         what set our students and alums apart.
       These are the skills that will help you thrive both personally and professionally.
      </p>
      <p>
      We believe education is enriched by the unique perspectives and experiences each student brings, and 
      we are committed to fostering an environment.
      </p>
      <p>
      It is central to our mission to embrace and encourage diversity, equity and inclusion.     </p>
      </div>
    </div>
  );
};

export default About;
