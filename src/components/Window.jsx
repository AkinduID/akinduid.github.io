import React from 'react';
import './Window.css';

const Window = ({ children, onClose, direction = 'fade' }) => {
  return (
    <div className="window-container">
        <div className={`window window-${direction}`}>
            <button className="window-close-btn" onClick={onClose} aria-label="Close"></button>
            {children}
        </div>
    </div>
  );
};

export default Window;
