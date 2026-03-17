import React from 'react';
import './EducationCard.css';

const EducationCard = ({ institution, degree, year, details, logo }) => {
  return (
    <div className="education-card modern-card glassmorphism">
      <div className="edu-grid">
        <div className="edu-logo-section">
          <img src={logo} alt={`${institution} logo`} className="edu-logo" />
        </div>
        
        <div className="edu-title-group">
          <h3 className="gradient-text">{institution}</h3>
          <p className="edu-degree">{degree}</p>
        </div>
        
        <div className="edu-year-container">
            <span className="edu-year">{year}</span>
        </div>
        
        <div className="edu-details">
          <ul className="edu-list">
            {details.map((detail, index) => (
              <li key={index}>
                <span className="edu-bullet">▹</span>
                <span dangerouslySetInnerHTML={{ __html: detail }}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
