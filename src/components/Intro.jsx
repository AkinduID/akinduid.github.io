import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-inner">
          <h1 className="intro-title gradient-text">Akindu Delgahagoda</h1>
          <p className="intro-subtitle">Embedded Systems | IoT & Robotics | ML/AI</p>
          <p className="intro-details">
            CS & Engineering | University of Moratuwa<br />
            <span className="intro-grad">Expected Grad: 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
