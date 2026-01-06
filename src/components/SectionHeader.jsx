import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header">
      <h2 className="major gradient-text">{title}</h2>
    </div>
  );
};

export default SectionHeader;
