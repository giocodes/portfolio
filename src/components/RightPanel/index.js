import React from 'react';
import Welcome from './Welcome/';
import Projects from './Projects/';
import Experience from './Experience/';
import Skills from './Skills/';
import Hobbies from './Hobbies/';

const S = {
  section: 'pa4'
};
const RightPanel = ({ categories, skills, newColors, phrase, pristine }) => {
  return (
    <div className="pa3">
      <Welcome
        className={
          'pa3 h-25 flex items-center justify-around bg-animate bg-color4 color1'
        }
        newColors={newColors}
        phrase={phrase}
        pristine={pristine}
      />
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
