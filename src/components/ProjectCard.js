import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({details}) => {
  const {name, description, tags, url, label} = details;
  return (
    <div className="pa1 flex-45">
      <div className="ba b--black-10 ma1 pa2">
        <div
          className="item-image image-color-1"
        >
          {/* style="background-image: url('./img/nodes.svg')" */}
           <div className="item-title">{name}</div> 
        </div>
        <div className="item-text">
          <p>{description}</p>
          <p>{tags.toString()}</p>
          <p>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              {label}
            </a>
            
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  
};

export default ProjectCard;