import React from 'react';
const navigation = [
  { id: 1, label: 'Da capo', link: 'Top' },
  { id: 2, label: 'Posts', link: 'Posts' },
  { id: 3, label: 'Code', link: 'Projects' },
  { id: 4, label: 'About', link: 'About' },
  { id: 5, label: 'L/D', link: '' },
];
const Header = () => {
  return (
    <div id="Top" className="Header">
      <div className="mw8 center cb">
        <div className="Logo">Logo</div>
        <ul className="Navigation">
        {navigation.map(({ id, label, link }) => (
          <li key={id} className="Navigation__Item">
            <a className="color5" href={`#${link}`}>{label}</a>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
