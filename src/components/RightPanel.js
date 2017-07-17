import React from 'react';
import PropTypes from 'prop-types';
import CategorySection from './CategorySection';

const RightPanel = ({ categories }) => {
  return (
    <section className="pa3 flex-auto">
      {Object.keys(categories).map(item =>
        <CategorySection key={item} projects={categories[item]} />
      )}
    </section>
  );
};

RightPanel.propTypes = {};

export default RightPanel;
