import React from 'react';
import SectionHeader from './SectionHeader';
import './Volunteering.css';

const Volunteering = () => {
  return (
    <div className="volunteering-container">
      <SectionHeader title="Volunteering" />
      
      <p className="section-subtitle">
        Leadership roles and community engagement
      </p>

      <div className="volunteering-section">
        <h3 className="vol-section-title">Leadership & Extracurricular</h3>
        
        <div className="leadership-group">
          <h4 className="leadership-title">IEEE Robotics and Automation Society, UoM</h4>
          <ul className="leadership-list">
            <li><span className="bullet">▹</span><strong>Secretary</strong> | Oct 2024 – Oct 2025</li>
            <li><span className="bullet">▹</span><strong>Vice Chairman</strong> | Oct 2023 – Oct 2024</li>
            <li><span className="bullet">▹</span><strong>Design Committee Member</strong> | Oct 2022 – Oct 2023</li>
            <li><span className="bullet">▹</span><strong>BotTalks 1.0 Co-Chair</strong> | Mar – Apr 2023</li>
          </ul>
        </div>

        <div className="leadership-group">
          <h4 className="leadership-title">IEEE Student Branch, UoM</h4>
          <ul className="leadership-list">
            <li><span className="bullet">▹</span>Membership Development Committee | Nov 2023 – Nov 2024</li>
            <li><span className="bullet">▹</span>IEEE Open Week Volunteer | Feb – Mar 2024</li>
          </ul>
        </div>

        <div className="leadership-group">
          <h4 className="leadership-title">Department of CSE, UoM</h4>
          <ul className="leadership-list">
            <li><span className="bullet">▹</span>CSE40 Marketing Committee | Jan – May 2025</li>
            <li><span className="bullet">▹</span>Hit The Grounds Marketing Committee | Dec 2024 – Jan 2025</li>
            <li><span className="bullet">▹</span>CSE Career Fair 2024 Company Coordination | Dec 2023 – Jan 2024</li>
          </ul>
        </div>

        <div className="leadership-group">
          <h4 className="leadership-title">Mora Hiking Club, UoM</h4>
          <ul className="leadership-list">
            <li><span className="bullet">▹</span>Stridian 2025 Media Team | Jul – Sep 2025</li>
            <li><span className="bullet">▹</span>Stridian 2024 Health Team | Jul – Sep 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
