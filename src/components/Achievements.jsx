import React from 'react';
import SectionHeader from './SectionHeader';
import AchievementCard from './AchievementCard';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="achievements-container">
      <SectionHeader title="Achievements" />
      
      <p className="section-subtitle">
        Recognition, certifications, and leadership roles that shape my journey
      </p>
      
      <div className="achievements-section">
        <h3 className="ach-section-title">Awards & Honors</h3>
        <div className="achievements-grid">
          <AchievementCard 
            title="Dean's List" 
            subtitle="University of Moratuwa | Semester 6" 
          />
          <AchievementCard 
            title="Evolve IoT Mini Research Competition" 
            detail="1st Place" 
          />
          <AchievementCard 
            title="SLIoT Challenge 2023" 
            subtitle="Semifinalists" 
          />
          <AchievementCard 
            title="President's Scout Award" 
            subtitle="Issued in 2019" 
          />
          <AchievementCard 
            title="National Junior Science Olympiad 2016" 
            detail="Gold Medal" 
          />
          <AchievementCard 
            title="International Mathematics and Science Olympiad 2013" 
            subtitle="Silver Medal" 
          />
        </div>
      </div>

      <div className="achievements-section">
        <h3 className="ach-section-title">Certifications</h3>
        
        <h4 className="ach-subsection-title">Embedded AI & Machine Learning</h4>
        <div className="achievements-grid">
          <AchievementCard title="Embedded AI: ML at the Edge" subtitle="Arm | Apr 2025" />
          <AchievementCard title="Computer Vision with Embedded ML" subtitle="Edge Impulse | Mar 2025" />
          <AchievementCard title="Intro to Embedded ML" subtitle="Edge Impulse | Mar 2025" />
          <AchievementCard title="CV & AI Vision Language Models" subtitle="OpenCV University | Dec 2024" />
          <AchievementCard title="Fundamentals of Deep Learning" subtitle="NVIDIA DLI | Dec 2024" />
          <AchievementCard title="Computer Vision" subtitle="Kaggle | Dec 2024" />
          <AchievementCard title="Intro to Machine Learning" subtitle="Kaggle | Jan 2024" />
        </div>

        <h4 className="ach-subsection-title">Embedded Systems</h4>
        <div className="achievements-grid">
          <AchievementCard title="Arm Cortex-M Architecture & Software Dev" subtitle="Arm | Apr 2025" />
          <AchievementCard title="Embedded Software & Hardware Architecture" subtitle="CU Boulder | Mar 2025" />
        </div>

        <h4 className="ach-subsection-title">DevOps & Engineering</h4>
        <div className="achievements-grid">
          <AchievementCard title="GitHub Foundations" subtitle="GitHub | Mar 2025" />
          <AchievementCard title="Docker Training for Absolute Beginners" subtitle="KodeKloud | Feb 2025" />
        </div>
      </div>

      <div className="achievements-section">
        <h3 className="ach-section-title">Leadership & Extracurricular</h3>
        
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

export default Achievements;
