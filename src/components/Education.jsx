import React from 'react';
import EducationCard from './EducationCard';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      
      <div className="education-content">
        
        <div className="education-grid">
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
        </div>
      </div>
    </div>
  );
};

export default Education;