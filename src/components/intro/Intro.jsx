import React from 'react';
import pic01 from '../../assets/images/pic01.jpg';
import './Intro.css';

const Intro = ({ onArrowClick }) => {
  return (
    <div className="intro-container">
      <div className="intro-content">
          <div className="profile-image modern-card">
              <img src={pic01} alt="Akindu Delgahagoda" loading="lazy" />
          </div>
          <h1 className="intro-title gradient-text">Akindu Delgahagoda</h1>
            <p className="intro-tagline">Undergraduate Student</p>
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
