import React from 'react';
import SectionHeader from './SectionHeader';
import ProfileHeader from './ProfileHeader';
import EducationCard from './EducationCard';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <SectionHeader title="About Me" />
      <ProfileHeader />
      
      <div className="personal-statement">
        <h3>Personal Statement</h3>
        <p>
          Engineering undergraduate specialized in <strong className="highlight-white">robotics and distributed systems</strong>. 
          Proficient in bridging embedded hardware and cloud services to create cohesive intelligent solutions.
        </p>
        
        <div className="about-grid">
          <div className="education-column">
            <h3>Education</h3>
            <EducationCard 
              title="BSc Eng (Hons), CSE"
              institution="University of Moratuwa"
              year="2022-2026"
              details="Integrated Computer Engineering"
              subDetails="Dean's List: Semester 6"
            />
            <EducationCard 
              title="Diploma in English"
              institution="SUSL"
              year="2021-2022"
              subDetails="Credit Pass"
            />
            <EducationCard 
              title="GCE Advanced Level"
              institution="Sivali Central College"
              year="2020"
              subDetails="Physical Science | 3A Passes"
            />
          </div>
          
          <div className="beyond-column">
            <h3>Beyond Engineering</h3>
            <p>
              Passionate about <strong className="highlight-white">Photo Editing, Photography, and Graphic Design</strong>. 
              Served in leadership roles at IEEE RAS and actively contribute to university events.
            </p>
            
            <div className="contact-card modern-card">
              <h4>Contact Information</h4>
              <p>📧 akindu.21@cse.mrt.ac.lk</p>
              <p>📱 +94 71 631 2630</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
