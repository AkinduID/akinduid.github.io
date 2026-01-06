import React from 'react';
import './EducationCard.css';

const EducationCard = ({ title, institution, year, details, subDetails }) => {
  return (
    <div className="education-card modern-card glassmorphism">
      <h4>{title}</h4>
      <p className="edu-institution">{institution} | {year}</p>
      {details && <p className="edu-details">{details}</p>}
      {subDetails && <p className="edu-sub-details">{subDetails}</p>}
    </div>
  );
};

export default EducationCard;
