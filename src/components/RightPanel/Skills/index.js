import React from 'react';

const Experience = ({ name, skills, className }) => {
  return (
    <section className={className}>
      <h2>
        {name}
      </h2>
      <div className="flex-m flex-l flex-wrap justify-between">
        {skills.map((item, idx) =>
          <div key={idx} className={'flex-45 tc mv4 pv4 bg-color2'}>
            <h1 className="fw6 mv2 color3">
              {item.name}
            </h1>
            <h2>
              {item.items.map(skill =>
                <span key={skill} className="mh2 fw2 color4">
                  {skill}
                </span>
              )}
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
