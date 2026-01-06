import React from 'react';
import './Navbar.css';
import favicon from '../assets/favicon.png';

const Navbar = ({ onNavClick, activeTab, items, onLogoClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <button className="navbar-logo-btn" onClick={onLogoClick} aria-label="Home">
            <img src={favicon} alt="Logo" />
          </button>
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button 
                className={activeTab === item.id ? 'active' : ''}
                onClick={() => onNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
