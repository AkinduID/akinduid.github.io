import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, date, type, description, tags, link, category }) => {
  return (
    <div className="project-card modern-card" data-category={category}>
      <div className="project-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-meta">{date} | {type}</p>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
