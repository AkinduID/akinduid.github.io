import React from 'react';
import pic01 from '../assets/pic01.jpg';
import './ProfileHeader.css';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="profile-image modern-card">
        <img src={pic01} alt="Akindu Delgahagoda" loading="lazy" />
      </div>
      
      <div className="profile-content">
        <h3 className="gradient-text">Akindu Delgahagoda</h3>
        <p className="profile-subtitle">
          <strong className="highlight-blue">Computer Science & Engineering Student</strong><br />
          <span className="text-dim">University of Moratuwa</span><br />
          <span className="text-italic">Expected Graduation: 2026 June</span>
        </p>
        <a href="https://akinduid.github.io/my-cv/" className="button primary icon solid fa-download modern-card download-btn">Download Full CV</a>
      </div>
    </div>
  );
};

export default ProfileHeader;
