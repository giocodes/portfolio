import React from 'react';
import Welcome from './Welcome/';
import Projects from './Projects/';
import Experience from './Experience/';
import Skills from './Skills/';
import Hobbies from './Hobbies/';

const S = {
  section: 'pa4-l pa3-m pa2'
};
const RightPanel = ({ categories, skills, newColors, phrase, pristine }) => {
  return (
    <div className="pa4">
      <Welcome
        className={
          'pa3 flex tc items-center justify-around bg-animate bg-color4 color1'
        }
        newColors={newColors}
        phrase={phrase}
        pristine={pristine}
      />
      <div
        style={{
          height: '25rem',
          backgroundImage: 'url(\'./chicago.jpg\')',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '2rem'
        }}
      >
        <h1 className="fw2 color1">Chicago</h1>
      </div>
      <Skills
        className={`${S.section} bg-animate bg-color1 color2`}
        name={'Skills and Interests'}
        skills={skills}
      />
      <Experience
        className={`${S.section} bg-animate bg-color3 color2`}
        name={'Experience'}
        projects={categories.experience}
      />
      <div
        style={{
          height: '20rem',
          backgroundImage: 'url(\'./world-traveler.jpg\')',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '2rem'
        }}
      >
        <h1 className="fw2 color1"><span role="img" aria-label="Home">🎶</span></h1>
      </div>
      <Projects
        className={`${S.section} bg-animate bg-color1 color2`}
        name={'Coding for fun'}
        projects={categories.projects}
      />
      <Hobbies className={'pa3 tc mt5 bg-animate bg-color2 color5'} />
    </div>
  );
};

export default RightPanel;
