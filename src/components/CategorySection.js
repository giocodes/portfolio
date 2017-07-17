import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const CategorySection = ({ projects }) => {
  console.log(projects)
  return (
    <div>
      <h2>Projects</h2>
      <div className="flex flex-wrap justify-between">
        {projects.map((item, idx) => <ProjectCard key={idx} details={item} />)}
      </div>
    </div>
  );
};

CategorySection.propTypes = {};

export default CategorySection;
