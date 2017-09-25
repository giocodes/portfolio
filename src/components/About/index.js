import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
  return (
    <div>
      <h2>About</h2>
      <p>
        I'm a Software Developer specialized in Full Stack Javascript; from Node
        to Angular/React with a project management background and passion for
        great UX design, leading teams from design to deployment through agile
        methodologies. I also love traveling, photography and running.
      </p>
      <div>
        <ul>
          <li>GitHub</li>
          <li>Linkedin</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
