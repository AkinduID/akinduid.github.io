import React from 'react';
import './VolunteeringCard.css';

const VolunteeringCard = ({ organization, details, logo }) => {
  return (
    <div className="volunteering-card modern-card glassmorphism">
      <div className="vol-grid">
        <div className="vol-logo-section">
          <img src={logo} alt={`${organization} logo`} className="vol-logo" />
        </div>
        
        <div className="vol-title-group">
          <h3 className="gradient-text">{organization}</h3>
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
    </div>
  );
};

export default VolunteeringCard;