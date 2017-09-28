import React from 'react';
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  return (
    <div id="Projects" className="mw8 ph4 ph0-l center cb pt6 br-pill">
      <h2 className="f1 tr secondary tc">Coding for fun</h2>
      <div className="flex flex-wrap">
        {projects.map(({ id, name, description, tags, url, label }) => (
          <article key={id} className="Project pv4 tc">
            <h3 className="f2 fw1 secondary color3">{name}</h3>
            <p>{description}</p>
            <p className="color2">{tags}</p>
            <a className="f6 link dim ba ph3 pv2 mb2 dib color1" href={url}>{label}</a>
          </article>
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array
};

export default Projects;
