import React from 'react';


const LeftPanel = ({ profile }) => {
  const { name, title, links } = profile;
  return (
    <aside className="pa3 tc">
      <h1 className="color3">
        {name}
      </h1>
      <strong>
        <h2 className="mv5 color5">
          {title}
        </h2>
      </strong>
      {links.map(link =>
        <p key={link.name} className="mv4">
          <a className="no-underline" href="link.url" target="_blank">
            {link.name} <span className="b color4">{link.label}</span>
          </a>
        </p>
      )}
      
    </aside>
  );
};

export default LeftPanel;
