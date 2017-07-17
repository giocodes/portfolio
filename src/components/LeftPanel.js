import React from 'react';
import PropTypes from 'prop-types';

const LeftPanel = ({profile}) => {
  const {name, title, subtitle, skills} = profile;
  return (
    <aside
      className="bg-light-red white pa3"
    >
      {/* style="background-image: url(../img/chicago.jpg);" */}
      <div className="profile col-xs-6 col-sm-12">
         <h1>{name}</h1> 
        <strong>
           <h2>{subtitle}</h2> 
        </strong>
      </div>
       <h3>{title}</h3> 
      <div className="contact col-xs-6 col-sm-12">
        <p>
          Linkedin
          <a href="https://www.linkedin.com/in/sergioigomez">sergioigomez</a>
        </p>
        <p>
          GitHub
          <a href="https://github.com/giocodes/">giocodes</a>
        </p>
        <p>
          Twitter
          <a href="https://twitter.com/Sigrone">@sigrone</a>
        </p>
      </div>
      <div className="skills col-xs-12">
        <div className="col-xs-12">
          <div className="col-xs-3">
            <strong>
              <p>Front</p>
            </strong>
          </div>
          <div className="col-xs-9 ">
            <p>Angular | React</p>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="col-xs-3">
            <strong>
              <p>Back</p>
            </strong>
          </div>
          <div className="col-xs-9">
            <p>Node.js | PHP</p>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="col-xs-3">
            <strong>
              <p>DB</p>
            </strong>
          </div>
          <div className="col-xs-9">
            <p>SQL | Sequelize | Firebase</p>
          </div>
        </div>
        <div className="col-xs-12">
          <a href="https://www.linkedin.com/in/sergioigomez#skills">
            Skills details
          </a>
        </div>
      </div>
    </aside>
  );
};

LeftPanel.propTypes = {};

export default LeftPanel;
