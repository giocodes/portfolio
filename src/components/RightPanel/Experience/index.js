import React from 'react';
import ProjectCard from '../ProjectCard/';

const Experience = ({ projects, name, className }) => {
  return (
    <section className={className}>
      <h2>
        {name}
      </h2>
      <div className="flex-m flex-l flex-wrap justify-between">
        {projects.map((item, idx) => <ProjectCard key={idx} details={item} />)}
      </div>
    </section>
  );
};

export default Experience;
