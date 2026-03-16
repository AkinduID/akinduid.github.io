import React from 'react';
import './EducationCard.css';

const EducationCard = ({ institution, degree, year, details }) => {
  return (
    <div className="education-card modern-card glassmorphism">
      <div className="edu-header">
        <div className="edu-title-group">
          <h3 className="gradient-text">{institution}</h3>
          <p className="edu-degree">{degree}</p>
        </div>
        <span className="edu-year">{year}</span>
      </div>
      
      <ul className="edu-list">
        {details.map((detail, index) => (
          <li key={index}>
            <span className="edu-bullet">▹</span>
            <span dangerouslySetInnerHTML={{ __html: detail }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
