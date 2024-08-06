import React from 'react';
import "./themeToggle.css";
import moon from "../../assets/images/moon.png";
import sun from "../../assets/images/sun.png";

function TheameToggle() {
  return (
    <div>
         <div className="theme_toggle">
              <img src={moon} alt="" width={14} height={14} />
              <div className="ball"></div>
              <img src={sun} alt="" width={14} height={14} />
              </div>
    </div>
  )
}

export default TheameToggle