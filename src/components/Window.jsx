import React from 'react';
import SectionHeader from './SectionHeader';
import './Window.css';

const Window = ({ children, title, onClose, direction = 'fade' }) => {
  return (
    <div className="window-container">
        <div className={`window window-${direction}`}>
            <div className="window-header">
                {title && <SectionHeader title={title} />}
                <button className="window-close-btn" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="window-content">
                {children}
            </div>
        </div>
    </div>
  );
};

export default Window;
