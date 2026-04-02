import React from 'react';
import CommonCard from '../layout/CommonCard';
import './SkillsCategory.css';

const SkillsCategory = ({ title, children }) => {
  return (
    <CommonCard className="skills-category">
      <h3 className="animated-underline">{title}</h3>
      <div className="skills-icons">
        {children}
      </div>
    </CommonCard>
  );
};

export default SkillsCategory;
