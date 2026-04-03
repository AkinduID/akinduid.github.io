import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onNavClick, activeTab, items, onLogoClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar-container">
        <ul>
          <li
            className={[
              hoveredIndex === 0 ? 'is-hovered' : '',
              hoveredIndex !== null && 0 < hoveredIndex ? 'is-above-hovered' : '',
              hoveredIndex !== null && 0 > hoveredIndex ? 'is-below-hovered' : ''
            ].filter(Boolean).join(' ')}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button
              className={activeTab === null ? 'active' : ''}
              onClick={onLogoClick}
              aria-label="Home"
              aria-current={activeTab === null ? 'page' : undefined}
              title="Home"
            >
              <span className="nav-icon fa-solid fa-house" aria-hidden="true"></span>
            </button>
          </li>
          {items.map((item, index) => (
            <li
              key={item.id}
              className={[
                hoveredIndex === index + 1 ? 'is-hovered' : '',
                hoveredIndex !== null && index + 1 < hoveredIndex ? 'is-above-hovered' : '',
                hoveredIndex !== null && index + 1 > hoveredIndex ? 'is-below-hovered' : ''
              ].filter(Boolean).join(' ')}
              onMouseEnter={() => setHoveredIndex(index + 1)}
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
