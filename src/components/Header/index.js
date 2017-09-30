import React from 'react';
import PropTypes from 'prop-types';

const navigation = [
  { id: 1, label: '👆', link: 'Top' },
  { id: 2, label: 'Posts', link: 'Posts' },
  { id: 3, label: 'Code', link: 'Projects' },
  { id: 4, label: 'About', link: 'About' },
];
const Header = ({ className, toggleLight, top }) => {
  return (
    <div id="Top" className={className}>
      <div className="mw8 ph4 ph0-l center cb mt3 flex items-center">
        <div className="Logo">
          <div className={`Logo__Border ba ${top ? 'color5' : 'color1'}`}>
            <div>SG</div>
          </div>
        </div>
        <ul className="Navigation">
          {navigation.map(({ id, label, link }) => {
            if (top && link === 'Top') {
              return null;
            }
            return (
              <li key={id} className="Navigation__Item">
                <a className={top ? 'color5' : 'color1'} href={`#${link}`}>
                  {label}
                </a>
              </li>
            );
          })}
          <span className="Light dim" onClick={toggleLight}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <title>light</title>
              <path d="M22.712 21.893c1.171-2.849 3.902-4.722 6.985-4.722h2.263l-1.639-1.6c-0.859-0.859-1.873-1.522-3.005-1.951-2.341-0.937-4.878-0.898-7.181 0.078s-4.098 2.81-5.034 5.151c-0.937 2.341-0.898 4.878 0.078 7.181s2.81 4.098 5.151 5.034c1.132 0.468 2.302 0.663 3.512 0.663 0 0 0.039 0 0.039 0h2.263l-1.639-1.6c-2.224-2.146-2.927-5.385-1.795-8.234v0zM21.659 29.541c-0.234-0.078-0.468-0.156-0.663-0.234-1.873-0.741-3.317-2.185-4.137-4.020s-0.82-3.902-0.078-5.776c0.741-1.873 2.185-3.317 4.020-4.137 0.937-0.39 1.951-0.624 2.966-0.624 0.937 0 1.912 0.195 2.81 0.546 0.234 0.078 0.429 0.195 0.663 0.312-2.81 0.741-5.151 2.771-6.244 5.58s-0.82 5.893 0.663 8.351z" />
              <path d="M16.81 4.099l1.039-3.802 1.769 0.483-1.039 3.802-1.769-0.483z" />
              <path d="M0.023 11.956l0.484-1.769 3.802 1.039-0.484 1.769-3.802-1.039z" />
              <path d="M9.666 0.847l1.761-0.514 1.104 3.784-1.761 0.514-1.104-3.784z" />
              <path d="M0.095 18.343l3.784-1.104 0.514 1.761-3.784 1.104-0.514-1.761z" />
              <path d="M3.39 5.156l1.284-1.309 2.814 2.76-1.284 1.309-2.814-2.76z" />
              <path d="M3.516 25.405l21.64-21.628 1.297 1.297-21.64 21.628-1.297-1.297z" />
              <path d="M6.673 20.332l1.327-1.327c-1.054-1.756-1.405-3.902-0.819-6.049 1.132-4.176 5.463-6.634 9.639-5.502 0.702 0.195 1.327 0.468 1.912 0.82l1.327-1.327c-0.82-0.546-1.756-0.976-2.771-1.249-5.151-1.405-10.498 1.639-11.902 6.79-0.741 2.771-0.195 5.62 1.288 7.844z" />
            </svg>
          </span>
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  toggleLight: PropTypes.func,
};
export default Header;
