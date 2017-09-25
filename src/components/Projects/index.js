import React from 'react';
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  return (
    <div>
      <h2>Coding for fun</h2>
      {projects.map(({ id, name, description, tags, url, label }) => (
        <article key={id}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{tags}</p>
          <a href={url}>{label}</a>
        </article>
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array
};

export default Projects;
