import React from 'react';
import './EducationCard.css';
import CommonCard from '../layout/CommonCard';

const EducationCard = ({ institution, degree, year, details, logo }) => {
  return (
    <CommonCard className="education-card modern-card glassmorphism">
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
    </CommonCard>
  );
};

export default EducationCard;
