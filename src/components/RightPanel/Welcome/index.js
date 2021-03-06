import React from 'react';

const Welcome = ({ className, newColors, phrase, pristine }) => {
  return (
    <section className={className} onClick={newColors}>
      <div>
        <h1 className="f1 color2">Welcome,</h1>
        <br />
        <h2>So you want to know more about me huh...</h2>
        <h3 className="fw2 color2">
          {pristine
            ? <div>
                Well you're in luck, <span className="color1">click here</span>
              </div>
            : phrase}
        </h3>
      </div>
    </section>
  );
};

Welcome.propTypes = {};

export default Welcome;
