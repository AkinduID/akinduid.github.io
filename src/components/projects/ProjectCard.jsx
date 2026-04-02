import React from 'react';
import './ProjectCard.css';
import github from '../../assets/images/skills/devops/github.svg';
import CommonCard from '../layout/CommonCard';

const ProjectCard = ({ image, title, date, projectType, teamType, description, tags, link, category }) => {
  const maxVisibleTags = 4;
  const visibleTags = tags.slice(0, maxVisibleTags);
  const hiddenTagCount = Math.max(tags.length - maxVisibleTags, 0);

  return (
    <CommonCard as="article" className="project-card modern-card" data-category={category}>
      <div className="project-image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3>{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              aria-label={`Open ${title} repository on GitHub`}
            >
              <img src={github} alt="" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="project-meta-container">
          <p className="project-meta"><span className="project-meta-label">Date</span>{date}</p>
          <p className="project-meta"><span className="project-meta-label">Team</span>{teamType}</p>
          <p className="project-meta"><span className="project-meta-label">Context</span>{projectType}</p>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-tags">
          {visibleTags.map((tag, index) => (
            <span key={`${title}-${tag}-${index}`} className="project-tag">{tag}</span>
          ))}
          {hiddenTagCount > 0 && <span className="project-tag project-tag-more">+{hiddenTagCount}</span>}
        </div>
      </div>
    </CommonCard>
  );
};

export default ProjectCard;
