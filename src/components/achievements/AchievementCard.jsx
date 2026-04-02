import React from 'react';
import './AchievementCard.css';
import CommonCard from '../layout/CommonCard';

const AchievementCard = ({ title, subtitle, detail }) => {
  return (
    <CommonCard className="achievement-card modern-card glassmorphism">
      <h4>{title}</h4>
      <p className="ach-subtitle">{subtitle}</p>
      {detail && <p className="ach-detail">{detail}</p>}
    </CommonCard>
  );
};

export default AchievementCard;
