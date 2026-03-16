import React from 'react';
import './EducationCard.css';

const EducationCard = ({ title, institution, year, details, subDetails }) => {
  return (
    <div className="education-card modern-card glassmorphism">
      <div className="edu-header">
        <div className="edu-title-group">
          <h3 className="gradient-text">{title}</h3>
          <p className="edu-institution">{institution}</p>
        </div>
        <span className="edu-year">{year}</span>
      </div>
      
      <div className="edu-content">
        {details && <p className="edu-details">{details}</p>}
        {subDetails && <p className="edu-sub-details">{subDetails}</p>}
      </div>
    </div>
  );
};

export default EducationCard;
