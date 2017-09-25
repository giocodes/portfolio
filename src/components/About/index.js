import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
  return (
    <div id="About" className="About">
      <div className="mw8 ph4 ph0-l center cb mt2 pt2">
        <h2 className="f1 secondary">About</h2>
        <p className="f3 center mw7 lh-copy tc color1">
          I'm a Software Developer specialized in Full Stack Javascript; from
          Node to Angular/React with a project management background and passion
          for great UX design, leading teams from design to deployment through
          agile methodologies.
        </p>
        <p className="f3 center mw7 lh-copy tc color1">
          I also love traveling,{' '}
          <span>
            <a className="color5" href="https://www.instagram.com/sigrone/">
              photography
            </a>
          </span> {' '}
          and running.
        </p>
        <div className="mw6 center cb pv4 color1">
          <ul className="flex list justify-between">
            <li>GitHub</li>
            <li>Linkedin</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
