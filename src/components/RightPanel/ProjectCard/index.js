import React from 'react';

const ProjectCard = ({ details }) => {
  const { name, description, tags, url, label } = details;
  return (
    <div className="pa1 flex-50">
      <a rel="noopener noreferrer" target="_blank" href={url}>
        <div className="ba b--black-10 pa3 word-wrap bg-color1">
          <h1 className="color4">
            {name}
          </h1>
          <p className="color5">
            {description}
          </p>
          <h3>
            {tags.map(skill =>
              <span key={skill} className="mr2 fw2 color2">
                {skill}
              </span>
            )}
          </h3>
          <p>
            {label}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
