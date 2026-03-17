import React from 'react';
import EducationCard from './EducationCard';
import './Education.css';
import uomLogo from '../assets/images/University_of_Moratuwa_logo.png';
import suslLogo from '../assets/images/Logo-SUSL.png';
import sccLogo from '../assets/images/SCC Logo.png';

const Education = () => {
  return (
    <div className="education-container">
      <EducationCard 
        logo={uomLogo}
        institution="University of Moratuwa"
        degree="BSc Hons in Engineering"
        year="2022-2026"
        details={[
          'Specialization - Computer Science and Engineering',
          'Stream - Integrated Computer Engineering',
          'CGPA - 3.5'
        ]}
      />
      <EducationCard 
        logo={suslLogo}
        institution="Sabaragamuwa University of Sri Lanka"
        degree="Diploma in English"
        year="2021-2022"
        details={[
          'Credit Pass'
        ]}
      />
      <EducationCard 
        logo={sccLogo}
        institution="Sivali Central College"
        degree="GCE Advanced Level & Ordinary Level"
        year="2007-2020"
        details={[
          '<strong style="color: #4fc3f7;">GCE Advanced Level (2020)</strong> - Physical Science Stream | 3A Passes | Island Rank - 423 | District Rank - 13',
          '<strong style="color: #4fc3f7;">GCE Ordinary Level (2017)</strong> - 9A Passes'
        ]}
      />
    </div>
  );
};

export default Education;