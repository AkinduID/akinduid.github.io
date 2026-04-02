import React from 'react';
import './EducationCard.css';
import CommonCard from '../layout/CommonCard';

const EducationCard = ({ institution, degree, year, details, logo }) => {
  return (
    <CommonCard className="education-card modern-card glassmorphism">
      <div className="edu-grid">
        <div className="edu-row-top">
          <div className="edu-logo-section">
            <img src={logo} alt={`${institution} logo`} className="edu-logo" />
          </div>

          <div className="edu-institution-row">
            <h3 className="gradient-text-card">{institution}</h3>
          </div>
        </div>

        <div className="edu-meta-row">
          <p className="edu-degree">{degree}</p>
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
