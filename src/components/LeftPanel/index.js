import React from 'react';

const styles = {
  col25 : 'w-10-m w-10-ns'
}

const LeftPanel = ({ profile }) => {
  const { name, title, links } = profile;
  return (
    <aside className="tc |  w-30-l">
      <div className="pt3 | pl5-l fixed-l w-20-l | pt1-m ph5-m flex-m justify-between-m items-center-m lh-copy-m">
        <div className={styles.col25}>
          <h1 className="color3">
            {name}
          </h1>
        </div>
        <div className={styles.col25}>
          <strong>
            <h2 className="mv5 color5 | mv0-m">
              {title}
            </h2>
          </strong>
        </div>
        {links.map(link =>
          <div className={styles.col25} key={link.name}>
            <p className="mv4">
              <a className="no-underline" href={link.url} target="_blank">
                {link.name} <span className="b color4">{link.label}</span>
              </a>
            </p>
          </div>
        )}
      </div>
      
    </aside>
  );
};

export default LeftPanel;
