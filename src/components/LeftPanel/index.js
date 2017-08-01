import React from 'react';


const LeftPanel = ({ profile }) => {
  const { name, title, links } = profile;
  return (
    <aside className="pa3 tc w-30 w-40-ns w-34-l w-34-m ">
      <div className="fixed w-20 w-20-ns w-20-l w-20-m">
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
      </div>
      
    </aside>
  );
};

export default LeftPanel;
