import React from 'react';
import './ConnectCard.css';
import CommonCard from '../layout/CommonCard';

const ConnectCard = ({ icon, title, handle, link }) => {
  return (
    <CommonCard as="a" href={link} className="connect-card modern-card" target="_blank" rel="noopener noreferrer">
      <div className="connect-icon">
        <img src={icon} alt={title} loading="lazy" />
      </div>
      <div className="connect-info">
        <h4>{title}</h4>
        <p>{handle}</p>
      </div>
    </CommonCard>
  );
};

export default ConnectCard;
