import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({ posts, addRef }) => {
  return (
    <div id="Posts" className="mw8 ph4 ph0-l center cb pt6 pb6" ref={addRef}>
      <h2 className="f1 secondary">Talks, tips and tricks</h2>
      {posts.map(({ id, title, description, link }) => (
        <article key={id} className="pt3 pb3">
          <a href={link}>
            <h3 className="f2 fw1 color2">{title}</h3>
          </a>
          <p>{description}</p>
          <div>
            <a href={link}>Follow link</a>
          </div>
        </article>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
