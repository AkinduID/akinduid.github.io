import React from 'react';
import SectionHeader from './SectionHeader';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <SectionHeader title="Professional Experience" />
      
      <p className="section-subtitle">
        Building real-world solutions through internships and professional work
      </p>
      
      <ExperienceCard 
        role="Intern Software Engineer"
        company="WSO2"
        team="Digital Transformation Team"
        date="Jan 2025 - Jun 2025"
        tasks={[
          'Developed <strong style="color: #ffffff;">"Infra Portal"</strong>, a full-stack infrastructure automation platform using <strong>Ballerina, React and MySQL</strong> to replace legacy manual workflows, streamlining GitHub repository provisioning across the company.',
          'Upgraded and optimized existing internal middleware services to facilitate seamless integration with the <strong>GitHub API using GraphQL</strong>, ensuring robust communication between the new portal and external providers.',
          'Architected the solution to be <strong>extensible beyond GitHub</strong>, designing a scalable foundation to support future infrastructure automation requirements.',
          'Implemented secure authentication using <strong>Asgardeo</strong> and deployed the production-ready containerized application on <strong>Choreo</strong> for internal organizational use.'
        ]}
        tags={['Ballerina', 'React', 'MySQL', 'GraphQL', 'Docker', 'Asgardeo', 'Choreo']}
      />
    </div>
  );
};

export default Experience;
