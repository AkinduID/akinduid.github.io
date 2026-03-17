import React from 'react';
import './SkillItem.css';

const SkillItem = ({ icon, label, link }) => {
  return (
    <div className="skill-item">
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <img src={icon} alt={label} loading="lazy" />
      </a>
      <span className="skill-label">{label}</span>
    </div>
  );
};

export default SkillItem;
