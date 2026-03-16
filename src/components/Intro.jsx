import React from 'react';
import pic01 from '../assets/pic01.jpg';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-grid">
          <div className="intro-left">
             <div className="profile-image modern-card">
                <img src={pic01} alt="Akindu Delgahagoda" loading="lazy" />
             </div>
          </div>
          <div className="intro-right">
            <h1 className="intro-title gradient-text">Akindu Delgahagoda</h1>
            <div className="intro-description">
              <p>
                Engineering undergraduate specialized in <strong className="highlight-white">robotics and distributed systems</strong>. 
                Proficient in bridging embedded hardware and cloud services to create cohesive intelligent solutions.
                Passionate about <strong className="highlight-white">Photo Editing, Photography, and Graphic Design</strong>. 
                Served in leadership roles at IEEE RAS and actively contribute to university events.
              </p>
            </div>
            <a href="https://akinduid.github.io/my-cv/" className="intro-cv-button icon solid fa-download">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
