import React from 'react';
import './ExperienceCard.css';
import CommonCard from '../layout/CommonCard';

const ExperienceCard = ({ role, company, team, date, tasks, tags, logo }) => {
  return (
    <CommonCard className="experience-card modern-card glassmorphism">
      <div className="exp-grid">
        <div className="exp-logo-section">
          <img src={logo} alt={`${company} logo`} className="exp-logo" />
        </div>
        
        <div className="exp-title-group">
          <h3 className="gradient-text-card">{role}</h3>
          <p className="exp-company">{company}</p>
          <p className="exp-team">{team}</p>
        </div>
        
        <div className="exp-date-container">
            <span className="exp-date">{date}</span>
        </div>
        
        <div className="exp-details">
          <ul className="exp-list">
            {tasks.map((task, index) => (
              <li key={index}>
                <span className="exp-bullet">▹</span>
                <span dangerouslySetInnerHTML={{ __html: task }}></span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="exp-tags-container">
            <div className="exp-tags">
                {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </div>
      </div>
    </CommonCard>
  );
};

export default ExperienceCard;
