import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ role, company, team, date, tasks, tags }) => {
  return (
    <div className="experience-card modern-card glassmorphism">
      <div className="exp-header">
        <div>
          <h3 className="gradient-text">{role}</h3>
          <p className="exp-company">{company}</p>
          <p className="exp-team">{team}</p>
        </div>
        <span className="exp-date">{date}</span>
      </div>
      
      <ul className="exp-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="exp-bullet">▹</span>
            <span dangerouslySetInnerHTML={{ __html: task }}></span>
          </li>
        ))}
      </ul>
      
      <div className="exp-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
