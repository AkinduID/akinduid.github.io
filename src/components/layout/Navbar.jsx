import React, { useState } from 'react';
import './Navbar.css';
import favicon from '../../assets/images/favicon.png';

const Navbar = ({ onNavClick, activeTab, items, onLogoClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar-container">
        <div
          className={[
            'navbar-logo-container',
            hoveredIndex === -1 ? 'is-hovered' : '',
            hoveredIndex !== null && hoveredIndex > -1 ? 'is-above-hovered' : ''
          ].filter(Boolean).join(' ')}
          onMouseEnter={() => setHoveredIndex(-1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <button
            className={`navbar-logo-btn ${activeTab === null ? 'active' : ''}`}
            onClick={onLogoClick}
            aria-label="Home"
            aria-current={activeTab === null ? 'page' : undefined}
          >
            <img src={favicon} alt="Logo" />
          </button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li
              key={item.id}
              className={[
                hoveredIndex === index ? 'is-hovered' : '',
                hoveredIndex !== null && index < hoveredIndex ? 'is-above-hovered' : '',
                hoveredIndex !== null && index > hoveredIndex ? 'is-below-hovered' : ''
              ].filter(Boolean).join(' ')}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button 
                className={activeTab === item.id ? 'active' : ''}
                onClick={() => onNavClick(item.id)}
                aria-label={item.title || item.label}
                aria-current={activeTab === item.id ? 'page' : undefined}
                title={item.title || item.label}
              >
                {item.icon && <span className={`nav-icon ${item.icon}`} aria-hidden="true"></span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
