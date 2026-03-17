import React from 'react';
import './ProjectCard.css';
import github from '../../assets/images/devops/github.svg';

const ProjectCard = ({ image, title, date, projectType, teamType, description, tags, link, category }) => {
  return (
    <div className="project-card modern-card" data-category={category}>
      <div className="project-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-content">
        <div className="project-header">
            <h3>{title}</h3>
        </div>
        
        <div className="project-meta-container">
          <div className="project-meta-info">
            <p className="project-meta">{date} | {teamType}</p>
            <p className="project-meta">{projectType}</p>
          </div>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="github-link">
                <img src={github} alt="GitHub" />
            </a>
          )}
        </div>

        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
