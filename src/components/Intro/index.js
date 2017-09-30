import React from 'react';
import Slider from './Slider';

const words = ['Javscript','React', 'Web Apps', 'Node JS', ''];
const Intro = () => {
  return (
    <div className="Intro">
      <div className="mw8 ph4 ph0-l pt4 pt0-m center cb Intro--flex">
        <h1 className="f3 fw1 dark-gray">
          Sergio Gomez. Fullstack Engineer based in Chicago
        </h1>
        <div className="f3 f2-m f2-l pt4 dark-gray">I enjoy working with</div>
        <Slider words={words}/>
      </div>
    </div>
  );
};

export default Intro;
