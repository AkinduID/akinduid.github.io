import React from 'react';
import './AchievementCard.css';

const AchievementCard = ({ title, subtitle, detail }) => {
  return (
    <div className="achievement-card modern-card glassmorphism">
      <h4>{title}</h4>
      <p className="ach-subtitle">{subtitle}</p>
      {detail && <p className="ach-detail">{detail}</p>}
    </div>
  );
};

export default AchievementCard;
