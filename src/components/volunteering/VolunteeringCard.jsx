import React from 'react';
import './VolunteeringCard.css';
import CommonCard from '../layout/CommonCard';

const VolunteeringCard = ({ organization, details, logo }) => {
  return (
    <CommonCard className="volunteering-card modern-card glassmorphism">
      <div className="vol-grid">
        <div className="vol-logo-section">
          <img src={logo} alt={`${organization} logo`} className="vol-logo" />
        </div>
        
        <div className="vol-title-group">
          <h3 className="section-header-gradient-text">{organization}</h3>
        </div>
        
        <div className="vol-details">
          <ul className="vol-list">
            {details.map((detail, index) => (
              <li key={index}>
                <span className="vol-bullet">▹</span>
                <span dangerouslySetInnerHTML={{ __html: detail }}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CommonCard>
  );
};

export default VolunteeringCard;