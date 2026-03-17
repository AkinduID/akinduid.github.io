import React from 'react';
import './ConnectCard.css';

const ConnectCard = ({ icon, title, handle, link }) => {
  return (
    <a href={link} className="connect-card modern-card" target="_blank" rel="noopener noreferrer">
      <div className="connect-icon">
        <img src={icon} alt={title} loading="lazy" />
      </div>
      <div className="connect-info">
        <h4>{title}</h4>
        <p>{handle}</p>
      </div>
    </a>
  );
};

export default ConnectCard;
