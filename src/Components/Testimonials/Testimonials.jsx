import React, { useRef } from "react";

import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -1000) {
      tx -= 1000;
    }
    slider.current.style.transform = `translateX(${tx}px)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 1000;
    }
    slider.current.style.transform = `translateX(${tx}px)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>william jackson 1</h3>
                  <span>edu-versity</span>
                </div>
              </div>
              <p>
              I’ve been able to develop my communication skills and learned how to 
              work well independently and on a team.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>william jackson 2</h3>
                  <span>edu-versity</span>
                </div>
              </div>
              <p>
              I’ve been able to develop my communication skills and learned how to work well independently and on a team.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>william jackson 3</h3>
                  <span>edu-versity</span>
                </div>
              </div>
              <p>
              I’ve been able to develop my communication skills and learned how to work well independently and on a team.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>william jackson 4</h3>
                  <span>edu-versity</span>
                </div>
              </div>
              <p>
              I’ve been able to develop my communication skills and learned how to work well independently and on a team.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
