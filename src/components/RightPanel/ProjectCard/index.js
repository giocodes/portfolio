import React from 'react';

const ProjectCard = ({ details }) => {
  const { name, description, tags, url, label } = details;
  return (
    <div className="pa1 flex-45">
      <a rel="noopener noreferrer" target="_blank" href={url}>
        <div className="ba b--black-10 pa3">
          <h1 className="color4">
            {name}
          </h1>
          <p className="color5">
            {description}
          </p>
          <h2>
            {tags.map(skill =>
              <span key={skill} className="mr2 fw2 color2">
                {skill}
              </span>
            )}
          </h2>
          <p>
            {label}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
