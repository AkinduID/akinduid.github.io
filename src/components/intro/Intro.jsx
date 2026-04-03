import React from 'react';
import pic01 from '../../assets/images/favicon.png';
import './Intro.css';

const Intro = ({ onArrowClick }) => {
  return (
    <div className="intro-container">
      <div className="intro-content">
          <div className="profile-orbit">
            <svg
              className="profile-circle-text"
              viewBox="0 0 320 320"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <path id="profile-name-circle" d="M 160,160 m -144,0 a 144,144 0 1,1 288,0 a 144,144 0 1,1 -288,0" />
              </defs>
              <text>
                <textPath href="#profile-name-circle" startOffset="0%">
                  AKINDU DELGAHAGODA • PERSONEL PORTFOLIO •
                </textPath>
              </text>
            </svg>
            <div className="profile-image modern-card">
              <img src={pic01} alt="Akindu Delgahagoda" loading="lazy" />
            </div>
          </div>
          <button
            type="button"
            className="intro-down-arrow"
            onClick={onArrowClick}
            aria-label="Open sections"
          >
            <span className="fa-solid fa-arrow-down" aria-hidden="true"></span>
          </button>
      </div>
    </div>
  );
};

export default Intro;
