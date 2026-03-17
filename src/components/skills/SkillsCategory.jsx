import React from 'react';
import './SkillsCategory.css';

const SkillsCategory = ({ title, children }) => {
  return (
    <div className="skills-category">
      <h3 className="animated-underline">{title}</h3>
      <div className="skills-icons">
        {children}
      </div>
    </div>
  );
};

export default SkillsCategory;
